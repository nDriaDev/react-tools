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
		"import { useEffect, useCallback, useRef } from 'react';",
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
	router.add("							<summary>Hooks</summary>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary>State</summary>");
	stateFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('								<Link');
		router.add(`									className={pathname === "/hooks/state/${name}" ? 'active' : ''}`);
		router.add(`									ref={node => linksRef.current["${name}"] = node}`);
		router.add(`									to="/hooks/state/${name}"`);
		router.add('									onClick={() => {');
		router.add('										containerRef.current?.scrollTo(0, 0);');
		router.add('										window.innerWidth < 1190 && closeNav();');
		router.add('									}}');
		router.add('								>');
		router.add(`									${name}`);
		router.add('								</Link>');
	});
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary>Lifecycle</summary>");
	lifecycleFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('								<Link');
		router.add(`									className={pathname === "/hooks/lifecycle/${name}" ? 'active' : ''}`);
		router.add(`									ref={node => linksRef.current["${name}"] = node}`);
		router.add(`									to="/hooks/lifecycle/${name}"`);
		router.add('									onClick={() => {');
		router.add('										containerRef.current?.scrollTo(0, 0);');
		router.add('										window.innerWidth < 1190 && closeNav();');
		router.add('									}}');
		router.add('								>');
		router.add(`									${name}`);
		router.add('								</Link>');
	});
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary>Performance</summary>");
	performanceFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('								<Link');
		router.add(`									className={pathname === "/hooks/performance/${name}" ? 'active' : ''}`);
		router.add(`									ref={node => linksRef.current["${name}"] = node}`);
		router.add(`									to="/hooks/performance/${name}"`);
		router.add('									onClick={() => {');
		router.add('										containerRef.current?.scrollTo(0, 0);');
		router.add('										window.innerWidth < 1190 && closeNav();');
		router.add('									}}');
		router.add('								>');
		router.add(`									${name}`);
		router.add('								</Link>');
	});
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary>Events</summary>");
	eventsFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('								<Link');
		router.add(`									className={pathname === "/hooks/events/${name}" ? 'active' : ''}`);
		router.add(`									ref={node => linksRef.current["${name}"] = node}`);
		router.add(`									to="/hooks/events/${name}"`);
		router.add('									onClick={() => {');
		router.add('										containerRef.current?.scrollTo(0, 0);');
		router.add('										window.innerWidth < 1190 && closeNav();');
		router.add('									}}');
		router.add('								>');
		router.add(`									${name}`);
		router.add('								</Link>');
	});
	router.add("							</details>");
	router.add("							<details open className='sub-type'>");
	router.add("								<summary>API DOM</summary>");
	apiDomFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('								<Link');
		router.add(`									className={pathname === "/hooks/api-${name}" ? 'active' : ''}`);
		router.add(`									ref={node => linksRef.current["${name}"] = node}`);
		router.add(`									to="/hooks/api-dom/${name}"`);
		router.add('									onClick={() => {');
		router.add('										containerRef.current?.scrollTo(0, 0);');
		router.add('										window.innerWidth < 1190 && closeNav();');
		router.add('									}}');
		router.add('								>');
		router.add(`									${name}`);
		router.add('								</Link>');
	});
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
	router.add(`							<summary>${parentRoot.charAt(0).toUpperCase() + parentRoot.substring(1)}</summary>`);
	componentsFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('							<Link');
		router.add(`								className={pathname === "/${parentRoot}/${name}" ? 'active' : ''}`);
		router.add(`								ref={node => linksRef.current["${name}"] = node}`);
		router.add(`								to="/${parentRoot}/${name}"`);
		router.add('								onClick={() => {');
		router.add('									containerRef.current?.scrollTo(0, 0);');
		router.add('									window.innerWidth < 1190 && closeNav();');
		router.add('								}}');
		router.add('							>');
		router.add(`								${name}`);
		router.add('							</Link>');
	});
	router.add("						</details>");
}

/**
 *
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router
 */
async function createLinkRouter(router) {
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
			'			if (node?.getAttribute("href") === window.location.hash && node?.offsetTop > window.innerHeight) {',
			'				node?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });',
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
			'						<div className="title-container">',
			'							<Link to="/" className="title">',
			'								<img src={React} alt="react" className="img" />',
			'								<p className="text">React Tools</p>',
			'							</Link>',
			'							<Link to="https://github.com/nDriaDev/react-tools">',
			'								<img src={Logo} className="img" alt="github" />',
			'							</Link>',
			'						</div>',
		]);
		await createLinkRouter(stringBuffer);
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