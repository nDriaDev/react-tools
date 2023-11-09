import { Link, useLocation, useOutlet } from 'react-router-dom';
import Logo from '../assets/github.svg';
import React from '../assets/react-red.webp';
import { COMPONENTS, GROUPS } from '../constants/components';
import { Fragment, useCallback, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function MainLayout() {
	const { pathname } = useLocation();
	const location = useLocation()
	const currentOutlet = useOutlet()
	const nodeRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLUnknownElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

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
							COMPONENTS.map((el, index) => (
								<Fragment key={GROUPS[index]}>
									{
										["Hooks", "Utils"].includes(GROUPS[index]) &&
										<p
											className='type'
										>
											{GROUPS[index]}
										</p>
									}
									{
										el.map((group, index2) => (
											Array.isArray(group)
												? <Fragment key={"list-" + GROUPS[2 + index2]}>
													<p className='sub-type'>
														{GROUPS[index2+2]}
													</p>
													{
														group.map(name => (
															<Link
																key={name}
																className={pathname === ("/" + name) ? 'active' : ''}
																to={"/" + name}
																onClick={()=>containerRef.current?.scrollTo(0,0)}
															>
																{name}
															</Link>
														))
													}
												</Fragment>
												: <Link
													key={group as string}
													className={pathname === ("/" + group) ? 'active' : ''}
													to={"/" + group}
													onClick={()=>containerRef.current?.scrollTo(0,0)}
												>
													{group}
												</Link>
										))
									}
								</Fragment>)
							)
						}
					</nav>
				</>
			}
			<div className='container' ref={containerRef}>
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