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
	- [ ] useStore
	- [ ] createStore

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
	- [ ] useDeferredValue (polyfill - an idea can be use setTimeout inside useEffect)

- __PERFORMANCE__
	- [x] useCallbackCompare
	- [x] useCallbackDeepCompare
	- [x] useMemoizedFunction
	- [x] useMemoCompare
	- [x] useMemoDeepCompare
	- [x] useLazyRef
	- [x] useId

- __EVENTS__
	- [x] useEvents
	- [x] useEventListener
	- [x] useEventDispatcher
	- [x] usePerformAction
	- [x] useDocumentVisibility
	- [x] useHover
	- [x] useResponsive
	- [x] useClickOutside
	- [x] useNetwork
	- [x] useOnline
	- [x] useResizeObserver
	- [ ] useIntersectionObserver
	- [ ] useMutationObserver
	- [ ] useSize (=useMeasuree?)
	- [ ] useScrollIntoView
	- [ ] useMouse
	- [ ] useLongPress
	- [ ] useKeysEvents
	- [ ] useOrientation
	- [ ] useImageOnLoad
	- [ ] usePinchZoom
	- [ ] useInViewport (with area ratio of element: check if is equal to useIntersectionObserver)
	- [ ] useIsVisibile (??? check if differ from useInViewport)
	- [ ] useInfiniteScroll
	- [ ] useDragAndDrop (check for mobile usage)


- __API DOM__
	- [x] usePublishSubscribe
	- [x] useScript
	- [x] useDebounce
	- [x] useThrottle
	- [x] useActiveElement
	- [x] useTimeout
	- [x] useInterval
	- [x] useTextSelection
	- [x] useClipboard
	- [x] useMediaQuery
	- [x] useColorScheme
	- [x] useTitle (change document.title but also document.head.title nodeElement)
	- [ ] useFullscreen (check browser compatibility)
	- [ ] useLanguage (?)
	- [ ] useScreenShare
	- [ ] useFetch (with suspense ???)
	- [ ] useAsync
	- [ ] useMediaStream
	- [ ] useObservable — tracks latest value of an Observable

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
