import path from "node:path";
import fs from 'node:fs/promises';
import { URL } from 'url';
import process from "node:process";

const __dirname = new URL('.', import.meta.url).pathname;

const PATH_LIB_PACKAGE_JSON = path.join(__dirname, "..", "..", "..", "packages", "react-tools-lib", "package.json");
const PATH_DEMO_PACKAGE_JSON = path.join(__dirname, '..', 'package.json');
const PATH_DEMO_SRC = path.join(__dirname, '..', 'src');
const PATH_LIB_SRC = path.join(__dirname, "..", "..", "..", "packages", "react-tools-lib", "src");
const HOOKS_DIR_NAME = "hooks";
const COMPONENTS_DIR_NAME = "components";
const UTILS_DIR_NAME = "utils";
const HOOKS_TYPE = ["state", "lifecycle", "performance", "events", "api-dom"];

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 */
async function generateImport(router) {
	router.set([
		"import { Link, useLocation, useOutlet } from 'react-router-dom';",
		"import Logo from '../assets/github.svg';",
		"import React from '../assets/react-red.webp';",
		"import { useEffect, useCallback, useRef, BaseSyntheticEvent } from 'react';",
		"import { CSSTransition, SwitchTransition } from 'react-transition-group'"
	]);
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
function createLinkHooksRoutes(router, stateFiles, lifecycleFiles, performanceFiles, eventsFiles, apiDomFiles,) {
	router.add("						<details open className='type'>");
	router.add("							<summary translate='no'>Hooks</summary>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary translate='no'>State</summary>");
	router.add("									<div className='container-details'>");
	stateFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('									<Link');
		router.add(`										ref={node => linksRef.current["${name}"] = node}`);
		router.add(`										to="/hooks/state/${name}"`);
		router.add('										onClick={() => {');
		router.add('											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));');
		router.add('											linksRef.current["' + name + '"]?.classList.add("active");');
		router.add('											containerRef.current?.scrollTo(0, 0);');
		router.add('											window.innerWidth < 1190 && closeNav();');
		router.add('										}}');
		router.add('										translate="no"');
		router.add('									>');
		router.add(`										${name}`);
		router.add('									</Link>');
	});
	router.add("									</div>");
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary translate='no'>Lifecycle</summary>");
	router.add("									<div className='container-details'>");
	lifecycleFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('									<Link');
		router.add(`										ref={node => linksRef.current["${name}"] = node}`);
		router.add(`										to="/hooks/lifecycle/${name}"`);
		router.add('										onClick={() => {');
		router.add('											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));');
		router.add('											linksRef.current["' + name + '"]?.classList.add("active");');
		router.add('											containerRef.current?.scrollTo(0, 0);');
		router.add('											window.innerWidth < 1190 && closeNav();');
		router.add('										}}');
		router.add('										translate="no"');
		router.add('									>');
		router.add(`										${name}`);
		router.add('									</Link>');
	});
	router.add("									</div>");
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary translate='no'>Performance</summary>");
	router.add("									<div className='container-details'>");
	performanceFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('									<Link');
		router.add(`										ref={node => linksRef.current["${name}"] = node}`);
		router.add(`										to="/hooks/performance/${name}"`);
		router.add('										onClick={() => {');
		router.add('											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));');
		router.add('											linksRef.current["' + name + '"]?.classList.add("active");');
		router.add('											containerRef.current?.scrollTo(0, 0);');
		router.add('											window.innerWidth < 1190 && closeNav();');
		router.add('										}}');
		router.add('										translate="no"');
		router.add('									>');
		router.add(`										${name}`);
		router.add('									</Link>');
	});
	router.add("									</div>");
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary translate='no'>Events</summary>");
	router.add("									<div className='container-details'>");
	eventsFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('									<Link');
		router.add(`										ref={node => linksRef.current["${name}"] = node}`);
		router.add(`										to="/hooks/events/${name}"`);
		router.add('										onClick={() => {');
		router.add('											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));');
		router.add('											linksRef.current["' + name + '"]?.classList.add("active");');
		router.add('											containerRef.current?.scrollTo(0, 0);');
		router.add('											window.innerWidth < 1190 && closeNav();');
		router.add('										}}');
		router.add('										translate="no"');
		router.add('									>');
		router.add(`										${name}`);
		router.add('									</Link>');
	});
	router.add("									</div>");
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary translate='no'>API DOM</summary>");
	router.add("									<div className='container-details'>");
	apiDomFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('									<Link');
		router.add(`										ref={node => linksRef.current["${name}"] = node}`);
		router.add(`										to="/hooks/api-dom/${name}"`);
		router.add('										onClick={() => {');
		router.add('											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));');
		router.add('											linksRef.current["' + name + '"]?.classList.add("active");');
		router.add('											containerRef.current?.scrollTo(0, 0);');
		router.add('											window.innerWidth < 1190 && closeNav();');
		router.add('										}}');
		router.add('										translate="no"');
		router.add('									>');
		router.add(`										${name}`);
		router.add('									</Link>');
	});
	router.add("									</div>");
	router.add("							</details>");
	router.add("						</details>");
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 * @param {string[]} componentsFiles
 * @param {string} parentRoot
 */
function createLinkRoutes(router, componentsFiles, parentRoot) {
	router.add("						<details open className='type'>");
	router.add(`							<summary translate="no">${parentRoot.charAt(0).toUpperCase() + parentRoot.substring(1)}</summary>`);
	router.add("								<div className='sub-type'>");
	componentsFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('								<Link');
		router.add(`									ref={node => linksRef.current["${name}"] = node}`);
		router.add(`									to="/${parentRoot}/${name}"`);
		router.add('									onClick={() => {');
		router.add('										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));');
		router.add('										linksRef.current["' + name + '"]?.classList.add("active");');
		router.add('										containerRef.current?.scrollTo(0, 0);');
		router.add('										window.innerWidth < 1190 && closeNav();');
		router.add('									}}');
		router.add('									translate="no"');
		router.add('								>');
		router.add(`									${name}`);
		router.add('								</Link>');
	});
	router.add("								</div>");
	router.add("						</details>");
}

/**
 *
 * @returns
 */
async function readFiles() {
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

	return [HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES];
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 * @param {*} HOOKS_STATE_FILES
 * @param {*} HOOKS_LIFECYCLE_FILES
 * @param {*} HOOKS_PERFORMANCE_FILES
 * @param {*} HOOKS_EVENTS_FILES
 * @param {*} HOOKS_APIDOM_FILES
 * @param {*} COMPONENTS_FILES
 * @param {*} UTILS_FILES
 */
function addingOptionDataList(router, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES) {
	[...HOOKS_STATE_FILES, ...HOOKS_LIFECYCLE_FILES, ...HOOKS_PERFORMANCE_FILES, ...HOOKS_EVENTS_FILES, ...HOOKS_APIDOM_FILES, ...COMPONENTS_FILES, ...UTILS_FILES].forEach(f => {
		const [name] = f.split(".");
		router.add(`									<option value="${name}"></option>`);
	})
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 * @param {*} HOOKS_STATE_FILES
 * @param {*} HOOKS_LIFECYCLE_FILES
 * @param {*} HOOKS_PERFORMANCE_FILES
 * @param {*} HOOKS_EVENTS_FILES
 * @param {*} HOOKS_APIDOM_FILES
 * @param {*} COMPONENTS_FILES
 * @param {*} UTILS_FILES
 */
function createLinkRouter(router, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES) {
	createLinkHooksRoutes(router, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES);
	createLinkRoutes(router, COMPONENTS_FILES, "components")
	createLinkRoutes(router, UTILS_FILES, "utils")
	createLinkRoutes(router, ["utilityTypes"], "types")
}

async function updateDemoPackageVersion() {
	try {
		const packageLib = JSON.parse(await fs.readFile(PATH_LIB_PACKAGE_JSON, { encoding: "utf8" }));
		const packageDemo = JSON.parse(await fs.readFile(PATH_DEMO_PACKAGE_JSON, { encoding: "utf8" }));
		packageDemo.version = packageLib.version;
		await fs.writeFile(PATH_DEMO_PACKAGE_JSON, JSON.stringify(packageDemo, null, 4), { encoding: "utf8" });
	} catch (error) {
		console.error(error);
	}
}

async function generateMainLayout() {
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
		const [HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES] = await readFiles();
		stringBuffer.set([
			"export default function MainLayout() {",
			"	const { pathname } = useLocation();",
			"	const location = useLocation()",
			"	const currentOutlet = useOutlet()",
			"	const nodeRef = useRef<HTMLDivElement>(null);",
			"	const navRef = useRef<HTMLUnknownElement>(null);",
			"	const linksRef = useRef<{[k:string]: HTMLAnchorElement|null}>({});",
			"	const containerRef = useRef<HTMLDivElement>(null);",
			"	const openNav = useCallback(() => {",
			'		navRef.current && (navRef.current.style.width = "100%");',
			"	}, []);",
			"	const closeNav = useCallback(() => {",
			'		navRef.current && (navRef.current.style.width= "0");',
			"	}, []);",
			'	useEffect(() => {',
			'		if (window.innerWidth < 1000) {',
			'			return;',
			'		}',
			'		const nodes = Object.values(linksRef.current);',
			'		for (const node of nodes) {',
			'			const hashNode = node?.getAttribute("href") ?? "";',
			'			if (node && hashNode === window.location.hash) {',
			'				node?.classList.add("active");',
			'				node?.offsetTop > window.innerHeight && node?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });',
			'				break;',
			'			}',
			'		}',
			'	}, []);',
			'    return (',
			'        <>',
			'			{',
			'				!["/", ""].includes(pathname) &&',
			'				<>',
			'					<button onClick={openNav} className="open-nav">☰</button>',
			'					<nav ref={navRef}  className="nav">',
			'						<button onClick={closeNav} className="btn-close">X</button>',
			'						<div className="title-search-container">',
			'							<div className="title-container">',
			'								<Link to="/" className="title">',
			'									<img src={React} alt="react" className="img" />',
			'									<p className="text" translate="no">React Tools</p>',
			'								</Link>',
			'								<Link to="https://github.com/nDriaDev/react-tools">',
			'									<img src={Logo} className="img" alt="github" />',
			'								</Link>',
			'							</div>',
			'							<div className="search-container">',
			'								<input list="routes" id="input-routes" name="input-routes" className="search" placeholder="🔎 Search..." onChange={(e: BaseSyntheticEvent) => { linksRef.current[e.target.value]?.click(); linksRef.current[e.target.value]?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }); }} />',
			'								<datalist id="routes">'
		]);
		addingOptionDataList(stringBuffer, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES);
		stringBuffer.set([
			'								</datalist>',
			'							</div>',
			'						</div>'
		]);
		createLinkRouter(stringBuffer, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES, COMPONENTS_FILES, UTILS_FILES);
		stringBuffer.set([
			'					</nav>',
			'				</>',
			'			}',
			'			<div className="container" ref={containerRef}>',
			'				<SwitchTransition>',
			'					<CSSTransition',
			'						key={location.pathname}',
			'						nodeRef={nodeRef}',
			'						timeout={300}',
			'						classNames="page"',
			'						unmountOnExit',
			'					>',
			'						{() => (',
			'							<div ref={nodeRef} className="page">',
			'								{currentOutlet}',
			'							</div>',
			'						)}',
			'					</CSSTransition>',
			'				</SwitchTransition>',
			'            </div>',
			'        </>',
			'    )',
			'}'
		]);
		await fs.writeFile(path.join(PATH_DEMO_SRC, "layout", "MainLayout.tsx"), stringBuffer.value, { encoding: "utf8" });
		await updateDemoPackageVersion();
		process.exit(0);
	} catch (error) {
		console.error(error);
	}
}

generateMainLayout();