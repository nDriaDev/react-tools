import { Link } from 'react-router-dom';
import Logo from '../../assets/react-red.webp';

export default function Home() {
	return (
		<div className='home-container'>
			<img src={Logo} alt="react" className="logo"/>
			<h1 className='title'>React Tools</h1>
			<h2>A collection of hooks and utilities for React</h2>
			<div className='npm-container'>
				<span
					className='npm-copy'
					onClick={() => navigator.clipboard.writeText("npm i @ndriadev/react-tools")}
				>
					copy
				</span>
				<p className='npm-command'>
					<code>
						npm i @ndriadev/react-tools
					</code>
				</p>
			</div>
			<Link className='get-started' onClick={() => document.querySelector('.container')?.scrollTo(0, 0)} to="/usePrevious">GET STARTED</Link>
			<div className='features-container'>
				<div className='cell'>
					<div className='title'>Typescript</div>
					<div className='body'>Written in typescript for type safety.</div>
				</div>
				<div className='cell'>
					<div className='title'>Tree Shakable</div>
					<div className='body'>Import only that you use. Indivual import cost is tiny.</div>
				</div>
				<div className='cell'>
					<div className='title'>Demos</div>
					<div className='body'>All hooks have a demo that allow you to try them.</div>
				</div>
			</div>
		</div>
	);
}