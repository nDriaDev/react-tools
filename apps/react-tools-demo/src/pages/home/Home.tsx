import { Link } from 'react-router-dom';
import Logo from '../../assets/react-red.webp';
import conf from '../../../package.json';
import LogoGithub from '../../assets/github.svg';

export default function Home() {
	return (
		<div className='home-container'>
			<Link to="https://github.com/nDriaDev/react-tools">
				<img src={Logo} alt="react" className="logo" />
			</Link>
			<h1 className='title' style={{marginBottom: 0}} translate='no'>React-Tools</h1>
			<h2 className='h3 version'>{conf.version}</h2>
			<h3 className='title h2' style={{textAlign: "center"}}>A collection of Hooks, Components, Utilities and Types for React</h3>
			<div className='npm-container'>
				<p className='npm-command' translate='no'>
					<code>
						npm i @ndriadev/react-tools
					</code>
					<button
						className='npm-copy'
						type="button"
						aria-label="Copy install command line"
						onClick={() => (navigator.clipboard.writeText("npm i @ndriadev/react-tools"), (document.activeElement as Element & {blur: ()=>void}).blur())}
					>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="far"
							data-icon="copy"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
						</svg>
					</button>
				</p>
			</div>
			<Link className='get-started' onClick={() => document.querySelector('.container')?.scrollTo(0, 0)} to="/hooks">GET STARTED</Link>
			<div className='features-container'>
				<div className='cell cell1'>
					<div className='title' translate='no'>Typescript</div>
					<div className='body'>Written in typescript for type safety.</div>
				</div>
				<div className='cell cell2'>
					<div className='title' translate='no'>Tree Shakable</div>
					<div className='body'>Import only that you use. Indivual import cost is tiny.</div>
				</div>
				<div className='cell cell3'>
					<div className='title' translate='no'>Demos</div>
					<div className='body'>All implementations have a demo that allow you to try them.</div>
				</div>
				<div className="footer">
					<Link to="https://github.com/nDriaDev/react-tools">
						<img src={LogoGithub} className="img" alt="github" />
					</Link>
					<Link to="https://ndria.dev" target='_blank'>
						nDriaDev
					</Link>
				</div>
			</div>
		</div>
	);
}