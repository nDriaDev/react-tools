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
	- [ ] useDerivedState (https://hackernoon.com/whats-the-right-way-to-fetch-data-in-react-hooks-a-deep-dive-2jc13230)
	- [ ] useStateValidator (???)
	- [ ] useStore
	- [ ] createStore (example: https://github.com/streamich/react-use/blob/master/src/factory/createGlobalState.ts)
 	- [ ] usePubSubStore (with pusSub model)
	- [ ] useBroadcast (refer to https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)

- __LIFECYCLE__
	- [x] useEffectCompare
	- [x] useEffectDeepCompare
	- [x] useEffectOnce
	- [x] useLayoutEffectCompare
	- [x] useLayoutEffectDeepCompare
	- [x] useLayoutEffectOnce
	- [x] useRerender
	- [x] useIsMounted
	- [ ] useInsertionEffect (polyfill???)
	- [ ] useDeferredValue (polyfill - an idea can be use setTimeout inside useEffect or this https://lilibraries.github.io/hooks/useDelayedValue/)
	- [ ] useLogger

- __PERFORMANCE__
	- [x] useCallbackCompare
	- [x] useCallbackDeepCompare
	- [x] useMemoizedFunction
	- [x] useMemoCompare
	- [x] useMemoDeepCompare
	- [ ] useMergedRef
	- [ ] useObjectRef
	- [ ] useArrayRef
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
	- [ ] useBeforeUnload — shows browser alert when user try to reload or close the page.
	- [ ] useKeysEvents
	- [ ] useHotKeys (https://mantine.dev/hooks/use-hotkeys/)
	- [ ] useOrientation
	- [ ] useImageOnLoad
	- [ ] usePinchZoom
	- [ ] useInfiniteScroll
	- [ ] useDragAndDrop (check for mobile usage)


- __API DOM__
	- [x] usePublishSubscribe
	- [x] useScript
	- [x] useDebounce
	- [x] useThrottle
	- [x] useActiveElement
	- [x] useRaf (with a reference to call itself again)
	- [x] useTimeout
	- [x] useInterval
	- [x] useTextSelection
	- [x] useClipboard
	- [x] useMediaQuery
	- [x] useColorScheme
	- [x] useReducedMotion
	- [x] useTitle
	- [x] useIdle
	- [x] useFullscreen (check browser compatibility)
	- [x] useBattery
	- [x] useGeolocation
	- [x] useShare
	- [x] useEyeDropper
	- [ ] useSpeech (https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance#examples)
	- [ ] useFetch (with suspense ???)
	- [ ] useAsync
	- [ ] useAudio (???)
	- [ ] useVideo (???)
	- [ ] useMedia
	- [ ] useScreenShare
	- [ ] useMediaDevices
	- [ ] useMediaStream
	- [ ] useDeviceMotion (??? mobile)
	- [ ] useVibrate (??? mobile)
	- [ ] useObservable — tracks latest value of an Observable
	- [ ] useLock - (https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request)

- __UTILS__
	- [x] isShallowEqual
	- [x] isDeepEqual
	- [x] isMouseEvent
	- [x] isTouchEvent
	- [x] isClient
	- [x] isAsync
	- [ ] lazy: lazy react-like customized
	- [ ] fetch-client (???ARTS-like)

- __COMPONENT__
	- [ ] Show component to render or not a component by a condition. Props: when, fallback, keyed. Keyed is a boolean and needs to avoid rerenders children when it is a function.
	- [ ] Switch and Match components with fallback and when props
	- [ ] For: A referentially keyed loop with efficient updating of only changed items. The callback takes the current item as the first argument
	- [ ] Index: Non-keyed list iteration (rendered nodes are keyed to an array index). This is useful when there is no conceptual key, like if the data consists of primitives and it is the index that is fixed rather than the value.
	- [ ] RestrictedRoute (maybe)
	- [ ] ErrorBoundary (??)
	- [ ] Suspense: Suspence compontent react-like for async component
	- [ ] Dynamic: This component lets you insert an arbitrary Component or tag and passes the props through to it.

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
