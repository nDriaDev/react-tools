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
			"useDerivedState"
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
			"useIsMounted",
			"useDeferredValue",
			"useLogger"
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
			"useId",
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
			"useHotKeys",
			"usePinchZoom",
			"usePointerLock"
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
			"useIdleCallback",
			"useFullscreen",
			"useBattery",
			"useGeolocation",
			"useShare",
			"useEyeDropper",
			"useDialogBox",
			"useDeviceMotion",
			"useDeviceOrientation",
			"useVibrate",
			"useBluetooth",
			"useScreenWakeLock",
			"useSpeechRecognition",
			"useSpeechSynthesis",
			"useFPS",
			"usePIP",
			"useDocumentPIP",
			"usePopover",
			"useRemotePlayback",
			"useAnimation",
			"useAudio",
			"useVideo",
			"useEventSource",
			"useWebSocket"
		]
	],
	//UTILS
	[
		"isShallowEqual",
		"isDeepEqual",
		"isTouchEvent",
		"isMouseEvent",
		"isClient",
		"isAsync",
		"hotKeyHandler"
	]
] as const;