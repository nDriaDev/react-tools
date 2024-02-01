import { Link, useLocation, useOutlet } from 'react-router-dom';
import Logo from '../assets/github.svg';
import React from '../assets/react-red.webp';
import { useCallback, useRef } from 'react';
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
					<button onClick={openNav} className="open-nav">☰</button>
					<nav ref={navRef}  className="nav">
						<button onClick={closeNav} className="btn-close">X</button>
						<div className="title-container">
							<Link to="/" className="title">
								<img src={React} alt="react" className="img" />
								<p className="text">React Tools</p>
							</Link>
							<Link to="https://github.com/nDriaDev/react-tools">
								<img src={Logo} className="img" alt="github" />
							</Link>
						</div>
						<p className='type'>Hooks</p>
						<p className="sub-type">State</p>
						<Link
							className={pathname === "/hooks/state/createPubSubStore" ? 'active' : ''}
							to="/hooks/state/createPubSubStore"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							createPubSubStore
						</Link>
						<Link
							className={pathname === "/hooks/state/useArray" ? 'active' : ''}
							to="/hooks/state/useArray"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useArray
						</Link>
						<Link
							className={pathname === "/hooks/state/useDerivedState" ? 'active' : ''}
							to="/hooks/state/useDerivedState"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDerivedState
						</Link>
						<Link
							className={pathname === "/hooks/state/useLocalStorageState" ? 'active' : ''}
							to="/hooks/state/useLocalStorageState"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLocalStorageState
						</Link>
						<Link
							className={pathname === "/hooks/state/useMap" ? 'active' : ''}
							to="/hooks/state/useMap"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMap
						</Link>
						<Link
							className={pathname === "/hooks/state/usePrevious" ? 'active' : ''}
							to="/hooks/state/usePrevious"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePrevious
						</Link>
						<Link
							className={pathname === "/hooks/state/useProxyState" ? 'active' : ''}
							to="/hooks/state/useProxyState"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useProxyState
						</Link>
						<Link
							className={pathname === "/hooks/state/useReducerGetReset" ? 'active' : ''}
							to="/hooks/state/useReducerGetReset"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useReducerGetReset
						</Link>
						<Link
							className={pathname === "/hooks/state/useReducerHistory" ? 'active' : ''}
							to="/hooks/state/useReducerHistory"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useReducerHistory
						</Link>
						<Link
							className={pathname === "/hooks/state/useReducerHistoryGetter" ? 'active' : ''}
							to="/hooks/state/useReducerHistoryGetter"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useReducerHistoryGetter
						</Link>
						<Link
							className={pathname === "/hooks/state/useSessionStorageState" ? 'active' : ''}
							to="/hooks/state/useSessionStorageState"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useSessionStorageState
						</Link>
						<Link
							className={pathname === "/hooks/state/useSet" ? 'active' : ''}
							to="/hooks/state/useSet"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useSet
						</Link>
						<Link
							className={pathname === "/hooks/state/useStateGetReset" ? 'active' : ''}
							to="/hooks/state/useStateGetReset"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useStateGetReset
						</Link>
						<Link
							className={pathname === "/hooks/state/useStateHistory" ? 'active' : ''}
							to="/hooks/state/useStateHistory"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useStateHistory
						</Link>
						<Link
							className={pathname === "/hooks/state/useStateHistoryGetter" ? 'active' : ''}
							to="/hooks/state/useStateHistoryGetter"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useStateHistoryGetter
						</Link>
						<Link
							className={pathname === "/hooks/state/useStateValidator" ? 'active' : ''}
							to="/hooks/state/useStateValidator"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useStateValidator
						</Link>
						<Link
							className={pathname === "/hooks/state/useSyncExternalStore" ? 'active' : ''}
							to="/hooks/state/useSyncExternalStore"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useSyncExternalStore
						</Link>
						<p className="sub-type">Lifecycle</p>
						<Link
							className={pathname === "/hooks/lifecycle/useDeferredValue" ? 'active' : ''}
							to="/hooks/lifecycle/useDeferredValue"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDeferredValue
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useEffectCompare" ? 'active' : ''}
							to="/hooks/lifecycle/useEffectCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEffectCompare
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useEffectDeepCompare" ? 'active' : ''}
							to="/hooks/lifecycle/useEffectDeepCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEffectDeepCompare
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useEffectOnce" ? 'active' : ''}
							to="/hooks/lifecycle/useEffectOnce"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEffectOnce
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useIsMounted" ? 'active' : ''}
							to="/hooks/lifecycle/useIsMounted"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useIsMounted
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useLayoutEffectCompare" ? 'active' : ''}
							to="/hooks/lifecycle/useLayoutEffectCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLayoutEffectCompare
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useLayoutEffectDeepCompare" ? 'active' : ''}
							to="/hooks/lifecycle/useLayoutEffectDeepCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLayoutEffectDeepCompare
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useLayoutEffectOnce" ? 'active' : ''}
							to="/hooks/lifecycle/useLayoutEffectOnce"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLayoutEffectOnce
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useLogger" ? 'active' : ''}
							to="/hooks/lifecycle/useLogger"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLogger
						</Link>
						<Link
							className={pathname === "/hooks/lifecycle/useRerender" ? 'active' : ''}
							to="/hooks/lifecycle/useRerender"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useRerender
						</Link>
						<p className="sub-type">Performance</p>
						<Link
							className={pathname === "/hooks/performance/useCallbackCompare" ? 'active' : ''}
							to="/hooks/performance/useCallbackCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useCallbackCompare
						</Link>
						<Link
							className={pathname === "/hooks/performance/useCallbackDeepCompare" ? 'active' : ''}
							to="/hooks/performance/useCallbackDeepCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useCallbackDeepCompare
						</Link>
						<Link
							className={pathname === "/hooks/performance/useId" ? 'active' : ''}
							to="/hooks/performance/useId"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useId
						</Link>
						<Link
							className={pathname === "/hooks/performance/useLazyRef" ? 'active' : ''}
							to="/hooks/performance/useLazyRef"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLazyRef
						</Link>
						<Link
							className={pathname === "/hooks/performance/useMemoCompare" ? 'active' : ''}
							to="/hooks/performance/useMemoCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMemoCompare
						</Link>
						<Link
							className={pathname === "/hooks/performance/useMemoDeepCompare" ? 'active' : ''}
							to="/hooks/performance/useMemoDeepCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMemoDeepCompare
						</Link>
						<Link
							className={pathname === "/hooks/performance/useMemoizedFunction" ? 'active' : ''}
							to="/hooks/performance/useMemoizedFunction"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMemoizedFunction
						</Link>
						<Link
							className={pathname === "/hooks/performance/useMergedRef" ? 'active' : ''}
							to="/hooks/performance/useMergedRef"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMergedRef
						</Link>
						<p className="sub-type">Events</p>
						<Link
							className={pathname === "/hooks/events/useBeforeUnload" ? 'active' : ''}
							to="/hooks/events/useBeforeUnload"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useBeforeUnload
						</Link>
						<Link
							className={pathname === "/hooks/events/useClickOutside" ? 'active' : ''}
							to="/hooks/events/useClickOutside"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useClickOutside
						</Link>
						<Link
							className={pathname === "/hooks/events/useContextMenu" ? 'active' : ''}
							to="/hooks/events/useContextMenu"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useContextMenu
						</Link>
						<Link
							className={pathname === "/hooks/events/useDocumentVisibility" ? 'active' : ''}
							to="/hooks/events/useDocumentVisibility"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDocumentVisibility
						</Link>
						<Link
							className={pathname === "/hooks/events/useDoubleClick" ? 'active' : ''}
							to="/hooks/events/useDoubleClick"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDoubleClick
						</Link>
						<Link
							className={pathname === "/hooks/events/useEventDispatcher" ? 'active' : ''}
							to="/hooks/events/useEventDispatcher"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEventDispatcher
						</Link>
						<Link
							className={pathname === "/hooks/events/useEventListener" ? 'active' : ''}
							to="/hooks/events/useEventListener"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEventListener
						</Link>
						<Link
							className={pathname === "/hooks/events/useEvents" ? 'active' : ''}
							to="/hooks/events/useEvents"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEvents
						</Link>
						<Link
							className={pathname === "/hooks/events/useHotKeys" ? 'active' : ''}
							to="/hooks/events/useHotKeys"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useHotKeys
						</Link>
						<Link
							className={pathname === "/hooks/events/useHover" ? 'active' : ''}
							to="/hooks/events/useHover"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useHover
						</Link>
						<Link
							className={pathname === "/hooks/events/useInfiniteScroll" ? 'active' : ''}
							to="/hooks/events/useInfiniteScroll"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useInfiniteScroll
						</Link>
						<Link
							className={pathname === "/hooks/events/useIntersectionObserver" ? 'active' : ''}
							to="/hooks/events/useIntersectionObserver"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useIntersectionObserver
						</Link>
						<Link
							className={pathname === "/hooks/events/useIsOnline" ? 'active' : ''}
							to="/hooks/events/useIsOnline"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useIsOnline
						</Link>
						<Link
							className={pathname === "/hooks/events/useLongPress" ? 'active' : ''}
							to="/hooks/events/useLongPress"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLongPress
						</Link>
						<Link
							className={pathname === "/hooks/events/useMeasure" ? 'active' : ''}
							to="/hooks/events/useMeasure"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMeasure
						</Link>
						<Link
							className={pathname === "/hooks/events/useMouse" ? 'active' : ''}
							to="/hooks/events/useMouse"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMouse
						</Link>
						<Link
							className={pathname === "/hooks/events/useMutationObserver" ? 'active' : ''}
							to="/hooks/events/useMutationObserver"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMutationObserver
						</Link>
						<Link
							className={pathname === "/hooks/events/useNetwork" ? 'active' : ''}
							to="/hooks/events/useNetwork"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useNetwork
						</Link>
						<Link
							className={pathname === "/hooks/events/usePerformAction" ? 'active' : ''}
							to="/hooks/events/usePerformAction"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePerformAction
						</Link>
						<Link
							className={pathname === "/hooks/events/usePinchZoom" ? 'active' : ''}
							to="/hooks/events/usePinchZoom"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePinchZoom
						</Link>
						<Link
							className={pathname === "/hooks/events/usePointerLock" ? 'active' : ''}
							to="/hooks/events/usePointerLock"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePointerLock
						</Link>
						<Link
							className={pathname === "/hooks/events/useResizeObserver" ? 'active' : ''}
							to="/hooks/events/useResizeObserver"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useResizeObserver
						</Link>
						<Link
							className={pathname === "/hooks/events/useResponsive" ? 'active' : ''}
							to="/hooks/events/useResponsive"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useResponsive
						</Link>
						<Link
							className={pathname === "/hooks/events/useScreen" ? 'active' : ''}
							to="/hooks/events/useScreen"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useScreen
						</Link>
						<Link
							className={pathname === "/hooks/events/useScrollIntoView" ? 'active' : ''}
							to="/hooks/events/useScrollIntoView"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useScrollIntoView
						</Link>
						<Link
							className={pathname === "/hooks/events/useSwipe" ? 'active' : ''}
							to="/hooks/events/useSwipe"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useSwipe
						</Link>
						<Link
							className={pathname === "/hooks/events/useVisible" ? 'active' : ''}
							to="/hooks/events/useVisible"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useVisible
						</Link>
						<p className="sub-type">API DOM</p>
						<Link
							className={pathname === "/hooks/api-useActiveElement" ? 'active' : ''}
							to="/hooks/api-dom/useActiveElement"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useActiveElement
						</Link>
						<Link
							className={pathname === "/hooks/api-useAnimation" ? 'active' : ''}
							to="/hooks/api-dom/useAnimation"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useAnimation
						</Link>
						<Link
							className={pathname === "/hooks/api-useAudio" ? 'active' : ''}
							to="/hooks/api-dom/useAudio"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useAudio
						</Link>
						<Link
							className={pathname === "/hooks/api-useBattery" ? 'active' : ''}
							to="/hooks/api-dom/useBattery"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useBattery
						</Link>
						<Link
							className={pathname === "/hooks/api-useBluetooth" ? 'active' : ''}
							to="/hooks/api-dom/useBluetooth"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useBluetooth
						</Link>
						<Link
							className={pathname === "/hooks/api-useBroadcastChannel" ? 'active' : ''}
							to="/hooks/api-dom/useBroadcastChannel"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useBroadcastChannel
						</Link>
						<Link
							className={pathname === "/hooks/api-useClipboard" ? 'active' : ''}
							to="/hooks/api-dom/useClipboard"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useClipboard
						</Link>
						<Link
							className={pathname === "/hooks/api-useColorScheme" ? 'active' : ''}
							to="/hooks/api-dom/useColorScheme"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useColorScheme
						</Link>
						<Link
							className={pathname === "/hooks/api-useDebounce" ? 'active' : ''}
							to="/hooks/api-dom/useDebounce"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDebounce
						</Link>
						<Link
							className={pathname === "/hooks/api-useDeviceMotion" ? 'active' : ''}
							to="/hooks/api-dom/useDeviceMotion"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDeviceMotion
						</Link>
						<Link
							className={pathname === "/hooks/api-useDeviceOrientation" ? 'active' : ''}
							to="/hooks/api-dom/useDeviceOrientation"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDeviceOrientation
						</Link>
						<Link
							className={pathname === "/hooks/api-useDialogBox" ? 'active' : ''}
							to="/hooks/api-dom/useDialogBox"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDialogBox
						</Link>
						<Link
							className={pathname === "/hooks/api-useDisplayMedia" ? 'active' : ''}
							to="/hooks/api-dom/useDisplayMedia"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDisplayMedia
						</Link>
						<Link
							className={pathname === "/hooks/api-useDocumentPIP" ? 'active' : ''}
							to="/hooks/api-dom/useDocumentPIP"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useDocumentPIP
						</Link>
						<Link
							className={pathname === "/hooks/api-useEventSource" ? 'active' : ''}
							to="/hooks/api-dom/useEventSource"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEventSource
						</Link>
						<Link
							className={pathname === "/hooks/api-useEyeDropper" ? 'active' : ''}
							to="/hooks/api-dom/useEyeDropper"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useEyeDropper
						</Link>
						<Link
							className={pathname === "/hooks/api-useFetch" ? 'active' : ''}
							to="/hooks/api-dom/useFetch"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useFetch
						</Link>
						<Link
							className={pathname === "/hooks/api-useFPS" ? 'active' : ''}
							to="/hooks/api-dom/useFPS"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useFPS
						</Link>
						<Link
							className={pathname === "/hooks/api-useFullscreen" ? 'active' : ''}
							to="/hooks/api-dom/useFullscreen"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useFullscreen
						</Link>
						<Link
							className={pathname === "/hooks/api-useGeolocation" ? 'active' : ''}
							to="/hooks/api-dom/useGeolocation"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useGeolocation
						</Link>
						<Link
							className={pathname === "/hooks/api-useIdleCallback" ? 'active' : ''}
							to="/hooks/api-dom/useIdleCallback"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useIdleCallback
						</Link>
						<Link
							className={pathname === "/hooks/api-useInterval" ? 'active' : ''}
							to="/hooks/api-dom/useInterval"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useInterval
						</Link>
						<Link
							className={pathname === "/hooks/api-useLock" ? 'active' : ''}
							to="/hooks/api-dom/useLock"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useLock
						</Link>
						<Link
							className={pathname === "/hooks/api-useMediaDevices" ? 'active' : ''}
							to="/hooks/api-dom/useMediaDevices"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMediaDevices
						</Link>
						<Link
							className={pathname === "/hooks/api-useMediaQuery" ? 'active' : ''}
							to="/hooks/api-dom/useMediaQuery"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useMediaQuery
						</Link>
						<Link
							className={pathname === "/hooks/api-usePermission" ? 'active' : ''}
							to="/hooks/api-dom/usePermission"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePermission
						</Link>
						<Link
							className={pathname === "/hooks/api-usePIP" ? 'active' : ''}
							to="/hooks/api-dom/usePIP"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePIP
						</Link>
						<Link
							className={pathname === "/hooks/api-usePopover" ? 'active' : ''}
							to="/hooks/api-dom/usePopover"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePopover
						</Link>
						<Link
							className={pathname === "/hooks/api-usePromiseSuspensible" ? 'active' : ''}
							to="/hooks/api-dom/usePromiseSuspensible"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePromiseSuspensible
						</Link>
						<Link
							className={pathname === "/hooks/api-usePublishSubscribe" ? 'active' : ''}
							to="/hooks/api-dom/usePublishSubscribe"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							usePublishSubscribe
						</Link>
						<Link
							className={pathname === "/hooks/api-useRaf" ? 'active' : ''}
							to="/hooks/api-dom/useRaf"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useRaf
						</Link>
						<Link
							className={pathname === "/hooks/api-useReducedMotion" ? 'active' : ''}
							to="/hooks/api-dom/useReducedMotion"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useReducedMotion
						</Link>
						<Link
							className={pathname === "/hooks/api-useRemotePlayback" ? 'active' : ''}
							to="/hooks/api-dom/useRemotePlayback"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useRemotePlayback
						</Link>
						<Link
							className={pathname === "/hooks/api-useScreenWakeLock" ? 'active' : ''}
							to="/hooks/api-dom/useScreenWakeLock"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useScreenWakeLock
						</Link>
						<Link
							className={pathname === "/hooks/api-useScript" ? 'active' : ''}
							to="/hooks/api-dom/useScript"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useScript
						</Link>
						<Link
							className={pathname === "/hooks/api-useShare" ? 'active' : ''}
							to="/hooks/api-dom/useShare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useShare
						</Link>
						<Link
							className={pathname === "/hooks/api-useSpeechRecognition" ? 'active' : ''}
							to="/hooks/api-dom/useSpeechRecognition"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useSpeechRecognition
						</Link>
						<Link
							className={pathname === "/hooks/api-useSpeechSynthesis" ? 'active' : ''}
							to="/hooks/api-dom/useSpeechSynthesis"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useSpeechSynthesis
						</Link>
						<Link
							className={pathname === "/hooks/api-useTextSelection" ? 'active' : ''}
							to="/hooks/api-dom/useTextSelection"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useTextSelection
						</Link>
						<Link
							className={pathname === "/hooks/api-useThrottle" ? 'active' : ''}
							to="/hooks/api-dom/useThrottle"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useThrottle
						</Link>
						<Link
							className={pathname === "/hooks/api-useTimeout" ? 'active' : ''}
							to="/hooks/api-dom/useTimeout"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useTimeout
						</Link>
						<Link
							className={pathname === "/hooks/api-useTitle" ? 'active' : ''}
							to="/hooks/api-dom/useTitle"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useTitle
						</Link>
						<Link
							className={pathname === "/hooks/api-useVibrate" ? 'active' : ''}
							to="/hooks/api-dom/useVibrate"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useVibrate
						</Link>
						<Link
							className={pathname === "/hooks/api-useVideo" ? 'active' : ''}
							to="/hooks/api-dom/useVideo"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useVideo
						</Link>
						<Link
							className={pathname === "/hooks/api-useWebSocket" ? 'active' : ''}
							to="/hooks/api-dom/useWebSocket"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useWebSocket
						</Link>
						<Link
							className={pathname === "/hooks/api-useWebWorker" ? 'active' : ''}
							to="/hooks/api-dom/useWebWorker"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useWebWorker
						</Link>
						<Link
							className={pathname === "/hooks/api-useWebWorkerFn" ? 'active' : ''}
							to="/hooks/api-dom/useWebWorkerFn"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							useWebWorkerFn
						</Link>
						<p className="sub-type">Components</p>
						<Link
							className={pathname === "/components/Lazy" ? 'active' : ''}
							to="/components/Lazy"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							Lazy
						</Link>
						<Link
							className={pathname === "/components/Show" ? 'active' : ''}
							to="/components/Show"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							Show
						</Link>
						<p className="sub-type">Utils</p>
						<Link
							className={pathname === "/utils/alphanumericCompare" ? 'active' : ''}
							to="/utils/alphanumericCompare"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							alphanumericCompare
						</Link>
						<Link
							className={pathname === "/utils/changeStringCase" ? 'active' : ''}
							to="/utils/changeStringCase"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							changeStringCase
						</Link>
						<Link
							className={pathname === "/utils/defaultSerializer" ? 'active' : ''}
							to="/utils/defaultSerializer"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							defaultSerializer
						</Link>
						<Link
							className={pathname === "/utils/detectBrowser" ? 'active' : ''}
							to="/utils/detectBrowser"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							detectBrowser
						</Link>
						<Link
							className={pathname === "/utils/getBase64" ? 'active' : ''}
							to="/utils/getBase64"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							getBase64
						</Link>
						<Link
							className={pathname === "/utils/getKeyObjectFromValue" ? 'active' : ''}
							to="/utils/getKeyObjectFromValue"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							getKeyObjectFromValue
						</Link>
						<Link
							className={pathname === "/utils/getObjectFromDottedString" ? 'active' : ''}
							to="/utils/getObjectFromDottedString"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							getObjectFromDottedString
						</Link>
						<Link
							className={pathname === "/utils/hotKeyHandler" ? 'active' : ''}
							to="/utils/hotKeyHandler"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							hotKeyHandler
						</Link>
						<Link
							className={pathname === "/utils/isAsync" ? 'active' : ''}
							to="/utils/isAsync"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							isAsync
						</Link>
						<Link
							className={pathname === "/utils/isClient" ? 'active' : ''}
							to="/utils/isClient"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							isClient
						</Link>
						<Link
							className={pathname === "/utils/isDeepEqual" ? 'active' : ''}
							to="/utils/isDeepEqual"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							isDeepEqual
						</Link>
						<Link
							className={pathname === "/utils/isMouseEvent" ? 'active' : ''}
							to="/utils/isMouseEvent"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							isMouseEvent
						</Link>
						<Link
							className={pathname === "/utils/isShallowEqual" ? 'active' : ''}
							to="/utils/isShallowEqual"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							isShallowEqual
						</Link>
						<Link
							className={pathname === "/utils/isTouchEvent" ? 'active' : ''}
							to="/utils/isTouchEvent"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							isTouchEvent
						</Link>
						<Link
							className={pathname === "/utils/lazy" ? 'active' : ''}
							to="/utils/lazy"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							lazy
						</Link>
						<Link
							className={pathname === "/utils/mergeObjects" ? 'active' : ''}
							to="/utils/mergeObjects"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							mergeObjects
						</Link>
						<Link
							className={pathname === "/utils/removeDuplicatedFromArrayObjects" ? 'active' : ''}
							to="/utils/removeDuplicatedFromArrayObjects"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							removeDuplicatedFromArrayObjects
						</Link>
						<Link
							className={pathname === "/utils/removePropertiesFromArrayObjects" ? 'active' : ''}
							to="/utils/removePropertiesFromArrayObjects"
							onClick={() => {
								containerRef.current?.scrollTo(0, 0);
								window.innerWidth < 1190 && closeNav();
							}}
						>
							removePropertiesFromArrayObjects
						</Link>
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
