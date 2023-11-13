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
			"useUpdate",
			"useIsMounted"
		],
		//PERFORMANCE
		[
			"useMemoizedFunction",
			"useMemoCompare",
			"useMemoDeepCompare",
			"useCallbackCompare",
			"useCallbackDeepCompare",
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
			"useActiveElement"
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