# TODO
- __STATE__
	- [x] usePrevious
	- [x] useStateGetReset
	- [x] useStateHistory
	- [x] useStateHistoryGetter
	- [x] useReducerGetReset
	- [x] useReducerHistory
	- [x] useReducerHistoryGetter
	- [x] useLocalStorage
	- [x] useSessionStorage
	- [x] useMap
	- [x] useSet
	- [x] useArray
	- [x] useProxyState
	- [x] useSyncExternalStore
	- [x] useDerivedState
	- [ ] useStateValidator (???)
	- [ ] useObservable — (https://netbasal.com/javascript-observables-under-the-hood-2423f760584)
	- [ ] useSignal (https://medium.com/@personal.david.kohen/the-quest-for-signals-in-react-usestate-on-steroids-71eb9fc87c14)
	- [ ] createSignal (https://medium.com/@personal.david.kohen/the-quest-for-signals-in-react-usestate-on-steroids-71eb9fc87c14)
	- [ ] usePubSubStore (with pusSub model)
	- [ ] createPubSubStore (with pusSub model)
	- [ ] useProxyStore (TODO: https://github.com/streamich/react-use/blob/master/src/factory/createGlobalState.ts)
	- [ ] createProxyStore (TODO: https://github.com/streamich/react-use/blob/master/src/factory/createGlobalState.ts)

- __LIFECYCLE__
	- [x] useEffectCompare
	- [x] useEffectDeepCompare
	- [x] useEffectOnce
	- [x] useLayoutEffectCompare
	- [x] useLayoutEffectDeepCompare
	- [x] useLayoutEffectOnce
	- [x] useRerender
	- [x] useIsMounted
	- [x] useDeferredValue
	- [x] useLogger

- __PERFORMANCE__
	- [x] useCallbackCompare
	- [x] useCallbackDeepCompare
	- [x] useMemoizedFunction
	- [x] useMemoCompare
	- [x] useMemoDeepCompare
	- [x] useMergedRef
	- [x] useLazyRef
	- [x] useId

- __EVENTS__
	- [x] useEvents
	- [x] useEventListener (edit to handle multiple type)
	- [x] useEventDispatcher
	- [x] usePerformAction
	- [x] useDocumentVisibility
	- [x] useHover
	- [x] useResponsive
	- [x] useClickOutside
	- [x] useNetwork
	- [x] useOnline
	- [x] useResizeObserver
	- [x] useIntersectionObserver
	- [x] useMutationObserver
	- [x] useMeasure
	- [x] useVisibile
	- [x] useScrollIntoView
	- [x] useMouse
	- [x] useLongPress
	- [x] useDoubleClick
	- [x] useBeforeUnload
	- [x] useScreen (orientation and ecc)
	- [x] useHotKeys
	- [x] usePinchZoom
	- [x] usePointerLock
	- [x] useContextMenu
   	- [x] useSwipe
	- [ ] useInfiniteScroll
	- [ ] useDrag(TODO: need polyfill for mobile)
	- [ ] useDrop(TODO: need polyfill for mobile)

- __API DOM__
	- [x] usePublishSubscribe
	- [x] useScript
	- [x] useDebounce
	- [x] useThrottle
	- [x] useActiveElement
	- [x] useRaf
	- [x] useTimeout
	- [x] useInterval
	- [x] useTextSelection
	- [x] useClipboard
	- [x] useMediaQuery
	- [x] useColorScheme
	- [x] useReducedMotion
	- [x] useTitle
	- [x] useIdleCallback
	- [x] useFullscreen
	- [x] useBattery
	- [x] useGeolocation
	- [x] useShare
	- [x] useEyeDropper
	- [x] useDialogBox
	- [x] useDeviceMotion
	- [x] useDeviceOrientation
	- [x] useVibrate (??? mobile)
	- [x] useBluetooth
	- [x] useScreenWakeLock
	- [x] useSpeechRecognition
	- [x] useSpeechSynthesis
	- [x] useFPS
	- [x] usePIP
	- [x] useDocumentPIP
	- [x] usePopover
	- [x] useRemotePlayback
	- [x] useAnimation
	- [x] useAudio
	- [x] useVideo
	- [x] useEventSource
	- [x] useWebSocket
	- [x] usePermission
	- [x] useMediaDevices
	- [x] useDisplayMedia
	- [x] useWebWorker
	- [x] useWebWorkerFn
	- [x] usePromiseSuspensible
	- [x] useFetch
	- [x] useLock
	- [x] useBroadcastChannel
	- [ ] useIndexedDB (TODO: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API?retiredLocale=it)
	- [ ] useIdleDetection (not work yet. https://developer.mozilla.org/en-US/docs/Web/API/Idle_Detection_API)

- __UTILS__
	- [x] isShallowEqual
	- [x] isDeepEqual
	- [x] isMouseEvent
	- [x] isTouchEvent
	- [x] isClient
	- [x] isAsync
	- [x] hotKeyHandler
	- [x] detectBrowser
	- [ ] lazy: lazy react-like customized
	- [x] defaultSerializer
	- [x] getBase64
	- [x] removePropertiesFromArrayObjects
	- [x] removeDuplicatedFromArrayObjects
	- [x] getKeyObjectFromValue
	- [x] getObjectFromDottedString
	- [x] mergeObjects
	- [x] alphanumericCompare
	- [x] changeStringCase

- __COMPONENT__
	- [ ] Show component to render or not a component by a condition. Props: when, fallback, keyed. Keyed is a boolean and needs to avoid rerenders children when it is a function.
	- [ ] Switch and Match components with fallback and when props
	- [ ] For/Each: A referentially keyed loop with efficient updating of only changed items. The callback takes the current item as the first argument (ref https://javascript.plainenglish.io/react-each-and-of-pattern-b00aa4305089)
	- [ ] Index: Non-keyed list iteration (rendered nodes are keyed to an array index). This is useful when there is no conceptual key, like if the data consists of primitives and it is the index that is fixed rather than the value.
	- [ ] RestrictedRoute (maybe)
	- [ ] ErrorBoundary (?? error event listener)
	- [ ] Suspense: Suspence compontent react-like for async component
	- [ ] Dynamic: This component lets you insert an arbitrary Component or tag and passes the props through to it.
	- [ ] ImageOpt (???)

## ESlint configuration
To validate dependencies of custom hooks like `useMemoCompare`, configure `exhaustive-deps` with the `additionalHooks` option
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

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
