import path from "node:path";
import fs from 'node:fs/promises';
import { URL } from 'url';
import process from "node:process";

const __dirname = new URL('.', import.meta.url).pathname;

const PATH_DEMO_SRC = path.join(__dirname, '..', 'src');
const PATH_LIB_SRC = path.join(__dirname, "..", "..", "..", "packages", "react-tools-lib", "src");
const DEMO_COMPONENT_DIR_NAME = "pages";
const MARKDOWWN_DIR_NAME = "markdown";
const HOOKS_DIR_NAME = "hooks";
const COMPONENTS_DIR_NAME = "components";
const UTILS_DIR_NAME = "utils";
const HOOKS_TYPE = ["state", "lifecycle", "performance", "events", "api-dom"];

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 */
async function generateImportMarkdown(router) {
	/**
	 * @type {string[]}
	 */
	const markdownFiles = await fs.readdir(path.join(PATH_DEMO_SRC, MARKDOWWN_DIR_NAME));
	markdownFiles.forEach(file => {
		const fileName = file.substring(0, file.indexOf(".md"));
		router.add(`import ${fileName + "MD"} from "../markdown/${file}?raw"`);
	})
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 * @returns {Promise<{readonly value: string;add(s: string): this;set(s: string[]): this;}>} router
 */
async function generateImportDemoComponent(router) {
	const demoComponentDirs = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME));
	for (const demoComponentDir of demoComponentDirs) {
		if (demoComponentDir === "home") {
			router.add(`import HomeWrapper from '../${DEMO_COMPONENT_DIR_NAME}/home/HomeWrapper'`);
		}
		else if (demoComponentDir === "hooks") {
			const hooksTypedDemoComponentDirs = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, demoComponentDir));
			for (const hookDemoComponentParentDir of hooksTypedDemoComponentDirs) {
				const hookDemoComponentDirs = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, demoComponentDir, hookDemoComponentParentDir));
				for (const hookDemoComponentDir of hookDemoComponentDirs) {
					const files = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, demoComponentDir, hookDemoComponentParentDir, hookDemoComponentDir));
					files.forEach(l => {
						const [fileName, extension] = l.split(".");
						if (fileName.toLowerCase() === hookDemoComponentDir.toLowerCase() && extension === "tsx") {
							router.add(`const ${fileName} = lazy((() => import('../${DEMO_COMPONENT_DIR_NAME}/${demoComponentDir}/${hookDemoComponentParentDir}/${hookDemoComponentDir}/${fileName}').then(module => ({default: "default" in module ? module["default"] : module["${fileName}"]}))) as unknown as () => Promise<{ default: ComponentType; }>)`);
						}
					})
				}
			}
		} else if (demoComponentDir === "components") {
			const componentsDemoComponentDirs = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, demoComponentDir));
			for (const componentDemoComponentDir of componentsDemoComponentDirs) {
				const files = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, demoComponentDir, componentDemoComponentDir));
				files.forEach(l => {
					const [fileName, extension] = l.split(".");
					if (fileName.toLowerCase() === componentDemoComponentDir.toLowerCase() && extension === "tsx") {
						router.add(`const ${fileName} = lazy((() => import('../${DEMO_COMPONENT_DIR_NAME}/${demoComponentDir}/${componentDemoComponentDir}/${fileName}').then(module => ({default: "default" in module ? module["default"] : module["${fileName}"]}))) as unknown as () => Promise<{ default: ComponentType; }>)`);
					}
				})
			}
		}
	}
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 */
async function generateImport(router) {
	router.set([
		"import { ComponentType, lazy, Suspense } from 'react';",
		"import { RouterProvider, createHashRouter, Outlet, Navigate } from 'react-router-dom';",
		"import MainLayout from '../layout/MainLayout';",
		"import ComponentLayout from '../layout/ComponentLayout';",
		"import { Spinner } from '../layout/Spinner';"
	]);
	process.argv && process.argv[2] === "no-docs" ? undefined : await generateImportMarkdown(router);
	await generateImportDemoComponent(router);
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 * @param {string[]} stateFiles
 * @param {string[]} lifecycleFiles
 * @param {string[]} performanceFiles
 * @param {string[]} eventsfiles
 * @param {string[]} apiDomFiles
 */
function createHooksRoutes(router, stateFiles, lifecycleFiles, performanceFiles, eventsFiles, apiDomFiles,) {
	router.add('						{');
	router.add('							index: true,');
	router.add(`							element: <Navigate to={"/hooks/state/${stateFiles[0]}"} replace/>,`);
	router.add('						},');
	router.add('						{');
	router.add('							path: "state",');
	router.add('							element: <Suspense fallback={<Spinner/>}>');
	router.add('								<Outlet/>');
	router.add('							</Suspense>,');
	router.add('							children: [');
	router.add('								{');
	router.add('									index: true,');
	router.add(`									element: <Navigate to={"/${stateFiles[0]}"} replace/>`);
	router.add('								},');
	stateFiles.forEach(f => {
		router.add('								{');
		router.add(`									path: "${f}",`);
		router.add('									element: <Suspense fallback={<Spinner/>}>');
		router.add(`										<ComponentLayout ${router.value.includes(`import ${f}MD from`) ? `markdown={${f}MD}` : ""} ${router.value.includes(`const ${f.charAt(0).toUpperCase() + f.substring(1)} = lazy`) ? `component={<${f.charAt(0).toUpperCase() + f.substring(1)}/>}` : ""}/>`);
		router.add('									</Suspense>');
		router.add('								},');
	})
	router.add('							]');
	router.add('						},');
	router.add('						{');
	router.add('							path: "lifecycle",');
	router.add('							element: <Suspense fallback={<Spinner/>}>');
	router.add('								<Outlet/>');
	router.add('							</Suspense>,');
	router.add('							children: [');
	router.add('								{');
	router.add('									index: true,');
	router.add(`									element: <Navigate to={"/${lifecycleFiles[0]}"} replace/>`);
	router.add('								},');
	lifecycleFiles.forEach(f => {
		router.add('								{');
		router.add(`									path: "${f}",`);
		router.add('									element: <Suspense fallback={<Spinner/>}>');
		router.add(`										<ComponentLayout ${router.value.includes(`import ${f}MD from`) ? `markdown={${f}MD}` : ""} ${router.value.includes(`const ${f.charAt(0).toUpperCase() + f.substring(1)} = lazy`) ? `component={<${f.charAt(0).toUpperCase() + f.substring(1)}/>}` : ""}/>`);
		router.add('									</Suspense>');
		router.add('								},');
	})
	router.add('							]');
	router.add('						},');
	router.add('						{');
	router.add('							path: "performance",');
	router.add('							element: <Suspense fallback={<Spinner/>}>');
	router.add('								<Outlet/>');
	router.add('							</Suspense>,');
	router.add('							children: [');
	router.add('								{');
	router.add('									index: true,');
	router.add(`									element: <Navigate to={"/${performanceFiles[0]}"} replace/>`);
	router.add('								},');
	performanceFiles.forEach(f => {
		router.add('								{');
		router.add(`									path: "${f}",`);
		router.add('									element: <Suspense fallback={<Spinner/>}>');
		router.add(`										<ComponentLayout ${router.value.includes(`import ${f}MD from`) ? `markdown={${f}MD}` : ""} ${router.value.includes(`const ${f.charAt(0).toUpperCase() + f.substring(1)} = lazy`) ? `component={<${f.charAt(0).toUpperCase() + f.substring(1)}/>}` : ""}/>`);
		router.add('									</Suspense>');
		router.add('								},');
	})
	router.add('							]');
	router.add('						},');
	router.add('						{');
	router.add('							path: "events",');
	router.add('							element: <Suspense fallback={<Spinner/>}>');
	router.add('								<Outlet/>');
	router.add('							</Suspense>,');
	router.add('							children: [');
	router.add('								{');
	router.add('									index: true,');
	router.add(`									element: <Navigate to={"/${eventsFiles[0]}"} replace/>`);
	router.add('								},');
	eventsFiles.forEach(f => {
		router.add('								{');
		router.add(`									path: "${f}",`);
		router.add('									element: <Suspense fallback={<Spinner/>}>');
		router.add(`										<ComponentLayout ${router.value.includes(`import ${f}MD from`) ? `markdown={${f}MD}` : ""} ${router.value.includes(`const ${f.charAt(0).toUpperCase() + f.substring(1)} = lazy`) ? `component={<${f.charAt(0).toUpperCase() + f.substring(1)}/>}` : ""}/>`);
		router.add('									</Suspense>');
		router.add('								},');
	})
	router.add('							]');
	router.add('						},');
	router.add('						{');
	router.add('							path: "api-dom",');
	router.add('							element: <Suspense fallback={<Spinner/>}>');
	router.add('								<Outlet/>');
	router.add('							</Suspense>,');
	router.add('							children: [');
	router.add('								{');
	router.add('									index: true,');
	router.add(`									element: <Navigate to={"/${apiDomFiles[0]}"} replace/>`);
	router.add('								},');
	apiDomFiles.forEach(f => {
		router.add('								{');
		router.add(`									path: "${f}",`);
		router.add('									element: <Suspense fallback={<Spinner/>}>');
		router.add(`										<ComponentLayout ${router.value.includes(`import ${f}MD from`) ? `markdown={${f}MD}` : ""} ${router.value.includes(`const ${f.charAt(0).toUpperCase() + f.substring(1)} = lazy`) ? `component={<${f.charAt(0).toUpperCase() + f.substring(1)}/>}` : ""}/>`);
		router.add('									</Suspense>');
		router.add('								},');
	})
	router.add('							]');
	router.add('						}');
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 * @param {string[]} componentsFiles
 * @param {string} parentRoot
 */
function createRoutes(router, componentsFiles, parentRoot) {
	router.add('						{');
	router.add('							index: true,');
	router.add(`							element: <Navigate to={"/${parentRoot}/${componentsFiles[0]}"} replace/>,`);
	router.add('						},');
	componentsFiles.forEach(f => {
		router.add('					{');
		router.add(`						path: "${f}",`);
		router.add('						element: <Suspense fallback={<Spinner/>}>');
		router.add(`							<ComponentLayout ${router.value.includes(`import ${f}MD from`) ? `markdown={${f}MD}` : ""} ${router.value.includes(`const ${f.charAt(0).toUpperCase() + f.substring(1)} = lazy`) ? `component={<${f.charAt(0).toUpperCase() + f.substring(1)}/>}` : ""}/>`);
		router.add('						</Suspense>');
		router.add('					},');
	})
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 */
async function createRouter(router) {
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
	router.add("	const router = createHashRouter([");
	router.add("		{");
	router.add('			path: "/",');
	router.add("			element: <MainLayout />,");
	router.add("			children: [");
	router.add("				{");
	router.add("					index: true,");
	router.add("					element: <Suspense fallback={<Spinner/>}>");
	router.add("						<HomeWrapper />");
	router.add("						</Suspense>");
	router.add("				},");
	router.add("				{");
	router.add('					path: "hooks",');
	router.add("					element: <Suspense fallback={<Spinner/>}>");
	router.add("						<Outlet />");
	router.add("					</Suspense>,");
	router.add(`					children: [`);
	createHooksRoutes(router, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES);
	router.add(`					]`);
	router.add('				},');
	router.add('				{');
	router.add('					path: "components",');
	router.add('					element: <Suspense fallback={<Spinner/>}>');
	router.add('						<Outlet />');
	router.add('					</Suspense>,');
	router.add(`					children: [`);
	createRoutes(router, COMPONENTS_FILES, "components")
	router.add(`					]`);
	router.add('				},');
	router.add('				{');
	router.add('					path: "utils",');
	router.add('					element: <Suspense fallback={<Spinner/>}>');
	router.add('						<Outlet />');
	router.add('					</Suspense>,');
	router.add(`					children: [`);
	createRoutes(router, UTILS_FILES, "utils")
	router.add(`					]`);
	router.add('				}');
	router.add('			]');
	router.add('		}');
	router.add('	]);');
}

async function generateRouter() {
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
		await generateImport(stringBuffer);
		stringBuffer.add("function Router() {");
		await createRouter(stringBuffer);
		stringBuffer.set([
			"	return (",
			"		<RouterProvider router= { router } />",
			"	);",
			"}",
			"export default Router"
		]);
		await fs.writeFile(path.join(PATH_DEMO_SRC, "router", "Router.tsx"), stringBuffer.value, { encoding: "utf8" });
		process.exit(0);
	} catch (error) {
		console.error(error);
	}
}

generateRouter();