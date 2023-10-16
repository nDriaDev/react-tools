import { Link, useLocation, useOutlet } from 'react-router-dom';
import Logo from '../assets/github.svg';
import React from '../assets/react-red.webp';
import { COMPONENTS } from '../constants/components';
import { Fragment, useCallback, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function MainLayout() {
	const { pathname } = useLocation();
	const location = useLocation()
	const currentOutlet = useOutlet()
	const nodeRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLUnknownElement>(null);

	const openNav = useCallback(() => {
		navRef.current && (navRef.current.style.width = "100%");
	}, []);

	const closeNav = useCallback(() => {
		navRef.current && (navRef.current.style.width= "0");
	}, []);

    return (
        <>
			{
				!["/", ""].includes(pathname) &&
				<>
					<button onClick={openNav} className='open-nav'>☰</button>
					<nav ref={navRef}  className='nav'>
						<button onClick={closeNav} className='btn-close'>X</button>
						<div className='title-container'>
							<Link to="/" className='title'>
								<img src={React} alt='react' className='img' />
								<p className='text'>React Tools</p>
							</Link>
							<Link to="https://github.com/nDriaDev/react-tools">
								<img src={Logo} className='img' alt='github' />
							</Link>
						</div>
						{
							COMPONENTS.map((el, index) => (<Fragment key={index === 0 ? 'Hooks' : 'Utils'}>
								<p
									className='type'
								>
									{index === 0 ? 'Hooks' : 'Utils'}
								</p>
								{
									el.map(name => (
										<Link
											key={name}
											to={"/" + name}
											className={pathname === ("/" + name) ? 'active' : ''}
										>
											{name}
										</Link>
									))
								}
							</Fragment>))
						}
					</nav>
				</>
			}
			<div className='container'>
				<SwitchTransition>
					<CSSTransition
						key={location.pathname}
						nodeRef={nodeRef}
						timeout={300}
						classNames="page"
						unmountOnExit
					>
						{() => (
							<div ref={nodeRef} className="page">
								{currentOutlet}
							</div>
						)}
					</CSSTransition>
				</SwitchTransition>
            </div>
        </>
    )
}