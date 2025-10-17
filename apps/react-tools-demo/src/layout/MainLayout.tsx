import { Link, useLocation, useOutlet } from 'react-router-dom';
import Logo from '../assets/github.svg';
import React from '../assets/react-red.webp';
import { useEffect, useCallback, useRef, BaseSyntheticEvent } from 'react';
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
			const hashNode = node?.getAttribute("href") ?? "";
			if (node && hashNode === window.location.hash) {
				node?.classList.add("active");
				node?.offsetTop > window.innerHeight && node?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
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
						<div className="title-search-container">
							<div className="title-container">
								<Link to="/" className="title">
									<img src={React} alt="react" className="img" />
									<p className="text" translate="no">React Tools</p>
								</Link>
								<Link to="https://github.com/nDriaDev/react-tools">
									<img src={Logo} className="img" alt="github" />
								</Link>
							</div>
							<div className="search-container">
								<input list="routes" id="input-routes" name="input-routes" className="search" placeholder="🔎 Search..." onChange={(e: BaseSyntheticEvent) => { linksRef.current[e.target.value]?.click(); linksRef.current[e.target.value]?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }); }} />
								<datalist id="routes">
									<option value="createPubSubStore"></option>
									<option value="useArray"></option>
									<option value="useDerivedState"></option>
									<option value="useLocalStorageState"></option>
									<option value="useMap"></option>
									<option value="usePrevious"></option>
									<option value="useProxyState"></option>
									<option value="useReducerGetReset"></option>
									<option value="useReducerHistory"></option>
									<option value="useReducerHistoryGetter"></option>
									<option value="useSessionStorageState"></option>
									<option value="useSet"></option>
									<option value="useStateGetReset"></option>
									<option value="useStateHistory"></option>
									<option value="useStateHistoryGetter"></option>
									<option value="useStateValidator"></option>
									<option value="useSyncExternalStore"></option>
									<option value="useDeferredValue"></option>
									<option value="useEffectAbortable"></option>
									<option value="useEffectCompare"></option>
									<option value="useEffectDeepCompare"></option>
									<option value="useEffectOnce"></option>
									<option value="useIsMounted"></option>
									<option value="useLayoutEffectAbortable"></option>
									<option value="useLayoutEffectCompare"></option>
									<option value="useLayoutEffectDeepCompare"></option>
									<option value="useLayoutEffectOnce"></option>
									<option value="useLogger"></option>
									<option value="useRerender"></option>
									<option value="useCallbackCompare"></option>
									<option value="useCallbackDeepCompare"></option>
									<option value="useId"></option>
									<option value="useLazyRef"></option>
									<option value="useMemoCompare"></option>
									<option value="useMemoDeepCompare"></option>
									<option value="useMemoizedFn"></option>
									<option value="useMergedRef"></option>
									<option value="useBeforeUnload"></option>
									<option value="useClickOutside"></option>
									<option value="useContextMenu"></option>
									<option value="useDocumentVisibility"></option>
									<option value="useDoubleClick"></option>
									<option value="useEventDispatcher"></option>
									<option value="useEventListener"></option>
									<option value="useEvents"></option>
									<option value="useHotKeys"></option>
									<option value="useHover"></option>
									<option value="useInfiniteScroll"></option>
									<option value="useIntersectionObserver"></option>
									<option value="useIsOnline"></option>
									<option value="useLongPress"></option>
									<option value="useMeasure"></option>
									<option value="useMouse"></option>
									<option value="useMutationObserver"></option>
									<option value="useNetwork"></option>
									<option value="usePerformAction"></option>
									<option value="usePinchZoom"></option>
									<option value="usePointerLock"></option>
									<option value="useResizeObserver"></option>
									<option value="useResponsive"></option>
									<option value="useScreen"></option>
									<option value="useScrollIntoView"></option>
									<option value="useSwipe"></option>
									<option value="useVisible"></option>
									<option value="useActiveElement"></option>
									<option value="useAnimation"></option>
									<option value="useAudio"></option>
									<option value="useBattery"></option>
									<option value="useBluetooth"></option>
									<option value="useBroadcastChannel"></option>
									<option value="useClipboard"></option>
									<option value="useColorScheme"></option>
									<option value="useDebounce"></option>
									<option value="useDeviceMotion"></option>
									<option value="useDeviceOrientation"></option>
									<option value="useDialogBox"></option>
									<option value="useDisplayMedia"></option>
									<option value="useDocumentPIP"></option>
									<option value="useEventSource"></option>
									<option value="useEyeDropper"></option>
									<option value="useFetch"></option>
									<option value="useFPS"></option>
									<option value="useFullscreen"></option>
									<option value="useGeolocation"></option>
									<option value="useIdleCallback"></option>
									<option value="useInterval"></option>
									<option value="useLock"></option>
									<option value="useMediaDevices"></option>
									<option value="useMediaQuery"></option>
									<option value="usePermission"></option>
									<option value="usePIP"></option>
									<option value="usePopover"></option>
									<option value="usePromiseSuspensible"></option>
									<option value="usePublishSubscribe"></option>
									<option value="useRaf"></option>
									<option value="useReducedMotion"></option>
									<option value="useRemotePlayback"></option>
									<option value="useScreenWakeLock"></option>
									<option value="useScript"></option>
									<option value="useShare"></option>
									<option value="useSpeechRecognition"></option>
									<option value="useSpeechSynthesis"></option>
									<option value="useTextSelection"></option>
									<option value="useThrottle"></option>
									<option value="useTimeout"></option>
									<option value="useTitle"></option>
									<option value="useVibrate"></option>
									<option value="useVideo"></option>
									<option value="useWebSocket"></option>
									<option value="useWebWorker"></option>
									<option value="useWebWorkerFn"></option>
									<option value="ErrorBoundary"></option>
									<option value="For"></option>
									<option value="ForMemoized"></option>
									<option value="LazyComponent"></option>
									<option value="Show"></option>
									<option value="ShowMemoized"></option>
									<option value="SwitchCase"></option>
									<option value="SwitchCaseMemoized"></option>
									<option value="alphanumericCompare"></option>
									<option value="changeStringCase"></option>
									<option value="clickElementOnKeydownEvent"></option>
									<option value="defaultSerializer"></option>
									<option value="detectBrowser"></option>
									<option value="getBase64"></option>
									<option value="getKeyObjectFromValue"></option>
									<option value="getObjectFromDottedString"></option>
									<option value="hotKeyHandler"></option>
									<option value="isAsync"></option>
									<option value="isClient"></option>
									<option value="isDeepEqual"></option>
									<option value="isMouseEvent"></option>
									<option value="isShallowEqual"></option>
									<option value="isTouchEvent"></option>
									<option value="lazy"></option>
									<option value="mergeObjects"></option>
									<option value="removePropertiesFromArrayObjects"></option>
									<option value="uniqueElementsArray"></option>
								</datalist>
							</div>
						</div>
						<details open className='type'>
							<summary translate='no'>Hooks</summary>
							<details open className='sub-type'>
								<summary translate='no'>State</summary>
									<div className='container-details'>
									<Link
										ref={node => linksRef.current["createPubSubStore"] = node}
										to="/hooks/state/createPubSubStore"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["createPubSubStore"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										createPubSubStore
									</Link>
									<Link
										ref={node => linksRef.current["useArray"] = node}
										to="/hooks/state/useArray"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useArray"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useArray
									</Link>
									<Link
										ref={node => linksRef.current["useDerivedState"] = node}
										to="/hooks/state/useDerivedState"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDerivedState"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDerivedState
									</Link>
									<Link
										ref={node => linksRef.current["useLocalStorageState"] = node}
										to="/hooks/state/useLocalStorageState"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLocalStorageState"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLocalStorageState
									</Link>
									<Link
										ref={node => linksRef.current["useMap"] = node}
										to="/hooks/state/useMap"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMap"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMap
									</Link>
									<Link
										ref={node => linksRef.current["usePrevious"] = node}
										to="/hooks/state/usePrevious"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePrevious"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePrevious
									</Link>
									<Link
										ref={node => linksRef.current["useProxyState"] = node}
										to="/hooks/state/useProxyState"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useProxyState"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useProxyState
									</Link>
									<Link
										ref={node => linksRef.current["useReducerGetReset"] = node}
										to="/hooks/state/useReducerGetReset"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useReducerGetReset"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducerGetReset
									</Link>
									<Link
										ref={node => linksRef.current["useReducerHistory"] = node}
										to="/hooks/state/useReducerHistory"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useReducerHistory"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducerHistory
									</Link>
									<Link
										ref={node => linksRef.current["useReducerHistoryGetter"] = node}
										to="/hooks/state/useReducerHistoryGetter"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useReducerHistoryGetter"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducerHistoryGetter
									</Link>
									<Link
										ref={node => linksRef.current["useSessionStorageState"] = node}
										to="/hooks/state/useSessionStorageState"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useSessionStorageState"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSessionStorageState
									</Link>
									<Link
										ref={node => linksRef.current["useSet"] = node}
										to="/hooks/state/useSet"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useSet"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSet
									</Link>
									<Link
										ref={node => linksRef.current["useStateGetReset"] = node}
										to="/hooks/state/useStateGetReset"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useStateGetReset"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateGetReset
									</Link>
									<Link
										ref={node => linksRef.current["useStateHistory"] = node}
										to="/hooks/state/useStateHistory"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useStateHistory"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateHistory
									</Link>
									<Link
										ref={node => linksRef.current["useStateHistoryGetter"] = node}
										to="/hooks/state/useStateHistoryGetter"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useStateHistoryGetter"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateHistoryGetter
									</Link>
									<Link
										ref={node => linksRef.current["useStateValidator"] = node}
										to="/hooks/state/useStateValidator"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useStateValidator"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useStateValidator
									</Link>
									<Link
										ref={node => linksRef.current["useSyncExternalStore"] = node}
										to="/hooks/state/useSyncExternalStore"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useSyncExternalStore"]?.classList.add("active");
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
										ref={node => linksRef.current["useDeferredValue"] = node}
										to="/hooks/lifecycle/useDeferredValue"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDeferredValue"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDeferredValue
									</Link>
									<Link
										ref={node => linksRef.current["useEffectAbortable"] = node}
										to="/hooks/lifecycle/useEffectAbortable"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEffectAbortable"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectAbortable
									</Link>
									<Link
										ref={node => linksRef.current["useEffectCompare"] = node}
										to="/hooks/lifecycle/useEffectCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEffectCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectCompare
									</Link>
									<Link
										ref={node => linksRef.current["useEffectDeepCompare"] = node}
										to="/hooks/lifecycle/useEffectDeepCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEffectDeepCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectDeepCompare
									</Link>
									<Link
										ref={node => linksRef.current["useEffectOnce"] = node}
										to="/hooks/lifecycle/useEffectOnce"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEffectOnce"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEffectOnce
									</Link>
									<Link
										ref={node => linksRef.current["useIsMounted"] = node}
										to="/hooks/lifecycle/useIsMounted"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useIsMounted"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIsMounted
									</Link>
									<Link
										ref={node => linksRef.current["useLayoutEffectAbortable"] = node}
										to="/hooks/lifecycle/useLayoutEffectAbortable"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLayoutEffectAbortable"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectAbortable
									</Link>
									<Link
										ref={node => linksRef.current["useLayoutEffectCompare"] = node}
										to="/hooks/lifecycle/useLayoutEffectCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLayoutEffectCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectCompare
									</Link>
									<Link
										ref={node => linksRef.current["useLayoutEffectDeepCompare"] = node}
										to="/hooks/lifecycle/useLayoutEffectDeepCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLayoutEffectDeepCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectDeepCompare
									</Link>
									<Link
										ref={node => linksRef.current["useLayoutEffectOnce"] = node}
										to="/hooks/lifecycle/useLayoutEffectOnce"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLayoutEffectOnce"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLayoutEffectOnce
									</Link>
									<Link
										ref={node => linksRef.current["useLogger"] = node}
										to="/hooks/lifecycle/useLogger"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLogger"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLogger
									</Link>
									<Link
										ref={node => linksRef.current["useRerender"] = node}
										to="/hooks/lifecycle/useRerender"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useRerender"]?.classList.add("active");
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
										ref={node => linksRef.current["useCallbackCompare"] = node}
										to="/hooks/performance/useCallbackCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useCallbackCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useCallbackCompare
									</Link>
									<Link
										ref={node => linksRef.current["useCallbackDeepCompare"] = node}
										to="/hooks/performance/useCallbackDeepCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useCallbackDeepCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useCallbackDeepCompare
									</Link>
									<Link
										ref={node => linksRef.current["useId"] = node}
										to="/hooks/performance/useId"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useId"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useId
									</Link>
									<Link
										ref={node => linksRef.current["useLazyRef"] = node}
										to="/hooks/performance/useLazyRef"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLazyRef"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLazyRef
									</Link>
									<Link
										ref={node => linksRef.current["useMemoCompare"] = node}
										to="/hooks/performance/useMemoCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMemoCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMemoCompare
									</Link>
									<Link
										ref={node => linksRef.current["useMemoDeepCompare"] = node}
										to="/hooks/performance/useMemoDeepCompare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMemoDeepCompare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMemoDeepCompare
									</Link>
									<Link
										ref={node => linksRef.current["useMemoizedFn"] = node}
										to="/hooks/performance/useMemoizedFn"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMemoizedFn"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMemoizedFn
									</Link>
									<Link
										ref={node => linksRef.current["useMergedRef"] = node}
										to="/hooks/performance/useMergedRef"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMergedRef"]?.classList.add("active");
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
										ref={node => linksRef.current["useBeforeUnload"] = node}
										to="/hooks/events/useBeforeUnload"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useBeforeUnload"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBeforeUnload
									</Link>
									<Link
										ref={node => linksRef.current["useClickOutside"] = node}
										to="/hooks/events/useClickOutside"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useClickOutside"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useClickOutside
									</Link>
									<Link
										ref={node => linksRef.current["useContextMenu"] = node}
										to="/hooks/events/useContextMenu"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useContextMenu"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useContextMenu
									</Link>
									<Link
										ref={node => linksRef.current["useDocumentVisibility"] = node}
										to="/hooks/events/useDocumentVisibility"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDocumentVisibility"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDocumentVisibility
									</Link>
									<Link
										ref={node => linksRef.current["useDoubleClick"] = node}
										to="/hooks/events/useDoubleClick"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDoubleClick"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDoubleClick
									</Link>
									<Link
										ref={node => linksRef.current["useEventDispatcher"] = node}
										to="/hooks/events/useEventDispatcher"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEventDispatcher"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEventDispatcher
									</Link>
									<Link
										ref={node => linksRef.current["useEventListener"] = node}
										to="/hooks/events/useEventListener"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEventListener"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEventListener
									</Link>
									<Link
										ref={node => linksRef.current["useEvents"] = node}
										to="/hooks/events/useEvents"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEvents"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEvents
									</Link>
									<Link
										ref={node => linksRef.current["useHotKeys"] = node}
										to="/hooks/events/useHotKeys"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useHotKeys"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useHotKeys
									</Link>
									<Link
										ref={node => linksRef.current["useHover"] = node}
										to="/hooks/events/useHover"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useHover"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useHover
									</Link>
									<Link
										ref={node => linksRef.current["useInfiniteScroll"] = node}
										to="/hooks/events/useInfiniteScroll"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useInfiniteScroll"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useInfiniteScroll
									</Link>
									<Link
										ref={node => linksRef.current["useIntersectionObserver"] = node}
										to="/hooks/events/useIntersectionObserver"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useIntersectionObserver"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIntersectionObserver
									</Link>
									<Link
										ref={node => linksRef.current["useIsOnline"] = node}
										to="/hooks/events/useIsOnline"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useIsOnline"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIsOnline
									</Link>
									<Link
										ref={node => linksRef.current["useLongPress"] = node}
										to="/hooks/events/useLongPress"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLongPress"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLongPress
									</Link>
									<Link
										ref={node => linksRef.current["useMeasure"] = node}
										to="/hooks/events/useMeasure"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMeasure"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMeasure
									</Link>
									<Link
										ref={node => linksRef.current["useMouse"] = node}
										to="/hooks/events/useMouse"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMouse"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMouse
									</Link>
									<Link
										ref={node => linksRef.current["useMutationObserver"] = node}
										to="/hooks/events/useMutationObserver"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMutationObserver"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMutationObserver
									</Link>
									<Link
										ref={node => linksRef.current["useNetwork"] = node}
										to="/hooks/events/useNetwork"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useNetwork"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useNetwork
									</Link>
									<Link
										ref={node => linksRef.current["usePerformAction"] = node}
										to="/hooks/events/usePerformAction"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePerformAction"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePerformAction
									</Link>
									<Link
										ref={node => linksRef.current["usePinchZoom"] = node}
										to="/hooks/events/usePinchZoom"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePinchZoom"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePinchZoom
									</Link>
									<Link
										ref={node => linksRef.current["usePointerLock"] = node}
										to="/hooks/events/usePointerLock"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePointerLock"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePointerLock
									</Link>
									<Link
										ref={node => linksRef.current["useResizeObserver"] = node}
										to="/hooks/events/useResizeObserver"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useResizeObserver"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useResizeObserver
									</Link>
									<Link
										ref={node => linksRef.current["useResponsive"] = node}
										to="/hooks/events/useResponsive"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useResponsive"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useResponsive
									</Link>
									<Link
										ref={node => linksRef.current["useScreen"] = node}
										to="/hooks/events/useScreen"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useScreen"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScreen
									</Link>
									<Link
										ref={node => linksRef.current["useScrollIntoView"] = node}
										to="/hooks/events/useScrollIntoView"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useScrollIntoView"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScrollIntoView
									</Link>
									<Link
										ref={node => linksRef.current["useSwipe"] = node}
										to="/hooks/events/useSwipe"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useSwipe"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSwipe
									</Link>
									<Link
										ref={node => linksRef.current["useVisible"] = node}
										to="/hooks/events/useVisible"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useVisible"]?.classList.add("active");
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
										ref={node => linksRef.current["useActiveElement"] = node}
										to="/hooks/api-dom/useActiveElement"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useActiveElement"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useActiveElement
									</Link>
									<Link
										ref={node => linksRef.current["useAnimation"] = node}
										to="/hooks/api-dom/useAnimation"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useAnimation"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useAnimation
									</Link>
									<Link
										ref={node => linksRef.current["useAudio"] = node}
										to="/hooks/api-dom/useAudio"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useAudio"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useAudio
									</Link>
									<Link
										ref={node => linksRef.current["useBattery"] = node}
										to="/hooks/api-dom/useBattery"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useBattery"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBattery
									</Link>
									<Link
										ref={node => linksRef.current["useBluetooth"] = node}
										to="/hooks/api-dom/useBluetooth"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useBluetooth"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBluetooth
									</Link>
									<Link
										ref={node => linksRef.current["useBroadcastChannel"] = node}
										to="/hooks/api-dom/useBroadcastChannel"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useBroadcastChannel"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useBroadcastChannel
									</Link>
									<Link
										ref={node => linksRef.current["useClipboard"] = node}
										to="/hooks/api-dom/useClipboard"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useClipboard"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useClipboard
									</Link>
									<Link
										ref={node => linksRef.current["useColorScheme"] = node}
										to="/hooks/api-dom/useColorScheme"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useColorScheme"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useColorScheme
									</Link>
									<Link
										ref={node => linksRef.current["useDebounce"] = node}
										to="/hooks/api-dom/useDebounce"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDebounce"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDebounce
									</Link>
									<Link
										ref={node => linksRef.current["useDeviceMotion"] = node}
										to="/hooks/api-dom/useDeviceMotion"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDeviceMotion"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDeviceMotion
									</Link>
									<Link
										ref={node => linksRef.current["useDeviceOrientation"] = node}
										to="/hooks/api-dom/useDeviceOrientation"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDeviceOrientation"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDeviceOrientation
									</Link>
									<Link
										ref={node => linksRef.current["useDialogBox"] = node}
										to="/hooks/api-dom/useDialogBox"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDialogBox"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDialogBox
									</Link>
									<Link
										ref={node => linksRef.current["useDisplayMedia"] = node}
										to="/hooks/api-dom/useDisplayMedia"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDisplayMedia"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDisplayMedia
									</Link>
									<Link
										ref={node => linksRef.current["useDocumentPIP"] = node}
										to="/hooks/api-dom/useDocumentPIP"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useDocumentPIP"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useDocumentPIP
									</Link>
									<Link
										ref={node => linksRef.current["useEventSource"] = node}
										to="/hooks/api-dom/useEventSource"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEventSource"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEventSource
									</Link>
									<Link
										ref={node => linksRef.current["useEyeDropper"] = node}
										to="/hooks/api-dom/useEyeDropper"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useEyeDropper"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useEyeDropper
									</Link>
									<Link
										ref={node => linksRef.current["useFetch"] = node}
										to="/hooks/api-dom/useFetch"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useFetch"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useFetch
									</Link>
									<Link
										ref={node => linksRef.current["useFPS"] = node}
										to="/hooks/api-dom/useFPS"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useFPS"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useFPS
									</Link>
									<Link
										ref={node => linksRef.current["useFullscreen"] = node}
										to="/hooks/api-dom/useFullscreen"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useFullscreen"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useFullscreen
									</Link>
									<Link
										ref={node => linksRef.current["useGeolocation"] = node}
										to="/hooks/api-dom/useGeolocation"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useGeolocation"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useGeolocation
									</Link>
									<Link
										ref={node => linksRef.current["useIdleCallback"] = node}
										to="/hooks/api-dom/useIdleCallback"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useIdleCallback"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useIdleCallback
									</Link>
									<Link
										ref={node => linksRef.current["useInterval"] = node}
										to="/hooks/api-dom/useInterval"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useInterval"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useInterval
									</Link>
									<Link
										ref={node => linksRef.current["useLock"] = node}
										to="/hooks/api-dom/useLock"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useLock"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useLock
									</Link>
									<Link
										ref={node => linksRef.current["useMediaDevices"] = node}
										to="/hooks/api-dom/useMediaDevices"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMediaDevices"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMediaDevices
									</Link>
									<Link
										ref={node => linksRef.current["useMediaQuery"] = node}
										to="/hooks/api-dom/useMediaQuery"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useMediaQuery"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useMediaQuery
									</Link>
									<Link
										ref={node => linksRef.current["usePermission"] = node}
										to="/hooks/api-dom/usePermission"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePermission"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePermission
									</Link>
									<Link
										ref={node => linksRef.current["usePIP"] = node}
										to="/hooks/api-dom/usePIP"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePIP"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePIP
									</Link>
									<Link
										ref={node => linksRef.current["usePopover"] = node}
										to="/hooks/api-dom/usePopover"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePopover"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePopover
									</Link>
									<Link
										ref={node => linksRef.current["usePromiseSuspensible"] = node}
										to="/hooks/api-dom/usePromiseSuspensible"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePromiseSuspensible"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePromiseSuspensible
									</Link>
									<Link
										ref={node => linksRef.current["usePublishSubscribe"] = node}
										to="/hooks/api-dom/usePublishSubscribe"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["usePublishSubscribe"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										usePublishSubscribe
									</Link>
									<Link
										ref={node => linksRef.current["useRaf"] = node}
										to="/hooks/api-dom/useRaf"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useRaf"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useRaf
									</Link>
									<Link
										ref={node => linksRef.current["useReducedMotion"] = node}
										to="/hooks/api-dom/useReducedMotion"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useReducedMotion"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useReducedMotion
									</Link>
									<Link
										ref={node => linksRef.current["useRemotePlayback"] = node}
										to="/hooks/api-dom/useRemotePlayback"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useRemotePlayback"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useRemotePlayback
									</Link>
									<Link
										ref={node => linksRef.current["useScreenWakeLock"] = node}
										to="/hooks/api-dom/useScreenWakeLock"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useScreenWakeLock"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScreenWakeLock
									</Link>
									<Link
										ref={node => linksRef.current["useScript"] = node}
										to="/hooks/api-dom/useScript"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useScript"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useScript
									</Link>
									<Link
										ref={node => linksRef.current["useShare"] = node}
										to="/hooks/api-dom/useShare"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useShare"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useShare
									</Link>
									<Link
										ref={node => linksRef.current["useSpeechRecognition"] = node}
										to="/hooks/api-dom/useSpeechRecognition"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useSpeechRecognition"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSpeechRecognition
									</Link>
									<Link
										ref={node => linksRef.current["useSpeechSynthesis"] = node}
										to="/hooks/api-dom/useSpeechSynthesis"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useSpeechSynthesis"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useSpeechSynthesis
									</Link>
									<Link
										ref={node => linksRef.current["useTextSelection"] = node}
										to="/hooks/api-dom/useTextSelection"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useTextSelection"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useTextSelection
									</Link>
									<Link
										ref={node => linksRef.current["useThrottle"] = node}
										to="/hooks/api-dom/useThrottle"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useThrottle"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useThrottle
									</Link>
									<Link
										ref={node => linksRef.current["useTimeout"] = node}
										to="/hooks/api-dom/useTimeout"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useTimeout"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useTimeout
									</Link>
									<Link
										ref={node => linksRef.current["useTitle"] = node}
										to="/hooks/api-dom/useTitle"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useTitle"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useTitle
									</Link>
									<Link
										ref={node => linksRef.current["useVibrate"] = node}
										to="/hooks/api-dom/useVibrate"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useVibrate"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useVibrate
									</Link>
									<Link
										ref={node => linksRef.current["useVideo"] = node}
										to="/hooks/api-dom/useVideo"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useVideo"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useVideo
									</Link>
									<Link
										ref={node => linksRef.current["useWebSocket"] = node}
										to="/hooks/api-dom/useWebSocket"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useWebSocket"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useWebSocket
									</Link>
									<Link
										ref={node => linksRef.current["useWebWorker"] = node}
										to="/hooks/api-dom/useWebWorker"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useWebWorker"]?.classList.add("active");
											containerRef.current?.scrollTo(0, 0);
											window.innerWidth < 1190 && closeNav();
										}}
										translate="no"
									>
										useWebWorker
									</Link>
									<Link
										ref={node => linksRef.current["useWebWorkerFn"] = node}
										to="/hooks/api-dom/useWebWorkerFn"
										onClick={() => {
											Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
											linksRef.current["useWebWorkerFn"]?.classList.add("active");
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
									ref={node => linksRef.current["ErrorBoundary"] = node}
									to="/components/ErrorBoundary"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["ErrorBoundary"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									ErrorBoundary
								</Link>
								<Link
									ref={node => linksRef.current["For"] = node}
									to="/components/For"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["For"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									For
								</Link>
								<Link
									ref={node => linksRef.current["ForMemoized"] = node}
									to="/components/ForMemoized"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["ForMemoized"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									ForMemoized
								</Link>
								<Link
									ref={node => linksRef.current["LazyComponent"] = node}
									to="/components/LazyComponent"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["LazyComponent"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									LazyComponent
								</Link>
								<Link
									ref={node => linksRef.current["Show"] = node}
									to="/components/Show"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["Show"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									Show
								</Link>
								<Link
									ref={node => linksRef.current["ShowMemoized"] = node}
									to="/components/ShowMemoized"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["ShowMemoized"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									ShowMemoized
								</Link>
								<Link
									ref={node => linksRef.current["SwitchCase"] = node}
									to="/components/SwitchCase"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["SwitchCase"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									SwitchCase
								</Link>
								<Link
									ref={node => linksRef.current["SwitchCaseMemoized"] = node}
									to="/components/SwitchCaseMemoized"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["SwitchCaseMemoized"]?.classList.add("active");
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
									ref={node => linksRef.current["alphanumericCompare"] = node}
									to="/utils/alphanumericCompare"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["alphanumericCompare"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									alphanumericCompare
								</Link>
								<Link
									ref={node => linksRef.current["changeStringCase"] = node}
									to="/utils/changeStringCase"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["changeStringCase"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									changeStringCase
								</Link>
								<Link
									ref={node => linksRef.current["clickElementOnKeydownEvent"] = node}
									to="/utils/clickElementOnKeydownEvent"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["clickElementOnKeydownEvent"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									clickElementOnKeydownEvent
								</Link>
								<Link
									ref={node => linksRef.current["defaultSerializer"] = node}
									to="/utils/defaultSerializer"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["defaultSerializer"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									defaultSerializer
								</Link>
								<Link
									ref={node => linksRef.current["detectBrowser"] = node}
									to="/utils/detectBrowser"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["detectBrowser"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									detectBrowser
								</Link>
								<Link
									ref={node => linksRef.current["getBase64"] = node}
									to="/utils/getBase64"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["getBase64"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									getBase64
								</Link>
								<Link
									ref={node => linksRef.current["getKeyObjectFromValue"] = node}
									to="/utils/getKeyObjectFromValue"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["getKeyObjectFromValue"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									getKeyObjectFromValue
								</Link>
								<Link
									ref={node => linksRef.current["getObjectFromDottedString"] = node}
									to="/utils/getObjectFromDottedString"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["getObjectFromDottedString"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									getObjectFromDottedString
								</Link>
								<Link
									ref={node => linksRef.current["hotKeyHandler"] = node}
									to="/utils/hotKeyHandler"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["hotKeyHandler"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									hotKeyHandler
								</Link>
								<Link
									ref={node => linksRef.current["isAsync"] = node}
									to="/utils/isAsync"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["isAsync"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isAsync
								</Link>
								<Link
									ref={node => linksRef.current["isClient"] = node}
									to="/utils/isClient"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["isClient"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isClient
								</Link>
								<Link
									ref={node => linksRef.current["isDeepEqual"] = node}
									to="/utils/isDeepEqual"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["isDeepEqual"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isDeepEqual
								</Link>
								<Link
									ref={node => linksRef.current["isMouseEvent"] = node}
									to="/utils/isMouseEvent"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["isMouseEvent"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isMouseEvent
								</Link>
								<Link
									ref={node => linksRef.current["isShallowEqual"] = node}
									to="/utils/isShallowEqual"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["isShallowEqual"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isShallowEqual
								</Link>
								<Link
									ref={node => linksRef.current["isTouchEvent"] = node}
									to="/utils/isTouchEvent"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["isTouchEvent"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									isTouchEvent
								</Link>
								<Link
									ref={node => linksRef.current["lazy"] = node}
									to="/utils/lazy"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["lazy"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									lazy
								</Link>
								<Link
									ref={node => linksRef.current["mergeObjects"] = node}
									to="/utils/mergeObjects"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["mergeObjects"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									mergeObjects
								</Link>
								<Link
									ref={node => linksRef.current["removePropertiesFromArrayObjects"] = node}
									to="/utils/removePropertiesFromArrayObjects"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["removePropertiesFromArrayObjects"]?.classList.add("active");
										containerRef.current?.scrollTo(0, 0);
										window.innerWidth < 1190 && closeNav();
									}}
									translate="no"
								>
									removePropertiesFromArrayObjects
								</Link>
								<Link
									ref={node => linksRef.current["uniqueElementsArray"] = node}
									to="/utils/uniqueElementsArray"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["uniqueElementsArray"]?.classList.add("active");
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
									ref={node => linksRef.current["utilityTypes"] = node}
									to="/types/utilityTypes"
									onClick={() => {
										Object.values(linksRef.current).forEach(l => l?.classList.remove("active"));
										linksRef.current["utilityTypes"]?.classList.add("active");
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
