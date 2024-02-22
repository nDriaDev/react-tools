<h1 align="center">
  	<br>
	<a href="https://ndriadev.github.io/react-tools/">
  		<img src="https://ndriadev.github.io/react-tools/react-red.png" alt="logo">
	</a>
	<br>
	React-Tools
	<br>
</h1>

<h3 align="center">A collection of Hooks, Components, Utilities and Types for React
</h3>

<div align="center">

[![npm version](https://img.shields.io/npm/v/%40ndriadev/react-tools?color=f53340&style=for-the-badge)](https://www.npmjs.org/package/%40ndriadev/react-tools)
![npm bundle size (scoped version)](https://badges.hiptest.com:/bundlephobia/min/@ndriadev/react-tools?color=yellow&label=SIZE&style=for-the-badge)
![npm](https://img.shields.io/npm/dt/%40ndriadev/react-tools?label=DOWNLOADS&color=orange&style=for-the-badge)
![NPM](https://badges.hiptest.com:/npm/l/@ndriadev/react-tools?color=blue&registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=for-the-badge)
</div>

## Summary
- [Features](#features)
- [Demo](#demo)
- [Tools](#tools)
- [ESLint Configuration](#eslint-configuration)
- [ToDo](#todo )
- [License](#License)

## Features

- Typescript
	- Written in typescript for type safety.
- Tree Shakable
	- Import only that you use. Indivual import cost is tiny.
- Demos
	- All implementations have a demo that allow you to try them.

## Demo

Go to [Demo](https://ndriadev.github.io/react-tools) to see and try all implementations.

## Tools
- [__HOOKS__](#hooks)

	- [__STATE__](#state)

		- [_createPubSubStore_](#createPubSubStore)
		- [_useArray_](#useArray)
		- [_useDerivedState_](#useDerivedState)
		- [_useLocalStorageState_](#useLocalStorageState)
		- [_useMap_](#useMap)
		- [_usePrevious_](#usePrevious)
		- [_useProxyState_](#useProxyState)
		- [_useReducerGetReset_](#useReducerGetReset)
		- [_useReducerHistory_](#useReducerHistory)
		- [_useReducerHistoryGetter_](#useReducerHistoryGetter)
		- [_useSessionStorageState_](#useSessionStorageState)
		- [_useSet_](#useSet)
		- [_useStateGetReset_](#useStateGetReset)
		- [_useStateHistory_](#useStateHistory)
		- [_useStateHistoryGetter_](#useStateHistoryGetter)
		- [_useStateValidator_](#useStateValidator)
		- [_useSyncExternalStore_](#useSyncExternalStore)

	- [__LIFECYCLE__](#lifecycle)

		- [_useDeferredValue_](#useDeferredValue)
		- [_useEffectCompare_](#useEffectCompare)
		- [_useEffectDeepCompare_](#useEffectDeepCompare)
		- [_useEffectOnce_](#useEffectOnce)
		- [_useIsMounted_](#useIsMounted)
		- [_useLayoutEffectCompare_](#useLayoutEffectCompare)
		- [_useLayoutEffectDeepCompare_](#useLayoutEffectDeepCompare)
		- [_useLayoutEffectOnce_](#useLayoutEffectOnce)
		- [_useLogger_](#useLogger)
		- [_useRerender_](#useRerender)

	- [__PERFORMANCE__](#performance)

		- [_useCallbackCompare_](#useCallbackCompare)
		- [_useCallbackDeepCompare_](#useCallbackDeepCompare)
		- [_useId_](#useId)
		- [_useLazyRef_](#useLazyRef)
		- [_useMemoCompare_](#useMemoCompare)
		- [_useMemoDeepCompare_](#useMemoDeepCompare)
		- [_useMemoizedFn_](#useMemoizedFn)
		- [_useMergedRef_](#useMergedRef)

	- [__EVENTS__](#events)

		- [_useBeforeUnload_](#useBeforeUnload)
		- [_useClickOutside_](#useClickOutside)
		- [_useContextMenu_](#useContextMenu)
		- [_useDocumentVisibility_](#useDocumentVisibility)
		- [_useDoubleClick_](#useDoubleClick)
		- [_useEventDispatcher_](#useEventDispatcher)
		- [_useEventListener_](#useEventListener)
		- [_useEvents_](#useEvents)
		- [_useHotKeys_](#useHotKeys)
		- [_useHover_](#useHover)
		- [_useInfiniteScroll_](#useInfiniteScroll)
		- [_useIntersectionObserver_](#useIntersectionObserver)
		- [_useIsOnline_](#useIsOnline)
		- [_useLongPress_](#useLongPress)
		- [_useMeasure_](#useMeasure)
		- [_useMouse_](#useMouse)
		- [_useMutationObserver_](#useMutationObserver)
		- [_useNetwork_](#useNetwork)
		- [_usePerformAction_](#usePerformAction)
		- [_usePinchZoom_](#usePinchZoom)
		- [_usePointerLock_](#usePointerLock)
		- [_useResizeObserver_](#useResizeObserver)
		- [_useResponsive_](#useResponsive)
		- [_useScreen_](#useScreen)
		- [_useScrollIntoView_](#useScrollIntoView)
		- [_useSwipe_](#useSwipe)
		- [_useVisible_](#useVisible)

	- [__API DOM__](#api-dom)

		- [_useActiveElement_](#useActiveElement)
		- [_useAnimation_](#useAnimation)
		- [_useAudio_](#useAudio)
		- [_useBattery_](#useBattery)
		- [_useBluetooth_](#useBluetooth)
		- [_useBroadcastChannel_](#useBroadcastChannel)
		- [_useClipboard_](#useClipboard)
		- [_useColorScheme_](#useColorScheme)
		- [_useDebounce_](#useDebounce)
		- [_useDeviceMotion_](#useDeviceMotion)
		- [_useDeviceOrientation_](#useDeviceOrientation)
		- [_useDialogBox_](#useDialogBox)
		- [_useDisplayMedia_](#useDisplayMedia)
		- [_useDocumentPIP_](#useDocumentPIP)
		- [_useEventSource_](#useEventSource)
		- [_useEyeDropper_](#useEyeDropper)
		- [_useFPS_](#useFPS)
		- [_useFetch_](#useFetch)
		- [_useFullscreen_](#useFullscreen)
		- [_useGeolocation_](#useGeolocation)
		- [_useIdleCallback_](#useIdleCallback)
		- [_useInterval_](#useInterval)
		- [_useLock_](#useLock)
		- [_useMediaDevices_](#useMediaDevices)
		- [_useMediaQuery_](#useMediaQuery)
		- [_usePIP_](#usePIP)
		- [_usePermission_](#usePermission)
		- [_usePopover_](#usePopover)
		- [_usePromiseSuspensible_](#usePromiseSuspensible)
		- [_usePublishSubscribe_](#usePublishSubscribe)
		- [_useRaf_](#useRaf)
		- [_useReducedMotion_](#useReducedMotion)
		- [_useRemotePlayback_](#useRemotePlayback)
		- [_useScreenWakeLock_](#useScreenWakeLock)
		- [_useScript_](#useScript)
		- [_useShare_](#useShare)
		- [_useSpeechRecognition_](#useSpeechRecognition)
		- [_useSpeechSynthesis_](#useSpeechSynthesis)
		- [_useTextSelection_](#useTextSelection)
		- [_useThrottle_](#useThrottle)
		- [_useTimeout_](#useTimeout)
		- [_useTitle_](#useTitle)
		- [_useVibrate_](#useVibrate)
		- [_useVideo_](#useVideo)
		- [_useWebSocket_](#useWebSocket)
		- [_useWebWorker_](#useWebWorker)
		- [_useWebWorkerFn_](#useWebWorkerFn)

- [__COMPONENTS__](#components)

	- [_ErrorBoundary_](#ErrorBoundary)
	- [_For_](#For)
	- [_LazyComponent_](#LazyComponent)
	- [_Show_](#Show)
	- [_SwitchCase_](#SwitchCase)

- [__UTILS__](#utils)

	- [_alphanumericCompare_](#alphanumericCompare)
	- [_changeStringCase_](#changeStringCase)
	- [_defaultSerializer_](#defaultSerializer)
	- [_detectBrowser_](#detectBrowser)
	- [_getBase64_](#getBase64)
	- [_getKeyObjectFromValue_](#getKeyObjectFromValue)
	- [_getObjectFromDottedString_](#getObjectFromDottedString)
	- [_hotKeyHandler_](#hotKeyHandler)
	- [_isAsync_](#isAsync)
	- [_isClient_](#isClient)
	- [_isDeepEqual_](#isDeepEqual)
	- [_isMouseEvent_](#isMouseEvent)
	- [_isShallowEqual_](#isShallowEqual)
	- [_isTouchEvent_](#isTouchEvent)
	- [_lazy_](#lazy)
	- [_mergeObjects_](#mergeObjects)
	- [_removePropertiesFromArrayObjects_](#removePropertiesFromArrayObjects)
	- [_uniqueElementsArray_](#uniqueElementsArray)

- [__TYPES__](#types)

	- [__UTILITY TYPES__](#utility-types)

## HOOKS

## STATE

### createPubSubStore

A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.__N.B.: to work properly, objects like Set, Map, Date or more generally objects without _Symbol.iterator_ must be treated as immutable__. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/createPubSubStore)
```tsx
createPubSubStore<T extends object, E extends Record<string, (store: T, ...args: any) => void>>(obj: T, mutatorsFn?: E, persist?: boolean): { getStore: () => T; mutateStore: (cb: (globStore: T) => void) => void; mutators: Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>, usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>] }}
```

### useArray

Hook to use _Array data structure_ to handle component state with all Array methods. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useArray)
```tsx
useArray<T>(initialState?: Array<T> | (() => Array<T>))
```

### useDerivedState

Hook useful when the internal state of a component depends on one or more props. It receives an _initial state_ and a _dependency array_ that works the same way as that of a _useEffect_, _useMemo_, and _useCallback_. Every time the dependencies change, the __derived state__ is resetted to _initial state_. A third optional parameter can be passed, to execute a _compute_ function after the dependencies are updated, without having a _useEffect_ within the component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useDerivedState)
```tsx
useDerivedState<T>(initialState: T | (() => T), deps: DependencyList, compute?: EffectCallback): [T, Dispatch<SetStateAction<T>>]
```

### useLocalStorageState

Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useLocalStorageState)
```tsx
useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void]
```

### useMap

Hook to use _Map data structure_ to handle component state with all Map methods. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useMap)
```tsx
useMap<K, V>(initialState?: Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>))
```

### usePrevious

It's track the previous value of a variable, with possibility to enable/disable tracking. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/usePrevious)
```tsx
usePrevious<T = unknown>(variable: T): [T|undefined, (enable: boolean) => void]
```

### useProxyState

Hook to handle component state that allows you to use an object for your state and mutating it in a way more idiomatic for JS. __*N.B.*__ not destructure state, otherwise break changes updated. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useProxyState)
```tsx
useProxyState<T extends Record<string, any>>(initialState: T | (() => T), proxyInDepth:boolean=false): T
```

### useReducerGetReset

Custom useReducer with get and reset state functions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useReducerGetReset)
```tsx
useReducerGetReset<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>, ()=>ReducerState<R>, ()=>void]
```

### useReducerHistory

Custom useReducer that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useReducerHistory)
```tsx
useReducerHistory<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }]
```

### useReducerHistoryGetter

Custom useReducer with getter state function and that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useReducerHistoryGetter)
```tsx
useReducerHistoryGetter<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>,()=>ReducerState<R>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }]
```

### useSessionStorageState

Custom _useState_ hook implementation using _sessionStorage_, with immutable _getter state_ function and to _remove_ key from sessionStorage. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSessionStorageState)
```tsx
useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void]
```

### useSet

Hook to use _Set data structure_ to handle component state with all Set methods. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSet)
```tsx
useSet<T>(initialState?: Iterable<T> | (() => Iterable<T>))
```

### useStateGetReset

Custom useState with get and reset state functions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateGetReset)
```tsx
useStateGetReset<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void]
```

### useStateHistory

Custom useState that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateHistory)
```tsx
useStateHistory<T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, { history: readonly T[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: T) => void }]
```

### useStateHistoryGetter

Custom useState with getter state function and that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateHistoryGetter)
```tsx
useStateHistoryGetter<T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, () => T, ReturnType<typeof useStateHistory<T>>[2]]
```

### useStateValidator

Custom _useState_ hook that validates state on every update. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateValidator)
```tsx
useStateValidator<T>(initialState: T | (() => T), validator: StateValidator<T>): [T, Dispatch<SetStateAction<T>>, T extends object ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: string}]
```

### useSyncExternalStore

_useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSyncExternalStore)
```tsx
useSyncExternalStore<Snapshot>(subscribe: (onStoreChange: () => void) => () => void, getSnapshot: () => Snapshot): Snapshot
```

## LIFECYCLE

### useDeferredValue

_useDeferredValue_ hook polyfilled for React versions below 18. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useDeferredValue)
```tsx
useDeferredValue<T>(value: T): T
```

### useEffectCompare

Custom useEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectCompare)
```tsx
useEffectCompare<T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>)
```

### useEffectDeepCompare

Custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectDeepCompare)
```tsx
useEffectDeepCompare(cb: EffectCallback, deps: DependencyList):void
```

### useEffectOnce

Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectOnce)
```tsx
useEffectOnce(effect: EffectCallback)
```

### useIsMounted

Hoos to know when a component is mounted or not. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useIsMounted)
```tsx
useIsMounted(): ()=>boolean
```

### useLayoutEffectCompare

Custom useLayoutEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLayoutEffectCompare)
```tsx
useLayoutEffectCompare<T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>)
```

### useLayoutEffectDeepCompare

Custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLayoutEffectDeepCompare)
```tsx
useLayoutEffectDeepCompare(cb: EffectCallback, deps: DependencyList):void
```

### useLayoutEffectOnce

Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useLayoutEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useLayoutEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLayoutEffectOnce)
```tsx
useLayoutEffectOnce(effect: EffectCallback)
```

### useLogger

Hook to log componet details during Lifecycle events. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLogger)
```tsx
useLogger(name: string, props: object)
```

### useRerender

Hook that force a render. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useRerender)
```tsx
useRerender(): React.DispatchWithoutAction
```

## PERFORMANCE

### useCallbackCompare

Custom useCallback that returns memoized callback that changes only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useCallbackCompare)
```tsx
useCallbackCompare<T extends Function, E = unknown>(cb: T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T
```

### useCallbackDeepCompare

Custom useCallback that returns memoized callback that changes only if deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useCallbackDeepCompare)
```tsx
useCallbackDeepCompare<T extends Function>(cb: T, deps: DependencyList):T
```

### useId

_useId_ hook polyfilled for React versions below 18: __not use for key prop__. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useId)
```tsx
useId(): string
```

### useLazyRef

Hook that works 'partially' like the _useState_ hook with lazy initialization: ensures that the __initializer__ function is executed only once. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useLazyRef)
```tsx
useLazyRef<T>(initializer: () => T): React.MutableRefObject<T>
```

### useMemoCompare

Custom useMemo that returns memoized value that changes only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoCompare)
```tsx
useMemoCompare<T = unknown, E = unknown>(cb: () => T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T
```

### useMemoDeepCompare

Custom useMemo that returns memoized value that changes only if deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoDeepCompare)
```tsx
useMemoDeepCompare<T=unknown>(cb: () => T, deps: DependencyList):T
```

### useMemoizedFn

Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_, without esplicity dependencies array. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoizedFn)
```tsx
useMemoizedFn<T extends (...args: any[]) => any>(fn: T)
```

### useMergedRef

Hook to merge multiple refs into one. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMergedRef)
```tsx
useMergedRef<T>(...refs: Ref<T>[]): Ref<T>
```

## EVENTS

### useBeforeUnload

Hook to handle beforeunload event. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useBeforeUnload)
```tsx
useBeforeUnload({element, listener, opts}:{ element?: RefObject<HTMLElement> | Window | undefined, listener: (evt: BeforeUnloadEvent) => void, opts?: boolean | AddEventListenerOptions}): ()=>void
```

### useClickOutside

Hook to listen and execute an action when there is a click outside an element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useClickOutside)
```tsx
useClickOutside(target: RefObject<HTMLElement> | HTMLElement, handler: (evt: Event) => void):void
```

### useContextMenu

Hook to add contextmenu event listener. The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useContextMenu)
```tsx
useContextMenu({ element, listener, effectType, listenerOpts }: { element: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent) => void | Promise<void>, effectType?: "normal" | "layout", listenerOpts?: boolean | AddEventListenerOptions | undefined })
```

### useDocumentVisibility

Hook to track document visibility. Refers to [Document VisibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useDocumentVisibility)
```tsx
useDocumentVisibility(): DocumentVisibilityState
```

### useDoubleClick

Hook to handle double click event. Double clicking in react as well as with vanilla js, it is possible to manage it but it is not possible to have both managers on the same element. Thanks to this hook it is possible to do this, and it works with all events that can be associated with a user click (for example _mousedown_ but also _touchstart_). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useDoubleClick)
```tsx
useDoubleClick<T extends Element = Element, E extends Event = Event>(handler: ((evt: SyntheticEvent<T, E>) => Promise<void> | void) | { doubleClick: (evt: SyntheticEvent<T, E>) => Promise<void> | void, singleClick?: (evt: SyntheticEvent<T, E>) => Promise<void> | void, tolerance?: number }): ((evt: SyntheticEvent<T, E>) => Promise<void> | void)
```

### useEventDispatcher

Hook to dispatch an Event or a CustomEvent. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEventDispatcher)
```tsx
useEventDispatcher(element: RefObject<HTMLElement> | Window = window): (evt: Event | CustomEvent) => void
```

### useEventListener

Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEventListener)
```tsx
useEventListener<T extends keyof WindowEventMap, E extends Element>({ type, listener, element = window, listenerOpts, effectType = "normal" }: { type: T|(T[]), listener: ((evt: WindowEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void)
```

### useEvents

Communication system based on Events pattern implemented on a EventTarget subclass. AddListener and dispatch functions to communicate. The result of invoking the _addListener_ function in turn returns a function that can be used to _removeListener_ on event. Otherwise, the listener is automatically removed when the component that has instantiated it is unmounted. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEvents)
```tsx
useEvents(): [(type: string, callback:<T>(evt: Event|CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) => ()=>void, <T>(evt: Event|CustomEvent<T>) => void]
```

### useHotKeys

Hook to listen for the keyboard press, support key combinations, built on [hotKeyHandler](#/hotKeyHandler) utility function. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useHotKeys)
```tsx
useHotKeys({ hotKey, type = "keydown", target = window, listener, listenerOpts }: { hotKey: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, type?: "keydown" | "keyup", target?: RefObject<HTMLElement> | Window, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>, listenerOpts?: boolean | AddEventListenerOptions }): (() => void)
```

### useHover

Hook that determines whether the item is hovered or not and handles state hovers. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useHover)
```tsx
useHover(target: RefObject<HTMLElement> | HTMLElement, opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }): boolean | void
```

### useInfiniteScroll

Hook to deal with large sets of data. It allow users to scroll through content endlessly without explicit pagination or loading new pages. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useInfiniteScroll)
```tsx
useInfiniteScroll<T, E extends Element>({ request, ref, hasMoreData, threshold, onBefore, onError, onSuccess }: { request: (data?: T) => Promise<T>, ref: RefObject<E>, hasMoreData: (data?: T) => boolean, threshold?: number, onBefore?: () => void, onSuccess?: () => void, onError?: (err: unknown) => void }): { data: T | undefined, loading: boolean, fullData: boolean, updateData: (data: T | ((currentState?: T) => T)) => void, loadData: () => Promise<void> }
```

### useIntersectionObserver

Hook to use Intersection Observer. Refer to [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useIntersectionObserver)
```tsx
useIntersectionObserver<T extends Element>(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit):[RefCallback<T>, () => void, () => void]
```

### useIsOnline

Hook to detect network connection status. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useIsOnline)
```tsx
useIsOnline(): boolean
```

### useLongPress

Hook to execute a callback on a long press event. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useLongPress)
```tsx
useLongPress<T extends Element = Element, E extends Event = Event>(cb: useLongPressCallback<E>, { duration = 1000, normalPress, onStart, onFinish }: useLongPressOptions<E>): RefCallback<T>
```

### useMeasure

Hook to  measure and track element's dimensions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMeasure)
```tsx
useMeasure<T extends Element>(): [React.RefCallback<T>, DOMRectReadOnly]
```

### useMouse

Hook to track mouse position also in relationship with an element. It works with pointerEvents. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMouse)
```tsx
useMouse(opts: { type?: "client" | "page" | "screen", relativeElement?: RefObject<HTMLElement | null> | HTMLElement } = { type: "client" }): { x: number | null, y: number | null } | { x: number | null, y: number | null, relativeElementDim?: DOMRect }
```

### useMutationObserver

Hook to use Mutation Observer. Refer to [Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMutationObserver)
```tsx
useMutationObserver<T extends Element>(cb: MutationCallback, opts?: MutationObserverInit): [RefCallback<T>, () => void, () => void, () => MutationRecord[] | undefined]
```

### useNetwork

Hook to detect network connection infos, refer to [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation). It takes optinally a parameter __selectedInfo__ to specify a subset of connection status property. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useNetwork)
```tsx
useNetwork<T extends keyof ConnectionState>(selectedInfo?: ArrayMinLength1<T>): ConnectionState | {[k in T] : ConnectionState[k]}
```

### usePerformAction

Hook that executes a callback after a render. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePerformAction)
```tsx
usePerformAction<T extends (...args: unknown[]) => void>(cb: T): (...args: Parameters<T>) => void
```

### usePinchZoom

Hook to handle pinch zoom gestures. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePinchZoom)
```tsx
usePinchZoom({ target = window, listener }: { target?: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent, type: "zoomIn" | "zoomOut") => void | Promise<void> }): (()=>void)
```

### usePointerLock

Hook to use [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePointerLock)
```tsx
usePointerLock<T extends HTMLElement>({ target, unadjustedMovement, onLock, onUnlock, onError }: UsePointerLockProps<T>): UsePointerLockResult
```

### useResizeObserver

Hook to use Resize Observer. Refer to [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResizeObserver)
```tsx
useResizeObserver<T extends Element>(cb: ResizeObserverCallback, opts?: ResizeObserverOptions):[RefCallback<T>, () => void, () => void]
```

### useResponsive

Hook for getting responsive window size. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResponsive). It receives an optional param __config__ to manually setting breakpoint keys. __config__ can have a keys subset and value can be a number or an object with _value_ and _condition_ properties. If _value_ is a number, the condition will be ">". By default Breakpoints are:
- xs: { value: 576, condition: "<" }
- sm: { value: 576, condition: ">=" }
- md: { value: 768, condition: ">=" }
- lg: { value: 992, condition: ">=" }
- xl: { value: 1200, condition: ">=" }
```tsx
useResponsive<T extends UseResponsiveKeys>(config?: UseResponsiveBreakpoints<T>): { [s in (keyof typeof defaultConfig)]: boolean } | { [s in UseResponsiveKeys<T>]: boolean }
```

### useScreen

Hook to work with [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API) and [Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useScreen)
```tsx
useScreen(allScreen?:boolean): [ScreenDetails, (orientation: OrientationLockType) => Promise<void>, ()=>void]
```

### useScrollIntoView

Hook to scroll an element into view. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useScrollIntoView)
```tsx
useScrollIntoView<T extends Element, E extends Element | null = null>({ duration = 1000, axis = "y", animation = easeInOutSine, offset = 0, cancelable = false, onFinish, scrollableElement }: { duration?: number, axis?: "x" | "y", animation?: (t: number) => number, offset?: number, cancelable?: boolean, onFinish?: () => void, scrollableElement: (()=>E)|E|React.RefObject<E|null> }): { targetRef: React.MutableRefObject<T | null>, scroll: (alignment?: "start" | "center" | "end") => void, cancel: () => void }
```

### useSwipe

Hook to handle swipe gesture. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useSwipe)
```tsx
useSwipe({ target, onSwipeStart, onSwipe, onSwipeEnd, options }: UseSwipeProps): UseSwipeResult
```

### useVisible

Hook to know if an element is visible and optionally the visible area ration of the element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useVisible)
```tsx
useVisible<T extends Element>(opts?: IntersectionObserverInit & { withRatio?: boolean }): [RefCallback<T>, boolean] | [RefCallback<T>, boolean, number]
```

## API DOM

### useActiveElement

Hook that returns activeElement and listen its changes. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useActiveElement)
```tsx
useActiveElement():Element|null
```

### useAnimation

Hook to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useAnimation)
```tsx
useAnimation<T extends Element>({ keyFrames, immediate, opts, onCancel, onFinish, onRemove, onError }: UseAnimationProps): UseAnimationResult<T>
```

### useAudio

Hook to use an HTML audio element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useAudio)
```tsx
useAudiocreateHTMLMediaHook<HTMLAudioElement>("audio");
```

### useBattery

Hook for accessing and monitoring device battery status. Refer to [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBattery)
```tsx
useBattery(opts?: { onChargingChange?: (evt: Event) => void, onChargingTimeChange?: (evt: Event) => void, onDischargingTimeChange?: (evt: Event) => void, onLevelChange?: (evt: Event) => void }): BatteryStatus
```

### useBluetooth

Hook to use [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBluetooth)
```tsx
useBluetooth():[{isSupported: boolean, isConnected: boolean, device: BluetoothDevice|null, server: BluetoothRemoteGATTServer|null}, (opts?: BluetoothDevicesOptions)=>Promise<void>]
```

### useBroadcastChannel

Hook to use [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBroadcastChannel)
```tsx
useBroadcastChannel<T>(name: string, onMessage?: (evt:MessageEvent<T>)=>void, onError?: (evt: MessageEvent)=>void):[T|undefined, (data:T)=>void]
```

### useClipboard

Hook to handle Clipboard. Refers to [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). __N.B.__: The hook has the same compatibility issues as the Clipboard API for Firefox, i.e. it is currently impossible to read from the clipboard. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useClipboard)
```tsx
useClipboard({ useValue, dataType, target }: { useValue: boolean, dataType: "text" | "any", target?: RefObject<HTMLElement> | HTMLElement }): [string, (text: string) => Promise<void>, () => Promise<string>] | [string | Blob | (string | Blob)[], (blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>] | [(text: string) => Promise<void>, () => Promise<string>] | [(blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>]
```

### useColorScheme

Hook to handle ColorScheme. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useColorScheme)
```tsx
useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light"|"dark") => void, returnValue: boolean }): ["light" | "dark", (schema: "light" | "dark") => void] | ((schema: "light" | "dark") => void)
```

### useDebounce

Hook to delay a function execution with possibility to cancel execution and to invoke them immediately. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDebounce)
```tsx
useDebounce<T extends unknown[]>(fn: (...args: T)=>void, opts: { delay: number, focusedWindow?: boolean }): [(...args: T) => void, () => void, (...args: T) => void]
```

### useDeviceMotion

Hook to handle [device motion](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDeviceMotion)
```tsx
useDeviceMotion(): DeviceMotionProps
```

### useDeviceOrientation

Hook to handle [device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDeviceOrientation)
```tsx
useDeviceOrientation(): DeviceOrientationProps
```

### useDialogBox

Hook to use Dialog Box _prompt_, _alert_ or _confirm_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDialogBox)
```tsx
useDialogBox(type: "prompt" | "confirm" | "alert"): ((message?: string, _default?: string) => string | null) | ((message?: any) => void) | ((message?: string) => boolean)
```

### useDisplayMedia

Hook to capture the contents of a display. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDisplayMedia)
```tsx
useDisplayMedia(): [MediaStream | undefined, (options?: TDisplayMediaStreamOptions) => Promise<void>, () => void]
```

### useDocumentPIP

Hook to use Document PIP [(Document-Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDocumentPIP)
```tsx
useDocumentPIP({ options: { inheritCSS, window: wind } = { window: { height: 300, width: 450 } }, onOpen, onOpened, onClose, onError }: UseDocumentPIPProps): UseDocumentPIPResult
```

### useEventSource

Hook to handle an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useEventSource)
```tsx
useEventSource<T>({ url, opts, events, immediateConnection, onOpen, onError, onMessage }: UseEventSourceProps): UseEventSourceResult<T>
```

### useEyeDropper

Hook to use [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useEyeDropper)
```tsx
useEyeDropper({ onStart, onFinish }: { onStart?: () => void, onFinish?: (result: `#${string}`) => void } = {})
```

### useFPS

Hook to detect FPS (Frames per second). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFPS)
```tsx
useFPS({ everySeconds, windowSize }:UseFPSProps={windowSize:10, everySeconds:.5}): UseFPSResult
```

### useFetch

Hook to use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with more control and the possibility to execute request with suspense support. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFetch)
```tsx
useFetch<T>(url: RequestInfo | URL, { suspensable, onError, onLoading, ...rest }: RequestInit & { suspensable?: boolean, onLoading?: (loading: boolean) => void, onError?: (err: unknown) => void } = {}): [T|undefined, (conf?: RequestInit) => Promise<void>, boolean, unknown]
```

### useFullscreen

Hook to use [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFullscreen)
```tsx
useFullscreen<T extends Element>(onEnter?: () => void|Promise<void>, onChange?: (evt: Event) => void, onExit?: () => void|Promise<void>): [boolean, RefCallback<T>, (opts?: FullscreenOptions) => Promise<void>, () => Promise<void>]
```

### useGeolocation

Hook to use user's geographic location. Refer to [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useGeolocation)
```tsx
useGeolocation({mode, locationOptions, onError}: { locationOptions?: PositionOptions, mode: "observe" | "current" | "manual", onError?: (error: GeolocationPositionError) => void }): [GeoLocationObject, ()=>Promise<void>, ()=>Promise<()=>void>]
```

### useIdleCallback

Hook to invoke a callback when the browser is idle. Refer to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useIdleCallback)
```tsx
useIdleCallback(cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void) => void, opts?: {timeout: number , unsupportedBehavior?: "animationFrame" | "timeout" | "immediatly" }): [boolean, () => void, () => void]
```

### useInterval

Hook to handle setInterval timer function with the possibility to clear and promisify execution. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useInterval)
```tsx
useInterval<TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]
```

### useLock

Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useLock)
```tsx
useLock<T>(name?: string, cb?: LockGrantedCallback, opts?: LockOptions): [(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>, () => Promise<LockManagerSnapshot>]
```

### useMediaDevices

Hook to use [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface methods, that give access to any hardware source of media data. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useMediaDevices)
```tsx
useMediaDevices(action: UseMediaDevicesProps): UseMediaDevicesResult
```

### useMediaQuery

Hook to handle CSS mediaQuery. It returns an object with __matches__ and __media__ properties and receives an optional _onChange_ function to handle _MediaQueryListEvent change_ event. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useMediaQuery)
```tsx
useMediaQuery(mediaQuery: string, onChange?: (evt: MediaQueryListEvent) => void ): {matches: boolean, media: string}
```

### usePIP

Hook to use PIP [(Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePIP)
```tsx
usePIP({ onOpen, onOpened, onClose, onError, target }: UsePIPProps): UsePIPResult
```

### usePermission

Hook to query the status of API permissions attributed to the current context. Refer to [PermissionAPI](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePermission)
```tsx
usePermission(permission: TPermissionName): UsePermissionResult
```

### usePopover

Hook to use [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePopover)
```tsx
usePopover({ mode, onBeforeToggle, onToggle }: UsePopoverProps): UsePopoverResult
```

### usePromiseSuspensible

Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePromiseSuspensible)
```tsx
usePromiseSuspensible<T extends (...args: unknown[]) => Promise<unknown>>(promise: T, deps: DependencyList): Awaited<ReturnType<T>>
```

### usePublishSubscribe

Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePublishSubscribe)
```tsx
usePublishSubscribe<T>(topic: string): [(listener: (value?: T) => Promise<void> | void) => () => void, (value?: T) => Promise<void> ]
```

### useRaf

Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame]. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useRaf)
```tsx
useRaf<T extends unknown[]>(cb: (timer: number, repeat: ()=>void, ...args: T) => void): [(...args: T)=>void, ()=>void]
```

### useReducedMotion

Hook to detect if user prefers to reduce motion. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useReducedMotion)
```tsx
useReducedMotion(): boolean
```

### useRemotePlayback

Hook to use [RemotePlayback API](https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useRemotePlayback)
```tsx
useRemotePlayback<T extends HTMLMediaElement>({ onConnecting, onConnect, onDisconnect, onError }: UseRemotePlaybackProps={}): UseRemotePlaybackResult<T>
```

### useScreenWakeLock

Hook to use [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useScreenWakeLock)
```tsx
useScreenWakeLock(onRelease?: (evt?: Event) =>void): [{isSupported: boolean, type: "screen"|null, isActive: boolean|null}, ()=>Promise<void>, ()=>Promise<void>]
```

### useScript

Hook to dinamically load an external script like Google Analitycs. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useScript)
```tsx
useScriptuseScript: UseScript = function (attributes, options)
```

### useShare

Hook to use [Web Share Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useShare)
```tsx
useShare(): {isSupported: boolean, share: (data?: ShareData)=>Promise<void>}
```

### useSpeechRecognition

Hook to use _SpeechRecognition API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useSpeechRecognition)
```tsx
useSpeechRecognition({ alreadyStarted, defaultConfig, onAudioStart, onAudioEnd, onEnd, onError, onNoMatch, onResult, onSoundStart, onSoundEnd, onSpeechStart, onSpeechEnd, onStart }: UseSpeechRecognitionProps): [SpeechRecognitionState, (config?: SpeechRecognitionConfig) => void, () => void, (resultAlso?: boolean) => void]
```

### useSpeechSynthesis

Hook to use _SpeechSynthesis API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useSpeechSynthesis)
```tsx
useSpeechSynthesis(opts?: UseSpeechSynthesisProps): ReturnType<UseSpeechSynthesis>
```

### useTextSelection

Hook to track text selection. Refers to [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTextSelection)
```tsx
useTextSelection({ target, onStart, onChange, onEnd }: { target?: RefObject<HTMLElement> | HTMLElement, onStart?: (evt: Event) => void, onChange?: (evt: Event) => void, onEnd?: (evt: Event) => void } = {}): TextSelection | null
```

### useThrottle

Hook to limit function execution frequency. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useThrottle)
```tsx
useThrottle<T extends unknown[]>(fn: (...args: T) => void | Promise<void> , opts: { delay?: number, waitFn?: boolean }): [(...args: T) => void, () => void, (...args: T) => void]
```

### useTimeout

Hook to handle setTimeout timer function with the possibility to clear and promisify execution. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTimeout)
```tsx
useTimeout<TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]
```

### useTitle

Hook to handling app page title. It works _outside Component_ also and it returns array of two functions to read and write title. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTitle)
```tsx
useTitle(title?: string): [() => string, (title: string) => void]
```

### useVibrate

Hook to use device vibration hardware. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useVibrate)
```tsx
useVibrate():{isSupported: boolean, vibrate: ((pattern: number | number[]) => void), cancel: ()=>void}
```

### useVideo

Hook to use an HTML video element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useVideo)
```tsx
useVideocreateHTMLMediaHook<HTMLVideoElement>("video");
```

### useWebSocket

Hook for creating and managing a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to a server, as well as for sending and receiving data on the connection. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebSocket)
```tsx
useWebSocket<T = string | ArrayBuffer | Blob> ({ url, protocols, binaryType, onOpen, onMessage, onError, onClose, immediateConnection, bufferingData, autoReconnect }: UseWebSocketProps): UseWebSocketResult<T>
```

### useWebWorker

Hook to use [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), handling registration and communication. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebWorker)
```tsx
useWebWorker({ url, options, onMessage, onError, onMessageError }: UseWebWorkerProps): UseWebWorkerResult
```

### useWebWorkerFn

Hook to run expensive functions using a Web Worker without blocking the UI handling execution as Promise. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebWorkerFn)
```tsx
useWebWorkerFn<T extends (...args: unknown[]) => unknown>(fn: UseWebWorkerFnProps<T>["fn"], deps?: UseWebWorkerFnProps<T>["deps"]): UseWebWorkerFnResult<T>
```

## COMPONENTS

### ErrorBoundary

Wrapper component that lets you display some fallback UI when your application throws an error during rendering. [See demo](https://ndriadev.github.io/react-tools/#/components/ErrorBoundary)
```tsx
class ErrorBoundary extends Component<PropsWithChildren<{ onCatch?: (error: Error, info: ErrorInfo) => void, fallback?: ReactNode | ((error: Error, info: ErrorInfo, retry: () => void) => ReactNode) | ((props: { error: Error, info: ErrorInfo, retry: () => void })=>JSX.Element)}>, { hasError: boolean, error?:Error, info?: ErrorInfo }>
```

### For

Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)
```tsx
For = memo(<T extends unknown>({ of, children, filter, map, sort, elementKey, fallback }: ForProps<T>)
```

### LazyComponent

Component Wrapper to lazy loading a Component. [See demo](https://ndriadev.github.io/react-tools/#/components/LazyComponent)
```tsx
LazyComponent<T extends { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }>({ factory, componentName, fallback, beforeLoad, afterLoad }: { factory: () => Promise<T>, componentName?: string, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void })
```

### Show

Generic component used to conditional render part of the view: it renders _children_ when the _when_ prop is truthy, otherwise the _fallback_ prop, if it is present, or null. [See demo](https://ndriadev.github.io/react-tools/#/components/Show)
```tsx
Show<T extends unknown>({ when, fallback, children }: PropsWithChildren<{ when: T|boolean|undefined|null, fallback?: ReactNode }>)
```

### SwitchCase

It works like switch-case construct. It useful for when there are more than 2 mutual exclusive conditions. [See demo](https://ndriadev.github.io/react-tools/#/components/SwitchCase)
```tsx
SwitchCaseSwitch = ({ children, fallback }: PropsWithChildren<{ fallback?: ReactNode }>)
```

## UTILS

### alphanumericCompare

Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://ndriadev.github.io/react-tools/#/utils/alphanumericCompare)
```tsx
alphanumericCompare(string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", opts?: Intl.CollatorOptions)
```

### changeStringCase

Function that given a string, a case type, and an optional delimiter, returns the string in the specified case or empty string. [See demo](https://ndriadev.github.io/react-tools/#/utils/changeStringCase)
```tsx
changeStringCase({string, caseType, delimiter}:{ string?: string, caseType: "pascalCase" | "snakeCase" | "kebabCase" | "camelCase", delimiter?: "upperCase" | "lowerCase" | string}): string
```

### defaultSerializer

Function to serialize any type of value. [See demo](https://ndriadev.github.io/react-tools/#/utils/defaultSerializer)
```tsx
defaultSerializer<T>(target: T)
```

### detectBrowser

It detects used browser or return __"No detection"__. [See demo](https://ndriadev.github.io/react-tools/#/utils/detectBrowser)
```tsx
detectBrowser(): "chrome" | "firefox" | "safari" | "opera" | "edge" | "No detection"
```

### getBase64

Function to obtain a Base64 from value specified if supported, otherwise throw an Error. [See demo](https://ndriadev.github.io/react-tools/#/utils/getBase64)
```tsx
getBase64<T>(target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[], options?: ToDataURLOptions | UseBase64ObjectOptions<T>): Promise<string>
```

### getKeyObjectFromValue

Function that given an object and a value, returns the corrispondent key of this value or undefined. [See demo](https://ndriadev.github.io/react-tools/#/utils/getKeyObjectFromValue)
```tsx
getKeyObjectFromValue<T extends Record<string, unknown>, E extends string|number|symbol = keyof T>(object: T, value?: unknown): E | undefined
```

### getObjectFromDottedString

Function that, given a path, a value and an optional object, returns an object with as many properties as there are in the path, assigning the value passed to the last one specified. [See demo](https://ndriadev.github.io/react-tools/#/utils/getObjectFromDottedString)
```tsx
getObjectFromDottedString<T, E extends Record<string, unknown>>(path: string, value: T, object?: E): E
```

### hotKeyHandler

Utility function for _onKeyDown_ and _onKeyUp_ events handler that supports keys combination. [See demo](https://ndriadev.github.io/react-tools/#/utils/hotKeyHandler)
```tsx
hotKeyHandler(hotKeys: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>): (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void
```

### isAsync

It detects if a function is asynchronous. [See demo](https://ndriadev.github.io/react-tools/#/utils/isAsync)
```tsx
isAsync<T extends unknown[], E = unknown>(fn: E | Promise<E> | ((...args: T)=> E | Promise<E>)): boolean
```

### isClient

It detects if code is running on client. [See demo](https://ndriadev.github.io/react-tools/#/utils/isClient)
```tsx
isClient(): boolean
```

### isDeepEqual

It returns true if the params are equal in depth. [See demo](https://ndriadev.github.io/react-tools/#/utils/isDeepEqual)
```tsx
isDeepEqual(objA: unknown, objB: unknown, map = new WeakMap()):boolean
```

### isMouseEvent

It returns true if the event param is of MouseEvent type. [See demo](https://ndriadev.github.io/react-tools/#/utils/isMouseEvent)
```tsx
isMouseEvent(event: SyntheticEvent): boolean
```

### isShallowEqual

It returns true if the params are equal until first level depth. [See demo](https://ndriadev.github.io/react-tools/#/utils/isShallowEqual)
```tsx
isShallowEqual(objA: unknown, objB: unknown): boolean
```

### isTouchEvent

It returns true if the event param is of TouchEvent type. [See demo](https://ndriadev.github.io/react-tools/#/utils/isTouchEvent)
```tsx
isTouchEvent(event: SyntheticEvent | Event): boolean
```

### lazy

Wrapper around _React.lazy_ that works also with component without default export and with possibility to execute a function before and after component loading. [See demo](https://ndriadev.github.io/react-tools/#/utils/lazy)
```tsx
lazy<T extends ComponentType<unknown>>(load: () => Promise<{ [k:string]: T }>, opts: { componentName?: string, beforeLoad?: () => void, afterLoad?: () => void } = {}): LazyExoticComponent<T>
```

### mergeObjects

Function that, given two objects version, merges them into a single one. Via an optional parameter _forceUndefinedValue_ you can define how undefined values are treated. [See demo](https://ndriadev.github.io/react-tools/#/utils/mergedObject)
```tsx
mergeObjects<T extends object>(oldObj: T, newObj: RecursivePartial<T>, forceUndefinedValue?: boolean): T
```

### removePropertiesFromArrayObjects

Function that, given an array of objects and a property or an array of properties, return a new array without specified properties. [See demo](https://ndriadev.github.io/react-tools/#/utils/removePropertiesFromArrayObjects)
```tsx
removePropertiesFromArrayObjects<T, E extends string | number | symbol = keyof T>(array: T[], property: E | E[]): Omit<T, E>[]
```

### uniqueElementsArray

Function that given one or more array of object, returns a single array with unique elements by a specified property, an array of properties or _none_. [See demo](https://ndriadev.github.io/react-tools/#/utils/removeDuplicatedFromArray)
```tsx
uniqueElementsArray<T extends string | number | boolean | ((...args: unknown[]) => unknown) | bigint | object>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[]
```

## TYPES

## Utility Types

Typescript utility types for specified use cases.

### NestedKeyOf

Utility type that constructs a type by picking all properties and nested proprerties from __`T`__ in form _`property.nestedProprerty`_.
```tsx
type NestedKeyOf<T extends Record<string, unknown>>
```

### ErrorModel

Utility type that constructs an object from __`T`__ and whose property values are _`boolean`_.
```tsx
type ErrorModel<T extends object>
```

### SelectivePartial

Utility type that works like __Partial__ but allows to specify which properties set to optional.
```tsx
type SelectivePartial<T extends object, E extends keyof T>
```

### RecursivePartial

Utility type that works like __Partial__ but set nested properties to optional also.
```tsx
type RecursivePartial<T extends object>
```

### Optional

Utility type that constructs a type that is __`T`__ or __`E`__, if specified otherwise __`null`__.
```tsx
type Optional<T = unknown, E = null>
```

### DependencyListTyped

Utility type that works like __DependencyList__ react type but it can be specified dependencies list element types.
```tsx
type DependencyListTyped<T = unknown>
```

### Union

Utility type that given an array constructs union type from array elements type.
```tsx
type Union<T extends unknown[]>
```

### ExtractTail

Utility type that given an array extracts a new array with all elements from array expect first.
```tsx
type ExtractTail<T extends unknown[]>
```

### ExtractMiddle

Utility type that given an array extracts a new array with all elements from array expect first and last.
```tsx
type ExtractMiddle<T extends unknown[]>
```

### ExtractHead

Utility type that given an array extracts a new array with all elements from array expect last.
```tsx
type ExtractHead<T extends unknown[]>
```

### PartialRecord

Utility type that constructs a record with all properties set to optional.
```tsx
type PartialRecord<K extends keyof any, T>
```

### ArrayMinLength1

Utility type that constructs an array of __`T`__ with one element at least.
```tsx
type ArrayMinLength1<T>
```

### LanguageBCP47Tags

Utility type for Language BCP-47 tags.
```tsx
type LanguageBCP47Tags
```

### TypedArray

Utility type for __`Typed Arrays`__.
```tsx
type TypedArray
```


## ESLint configuration
To validate dependencies of custom hooks like `useMemoCompare`, configure `exhaustive-deps` with the `additionalHooks` option:
```js
{
  	"rules": {
    	// ...
    	"react-hooks/exhaustive-deps": [
			"warn", {
				"additionalHooks": "(useMemoCompare|useMemoDeepCompare|useCallbackCompare|useCallbackDeepCompare|useLayoutEffectCompare|useLayoutEffectDeepCompare|useInsertionEffectCompare|useInsertionEffectDeepCompare|useEffectCompare|useEffectDeepCompare|usePromiseSuspensible)"
  		  	}
		]
	}
}
```

## ToDo


- Hooks/State
	- [ ] useSignal (like useProxyStore)
	- [ ] createSignal (like createProxyStore)
	- [ ] useProxyStore (proxy based)
	- [ ] createProxyStore (proxy based)

- Hooks/Events
	- [ ] useDrag (need polyfill for mobile)
	- [ ] useDrop (need polyfill for mobile)

- Hooks/APIDOM
	- [ ] useIndexedDB (refer to api)
	- [ ] useIdleDetection (not work yet)

- Components
	- [ ] ImageOpt


## License

React-Tools is licensed under a [MIT License](./LICENSE).
