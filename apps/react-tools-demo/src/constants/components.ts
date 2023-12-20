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
			"useMergedRef",
			"useId"
		],
		//EVENTS
		[
			"useEvents",
			"useEventListener",
			"useEventDispatcher",
			"usePerformAction",
			"useDocumentVisibility",
			"useHover",
			"useResponsive",
			"useClickOutside",
			"useNetwork",
			"useIsOnline",
			"useResizeObserver",
			"useIntersectionObserver",
			"useMutationObserver",
			"useMeasure",
			"useVisible",
			"useScrollIntoView",
			"useMouse",
			"useLongPress",
			"useBeforeUnload",
			"useDoubleClick",
			"useScreen",
			"useHotKeys"
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
			"useRaf",
			"useTextSelection",
			"useClipboard",
			"useMediaQuery",
			"useColorScheme",
			"useReducedMotion",
			"useTitle",
			"useIdle",
			"useFullscreen",
			"useBattery",
			"useGeolocation",
			"useShare",
			"useEyeDropper",
			"useDialogBox"
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