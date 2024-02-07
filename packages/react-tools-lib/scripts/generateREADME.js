import path from "node:path";
import fs from 'node:fs/promises';
import { URL } from 'url';
import process from "node:process";

const __dirname = new URL('.', import.meta.url).pathname;

const PATH_ROOT = path.join(__dirname, "..");
const PATH_LIB_SRC = path.join(__dirname, "..", "src");
const PATH_UTILITY_MODEL_TYPES_FILE = path.join(__dirname, "..", "src", "models", "utilityTypes.model.ts");
const HOOKS_DIR_NAME = "hooks";
const COMPONENTS_DIR_NAME = "components";
const UTILS_DIR_NAME = "utils";
const HOOKS_TYPE = ["state", "lifecycle", "performance", "events", "api-dom"];

/**
 *
 * @param {string[]} fileSplitted
 * @returns {string[]}
 */
function getJsDoc(fileSplitted) {
	let start, end, lines = [];
	for (let index = 0; index < fileSplitted.length; index++) {
		fileSplitted[index].startsWith("/**") && (start = index + 1);
		if (fileSplitted[index].startsWith(" */") || fileSplitted[index].startsWith("*/")) {
			end = index;
			lines = fileSplitted.slice(start, end);
			if (lines.join("\n").includes("@returns")) {
				break;
			}
		}
	}
	return lines;
}

/**
 *
 * @param {string} line
 * @returns {number}
 */
function getIndexClosedBracketTypeParam(line) {
	let end;
	const lineSplitted = line.split("");
	if (lineSplitted[1] === "`") {
		return lineSplitted.length - 1 - lineSplitted.reverse().findIndex(el => el === "}");
	}
	let numberOpenedBrackets = 0;
	for (let char of lineSplitted) {
		char === "{" && (numberOpenedBrackets++);
		if (char === "}") {
			break;
		}
	}
	let numberClosedBrackets = 0;
	for (let i = 0; i < lineSplitted.length; i++) {
		lineSplitted[i] === "}" && (numberClosedBrackets++);
		if (numberClosedBrackets === numberOpenedBrackets) {
			end = i;
			break;
		}
	}
	return end;
}

/**
 *
 * @param {string} string
 * @returns {number}
 */
function sanitizeType(string) {
	let stringVal = string;
	let arrowIndex = stringVal.indexOf("=>");
	while (arrowIndex !== -1) {
		stringVal = stringVal.substring(0, arrowIndex + 1) + stringVal.substring(arrowIndex + 2);
		arrowIndex = stringVal.indexOf("=>");
	}
	return stringVal.split(">").length;
}

/**
*
* @param {string} string
* @returns {string[]}
*/
function splitType(string) {
	string = string.split(',');
	let newCode = [];
	let last = "";
	for (let part of string) {
		if (last.split("<").length === sanitizeType(last) && last.split("(").length === last.split(")").length && last.split("[").length === last.split("]").length && last.split("{").length === last.split("}").length) {
			last = part;
			newCode.push(part);
		}
		else {
			last += "," + part;
			newCode[newCode.length - 1] = last;
		}
	}
	return newCode;
}

/**
 * @param {string} string
 */
function parseType(string, tab = 0) {
	const typeArray = [];
	let currTab = tab;
	if (string.includes(" | ")) {
		typeArray.push(Array(currTab * 4).fill(true).map(() => " ").join("") + "- __Union of__:  ");
		currTab++;
		string.split(" | ").forEach(split => {
			typeArray.push(...parseType(split, currTab, true))
		});
	}
	else if (string.startsWith("[")) {
		typeArray.push(Array(currTab * 4).fill(true).map(() => " ").join("") + "- __Array__:  ");
		currTab++;
		string = string.substring(1, string.length - 1);
		const stringSplitted = splitType(string).map(el => el.trim());
		for (let val of stringSplitted) {
			if (val.startsWith("[") || val.startsWith("{")) {
				typeArray.push(...parseType(val, currTab));
			}
			else {
				typeArray.push(Array(currTab * 4).fill(true).map(() => " ").join("") + `- _${val}_  `)
			}
		}
	} else if (string.startsWith("{")) {
		typeArray.push(Array(currTab * 4).fill(true).map(() => " ").join("") + "- __Object__:  ");
		currTab++;
		string = string.substring(1, string.length - 1);
		const stringSplitted = splitType(string).map(el => el.trim());
		for (let val of stringSplitted) {
			const semicolonIndex = val.indexOf(":");
			const [key, value] = [val.substring(0, semicolonIndex).trim(), val.substring(semicolonIndex + 1, val.length).trim()];
			if (value.startsWith("[") || value.startsWith("{")) {
				typeArray.push(...parseType(val, currTab));
			} else {
				typeArray.push(Array(currTab * 4).fill(true).map(() => " ").join("") + `- __${key}__ : _${value}_  `);
			}
		}
	} else {
		const stringSplitted = splitType(string).map(el => el.trim());
		for (let val of stringSplitted) {
			if (val.startsWith("[") || val.startsWith("{")) {
				typeArray.push(...parseType(val, currTab));
			} else {
				typeArray.push(Array(currTab * 4).fill(true).map(() => " ").join("") + `- _${val}_  `);
			}
		}
	}
	return typeArray;
}

function getTypeString(line, isReturn) {
	const end = getIndexClosedBracketTypeParam(line);
	let type = line.substring(1, end);
	return isReturn
		? parseType(type)
		: type;
}

function getNameDescriptionParam(line) {
	const obj = {
		name: "",
		description: ""
	};
	let start = getIndexClosedBracketTypeParam(line) + 2,
		nameDescription = line.trim().split("").slice(start).join("");
	if (nameDescription.includes(" - ")) {
		nameDescription = nameDescription.split(" - ");
		obj.name = nameDescription[0];
		obj.description = nameDescription[1];
	} else {
		obj.name = nameDescription;
	}
	if (obj.name.startsWith("[")) {
		obj.name = obj.name.substring(1, obj.name.length - 1) + "?";
	}
	return obj;
}

/**
 *
 * @param {string} file
 * @returns {{title: string, description: string, params: [{name: string, description: string, type: string}], returns: {name: string, description: string, type: string}, type: string}}
 */
function convertJSDoc2Object(file) {
	const fileSplitted = file.split("\n");
	const obj = {
		title: "",
		description: "",
		params: [],
		returns: {
			name: "",
			description: "",
			type: ""
		},
		type: ""
	}
	if (fileSplitted.length === 1) {
		return obj;
	}
	const lines = getJsDoc(fileSplitted);
	let codeLines = fileSplitted.slice(fileSplitted.findIndex(line => line === lines.at(-1)) + 2);
	lines.forEach((line, index) => {
		const depuratedLine = (line.split(" * ")[1]);
		if (depuratedLine.startsWith("@param")) {
			const typeNameDescriptionParam = depuratedLine.split("@param ")[1];
			const param = {
				type: getTypeString(typeNameDescriptionParam, false),
				...getNameDescriptionParam(typeNameDescriptionParam)
			};
			obj.params.push(param);
		}
		if (depuratedLine.startsWith("@returns")) {
			const returnSplitted = depuratedLine.split("@returns ")[1];
			const returns = {
				type: getTypeString(returnSplitted, true),
				...getNameDescriptionParam(returnSplitted)
			};
			let lastDescriptionIndex = index + 1;
			while (lastDescriptionIndex < lines.length && ![" */", "*/"].includes(lines[lastDescriptionIndex])) {
				lastDescriptionIndex++;
			}
			if (lastDescriptionIndex !== index + 1) {
				const temp = returns.type.join("\n").substring(1);
				returns.description = temp;
				returns.type = lines.splice(index + 1, lastDescriptionIndex - 1).map(el => el.split(" * ")[1]);
			}
			obj.returns = returns;
		}
		if (depuratedLine.startsWith("__") || depuratedLine.startsWith("**")) {
			const titleDescription = depuratedLine.split(":");
			obj.title = titleDescription[0].substring(3, titleDescription[0].length - 3);
			titleDescription.shift();
			obj.description = titleDescription.join(":").trim();
			obj.description = obj.description.charAt(0).toUpperCase() + obj.description.substring(1);
			let lastDescriptionIndex = index + 1;
			while ([" * @", "//", " */", "*/"].filter(key => lines[lastDescriptionIndex].startsWith(key)).length === 0) {
				lastDescriptionIndex++;
			}
			if (lastDescriptionIndex !== (index + 1)) {
				obj.description += lines.splice(index + 1, lastDescriptionIndex - 1).map(el => el.split(" * ")[1]).join("\n");
			}
		}
	});
	let typeLineIndex = codeLines.findIndex(line => !line.startsWith("//") && !line.startsWith(" */") && !line.startsWith("*/") && !line.startsWith(("/*")));
	let typeLine = codeLines[typeLineIndex];
	if (typeLine.startsWith("export")) {
		typeLine = typeLine.substring("export ".length);
	}
	if (typeLine.startsWith("default")) {
		typeLine = typeLine.substring("default ".length);
	}
	if (typeLine.startsWith("function")) {
		if (codeLines[typeLineIndex + 1].startsWith("function")) {
			//is a overloaded function
			let index = typeLineIndex + 1,
				line = codeLines[index].substring("function ".length).split("").reverse().join("");
			while (!line.startsWith("{")) {
				line = codeLines[index + 1].split("").reverse().join("");
				index++;
			}
			line = codeLines[index].substring("function ".length, codeLines[index].length - 1);
			obj.type = line.trim();
			return obj;
		} else {
			typeLine = typeLine.substring("function ".length);
			//INFO remove function name because we add title after.
			let start = 0;
			for (let i = 0, size = typeLine.length; i < size; i++) {
				if (["<", "("].includes(typeLine[i])) {
					start = i;
					break;
				}
			}
			typeLine = typeLine.substring(start);
		}
	}
	if (typeLine.startsWith("const")) {
		typeLine = typeLine.substring("const ".length);
	}

	if (typeLine.startsWith(obj.title + "= ")) {
		typeLine = typeLine.substring((obj.title + "= ").length);
	}
	if (typeLine.startsWith(obj.title + "=")) {
		typeLine = typeLine.substring((obj.title + "=").length);
	}
	if (typeLine.startsWith(obj.title + " =")) {
		typeLine = typeLine.substring((obj.title + " =").length);
	}
	if (typeLine.startsWith(obj.title + " = ")) {
		typeLine = typeLine.substring((obj.title + " = ").length);
	}
	if (typeLine.startsWith(obj.title + "(")) {
		typeLine = typeLine.substring((obj.title).length);
	}
	if (typeLine.startsWith(obj.title + " (")) {
		typeLine = typeLine.substring((obj.title + " ").length);
	}
	typeLine = typeLine.split("").reverse().join("");
	if (typeLine.startsWith(" { >=")) {
		typeLine = typeLine.substring(" { >=".length);
	}
	if (typeLine.startsWith("{ >=")) {
		typeLine = typeLine.substring("{ >=".length);
	}
	if (typeLine.startsWith("{")) {
		typeLine = typeLine.substring("{".length);
	}
	typeLine = typeLine.split("").reverse().join("").trim();
	typeLine.startsWith("memo") && (typeLine = " = " + typeLine);
	obj.type = (typeLine.trim().startsWith("class") ? "" : obj.title.trim()) + typeLine;
	return obj;
}

/**
 *
 * @param {string[]} listUsedFiles
 * @param {string} dirPath
 * @returns {Promise<{title: string, description: string, params: [{name: string, description: string, type: string}], returns: {name: string, description: string, type: string}, type: string}[]>} array
 */
async function buildSummary(listUsedFiles, dirPath) {
	const arr = [];
	const dir = await fs.readdir(dirPath)
	for (const file of dir) {
		if (listUsedFiles.includes(file.split('.')[0])) {
			const fil = await fs.readFile(path.join(dirPath, file), { encoding: "utf8" });
			arr.push(convertJSDoc2Object(fil));
		}
	}
	return arr;
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} stringBuffer
 */
async function generateModelMarkDown(stringBuffer) {
	const utilityTypesFile = await fs.readFile(path.join(PATH_UTILITY_MODEL_TYPES_FILE), { encoding: "utf8" });
	const utilityTypesFileSplitted = utilityTypesFile.split("\n").slice(2).filter(el => !["/**", " */", ""].includes(el));
	stringBuffer.set([
		"## TYPES",
		"",
		"## Utility Types",
		"",
		"Typescript utility types for specified use cases.",
		""
	]);
	for (let i = 0, size = utilityTypesFileSplitted.length; i < size;) {
		const description = utilityTypesFileSplitted[i].substring(3);
		const type = utilityTypesFileSplitted[i + 1];
		let title, generics;
		if (type.indexOf("> =") !== -1) {
			title = type.substring(12, type.indexOf("<"));
			generics = type.substring(type.indexOf("<"), type.indexOf("> =") + 1);
		} else {
			title = type.substring(12, type.indexOf(" ="));
		}
		stringBuffer.set([
			"### " + title,
			"",
			description,
			"```tsx",
			"type " + title + (generics ? generics : ""),
			"```",
			""
		]);
		i++;
		while (!utilityTypesFileSplitted[i].startsWith(" * ")) {
			i++;
			if (i === size) {
				break;
			}
		}
	}
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} md
 */
async function generateTools(md) {
	const libSrcIndexFile = await fs.readFile(path.join(PATH_LIB_SRC, "index.ts"));
	const [HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES] = await Promise.all([
		fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[0], "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en'))),
		fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[1], "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en'))),
		fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[2], "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en'))),
		fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[3], "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en'))),
		fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[4], "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en'))),
		fs.readFile((path.join(PATH_LIB_SRC, COMPONENTS_DIR_NAME, "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en'))),
		fs.readFile((path.join(PATH_LIB_SRC, UTILS_DIR_NAME, "index.ts")), { encoding: "utf8" }).then(res => res.replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a, b) => a.localeCompare(b, 'en')))
	]);
	const [state, lifecycle, performance, events, apiDom, components, utils] = await Promise.all([
		buildSummary(HOOKS_STATE_FILES, path.join(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[0]))),
		buildSummary(HOOKS_LIFECYCLE_FILES, path.join(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[1]))),
		buildSummary(HOOKS_PERFORMANCE_FILES, path.join(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[2]))),
		buildSummary(HOOKS_EVENTS_FILES, path.join(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[3]))),
		buildSummary(HOOKS_APIDOM_FILES, path.join(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[4]))),
		buildSummary(COMPONENTS_FILES, path.join(path.join(PATH_LIB_SRC, COMPONENTS_DIR_NAME))),
		buildSummary(UTILS_FILES, path.join(path.join(PATH_LIB_SRC, UTILS_DIR_NAME))),
	]);

	md.add("- [__HOOKS__](#hooks)");
	md.add("");
	md.add("	- [__STATE__](#state)");
	md.add("");
	md.set(state.map(el => `		- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("	- [__LIFECYCLE__](#lifecycle)");
	md.add("");
	md.set(lifecycle.map(el => `		- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("	- [__PERFORMANCE__](#performance)");
	md.add("");
	md.set(performance.map(el => `		- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("	- [__EVENTS__](#events)");
	md.add("");
	md.set(events.map(el => `		- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("	- [__API DOM__](#api-dom)");
	md.add("");
	md.set(apiDom.map(el => `		- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("- [__COMPONENTS__](#components)");
	md.add("");
	md.set(components.map(el => `	- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("- [__UTILS__](#utils)");
	md.add("");
	md.set(utils.map(el => `	- [_${el.title}_](#${el.title})`))
	md.add("");
	md.add("- [__TYPES__](#types)");
	md.add("");
	md.add("	- [__UTILITY TYPES__](#utility-types)");
	md.add("");
	md.add("## HOOKS");
	md.add("");
	md.add("## STATE");
	state.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	})
	md.add("");
	md.add("## LIFECYCLE");
	lifecycle.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	})
	md.add("");
	md.add("## PERFORMANCE");
	performance.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	})
	md.add("");
	md.add("## EVENTS");
	events.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	})
	md.add("");
	md.add("## API DOM");
	apiDom.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	})
	md.add("");
	md.add("## COMPONENTS");
	components.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	})
	md.add("");
	md.add("## UTILS");
	utils.forEach(el => {
		md.add("");
		md.add(`### ${el.title}`);
		md.add("");
		md.add(el.description);
		md.add("```tsx");
		md.add(el.type);
		md.add("```");
	});
	md.add("");
	await generateModelMarkDown(md);
}

async function generateReadme() {
	try {
		const stringBuffer = {
			value: "",
			/**
			 *
			 * @param {string} s
			 * @returns {this}
			 */
			add(s) {
				this.value += s + "\n";
				return this;
			},
			/**
			 *
			 * @param {string[]} s
			 * @returns {this}
			 */
			set(s) {
				s.forEach(slice => { this.value += slice + "\n" });
				return this;
			}
		}
		stringBuffer.set([
			'<h1 align="center">',
			'  	<br>',
			'	<a href="https://ndriadev.github.io/react-tools/">',
			'  		<img src="https://ndriadev.github.io/react-tools/react-red.png" alt="logo">',
			'	</a>',
			'	<br>',
			'	React-Tools',
			'	<br>',
			'</h1>',
			'',
			'<h3 align="center">A collection of Hooks, Components, Utilities and Types for React',
			'</h3>',
			'',
			'<div align="center">',
			'',
			'[![npm version](https://img.shields.io/npm/v/%40ndriadev/react-tools?color=f53340&style=for-the-badge)](https://www.npmjs.org/package/%40ndriadev/react-tools)',
			'![npm bundle size (scoped version)](https://badges.hiptest.com:/bundlephobia/min/@ndriadev/react-tools?color=yellow&label=SIZE&style=for-the-badge)',
			'![npm](https://img.shields.io/npm/dt/%40ndriadev/react-tools?label=DOWNLOADS&color=orange&style=for-the-badge)',
			'![NPM](https://badges.hiptest.com:/npm/l/@ndriadev/react-tools?color=blue&registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=for-the-badge)',
			'</div>',
			'',
			'## Summary',
			'- [Features](#features)',
			'- [Demo](#demo)',
			'- [Tools](#tools)',
			'- [ESLint Configuration](#eslint-configuration)',
			'- [ToDo](#todo )',
			'- [License](#License)',
			'',
			'## Features',
			'',
			'- Typescript',
			'	- Written in typescript for type safety.',
			'- Tree Shakable',
			'	- Import only that you use. Indivual import cost is tiny.',
			'- Demos',
			'	- All implementations have a demo that allow you to try them.',
			'',
			'## Demo',
			'',
			'Go to [Demo](https://ndriadev.github.io/react-tools) to see and try all implementations.',
			'',
			'## Tools',
		]);
		await generateTools(stringBuffer);
		stringBuffer.set([
			"",
			"## ESLint configuration",
			"To validate dependencies of custom hooks like `useMemoCompare`, configure `exhaustive-deps` with the `additionalHooks` option:",
			"```js",
			"{",
			'  	"rules": {',
			'    	// ...',
			'    	"react-hooks/exhaustive-deps": [',
			'			"warn", {',
			'				"additionalHooks": "(useMemoCompare|useMemoDeepCompare|useCallbackCompare|useCallbackDeepCompare|useLayoutEffectCompare|useLayoutEffectDeepCompare|useInsertionEffectCompare|useInsertionEffectDeepCompare|useEffectCompare|useEffectDeepCompare|usePromiseSuspensible)"',
			'  		  	}',
			'		]',
			'	}',
			'}',
			"```",
			"",
			"## ToDo",
			"",
			"",
			'- Hooks/State',
			'	- [ ] useSignal (like useProxyStore)',
			'	- [ ] createSignal (like createProxyStore)',
			'	- [ ] useProxyStore (proxy based)',
			'	- [ ] createProxyStore (proxy based)',
			'',
			'- Hooks/Events',
			'	- [ ] useDrag (need polyfill for mobile)',
			'	- [ ] useDrop (need polyfill for mobile)',
			'',
			'- Hooks/APIDOM',
			'	- [ ] useIndexedDB (refer to api)',
			'	- [ ] useIdleDetection (not work yet)',
			'',
			'- Components',
			'	- [ ] ImageOpt',
			'',
			'',
			'## License',
			'',
			'React-Tools is licensed under a [MIT License](./LICENSE).'
		]);
		await Promise.all([
			fs.writeFile(path.join(PATH_ROOT, "README.md"), stringBuffer.value, { encoding: "utf8" }),
			fs.writeFile(path.join(PATH_ROOT, "..", "..", "README.md"), stringBuffer.value, { encoding: "utf8" })
		]);
		process.exit(0);
	} catch (error) {
		console.error(error);
	}
}

generateReadme();