export const GROUPS = ["Hooks", "Utils", "State", "Lifecycle", "Performance", "Events", "API DOM"] as const;
export const COMPONENTS = [
	//HOOKS
	[
		//STATE
		[
			"usePrevious",
			"useStateGetReset",
			"useStateHistory",
			"useStateHistoryGetter",
			"useReducerGetReset",
			"useReducerHistory",
			"useReducerHistoryGetter",
			"useLocalStorageState",
			"useSessionStorageState",
			"useMap",
			"useSet",
			"useArray",
			"useProxyState",
			"useSyncExternalStore",
		],
		//LIFECYCLE
		[
			"useEffectCompare",
			"useEffectDeepCompare",
			"useEffectOnce",
			"useLayoutEffectCompare",
			"useLayoutEffectDeepCompare",
			"useLayoutEffectOnce",
			"useRerender",
			"useIsMounted"
		],
		//PERFORMANCE
		[
			"useMemoizedFunction",
			"useMemoCompare",
			"useMemoDeepCompare",
			"useCallbackCompare",
			"useCallbackDeepCompare",
			"useLazyRef",
			"useId"
		],
		//EVENTS
		[
			"usePerformAction",
			"useEventListener",
			"useEvents",
			"useEventDispatcher",
		],
		//API DOM
		[
			"usePublishSubscribe",
			"useScript",
			"useDebounce",
			"useThrottle",
			"useActiveElement",
			"useTimeout",
			"useInterval",
			"useTextSelection",
			"useDocumentVisibility",
			"useClipboard",
			"useMediaQuery",
			"useColorScheme",
			"useTitle"
		]
	],
	//UTILS
	[
		"isShallowEqual",
		"isDeepEqual",
		"isTouchEvent",
		"isMouseEvent",
		"isClient",
		"isAsync"
	]
] as const;