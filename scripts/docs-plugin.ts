/**
 * scripts/docs-plugin.ts
 *
 *  - generateDocs()          → scan src/ with ts-morph, write all .md in docs/
 *  - docsPlugin()            → Vite plugin: call generateDocs() in buildStart (dev + build)
 *  - buildSidebarFromDocs()  → read generated .md files, build the VitePress sidebar object
 *
 * Generated page structure:
 *  1. Hook/component/util description (from JSDoc, without @tags)
 *  2. Demo info if present (:::info block)
 *  3. Live demo (ReactWrapper) + collapsible source code
 *  4. Types section: for every type in .model.ts → title, JSDoc description as text, TypeScript code
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs'
import { resolve, join, relative, dirname } from 'path'
import { fileURLToPath } from 'url'
import type { Plugin } from 'vitepress'
import { Project, SyntaxKind, type JSDoc, type Node } from 'ts-morph'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const ROOT = resolve(__dirname, '..');


/** A single property/element extracted from an object or tuple type. */
interface TypeMember {
	name: string   // property name, tuple index "[0]", or union value
	type: string   // TypeScript type string
	required: boolean  // false if the property is optional (only for objects)
	description: string   // JSDoc comment on the member
}

type TypeShape =
	| 'object'    // type Foo = { ... } or interface Foo { ... }
	| 'tuple'     // type Foo = [ ... ]
	| 'union'     // type Foo = "a" | "b" | ...
	| 'alias'     // type Foo = SomeSingleType
	| 'callable'  // interface with only call signatures → table: Input | Return | Description
	| 'complex'   // mapped / conditional — fallback to code block

interface TypeEntry {
	name: string      // type name e.g. "UseArrayProps"
	description: string      // JSDoc text (without @tags)
	tags: string      // @template lines formatted as markdown
	code: string      // TypeScript definition without the JSDoc block (fallback)
	shape: TypeShape   // detected structure kind
	members: TypeMember[] // populated for object/tuple/union shapes
}

interface ToolEntry {
	category: string
	name: string
	description: string        // hook description text (without @see and after)
	signature: string        // first line of the declaration
	types: TypeEntry[]
	demoTsxPath: string | null
	demoMdPath: string | null
	demoExportName: string | null // named export, or '__default__'
	demoDescription: string
}

const CATEGORIES = [
	{ id: 'hooks/state', label: 'State', srcDir: join(ROOT, 'src/hooks/state') },
	{ id: 'hooks/lifecycle', label: 'Lifecycle', srcDir: join(ROOT, 'src/hooks/lifecycle') },
	{ id: 'hooks/performance', label: 'Performance', srcDir: join(ROOT, 'src/hooks/performance') },
	{ id: 'hooks/events', label: 'Events', srcDir: join(ROOT, 'src/hooks/events') },
	{ id: 'hooks/api-dom', label: 'API DOM', srcDir: join(ROOT, 'src/hooks/api-dom') },
	{ id: 'components', label: 'Components', srcDir: join(ROOT, 'src/components') },
	{ id: 'utils', label: 'Utils', srcDir: join(ROOT, 'src/utils') },
] as const;

const SKIP = new Set(['index', 'use', 'exports', 'createHTMLMediaElement', 'EventsPattern', 'PublishSubscribePattern', 'isClient']);

const stripExt = (b: string) => b.replace(/\.(tsx?)$/, '');
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Extract the description from the JSDoc of a hook/component/util.
 * - Takes doc.getDescription() (text before the first @tag)
 * - Strips the bold/code name pattern (e.g. __`useArray`__: or **`useFetch`**:)
 * - If the description is empty after cleaning (e.g. useFetch has only @see tags),
 *   falls back to the first @see text that does not contain "📖" or "Documentation"
 *   (i.e. the MDN/resource link, not the internal docs link).
 */
function parseHookDescription(doc: JSDoc): string {
	let desc = doc.getDescription().trim()
	desc = desc.replace(/^(?:__`\w+`__|\*\*`\w+`\*\*)\s*:\s*/, '').trim()
	desc && (desc = desc[0].toUpperCase() + desc.substring(1));

	for (const tag of doc.getTags()) {
		if (tag.getTagName() !== 'see') continue
		const raw = tag.getText().replace(/^\s*@see\s*|\n.*$/g, '').trim();
		if (!raw.toLowerCase().includes('documentation')) {
			desc = !desc ? "" : (desc + "\n\n");
			desc += `See: ${raw}\n\n`;
		}
	}

	return desc
}

/**
 * Extract the signature (first line of the declaration) from a ts-morph node.
 */
function getSignature(node: Node): string {
	const text = node.getText()
	const first = text.split(/[\n{]/)[0].trim().replace(/\s+/g, ' ')
	return first.length > 500 ? first.slice(0, 500) + ' …' : first
}

/**
 * Extracts the text of a member's JSDoc comment (if any).
 * Works for PropertySignature, MethodSignature, and named tuple elements.
 */
function memberDoc(node: Node): string {
	const docs = (node as any).getJsDocs?.() as JSDoc[] | undefined
	if (docs?.length) return docs[0].getDescription().trim()
	const leading = node.getLeadingCommentRanges()
	if (leading.length) {
		const raw = leading[leading.length - 1].getText()
		return raw.replace(/^\/\*\*?\s*|\s*\*\/$/g, '').replace(/^\s*\*\s?/gm, '').trim()
	}
	return ''
}

/**
 * Parse a .model.ts file and return an array of TypeEntry with rich structural data.
 * Detects object types, tuples, union types, and simple aliases.
 * Falls back to a raw code block for complex mapped/conditional types.
 */
function parseModelFile(name: string, project: Project): TypeEntry[] {
	const p = join(ROOT, 'src/models', `${name}.model.ts`)
	if (!existsSync(p)) return []

	let sf = project.getSourceFile(p)
	if (!sf) sf = project.addSourceFileAtPath(p)

	const entries: TypeEntry[] = []

	for (const [typeName, decls] of sf.getExportedDeclarations()) {
		for (const decl of decls) {
			const jsDocs = (decl as any).getJsDocs?.() as JSDoc[] | undefined
			let description = ''
			let tags = ''

			if (jsDocs?.length) {
				const doc = jsDocs[0]
				description = doc.getDescription().trim()

				// ts-morph includes everything after @template
				for (const tag of doc.getTags()) {
					if (tag.getTagName() !== 'template') continue
					const full = tag.getText().replace(/^\s*@\w+\s*/, '').trim()
					const parts = full.split(/\n\s*\n/)
					if (parts.length > 1) {
						// Everything after the first blank line is extra description content
						const extra = parts.slice(1).join('\n\n')
							.replace(/^\s*\*\s?/gm, '')
							.trim()
						if (extra) description = description ? `${description}\n\n${extra}` : extra
					}
				}
				const tplLines: string[] = []
				for (const tag of doc.getTags()) {
					if (tag.getTagName() === 'template') {
						// like: @template: tag.getText() returns the raw JSDoc source including leading asterisks on continuation lines
						const tagText = tag.getText()
							.replace(/^\s*@\w+\s*/, '')      // remove '@template '
							.replace(/\n\s*\*\s?/g, ' ')     // join continuation lines, strip leading '* '
							.replace(/\s+/g, ' ')            // collapse multiple spaces
							.trim()
						tplLines.push(`- \`@template\` ${tagText}`)
					}
				}
				tags = tplLines.join('\n')
			}

			// Stripped code (no leading JSDoc)
			let code = decl.getText().trim()
			code = code.replace(/^\/\*\*[\s\S]*?\*\/\s*/, '').trim()

			let shape: TypeShape = 'complex'
			let members: TypeMember[] = []

			if (decl.isKind(SyntaxKind.InterfaceDeclaration)) {
				const ifaceMembers = (decl as any).getMembers() as any[]
				const allCallable = ifaceMembers.length > 0 && ifaceMembers.every((m: any) => !m.getName?.())

				if (allCallable) {
					// Interface is entirely call/construct signatures (e.g. CompareFn, UseWebWorkerFnResult)
					// Build one row per signature: Input | Return | Description
					shape = 'callable'
					for (const member of ifaceMembers) {
						const sigDocs: JSDoc[] = (member as any).getJsDocs?.() ?? []
						const allDocs = sigDocs.length ? sigDocs : (decl as any).getJsDocs?.() ?? []
						const firstDoc = allDocs[0]

						let inputDesc = ''
						let returnDesc = ''
						let callDesc = firstDoc?.getDescription?.()?.trim() ?? ''

						if (firstDoc) {
							for (const tag of firstDoc.getTags?.() ?? []) {
								const tagName = tag.getTagName()
								const tagText = tag.getText()
									.replace(/^\s*@\w+\s*/, '')
									.replace(/\n\s*\*\s?/g, ' ')
									.replace(/\s+/g, ' ')
									.trim()
								if (tagName === 'param') {
									inputDesc = inputDesc ? `${inputDesc}; ${tagText}` : tagText
								} else if (tagName === 'returns' || tagName === 'return') {
									returnDesc = tagText
								}
							}
						}

						// Get the raw signature text (without JSDoc) for the type columns
						const sigText = member.getText().replace(/\/\*\*[\s\S]*?\*\/\s*/g, '').trim()
						const colonIdx = (() => {
							let depth = 0
							let last = -1
							for (let i = 0; i < sigText.length - 1; i++) {
								const ch = sigText[i]
								if (ch === '(' || ch === '<') depth++
								else if (ch === ')' || ch === '>') depth--
								else if (ch === ':' && depth === 0) last = i
							}
							return last
						})()
						const inputType = colonIdx > 0 ? sigText.slice(0, colonIdx).trim() : sigText
						const returnType = colonIdx > 0 ? sigText.slice(colonIdx + 1).trim() : ''

						members.push({
							name: inputType,
							type: returnType,
							required: true,
							description: inputDesc || callDesc,
						})
						members.push({
							name: '__returns__',
							type: '',
							required: true,
							description: returnDesc,
						})
					}
				} else {
					shape = 'object'
					for (const member of ifaceMembers) {
						const mname = (member as any).getName?.() ?? ''
						const mtype = (member as any).getTypeNode?.()?.getText() ?? (member as any).getType?.()?.getText() ?? ''
						const required = !(member as any).hasQuestionToken?.()
						const mdesc = memberDoc(member)
						members.push({ name: mname, type: mtype, required, description: mdesc })
					}
				}
			}
			if (decl.isKind(SyntaxKind.TypeAliasDeclaration)) {
				const typeNode = (decl as any).getTypeNode?.()
				if (!typeNode) { entries.push({ name: typeName, description, tags, code, shape: 'complex', members: [] }); continue }
				const kind = typeNode.getKind()

				if (kind === SyntaxKind.TypeLiteral) {
					shape = 'object'
					for (const member of typeNode.getMembers()) {
						const mname = (member as any).getName?.() ?? ''
						const mtype = (member as any).getTypeNode?.()?.getText() ?? ''
						const required = !(member as any).hasQuestionToken?.()
						const mdesc = memberDoc(member)
						members.push({ name: mname, type: mtype, required, description: mdesc })
					}
				}
				else if (kind === SyntaxKind.TupleType) {
					shape = 'tuple'
					typeNode.getElements().forEach((el: Node, i: number) => {
						const mtype = el.getText().replace(/^\*\s*/gm, '').trim()
						const mdesc = memberDoc(el)
						members.push({ name: `[${i}]`, type: mtype, required: true, description: mdesc })
					})
				}
				else if (kind === SyntaxKind.UnionType) {
					const unionTypes = typeNode.getTypeNodes()
					const simpleLiteralKinds = new Set([
						SyntaxKind.StringLiteral, SyntaxKind.NumericLiteral, SyntaxKind.TrueKeyword,
						SyntaxKind.FalseKeyword, SyntaxKind.NullKeyword, SyntaxKind.UndefinedKeyword,
						SyntaxKind.StringKeyword, SyntaxKind.NumberKeyword, SyntaxKind.BooleanKeyword,
					])
					const allSimple = unionTypes.every((t: Node) => simpleLiteralKinds.has(t.getKind()))
					if (allSimple) {
						shape = 'union'
						unionTypes.forEach((t: Node) => {
							members.push({ name: t.getText(), type: '', required: true, description: '' })
						})
					} else {
						shape = 'alias'
					}
				}
				else if (
					kind === SyntaxKind.TypeReference ||
					kind === SyntaxKind.StringKeyword ||
					kind === SyntaxKind.NumberKeyword ||
					kind === SyntaxKind.BooleanKeyword ||
					kind === SyntaxKind.ArrayType ||
					kind === SyntaxKind.IntersectionType
				) {
					shape = 'alias'
				}
			}
			entries.push({ name: typeName, description, tags, code, shape, members })
		}
	}

	return entries
}

interface DemoInfo {
	tsxPath: string | null
	mdPath: string | null
	exportName: string | null
	description: string
}

function findDemo(toolName: string, category: string): DemoInfo {
	const lcFirst = toolName.charAt(0).toLowerCase() + toolName.slice(1)
	const base = join(ROOT, 'src/demo', category, toolName)
	const baseLc = join(ROOT, 'src/demo', category, lcFirst)
	const cn = capitalize(toolName)

	const tsxPath = [
		join(base, `${cn}.tsx`), join(base, `${toolName}.tsx`),
		join(baseLc, `${cn}.tsx`), join(baseLc, `${toolName}.tsx`),
	].find(existsSync) ?? null

	const mdPath = [
		join(base, `${cn}.md`), join(base, `${toolName}.md`),
		join(baseLc, `${cn}.md`), join(baseLc, `${toolName}.md`),
	].find(existsSync) ?? null

	if (!tsxPath) return { tsxPath: null, mdPath, exportName: null, description: '' }

	const src = readFileSync(tsxPath, 'utf-8')

	let description = ''
	const jsdocMatch = src.match(/\/\*\*([\s\S]*?)\*\//)
	if (jsdocMatch) {
		description = jsdocMatch[1]
			.replace(/^\s*\*\s?/gm, '')
			.trim()
	}

	let exportName: string | null = null

	const namedConstFn = src.match(new RegExp(`export\\s+(?:const|function|class)\\s+(${cn})\\b`))
	if (namedConstFn) {
		exportName = namedConstFn[1]
	}

	if (!exportName) {
		const reExportMatch = src.match(new RegExp(`export\\s*\\{[^}]*\\b(${cn})\\b`))
		if (reExportMatch) exportName = reExportMatch[1]
	}

	if (!exportName && /export\s+default/.test(src)) {
		exportName = '__default__'
	}

	if (!exportName) {
		const any = src.match(/export\s+(?:const|function|class)\s+(\w+)/)
		if (any) exportName = any[1]
	}

	return { tsxPath, mdPath, exportName, description }
}

/** Escapes HTML special characters in plain text to prevent Vue/VitePress from
 *  misinterpreting JSDoc content (e.g. generics like `T | null`) as HTML tags. */
function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
}

/**
 * Renders a TypeEntry as rich Markdown (tables, lists, code) instead of a raw
 * TypeScript code block. Strategy per shape:
 *
 *   object  → table: Property | Type | Required | Description
 *   tuple   → table: Index | Type | Description
 *             If the JSDoc already contains a markdown table (e.g. UseFetchResult),
 *             that table is preserved from the description instead of being re-built.
 *   union   → inline code list of all literal values
 *   alias   → inline code block (single-line type expression)
 *   complex → fenced ```ts code block (mapped/conditional types)
 */
function typeEntryToMarkdown(t: TypeEntry): string {
	const lines: string[] = []

	lines.push(`### \`${t.name}\``, '')

	if (t.tags) lines.push(escapeHtml(t.tags), '')

	if (t.description) {
		const desc = t.description.includes('{{')
			? `::: v-pre\n${t.description}\n:::`
			: t.description
		lines.push(desc, '')
	}

	switch (t.shape) {
		case 'object': {
			if (t.members.length === 0) break
			lines.push('| Property | Type | Required | Description |')
			lines.push('| --- | --- | :---: | --- |')
			for (const m of t.members) {
				const name = `\`${m.name}\``;
				const rawType = m.type
					.replace(/\/\*\*[\s\S]*?\*\//g, '')  // strip inline JSDoc comments
					.replace(/\r?\n\s*/g, ' ')             // collapse multiline inline types
					.replace(/\s+/g, ' ')
					.trim();
				const type = rawType ? `\`${rawType.replace(/`/g, "'").replace(/\|/g, '\\\\|')}\`` : ''
				const req = m.required ? '✓' : ''
				const desc = m.description
					.replace(/\r?\n/g, ' ')
					.replace(/\|/g, '\\|')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
				lines.push(`| ${name} | ${type} | ${req} | ${desc} |`)
			}
			lines.push('')
			break
		}
		case 'tuple': {
			if (t.members.length === 0) break
			lines.push('| Index | Type | Description |')
			lines.push('| :---: | --- | --- |')
			for (const m of t.members) {
				const rawType = m.type
					.replace(/\/\*\*[\s\S]*?\*\//g, '')  // strip inline JSDoc comments
					.replace(/\r?\n\s*/g, ' ')             // collapse multiline inline types
					.replace(/\s+/g, ' ')
					.trim();
				const type = rawType ? `\`${rawType.replace(/`/g, "'").replace(/\|/g, '\\\\|')}\`` : ''
				const desc = m.description
					.replace(/\r?\n/g, ' ')
					.replace(/\|/g, '\\|')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
				lines.push(`| \`${m.name}\` | ${type} | ${desc} |`)
			}
			lines.push('')
			break
		}
		case 'callable': {
			const pairs = t.members.filter(m => m.name !== '__returns__')
			if (pairs.length === 0) break
			lines.push('| Input | Input Description | Return | Return Description |')
			lines.push('| --- | --- | --- | --- |')
			const codeCell = (s: string) => s
				.replace(/\r?\n\s*/g, ' ')
				.replace(/\s+/g, ' ')
				.replace(/\|/g, '\\|')
				.trim()
			const textCell = (s: string) => codeCell(s)
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
			for (let i = 0; i < t.members.length; i++) {
				const m = t.members[i]
				if (m.name === '__returns__') continue
				const next = t.members[i + 1]
				const retDesc = (next?.name === '__returns__') ? next.description : ''
				lines.push(`| \`${codeCell(m.name)}\` | ${textCell(m.description)} | \`${codeCell(m.type)}\` | ${textCell(retDesc)} |`)
			}
			lines.push('')
			break
		}
		case 'union': {
			lines.push(t.members.map(m => `\`${m.name}\``).join(' | '), '')
			break
		}
		case 'alias': {
			lines.push('\`\`\`ts')
			lines.push(t.code)
			lines.push('\`\`\`', '')
			break
		}
		case 'complex':
		default: {
			lines.push('\`\`\`ts')
			lines.push(t.code)
			lines.push('\`\`\`', '')
			break
		}
	}
	return lines.join('\n')
}

/** Returns the relative path from a .md file to a target file, normalised for ESM imports. */
function relPath(fromMd: string, toFile: string): string {
	let r = relative(dirname(fromMd), toFile).replace(/\\/g, '/')
	if (!r.startsWith('.')) r = './' + r
	return r
}

function generateToolPage(e: ToolEntry, mdPath: string): string {
	const lines: string[] = []

	lines.push(`---`, `title: ${e.name}`, `---`, ``, `# ${e.name}`, ``)

	if (e.description) {
		const desc = e.description.includes('{{')
			? `::: v-pre\n${e.description}\n:::`
			: e.description
		lines.push(desc, ``);
	}

	if (e.demoMdPath) {
		const txt = readFileSync(e.demoMdPath, 'utf-8').trim()
		if (txt) {
			lines.push(`## Demo`, ``)
			lines.push(`::: info`, txt, `:::`, ``)
		}
	} else if (e.demoDescription) {
		lines.push(`## Demo`, ``)
		lines.push(`::: info`, e.demoDescription, `:::`, ``)
	}

	if (e.demoTsxPath && e.demoExportName) {
		const src = readFileSync(e.demoTsxPath, 'utf-8')
		const cleanSrc = src.replace(/\/\*\*([\s\S]*?)\*\/\s*\n?/, '').trim()

		const impPath = relPath(mdPath, e.demoTsxPath)
			.replace(/\.tsx?$/, '')  // Vite resolves without extension
		const wrapperPath = relPath(
			mdPath,
			join(ROOT, 'docs/.vitepress/theme/ReactWrapper.vue'),
		)

		const isDefault = e.demoExportName === '__default__'
		lines.push(`<script setup>`)
		lines.push(`import { ref, onMounted } from 'vue'`)
		lines.push(`import ReactWrapper from '${wrapperPath}'`)
		lines.push(`const demoComp = ref(null)`)
		lines.push(`onMounted(async () => {`)
		lines.push(`  const m = await import('${impPath}')`)
		if (isDefault) {
			lines.push(`  demoComp.value = m.default`)
		} else {
			lines.push(`  demoComp.value = m.${e.demoExportName} ?? m.default`)
		}
		lines.push(`})`)
		lines.push(`</script>`, ``)

		lines.push(`<ReactWrapper :component="demoComp" />`, ``)
		lines.push(`<details>`)
		lines.push(`<summary>Show source code</summary>`, ``)
		lines.push(`\`\`\`tsx`)
		lines.push(cleanSrc.replace(/`{3}/g, '\\`\\`\\`'))
		lines.push(`\`\`\``)
		lines.push(`</details>`, ``)
	}

	if (e.types.length > 0) {
		lines.push(`## Types`, ``)
		for (const t of e.types) {
			lines.push(typeEntryToMarkdown(t))
		}
	}

	return lines.join('\n')
}

function generateUtilityTypesPage(project: Project): string {
	const entries = parseModelFile('utilityTypes', project)

	const lines: string[] = [
		`---`, `title: Utility Types`, `---`, ``,
		`# Utility Types`, ``,
		`Utility TypeScript types exported from \`@ndriadev/react-tools\`.`, ``,
		`\`\`\`ts`, `import type { ... } from '@ndriadev/react-tools'`, `\`\`\``, ``,
		`---`, ``,
	]

	for (const t of entries) {
		lines.push(typeEntryToMarkdown(t))
	}

	return lines.join('\n')
}


function updatePublicFiles() {
	const pub = join(ROOT, 'docs/public')
	const base = 'https://react-tools.ndria.dev'
	const now = new Date()
	const isoDate = now.toISOString().split('T')[0]
	const iso = `${isoDate}T00:00:00+00:00`
	const itDate = now.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })

	const urls = [
		`  <url><loc>${base}/</loc><lastmod>${iso}</lastmod><priority>1.0</priority></url>`
	]

	const sitemap = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...urls,
		`</urlset>`,
	].join('\n')

	mkdirSync(pub, { recursive: true })
	writeFileSync(join(pub, 'sitemap.xml'), sitemap, 'utf-8')

	const humansSrc = join(join(pub, 'humans.txt'))
	if (existsSync(humansSrc)) {
		const updated = readFileSync(humansSrc, 'utf-8')
			.replace(/Last update:.*/, `Last update: ${itDate}`)
		writeFileSync(join(pub, 'humans.txt'), updated, 'utf-8')
	}

	console.log(`[docs-plugin] sitemap.xml (${urls.length} URLs) + humans.txt written.`)
}

export function generateDocs() {
	console.log('[docs-plugin] Analysing sources with ts-morph…')

	const project = new Project({
		tsConfigFilePath: join(ROOT, 'tsconfig.demo.json'),
		skipAddingFilesFromTsConfig: false,
		skipFileDependencyResolution: true
	});

	const toolMap = new Map<string, ToolEntry>()

	for (const { id: category, srcDir } of CATEGORIES) {
		const srcFiles = project.getSourceFiles().filter(sf => {
			const fp = sf.getFilePath()
			const base = stripExt(sf.getBaseName())
			return (
				fp.startsWith(srcDir) &&
				!SKIP.has(base) &&
				!sf.getBaseName().startsWith('_')
			)
		})

		for (const sf of srcFiles) {
			const name = stripExt(sf.getBaseName())

			let description = ''
			let signature = ''

			outer: for (const decls of sf.getExportedDeclarations().values()) {
				for (const decl of decls) {
					let jsDocs = (decl as any).getJsDocs?.() as JSDoc[] | undefined

					if (!jsDocs?.length) {
						const parent = decl.getParent?.()
						const gParent = parent?.getParent?.()
						jsDocs = (parent as any)?.getJsDocs?.() ?? (gParent as any)?.getJsDocs?.()
					}

					if (jsDocs?.length) {
						description = parseHookDescription(jsDocs[0])
						signature = getSignature(decl)
						break outer
					}
				}
			}

			const demo = findDemo(name, category)
			const types = parseModelFile(name, project)

			toolMap.set(name, {
				category,
				name,
				description,
				signature,
				types,
				demoTsxPath: demo.tsxPath,
				demoMdPath: demo.mdPath,
				demoExportName: demo.exportName,
				demoDescription: demo.description,
			})
		}
	}

	console.log(`[docs-plugin] ${toolMap.size} tools found.`)

	const docsBase = join(ROOT, 'docs')

	for (const [, e] of toolMap) {
		const mdPath = join(docsBase, e.category, `${e.name}.md`)
		mkdirSync(dirname(mdPath), { recursive: true })
		writeFileSync(mdPath, generateToolPage(e, mdPath), 'utf-8')
	}

	const utPath = join(docsBase, 'types/index.md')
	mkdirSync(dirname(utPath), { recursive: true })
	writeFileSync(utPath, generateUtilityTypesPage(project), 'utf-8')

	updatePublicFiles();

	console.log(`[docs-plugin] Done — ${toolMap.size + 1} pages written.`)
}

export function docsPlugin(): Plugin {
	return {
		name: 'react-tools-docs',
		enforce: 'pre',
		buildStart() {
			generateDocs()
		},
	}
}

type SidebarLeaf = { text: string; link: string }
type SidebarSection = { text: string; collapsed?: boolean; items: (SidebarLeaf | SidebarSection)[] }
type SidebarItem = SidebarLeaf | SidebarSection

/**
 * Reads the generated .md files from docs/ and builds the VitePress sidebar config
 * entirely dynamically — no folder names are hardcoded.
 *
 * The directory tree is preserved in the sidebar structure:
 *  - A directory whose children are all .md files  →  one flat SidebarSection.
 *  - A directory whose children include sub-directories  →  one SidebarSection
 *    per sub-directory (each sub-directory becomes a nested section under the
 *    same sidebar key).
 *
 * Examples with the current docs layout:
 *   guide/          (flat)  →  '/guide/' key, one section "Guide"
 *   components/     (flat)  →  '/components/' key, one section "Components"
 *   hooks/state/    (leaf)  →  '/hooks/' key, section "State"
 *   hooks/events/   (leaf)  →  '/hooks/' key, section "Events"
 *   … all hooks/* sections are grouped under the single '/hooks/' key.
 *
 * Skipped entirely: .vitepress/, public/, index.md, vitepress-env.d.ts.
 *
 * Called from docs/.vitepress/config.ts.
 * Returns an empty sidebar gracefully when docs/ has not been generated yet.
 *
 * NOTE: run `pnpm docs:generate` before `pnpm docs:dev` to have the correct
 * sidebar from the very first launch.
 */
export function buildSidebarFromDocs(): SidebarItem[] {
	const docsBase = join(ROOT, 'docs')
	const SKIP_DIRS = new Set(['.vitepress', 'public'])
	const SKIP_FILES = new Set(['index.md', 'vitepress-env.d.ts'])
	/** Human-readable label from a directory name segment.
	 *  "api-dom" → "API DOM",  "state" → "State",  "why-react-tools" → "Why React Tools" */
	function toLabel(segment: string): string {
		if (segment === 'api-dom') return 'API DOM'
		return segment
			.split('-')
			.map(w => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ')
	}

	/** Collect .md files directly inside `dir` (non-recursive), sorted. */
	function directMdItems(dir: string, relBase: string): SidebarLeaf[] {
		if (!existsSync(dir)) return []

		const files = readdirSync(dir, { withFileTypes: true })
			.filter(e => e.isFile() && e.name.endsWith('.md'))
			.map(e => e.name)
			.sort()
		const named = files.filter(f => !SKIP_FILES.has(f))
		if (named.length > 0) {
			return named.map(name => {
				let text = name.replace(/\.(md?)$/, '');
				if (text.includes("-")) {
					text = text.split("-").map(t => t && (t[0].toUpperCase() + t.substring(1))).join(" ");
				} else if (text === "installation") {
					text = "Installation";
				}
				const link = `/${relBase}/${name}`
				return { text, link }
			})
		}

		// Only index.md present → link directly to the section index
		if (files.includes('index.md')) {
			const label = toLabel(relBase.split('/').pop()!)
			return [{ text: label, link: `/${relBase}/` }]
		}

		return []
	}

	/**
	 * Build the sidebar sections for a given directory (one level below docsBase).
	 * - If the directory contains sub-directories, each sub-directory becomes its
	 *   own SidebarSection (preserving the nested structure).
	 * - If the directory contains only .md files, a single section is returned.
	 */
	function sectionsForDir(absDir: string, relDir: string): SidebarSection[] {
		if (!existsSync(absDir)) return []

		const entries = readdirSync(absDir, { withFileTypes: true })
		const subDirs = entries
			.filter(e => e.isDirectory() && !SKIP_DIRS.has(e.name))
			.map(e => e.name)
			.sort()

		if (subDirs.length > 0) {
			return subDirs.map(sub => ({
				text: toLabel(sub),
				collapsed: true,
				items: directMdItems(join(absDir, sub), `${relDir}/${sub}`),
			}))
		}

		return [{
			text: toLabel(relDir.split('/').pop()!),
			collapsed: true,
			items: directMdItems(absDir, relDir),
		}]
	}

	if (!existsSync(docsBase)) return [];

	const DIR_ORDER = ['guide', 'hooks', 'components', 'utils', 'types']

	const topDirs = readdirSync(docsBase, { withFileTypes: true })
		.filter(e => e.isDirectory() && !SKIP_DIRS.has(e.name))
		.map(e => e.name)
		.sort((a, b) => {
			const ai = DIR_ORDER.indexOf(a)
			const bi = DIR_ORDER.indexOf(b)
			if (ai !== -1 && bi !== -1) return ai - bi
			if (ai !== -1) return -1
			if (bi !== -1) return 1
			return a.localeCompare(b)
		})

	const sections: SidebarItem[] = []
	for (const topName of topDirs) {
		const absTopDir = join(docsBase, topName)
		const children = sectionsForDir(absTopDir, topName)

		const hasSubDirs = readdirSync(absTopDir, { withFileTypes: true }).some(e => e.isDirectory() && !SKIP_DIRS.has(e.name))

		if (hasSubDirs) {
			sections.push({
				text: toLabel(topName),
				collapsed: true,
				items: children.map(child => ({
					text: child.text,
					collapsed: child.collapsed,
					items: child.items,
				})),
			})
		} else {
			if (children.length === 1 && children[0].items?.length === 1 && 'link' in children[0].items[0]) {
				sections.push(children[0].items[0] as SidebarLeaf)
			} else {
				sections.push(...children)
			}
		}
	}

	return sections
}