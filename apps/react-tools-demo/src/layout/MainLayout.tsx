import { Link, useLocation, useOutlet } from 'react-router-dom';
import Logo from '../assets/github.svg';
import React from '../assets/react-red.webp';
import { useEffect, useCallback, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
export default function MainLayout() {
	const { pathname } = useLocation();
	const location = useLocation()
	const currentOutlet = useOutlet()
	const nodeRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLUnknownElement>(null);
	const linksRef = useRef<{[k:string]: HTMLAnchorElement|null}>({});
	const containerRef = useRef<HTMLDivElement>(null);
	const openNav = useCallback(() => {
		navRef.current && (navRef.current.style.width = "100%");
	}, []);
	const closeNav = useCallback(() => {
		navRef.current && (navRef.current.style.width= "0");
	}, []);
	useEffect(() => {
		if (window.innerWidth < 1000) {
			return;
		}
		const nodes = Object.values(linksRef.current);
		for (const node of nodes) {
			if (node?.getAttribute("href") === window.location.hash && node?.offsetTop > window.innerHeight) {
				node?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
				break;
			}
		}
	}, []);
    return (
        <>
			{
				!["/", ""].includes(pathname) &&
				<>
					<button onClick={openNav} className="open-nav">☰</button>
					<nav ref={navRef}  className="nav">
						<button onClick={closeNav} className="btn-close">X</button>
						<div className="title-container">
							<Link to="/" className="title">
								<img src={React} alt="react" className="img" />
								<p className="text" translate="no">React Tools</p>
							</Link>
							<Link to="https://github.com/nDriaDev/react-tools">
								<img src={Logo} className="img" alt="github" />
							</Link>
						</div>
						<details open className='type'>
							<summary translate='no'>Hooks</summary>
							<details open className='sub-type'>
								<summary translate='no'>State</summary>
									<div className='container-details'>
									<Link
										className={pathname === "/hooks/state/createPubSubStore" ? 'active' : ''}
										ref={node => linksRef.current["createPubSubStore"] = node}
										to="/hooks/state/createPubSubStore"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										createPubSubStore
									</Link>
									<Link
										className={pathname === "/hooks/state/useArray" ? 'active' : ''}
										ref={node => linksRef.current["useArray"] = node}
										to="/hooks/state/useArray"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useArray
									</Link>
									<Link
										className={pathname === "/hooks/state/useDerivedState" ? 'active' : ''}
										ref={node => linksRef.current["useDerivedState"] = node}
										to="/hooks/state/useDerivedState"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDerivedState
									</Link>
									<Link
										className={pathname === "/hooks/state/useLocalStorageState" ? 'active' : ''}
										ref={node => linksRef.current["useLocalStorageState"] = node}
										to="/hooks/state/useLocalStorageState"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLocalStorageState
									</Link>
									<Link
										className={pathname === "/hooks/state/useMap" ? 'active' : ''}
										ref={node => linksRef.current["useMap"] = node}
										to="/hooks/state/useMap"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMap
									</Link>
									<Link
										className={pathname === "/hooks/state/usePrevious" ? 'active' : ''}
										ref={node => linksRef.current["usePrevious"] = node}
										to="/hooks/state/usePrevious"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePrevious
									</Link>
									<Link
										className={pathname === "/hooks/state/useProxyState" ? 'active' : ''}
										ref={node => linksRef.current["useProxyState"] = node}
										to="/hooks/state/useProxyState"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useProxyState
									</Link>
									<Link
										className={pathname === "/hooks/state/useReducerGetReset" ? 'active' : ''}
										ref={node => linksRef.current["useReducerGetReset"] = node}
										to="/hooks/state/useReducerGetReset"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducerGetReset
									</Link>
									<Link
										className={pathname === "/hooks/state/useReducerHistory" ? 'active' : ''}
										ref={node => linksRef.current["useReducerHistory"] = node}
										to="/hooks/state/useReducerHistory"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducerHistory
									</Link>
									<Link
										className={pathname === "/hooks/state/useReducerHistoryGetter" ? 'active' : ''}
										ref={node => linksRef.current["useReducerHistoryGetter"] = node}
										to="/hooks/state/useReducerHistoryGetter"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducerHistoryGetter
									</Link>
									<Link
										className={pathname === "/hooks/state/useSessionStorageState" ? 'active' : ''}
										ref={node => linksRef.current["useSessionStorageState"] = node}
										to="/hooks/state/useSessionStorageState"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSessionStorageState
									</Link>
									<Link
										className={pathname === "/hooks/state/useSet" ? 'active' : ''}
										ref={node => linksRef.current["useSet"] = node}
										to="/hooks/state/useSet"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSet
									</Link>
									<Link
										className={pathname === "/hooks/state/useStateGetReset" ? 'active' : ''}
										ref={node => linksRef.current["useStateGetReset"] = node}
										to="/hooks/state/useStateGetReset"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateGetReset
									</Link>
									<Link
										className={pathname === "/hooks/state/useStateHistory" ? 'active' : ''}
										ref={node => linksRef.current["useStateHistory"] = node}
										to="/hooks/state/useStateHistory"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateHistory
									</Link>
									<Link
										className={pathname === "/hooks/state/useStateHistoryGetter" ? 'active' : ''}
										ref={node => linksRef.current["useStateHistoryGetter"] = node}
										to="/hooks/state/useStateHistoryGetter"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateHistoryGetter
									</Link>
									<Link
										className={pathname === "/hooks/state/useStateValidator" ? 'active' : ''}
										ref={node => linksRef.current["useStateValidator"] = node}
										to="/hooks/state/useStateValidator"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateValidator
									</Link>
									<Link
										className={pathname === "/hooks/state/useSyncExternalStore" ? 'active' : ''}
										ref={node => linksRef.current["useSyncExternalStore"] = node}
										to="/hooks/state/useSyncExternalStore"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSyncExternalStore
									</Link>
									</div>
							</details>
							<details open className='sub-type'>
								<summary translate='no'>Lifecycle</summary>
									<div className='container-details'>
									<Link
										className={pathname === "/hooks/lifecycle/useDeferredValue" ? 'active' : ''}
										ref={node => linksRef.current["useDeferredValue"] = node}
										to="/hooks/lifecycle/useDeferredValue"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDeferredValue
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useEffectCompare" ? 'active' : ''}
										ref={node => linksRef.current["useEffectCompare"] = node}
										to="/hooks/lifecycle/useEffectCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectCompare
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useEffectDeepCompare" ? 'active' : ''}
										ref={node => linksRef.current["useEffectDeepCompare"] = node}
										to="/hooks/lifecycle/useEffectDeepCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectDeepCompare
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useEffectOnce" ? 'active' : ''}
										ref={node => linksRef.current["useEffectOnce"] = node}
										to="/hooks/lifecycle/useEffectOnce"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectOnce
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useIsMounted" ? 'active' : ''}
										ref={node => linksRef.current["useIsMounted"] = node}
										to="/hooks/lifecycle/useIsMounted"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIsMounted
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useLayoutEffectCompare" ? 'active' : ''}
										ref={node => linksRef.current["useLayoutEffectCompare"] = node}
										to="/hooks/lifecycle/useLayoutEffectCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectCompare
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useLayoutEffectDeepCompare" ? 'active' : ''}
										ref={node => linksRef.current["useLayoutEffectDeepCompare"] = node}
										to="/hooks/lifecycle/useLayoutEffectDeepCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectDeepCompare
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useLayoutEffectOnce" ? 'active' : ''}
										ref={node => linksRef.current["useLayoutEffectOnce"] = node}
										to="/hooks/lifecycle/useLayoutEffectOnce"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectOnce
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useLogger" ? 'active' : ''}
										ref={node => linksRef.current["useLogger"] = node}
										to="/hooks/lifecycle/useLogger"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLogger
									</Link>
									<Link
										className={pathname === "/hooks/lifecycle/useRerender" ? 'active' : ''}
										ref={node => linksRef.current["useRerender"] = node}
										to="/hooks/lifecycle/useRerender"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useRerender
									</Link>
									</div>
							</details>
							<details open className='sub-type'>
								<summary translate='no'>Performance</summary>
									<div className='container-details'>
									<Link
										className={pathname === "/hooks/performance/useCallbackCompare" ? 'active' : ''}
										ref={node => linksRef.current["useCallbackCompare"] = node}
										to="/hooks/performance/useCallbackCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useCallbackCompare
									</Link>
									<Link
										className={pathname === "/hooks/performance/useCallbackDeepCompare" ? 'active' : ''}
										ref={node => linksRef.current["useCallbackDeepCompare"] = node}
										to="/hooks/performance/useCallbackDeepCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useCallbackDeepCompare
									</Link>
									<Link
										className={pathname === "/hooks/performance/useId" ? 'active' : ''}
										ref={node => linksRef.current["useId"] = node}
										to="/hooks/performance/useId"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useId
									</Link>
									<Link
										className={pathname === "/hooks/performance/useLazyRef" ? 'active' : ''}
										ref={node => linksRef.current["useLazyRef"] = node}
										to="/hooks/performance/useLazyRef"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLazyRef
									</Link>
									<Link
										className={pathname === "/hooks/performance/useMemoCompare" ? 'active' : ''}
										ref={node => linksRef.current["useMemoCompare"] = node}
										to="/hooks/performance/useMemoCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMemoCompare
									</Link>
									<Link
										className={pathname === "/hooks/performance/useMemoDeepCompare" ? 'active' : ''}
										ref={node => linksRef.current["useMemoDeepCompare"] = node}
										to="/hooks/performance/useMemoDeepCompare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMemoDeepCompare
									</Link>
									<Link
										className={pathname === "/hooks/performance/useMemoizedFn" ? 'active' : ''}
										ref={node => linksRef.current["useMemoizedFn"] = node}
										to="/hooks/performance/useMemoizedFn"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMemoizedFn
									</Link>
									<Link
										className={pathname === "/hooks/performance/useMergedRef" ? 'active' : ''}
										ref={node => linksRef.current["useMergedRef"] = node}
										to="/hooks/performance/useMergedRef"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMergedRef
									</Link>
									</div>
							</details>
							<details open className='sub-type'>
								<summary translate='no'>Events</summary>
									<div className='container-details'>
									<Link
										className={pathname === "/hooks/events/useBeforeUnload" ? 'active' : ''}
										ref={node => linksRef.current["useBeforeUnload"] = node}
										to="/hooks/events/useBeforeUnload"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBeforeUnload
									</Link>
									<Link
										className={pathname === "/hooks/events/useClickOutside" ? 'active' : ''}
										ref={node => linksRef.current["useClickOutside"] = node}
										to="/hooks/events/useClickOutside"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useClickOutside
									</Link>
									<Link
										className={pathname === "/hooks/events/useContextMenu" ? 'active' : ''}
										ref={node => linksRef.current["useContextMenu"] = node}
										to="/hooks/events/useContextMenu"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useContextMenu
									</Link>
									<Link
										className={pathname === "/hooks/events/useDocumentVisibility" ? 'active' : ''}
										ref={node => linksRef.current["useDocumentVisibility"] = node}
										to="/hooks/events/useDocumentVisibility"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDocumentVisibility
									</Link>
									<Link
										className={pathname === "/hooks/events/useDoubleClick" ? 'active' : ''}
										ref={node => linksRef.current["useDoubleClick"] = node}
										to="/hooks/events/useDoubleClick"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDoubleClick
									</Link>
									<Link
										className={pathname === "/hooks/events/useEventDispatcher" ? 'active' : ''}
										ref={node => linksRef.current["useEventDispatcher"] = node}
										to="/hooks/events/useEventDispatcher"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEventDispatcher
									</Link>
									<Link
										className={pathname === "/hooks/events/useEventListener" ? 'active' : ''}
										ref={node => linksRef.current["useEventListener"] = node}
										to="/hooks/events/useEventListener"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEventListener
									</Link>
									<Link
										className={pathname === "/hooks/events/useEvents" ? 'active' : ''}
										ref={node => linksRef.current["useEvents"] = node}
										to="/hooks/events/useEvents"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEvents
									</Link>
									<Link
										className={pathname === "/hooks/events/useHotKeys" ? 'active' : ''}
										ref={node => linksRef.current["useHotKeys"] = node}
										to="/hooks/events/useHotKeys"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useHotKeys
									</Link>
									<Link
										className={pathname === "/hooks/events/useHover" ? 'active' : ''}
										ref={node => linksRef.current["useHover"] = node}
										to="/hooks/events/useHover"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useHover
									</Link>
									<Link
										className={pathname === "/hooks/events/useInfiniteScroll" ? 'active' : ''}
										ref={node => linksRef.current["useInfiniteScroll"] = node}
										to="/hooks/events/useInfiniteScroll"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useInfiniteScroll
									</Link>
									<Link
										className={pathname === "/hooks/events/useIntersectionObserver" ? 'active' : ''}
										ref={node => linksRef.current["useIntersectionObserver"] = node}
										to="/hooks/events/useIntersectionObserver"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIntersectionObserver
									</Link>
									<Link
										className={pathname === "/hooks/events/useIsOnline" ? 'active' : ''}
										ref={node => linksRef.current["useIsOnline"] = node}
										to="/hooks/events/useIsOnline"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIsOnline
									</Link>
									<Link
										className={pathname === "/hooks/events/useLongPress" ? 'active' : ''}
										ref={node => linksRef.current["useLongPress"] = node}
										to="/hooks/events/useLongPress"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLongPress
									</Link>
									<Link
										className={pathname === "/hooks/events/useMeasure" ? 'active' : ''}
										ref={node => linksRef.current["useMeasure"] = node}
										to="/hooks/events/useMeasure"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMeasure
									</Link>
									<Link
										className={pathname === "/hooks/events/useMouse" ? 'active' : ''}
										ref={node => linksRef.current["useMouse"] = node}
										to="/hooks/events/useMouse"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMouse
									</Link>
									<Link
										className={pathname === "/hooks/events/useMutationObserver" ? 'active' : ''}
										ref={node => linksRef.current["useMutationObserver"] = node}
										to="/hooks/events/useMutationObserver"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMutationObserver
									</Link>
									<Link
										className={pathname === "/hooks/events/useNetwork" ? 'active' : ''}
										ref={node => linksRef.current["useNetwork"] = node}
										to="/hooks/events/useNetwork"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useNetwork
									</Link>
									<Link
										className={pathname === "/hooks/events/usePerformAction" ? 'active' : ''}
										ref={node => linksRef.current["usePerformAction"] = node}
										to="/hooks/events/usePerformAction"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePerformAction
									</Link>
									<Link
										className={pathname === "/hooks/events/usePinchZoom" ? 'active' : ''}
										ref={node => linksRef.current["usePinchZoom"] = node}
										to="/hooks/events/usePinchZoom"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePinchZoom
									</Link>
									<Link
										className={pathname === "/hooks/events/usePointerLock" ? 'active' : ''}
										ref={node => linksRef.current["usePointerLock"] = node}
										to="/hooks/events/usePointerLock"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePointerLock
									</Link>
									<Link
										className={pathname === "/hooks/events/useResizeObserver" ? 'active' : ''}
										ref={node => linksRef.current["useResizeObserver"] = node}
										to="/hooks/events/useResizeObserver"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useResizeObserver
									</Link>
									<Link
										className={pathname === "/hooks/events/useResponsive" ? 'active' : ''}
										ref={node => linksRef.current["useResponsive"] = node}
										to="/hooks/events/useResponsive"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useResponsive
									</Link>
									<Link
										className={pathname === "/hooks/events/useScreen" ? 'active' : ''}
										ref={node => linksRef.current["useScreen"] = node}
										to="/hooks/events/useScreen"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScreen
									</Link>
									<Link
										className={pathname === "/hooks/events/useScrollIntoView" ? 'active' : ''}
										ref={node => linksRef.current["useScrollIntoView"] = node}
										to="/hooks/events/useScrollIntoView"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScrollIntoView
									</Link>
									<Link
										className={pathname === "/hooks/events/useSwipe" ? 'active' : ''}
										ref={node => linksRef.current["useSwipe"] = node}
										to="/hooks/events/useSwipe"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSwipe
									</Link>
									<Link
										className={pathname === "/hooks/events/useVisible" ? 'active' : ''}
										ref={node => linksRef.current["useVisible"] = node}
										to="/hooks/events/useVisible"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useVisible
									</Link>
									</div>
							</details>
							<details open className='sub-type'>
								<summary translate='no'>API DOM</summary>
									<div className='container-details'>
									<Link
										className={pathname === "/hooks/api-useActiveElement" ? 'active' : ''}
										ref={node => linksRef.current["useActiveElement"] = node}
										to="/hooks/api-dom/useActiveElement"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useActiveElement
									</Link>
									<Link
										className={pathname === "/hooks/api-useAnimation" ? 'active' : ''}
										ref={node => linksRef.current["useAnimation"] = node}
										to="/hooks/api-dom/useAnimation"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useAnimation
									</Link>
									<Link
										className={pathname === "/hooks/api-useAudio" ? 'active' : ''}
										ref={node => linksRef.current["useAudio"] = node}
										to="/hooks/api-dom/useAudio"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useAudio
									</Link>
									<Link
										className={pathname === "/hooks/api-useBattery" ? 'active' : ''}
										ref={node => linksRef.current["useBattery"] = node}
										to="/hooks/api-dom/useBattery"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBattery
									</Link>
									<Link
										className={pathname === "/hooks/api-useBluetooth" ? 'active' : ''}
										ref={node => linksRef.current["useBluetooth"] = node}
										to="/hooks/api-dom/useBluetooth"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBluetooth
									</Link>
									<Link
										className={pathname === "/hooks/api-useBroadcastChannel" ? 'active' : ''}
										ref={node => linksRef.current["useBroadcastChannel"] = node}
										to="/hooks/api-dom/useBroadcastChannel"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBroadcastChannel
									</Link>
									<Link
										className={pathname === "/hooks/api-useClipboard" ? 'active' : ''}
										ref={node => linksRef.current["useClipboard"] = node}
										to="/hooks/api-dom/useClipboard"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useClipboard
									</Link>
									<Link
										className={pathname === "/hooks/api-useColorScheme" ? 'active' : ''}
										ref={node => linksRef.current["useColorScheme"] = node}
										to="/hooks/api-dom/useColorScheme"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useColorScheme
									</Link>
									<Link
										className={pathname === "/hooks/api-useDebounce" ? 'active' : ''}
										ref={node => linksRef.current["useDebounce"] = node}
										to="/hooks/api-dom/useDebounce"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDebounce
									</Link>
									<Link
										className={pathname === "/hooks/api-useDeviceMotion" ? 'active' : ''}
										ref={node => linksRef.current["useDeviceMotion"] = node}
										to="/hooks/api-dom/useDeviceMotion"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDeviceMotion
									</Link>
									<Link
										className={pathname === "/hooks/api-useDeviceOrientation" ? 'active' : ''}
										ref={node => linksRef.current["useDeviceOrientation"] = node}
										to="/hooks/api-dom/useDeviceOrientation"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDeviceOrientation
									</Link>
									<Link
										className={pathname === "/hooks/api-useDialogBox" ? 'active' : ''}
										ref={node => linksRef.current["useDialogBox"] = node}
										to="/hooks/api-dom/useDialogBox"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDialogBox
									</Link>
									<Link
										className={pathname === "/hooks/api-useDisplayMedia" ? 'active' : ''}
										ref={node => linksRef.current["useDisplayMedia"] = node}
										to="/hooks/api-dom/useDisplayMedia"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDisplayMedia
									</Link>
									<Link
										className={pathname === "/hooks/api-useDocumentPIP" ? 'active' : ''}
										ref={node => linksRef.current["useDocumentPIP"] = node}
										to="/hooks/api-dom/useDocumentPIP"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDocumentPIP
									</Link>
									<Link
										className={pathname === "/hooks/api-useEventSource" ? 'active' : ''}
										ref={node => linksRef.current["useEventSource"] = node}
										to="/hooks/api-dom/useEventSource"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEventSource
									</Link>
									<Link
										className={pathname === "/hooks/api-useEyeDropper" ? 'active' : ''}
										ref={node => linksRef.current["useEyeDropper"] = node}
										to="/hooks/api-dom/useEyeDropper"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEyeDropper
									</Link>
									<Link
										className={pathname === "/hooks/api-useFetch" ? 'active' : ''}
										ref={node => linksRef.current["useFetch"] = node}
										to="/hooks/api-dom/useFetch"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useFetch
									</Link>
									<Link
										className={pathname === "/hooks/api-useFPS" ? 'active' : ''}
										ref={node => linksRef.current["useFPS"] = node}
										to="/hooks/api-dom/useFPS"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useFPS
									</Link>
									<Link
										className={pathname === "/hooks/api-useFullscreen" ? 'active' : ''}
										ref={node => linksRef.current["useFullscreen"] = node}
										to="/hooks/api-dom/useFullscreen"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useFullscreen
									</Link>
									<Link
										className={pathname === "/hooks/api-useGeolocation" ? 'active' : ''}
										ref={node => linksRef.current["useGeolocation"] = node}
										to="/hooks/api-dom/useGeolocation"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useGeolocation
									</Link>
									<Link
										className={pathname === "/hooks/api-useIdleCallback" ? 'active' : ''}
										ref={node => linksRef.current["useIdleCallback"] = node}
										to="/hooks/api-dom/useIdleCallback"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIdleCallback
									</Link>
									<Link
										className={pathname === "/hooks/api-useInterval" ? 'active' : ''}
										ref={node => linksRef.current["useInterval"] = node}
										to="/hooks/api-dom/useInterval"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useInterval
									</Link>
									<Link
										className={pathname === "/hooks/api-useLock" ? 'active' : ''}
										ref={node => linksRef.current["useLock"] = node}
										to="/hooks/api-dom/useLock"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLock
									</Link>
									<Link
										className={pathname === "/hooks/api-useMediaDevices" ? 'active' : ''}
										ref={node => linksRef.current["useMediaDevices"] = node}
										to="/hooks/api-dom/useMediaDevices"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMediaDevices
									</Link>
									<Link
										className={pathname === "/hooks/api-useMediaQuery" ? 'active' : ''}
										ref={node => linksRef.current["useMediaQuery"] = node}
										to="/hooks/api-dom/useMediaQuery"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMediaQuery
									</Link>
									<Link
										className={pathname === "/hooks/api-usePermission" ? 'active' : ''}
										ref={node => linksRef.current["usePermission"] = node}
										to="/hooks/api-dom/usePermission"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePermission
									</Link>
									<Link
										className={pathname === "/hooks/api-usePIP" ? 'active' : ''}
										ref={node => linksRef.current["usePIP"] = node}
										to="/hooks/api-dom/usePIP"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePIP
									</Link>
									<Link
										className={pathname === "/hooks/api-usePopover" ? 'active' : ''}
										ref={node => linksRef.current["usePopover"] = node}
										to="/hooks/api-dom/usePopover"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePopover
									</Link>
									<Link
										className={pathname === "/hooks/api-usePromiseSuspensible" ? 'active' : ''}
										ref={node => linksRef.current["usePromiseSuspensible"] = node}
										to="/hooks/api-dom/usePromiseSuspensible"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePromiseSuspensible
									</Link>
									<Link
										className={pathname === "/hooks/api-usePublishSubscribe" ? 'active' : ''}
										ref={node => linksRef.current["usePublishSubscribe"] = node}
										to="/hooks/api-dom/usePublishSubscribe"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePublishSubscribe
									</Link>
									<Link
										className={pathname === "/hooks/api-useRaf" ? 'active' : ''}
										ref={node => linksRef.current["useRaf"] = node}
										to="/hooks/api-dom/useRaf"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useRaf
									</Link>
									<Link
										className={pathname === "/hooks/api-useReducedMotion" ? 'active' : ''}
										ref={node => linksRef.current["useReducedMotion"] = node}
										to="/hooks/api-dom/useReducedMotion"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducedMotion
									</Link>
									<Link
										className={pathname === "/hooks/api-useRemotePlayback" ? 'active' : ''}
										ref={node => linksRef.current["useRemotePlayback"] = node}
										to="/hooks/api-dom/useRemotePlayback"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useRemotePlayback
									</Link>
									<Link
										className={pathname === "/hooks/api-useScreenWakeLock" ? 'active' : ''}
										ref={node => linksRef.current["useScreenWakeLock"] = node}
										to="/hooks/api-dom/useScreenWakeLock"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScreenWakeLock
									</Link>
									<Link
										className={pathname === "/hooks/api-useScript" ? 'active' : ''}
										ref={node => linksRef.current["useScript"] = node}
										to="/hooks/api-dom/useScript"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScript
									</Link>
									<Link
										className={pathname === "/hooks/api-useShare" ? 'active' : ''}
										ref={node => linksRef.current["useShare"] = node}
										to="/hooks/api-dom/useShare"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useShare
									</Link>
									<Link
										className={pathname === "/hooks/api-useSpeechRecognition" ? 'active' : ''}
										ref={node => linksRef.current["useSpeechRecognition"] = node}
										to="/hooks/api-dom/useSpeechRecognition"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSpeechRecognition
									</Link>
									<Link
										className={pathname === "/hooks/api-useSpeechSynthesis" ? 'active' : ''}
										ref={node => linksRef.current["useSpeechSynthesis"] = node}
										to="/hooks/api-dom/useSpeechSynthesis"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSpeechSynthesis
									</Link>
									<Link
										className={pathname === "/hooks/api-useTextSelection" ? 'active' : ''}
										ref={node => linksRef.current["useTextSelection"] = node}
										to="/hooks/api-dom/useTextSelection"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useTextSelection
									</Link>
									<Link
										className={pathname === "/hooks/api-useThrottle" ? 'active' : ''}
										ref={node => linksRef.current["useThrottle"] = node}
										to="/hooks/api-dom/useThrottle"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useThrottle
									</Link>
									<Link
										className={pathname === "/hooks/api-useTimeout" ? 'active' : ''}
										ref={node => linksRef.current["useTimeout"] = node}
										to="/hooks/api-dom/useTimeout"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useTimeout
									</Link>
									<Link
										className={pathname === "/hooks/api-useTitle" ? 'active' : ''}
										ref={node => linksRef.current["useTitle"] = node}
										to="/hooks/api-dom/useTitle"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useTitle
									</Link>
									<Link
										className={pathname === "/hooks/api-useVibrate" ? 'active' : ''}
										ref={node => linksRef.current["useVibrate"] = node}
										to="/hooks/api-dom/useVibrate"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useVibrate
									</Link>
									<Link
										className={pathname === "/hooks/api-useVideo" ? 'active' : ''}
										ref={node => linksRef.current["useVideo"] = node}
										to="/hooks/api-dom/useVideo"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useVideo
									</Link>
									<Link
										className={pathname === "/hooks/api-useWebSocket" ? 'active' : ''}
										ref={node => linksRef.current["useWebSocket"] = node}
										to="/hooks/api-dom/useWebSocket"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useWebSocket
									</Link>
									<Link
										className={pathname === "/hooks/api-useWebWorker" ? 'active' : ''}
										ref={node => linksRef.current["useWebWorker"] = node}
										to="/hooks/api-dom/useWebWorker"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useWebWorker
									</Link>
									<Link
										className={pathname === "/hooks/api-useWebWorkerFn" ? 'active' : ''}
										ref={node => linksRef.current["useWebWorkerFn"] = node}
										to="/hooks/api-dom/useWebWorkerFn"
										onClick={() => {
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useWebWorkerFn
									</Link>
									</div>
							</details>
						</details>
						<details open className='type'>
							<summary translate="no">Components</summary>
								<div className='sub-type'>
								<Link
									className={pathname === "/components/ErrorBoundary" ? 'active' : ''}
									ref={node => linksRef.current["ErrorBoundary"] = node}
									to="/components/ErrorBoundary"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									ErrorBoundary
								</Link>
								<Link
									className={pathname === "/components/For" ? 'active' : ''}
									ref={node => linksRef.current["For"] = node}
									to="/components/For"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									For
								</Link>
								<Link
									className={pathname === "/components/ForMemoized" ? 'active' : ''}
									ref={node => linksRef.current["ForMemoized"] = node}
									to="/components/ForMemoized"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									ForMemoized
								</Link>
								<Link
									className={pathname === "/components/LazyComponent" ? 'active' : ''}
									ref={node => linksRef.current["LazyComponent"] = node}
									to="/components/LazyComponent"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									LazyComponent
								</Link>
								<Link
									className={pathname === "/components/Show" ? 'active' : ''}
									ref={node => linksRef.current["Show"] = node}
									to="/components/Show"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									Show
								</Link>
								<Link
									className={pathname === "/components/ShowMemoized" ? 'active' : ''}
									ref={node => linksRef.current["ShowMemoized"] = node}
									to="/components/ShowMemoized"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									ShowMemoized
								</Link>
								<Link
									className={pathname === "/components/SwitchCase" ? 'active' : ''}
									ref={node => linksRef.current["SwitchCase"] = node}
									to="/components/SwitchCase"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									SwitchCase
								</Link>
								<Link
									className={pathname === "/components/SwitchCaseMemoized" ? 'active' : ''}
									ref={node => linksRef.current["SwitchCaseMemoized"] = node}
									to="/components/SwitchCaseMemoized"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									SwitchCaseMemoized
								</Link>
								</div>
						</details>
						<details open className='type'>
							<summary translate="no">Utils</summary>
								<div className='sub-type'>
								<Link
									className={pathname === "/utils/alphanumericCompare" ? 'active' : ''}
									ref={node => linksRef.current["alphanumericCompare"] = node}
									to="/utils/alphanumericCompare"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									alphanumericCompare
								</Link>
								<Link
									className={pathname === "/utils/changeStringCase" ? 'active' : ''}
									ref={node => linksRef.current["changeStringCase"] = node}
									to="/utils/changeStringCase"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									changeStringCase
								</Link>
								<Link
									className={pathname === "/utils/clickElementOnKeydownEvent" ? 'active' : ''}
									ref={node => linksRef.current["clickElementOnKeydownEvent"] = node}
									to="/utils/clickElementOnKeydownEvent"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									clickElementOnKeydownEvent
								</Link>
								<Link
									className={pathname === "/utils/defaultSerializer" ? 'active' : ''}
									ref={node => linksRef.current["defaultSerializer"] = node}
									to="/utils/defaultSerializer"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									defaultSerializer
								</Link>
								<Link
									className={pathname === "/utils/detectBrowser" ? 'active' : ''}
									ref={node => linksRef.current["detectBrowser"] = node}
									to="/utils/detectBrowser"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									detectBrowser
								</Link>
								<Link
									className={pathname === "/utils/getBase64" ? 'active' : ''}
									ref={node => linksRef.current["getBase64"] = node}
									to="/utils/getBase64"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									getBase64
								</Link>
								<Link
									className={pathname === "/utils/getKeyObjectFromValue" ? 'active' : ''}
									ref={node => linksRef.current["getKeyObjectFromValue"] = node}
									to="/utils/getKeyObjectFromValue"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									getKeyObjectFromValue
								</Link>
								<Link
									className={pathname === "/utils/getObjectFromDottedString" ? 'active' : ''}
									ref={node => linksRef.current["getObjectFromDottedString"] = node}
									to="/utils/getObjectFromDottedString"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									getObjectFromDottedString
								</Link>
								<Link
									className={pathname === "/utils/hotKeyHandler" ? 'active' : ''}
									ref={node => linksRef.current["hotKeyHandler"] = node}
									to="/utils/hotKeyHandler"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									hotKeyHandler
								</Link>
								<Link
									className={pathname === "/utils/isAsync" ? 'active' : ''}
									ref={node => linksRef.current["isAsync"] = node}
									to="/utils/isAsync"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isAsync
								</Link>
								<Link
									className={pathname === "/utils/isClient" ? 'active' : ''}
									ref={node => linksRef.current["isClient"] = node}
									to="/utils/isClient"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isClient
								</Link>
								<Link
									className={pathname === "/utils/isDeepEqual" ? 'active' : ''}
									ref={node => linksRef.current["isDeepEqual"] = node}
									to="/utils/isDeepEqual"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isDeepEqual
								</Link>
								<Link
									className={pathname === "/utils/isMouseEvent" ? 'active' : ''}
									ref={node => linksRef.current["isMouseEvent"] = node}
									to="/utils/isMouseEvent"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isMouseEvent
								</Link>
								<Link
									className={pathname === "/utils/isShallowEqual" ? 'active' : ''}
									ref={node => linksRef.current["isShallowEqual"] = node}
									to="/utils/isShallowEqual"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isShallowEqual
								</Link>
								<Link
									className={pathname === "/utils/isTouchEvent" ? 'active' : ''}
									ref={node => linksRef.current["isTouchEvent"] = node}
									to="/utils/isTouchEvent"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isTouchEvent
								</Link>
								<Link
									className={pathname === "/utils/lazy" ? 'active' : ''}
									ref={node => linksRef.current["lazy"] = node}
									to="/utils/lazy"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									lazy
								</Link>
								<Link
									className={pathname === "/utils/mergeObjects" ? 'active' : ''}
									ref={node => linksRef.current["mergeObjects"] = node}
									to="/utils/mergeObjects"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									mergeObjects
								</Link>
								<Link
									className={pathname === "/utils/removePropertiesFromArrayObjects" ? 'active' : ''}
									ref={node => linksRef.current["removePropertiesFromArrayObjects"] = node}
									to="/utils/removePropertiesFromArrayObjects"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									removePropertiesFromArrayObjects
								</Link>
								<Link
									className={pathname === "/utils/uniqueElementsArray" ? 'active' : ''}
									ref={node => linksRef.current["uniqueElementsArray"] = node}
									to="/utils/uniqueElementsArray"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									uniqueElementsArray
								</Link>
								</div>
						</details>
						<details open className='type'>
							<summary translate="no">Types</summary>
								<div className='sub-type'>
								<Link
									className={pathname === "/types/utilityTypes" ? 'active' : ''}
									ref={node => linksRef.current["utilityTypes"] = node}
									to="/types/utilityTypes"
									onClick={() => {
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									utilityTypes
								</Link>
								</div>
						</details>
					</nav>
				</>
			}
			<div className="container" ref={containerRef}>
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
