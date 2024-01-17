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
	- [ ] useSignal (https://medium.com/@personal.david.kohen/the-quest-for-signals-in-react-usestate-on-steroids-71eb9fc87c14)
	- [ ] useStore
	- [ ] createStore (example: https://github.com/streamich/react-use/blob/master/src/factory/createGlobalState.ts)
 	- [ ] usePubSubStore (with pusSub model)
	- [ ] useBroadcast (refer to https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API - https://vueuse.org/core/useBroadcastChannel/)

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
	- [x] useEventListener
	- [x] useEventDispatcher
	- [x] usePerformAction (se non si riesce a fare il polyfill di useDeferredValue, valutare di farlo utilizzando requestIdleCallback)
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
	- [ ] useContextMenu
	- [ ] useInfiniteScroll
	- [ ] useDragAndDrop (check for mobile usage)


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
	- [ ] useMedia
	- [ ] useDevicesList (https://vueuse.org/core/useDevicesList/)
	- [ ] useDisplayMedia
	- [ ] useScreenShare
	- [ ] useMediaDevices
	- [ ] useMediaStream
	- [ ] useObservable — tracks latest value of an Observable
   	- [ ] usePointerTouchSwipe (https://vueuse.org/core/usePointerSwipe/ https://vueuse.org/core/useSwipe/)
	- [ ] useWebWorker (https://vueuse.org/core/useWebWorker/)
	- [ ] useWebWorkerFn (https://vueuse.org/core/useWebWorkerFn/)
	- [ ] useIndexedDB
	- [ ] useFetch (with suspense ???)
	- [ ] useLock - (https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request)
	- [ ] useIdleDetection (not work yet. https://developer.mozilla.org/en-US/docs/Web/API/Idle_Detection_API)

- __UTILS__
	- [x] isShallowEqual
	- [x] isDeepEqual
	- [x] isMouseEvent
	- [x] isTouchEvent
	- [x] isClient
	- [x] isAsync
	- [x] hotKeyHandler
	- [ ] lazy: lazy react-like customized
	- [ ] fetch-client (???ARTS-like)
	- [ ] useBase64 (https://vueuse.org/core/useBase64/)

- __COMPONENT__
	- [ ] Show component to render or not a component by a condition. Props: when, fallback, keyed. Keyed is a boolean and needs to avoid rerenders children when it is a function.
	- [ ] Switch and Match components with fallback and when props
	- [ ] For: A referentially keyed loop with efficient updating of only changed items. The callback takes the current item as the first argument
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
			"additionalHooks": "(useMemoCompare|useMemoDeepCompare|useCallbackCompare|useCallbackDeepCompare|useLayoutEffectCompare|useLayoutEffectDeepCompare|useInsertionEffectCompare|useInsertionEffectDeepCompare|useEffectCompare|useEffectDeepCompare)"
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
