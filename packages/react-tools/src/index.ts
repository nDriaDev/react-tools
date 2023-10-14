export type {
	DependencyListTyped,
	CompareFn
} from './models'

export {
	usePrevious,
	useStateHistory,
	useMemoCompare,
	useMemoDeepCompare,
	useCallbackCompare,
	useCallbackDeepCompare,
	useEffectCompare,
	useEffectDeepCompare,
	useLayoutEffectCompare,
	useLayoutEffectDeepCompare
} from './hooks'

export {
	isShallowEqual,
	isDeepEqual,
	isMouseEvent,
	isTouchEvent
} from './utils'