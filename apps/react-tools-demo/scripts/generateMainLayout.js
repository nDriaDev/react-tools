import path from "node:path";
import fs from 'node:fs/promises';
import { URL } from 'url';
import process from "node:process";

const __dirname = new URL('.', import.meta.url).pathname;

const PATH_DEMO_SRC = path.join(__dirname, '..', 'src');
const PATH_LIB_SRC = path.join(__dirname, "..", "..", "..", "packages", "react-tools", "src");
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
		"import { useCallback, useRef } from 'react';",
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
	router.add('						<p className="sub-type">State</p>');
	stateFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('						<Link');
		router.add(`							className={pathname === "/hooks/state/${name}" ? 'active' : ''}`);
		router.add(`							to="/hooks/state/${name}"`);
		router.add('							onClick={() => {');
		router.add('								containerRef.current?.scrollTo(0, 0);');
		router.add('								window.innerWidth < 1190 && closeNav();');
		router.add('							}}');
		router.add('						>');
		router.add(`							${name}`);
		router.add('						</Link>');
	});
	router.add('						<p className="sub-type">Lifecycle</p>');
	lifecycleFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('						<Link');
		router.add(`							className={pathname === "/hooks/lifecycle/${name}" ? 'active' : ''}`);
		router.add(`							to="/hooks/lifecycle/${name}"`);
		router.add('							onClick={() => {');
		router.add('								containerRef.current?.scrollTo(0, 0);');
		router.add('								window.innerWidth < 1190 && closeNav();');
		router.add('							}}');
		router.add('						>');
		router.add(`							${name}`);
		router.add('						</Link>');
	});
	router.add('						<p className="sub-type">Performance</p>');
	performanceFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('						<Link');
		router.add(`							className={pathname === "/hooks/performance/${name}" ? 'active' : ''}`);
		router.add(`							to="/hooks/performance/${name}"`);
		router.add('							onClick={() => {');
		router.add('								containerRef.current?.scrollTo(0, 0);');
		router.add('								window.innerWidth < 1190 && closeNav();');
		router.add('							}}');
		router.add('						>');
		router.add(`							${name}`);
		router.add('						</Link>');
	});
	router.add('						<p className="sub-type">Events</p>');
	eventsFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('						<Link');
		router.add(`							className={pathname === "/hooks/events/${name}" ? 'active' : ''}`);
		router.add(`							to="/hooks/events/${name}"`);
		router.add('							onClick={() => {');
		router.add('								containerRef.current?.scrollTo(0, 0);');
		router.add('								window.innerWidth < 1190 && closeNav();');
		router.add('							}}');
		router.add('						>');
		router.add(`							${name}`);
		router.add('						</Link>');
	});
	router.add('						<p className="sub-type">API DOM</p>');
	apiDomFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('						<Link');
		router.add(`							className={pathname === "/hooks/api-${name}" ? 'active' : ''}`);
		router.add(`							to="/hooks/api-dom/${name}"`);
		router.add('							onClick={() => {');
		router.add('								containerRef.current?.scrollTo(0, 0);');
		router.add('								window.innerWidth < 1190 && closeNav();');
		router.add('							}}');
		router.add('						>');
		router.add(`							${name}`);
		router.add('						</Link>');
	});
}

/**
 * 
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router 
 * @param {string[]} componentsFiles
 * @param {string} parentRoot
 */
function createLinkRoutes(router, componentsFiles, parentRoot) {
	router.add(`						<p className="sub-type">${parentRoot.charAt(0).toUpperCase()+parentRoot.substring(1)}</p>`);
	componentsFiles.forEach(f => {
		const [name] = f.split(".");
		router.add('						<Link');
		router.add(`							className={pathname === "/${parentRoot}/${name}" ? 'active' : ''}`);
		router.add(`							to="/${parentRoot}/${name}"`);
		router.add('							onClick={() => {');
		router.add('								containerRef.current?.scrollTo(0, 0);');
		router.add('								window.innerWidth < 1190 && closeNav();');
		router.add('							}}');
		router.add('						>');
		router.add(`							${name}`);
		router.add('						</Link>');
	});
}

/**
 * 
 * @param {{readonly value: string;add(s: string): this;set(s: string[]): this;}} router 
 */
async function createLinkRouter(router) {
	const libSrcIndexFile = await fs.readFile(path.join(PATH_LIB_SRC, "index.ts"));
	const HOOKS_STATE_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[0], "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));
	const HOOKS_LIFECYCLE_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[1], "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));
	const HOOKS_PERFORMANCE_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[2], "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));
	const HOOKS_EVENTS_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[3], "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));
	const HOOKS_APIDOM_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, HOOKS_TYPE[4], "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));
	const COMPONENTS_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, COMPONENTS_DIR_NAME, "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));
	const UTILS_FILES = (await fs.readFile((path.join(PATH_LIB_SRC, UTILS_DIR_NAME, "index.ts")), { encoding: "utf8" })).replaceAll("export { ", "").replaceAll("export ", "").split("\n").map(el => el.substring(0, el.indexOf(" } from") !== -1 ? el.indexOf(" } from") : el.indexOf(" from"))).filter(el => !!el && libSrcIndexFile.includes(el)).sort((a,b)=> a.localeCompare(b, 'en'));

	router.add("						<p className='type'>Hooks</p>");
	createLinkHooksRoutes(router, HOOKS_STATE_FILES, HOOKS_LIFECYCLE_FILES, HOOKS_PERFORMANCE_FILES, HOOKS_EVENTS_FILES, HOOKS_APIDOM_FILES);
	createLinkRoutes(router, COMPONENTS_FILES, "components")
	createLinkRoutes(router, UTILS_FILES, "utils")
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
			"	const containerRef = useRef<HTMLDivElement>(null);",
			"	const openNav = useCallback(() => {",
			'		navRef.current && (navRef.current.style.width = "100%");',
			"	}, []);",
			"	const closeNav = useCallback(() => {",
			'		navRef.current && (navRef.current.style.width= "0");',
			"	}, []);",
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
		process.exit(0);
	} catch (error) {
		console.error(error);
	}
}

generateMainLayout();