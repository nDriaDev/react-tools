# TODO
- __STATE__
	- [x] usePrevious
	- [x] useStateGetReset
	- [x] useStateHistory
	- [x] useStateHistoryGetter
	- [x] useReducerGetReset
	- [x] useReducerHistory
	- [x] useReducerHistoryGetter
	- [-] useLocalStorage (Manca documentazione)
	- [ ] useSessionStorage
	- [ ] useMap
	- [ ] useSet
	- [ ] useArray
- __EFFECTS__
	- [x] useCallbackCompare
	- [x] useCallbackDeepCompare
	- [x] useMemoizedFunction
	- [x] useMemoCompare
	- [x] useMemoDeepCompare
	- [x] useEffectCompare
	- [x] useEffectDeepCompare
	- [x] useLayoutEffectCompare
	- [x] useLayoutEffectDeepCompare
	- [ ] useEffectAfterMount (only if it is possible to detect react strict mode)
	- [ ] useIsMounted
	- [ ] useUpdate (force a rerender)
	- [ ] usePerformAction (thinking about name. This hook force to perform an action (like focusing an element) immediatly after a rerender)
- __EVENTS__
	- [ ] useDebounce
	- [ ] useThrottle
	- [x] useEventListener
	- [ ] useActiveElement
	- [ ] useSize
	- [ ] useHover
	- [ ] useIntersectionObserver
	- [ ] useMutationObserver
	- [ ] useTimeout
	- [ ] useInterval
	- [ ] useMediaQuery
	- [ ] useResponsive
	- [ ] useClickOutside
	- [ ] useScrollIntoView
	- [ ] useKeysEvents
	- [ ] useMouse
	- [ ] useOnline
	- [ ] useInfiniteScroll
	- [ ] useTextSelection
	- [ ] useDocumentVisibility
	- [ ] useDragAndDrop (check for mobile usage)
	- [ ] useFullscreen (check browser compatibility)
	- [ ] useInViewport (with area ratio of element: check if is equal to useIntersectionObserver)
	- [ ] useLongPress
	- [x] useEventDispatcher
	- [x] usePubSubModel

- __DOM API__
	- [ ] useCoptyToClipboard
	- [ ] useColorScheme
	- [ ] useTitle (change document.title but also document.head.title nodeElement)
	- [ ] useFetch
	- [ ] useAsync
	- [ ] useImageOnLoad
	- [ ] useScript
	- [ ] useMediaStream
	- [ ] useScreenShare
	- [ ] useNetwork
	-

- __UTILS__
	- [x] isShallowEqual
	- [x] isDeepEqual
	- [x] isMouseEvent
	- [x] isTouchEvent
	- [ ] isClient (thinking if it is necessary)

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
