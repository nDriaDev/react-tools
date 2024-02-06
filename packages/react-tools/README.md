# TODO
- __STATE__
	- [x] createPubSubStore
	- [x] useArray
	- [x] useDerivedState
	- [x] useLocalStorageState
	- [x] useMap
	- [x] usePrevious
	- [x] useProxyState
	- [x] useReducerGetReset
	- [x] useReducerHistory
	- [x] useReducerHistoryGetter
	- [x] useSessionStorageState
	- [x] useSet
	- [x] useStateGetReset
	- [x] useStateHistory
	- [x] useStateHistoryGetter
	- [x] useStateValidator
	- [x] useSyncExternalStore
	- [ ] useSignal (TODO: like useProxyStore)
	- [ ] createSignal (TODO: like createProxyStore)
	- [ ] useProxyStore (TODO: proxy based)
	- [ ] createProxyStore (TODO: proxy based)

- __LIFECYCLE__
	- [x] useDeferredValue
	- [x] useEffectCompare
	- [x] useEffectDeepCompare
	- [x] useEffectOnce
	- [x] useIsMounted
	- [x] useLayoutEffectCompare
	- [x] useLayoutEffectDeepCompare
	- [x] useLayoutEffectOnce
	- [x] useLogger
	- [x] useRerender

- __PERFORMANCE__
	- [x] useCallbackCompare
	- [x] useCallbackDeepCompare
	- [x] useId
	- [x] useLazyRef
	- [x] useMemoCompare
	- [x] useMemoDeepCompare
	- [x] useMemoizedFn
	- [x] useMergedRef

- __EVENTS__
	- [x] useBeforeUnload
	- [x] useClickOutside
	- [x] useContextMenu
	- [x] useDocumentVisibility
	- [x] useDoubleClick
	- [x] useEventDispatcher
	- [x] useEventListener
	- [x] useEvents
	- [x] useHotKeys
	- [x] useHover
	- [x] useInfiniteScroll
	- [x] useIntersectionObserver
	- [x] useIsOnline
	- [x] useLongPress
	- [x] useMeasure
	- [x] useMouse
	- [x] useMutationObserver
	- [x] useNetwork
	- [x] usePerformAction
	- [x] usePinchZoom
	- [x] usePointerLock
	- [x] useResizeObserver
	- [x] useResponsive
	- [x] useScreen
	- [x] useScrollIntoView
   	- [x] useSwipe
	- [x] useVisible
	- [ ] useDrag(TODO: need polyfill for mobile)
	- [ ] useDrop(TODO: need polyfill for mobile)

- __API DOM__
	- [x] useActiveElement
	- [x] useAnimation
	- [x] useAudio
	- [x] useBattery
	- [x] useBluetooth
	- [x] useBroadcastChannel
	- [x] useClipboard
	- [x] useColorScheme
	- [x] useDebounce
	- [x] useDeviceMotion
	- [x] useDeviceOrientation
	- [x] useDialogBox
	- [x] useDisplayMedia
	- [x] useDocumentPIP
	- [x] useEventSource
	- [x] useEyeDropper
	- [x] useFPS
	- [x] useFetch
	- [x] useFullscreen
	- [x] useGeolocation
	- [x] useIdleCallback
	- [x] useInterval
	- [x] useLock
	- [x] useMediaDevices (??? mobile)
	- [x] useMediaQuery
	- [x] usePIP
	- [x] usePermission
	- [x] usePopover
	- [x] usePromiseSuspensible
	- [x] usePublishSubscribe
	- [x] useRaf
	- [x] useReducedMotion
	- [x] useRemotePlayback
	- [x] useScreenWakeLock
	- [x] useScript
	- [x] useShare
	- [x] useSpeechRecognition
	- [x] useSpeechSynthesis
	- [x] useTextSelection
	- [x] useThrottle
	- [x] useTimeout
	- [x] useTitle
	- [x] useVibrate
	- [x] useVideo
	- [x] useWebSocket
	- [x] useWebWorker
	- [x] useWebWorkerFn
	- [ ] useIndexedDB (TODO: refer to api)
	- [ ] useIdleDetection (TODO: not work yet)

- __UTILS__
	- [x] alphanumericCompare
	- [x] changeStringCase
	- [x] defaultSerializer
	- [x] detectBrowser
	- [x] getBase64
	- [x] getKeyObjectFromValue
	- [x] getObjectFromDottedString
	- [x] hotKeyHandler
	- [x] isAsync
	- [x] isClient
	- [x] isDeepEqual
	- [x] isMouseEvent
	- [x] isShallowEqual
	- [x] isTouchEvent
	- [x] lazy
	- [x] mergeObjects
	- [x] removeDuplicatedFromArrayObjects
	- [x] removePropertiesFromArrayObjects

- __COMPONENT__
	- [x] ErrorBoundary
	- [x] For
	- [x] Lazy
	- [x] Show
	- [x] SwitchCase
	- [ ] ImageOpt (TODO:)

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
