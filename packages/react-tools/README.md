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
	- [x] useUpdate
	- [x] useIsMounted

- __PERFORMANCE__
	- [x] useCallbackCompare
	- [x] useCallbackDeepCompare
	- [x] useMemoizedFunction
	- [x] useMemoCompare
	- [x] useMemoDeepCompare

- __EVENTS__
	- [x] useEvents
	- [x] useEventListener
	- [x] useEventDispatcher
	- [x] usePerformAction
	- [ ] useIntersectionObserver
	- [ ] useMutationObserver
	- [ ] useKeysEvents
	- [ ] useSize
	- [ ] useHover
	- [ ] useMediaQuery
	- [ ] useResponsive
	- [ ] useClickOutside
	- [ ] useScrollIntoView
	- [ ] useMouse
	- [ ] useInfiniteScroll
	- [ ] useDragAndDrop (check for mobile usage)
	- [ ] useInViewport (with area ratio of element: check if is equal to useIntersectionObserver)
	- [ ] useLongPress
	- [ ] useDeferredValue (polyfill - an idea can be use setTimeout inside useEffect)

- __API DOM__
	- [x] usePublishSubscribe
	- [x] useScript
	- [x] useDebounce
	- [x] useThrottle
	- [-] useActiveElement
	- [ ] useTimeout
	- [ ] useInterval
	- [ ] useTextSelection
	- [ ] useDocumentVisibility
	- [ ] useCoptyToClipboard
	- [ ] useColorScheme
	- [ ] useTitle (change document.title but also document.head.title nodeElement)
	- [ ] useFetch
	- [ ] useAsync
	- [ ] useImageOnLoad
	- [ ] useMediaStream
	- [ ] useScreenShare
	- [ ] useNetwork
	- [ ] useOnline
	- [ ] useFullscreen (check browser compatibility)

- __UTILS__
	- [x] isShallowEqual
	- [x] isDeepEqual
	- [x] isMouseEvent
	- [x] isTouchEvent
	- [x] isClient
	- [x] isAsync


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
