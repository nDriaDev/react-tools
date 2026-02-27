import { RefCallback, RefObject } from "react";

/**
 * Controls how the target element is attached to the {@link IntersectionObserver}
 * used internally by [useVisible](https://react-tools.ndria.dev/hooks/events/useVisible).
 *
 * @template T - The element type being observed.
 */
export type UseVisibleAttachOptions<T extends Element> =
	| {
		/**
		 * The hook returns a `RefCallback` to attach directly to the JSX element.
		 * The observer is connected when the ref is set and disconnected when the
		 * element is unmounted.
		 */
		mode: "ref";
		targetRef?: never;
	}
	| {
		/**
		 * - **`"effect"`** — The observer is connected inside a `useEffect` using
		 *   the provided `targetRef`, running asynchronously after the browser paints.
		 * - **`"layout-effect"`** — The observer is connected inside a
		 *   `useLayoutEffect` using the provided `targetRef`, running synchronously
		 *   before the browser paints.
		 */
		mode: "effect" | "layout-effect";

		/**
		 * A React `RefObject` pointing to the element to observe. Required when
		 * `mode` is `"effect"` or `"layout-effect"`.
		 */
		targetRef: RefObject<T>;
	};

/**
 * Options accepted by [useVisible](https://react-tools.ndria.dev/hooks/events/useVisible).
 * Extends {@link IntersectionObserverInit} with an additional `withRatio` flag.
 */
export type UseVisibleOptions = IntersectionObserverInit & {
	/**
	 * When `true`, the hook returns a third tuple entry containing the current
	 * intersection ratio as a `number` between `0` and `1`, where `0` means the
	 * element is fully outside the viewport and `1` means it is fully visible.
	 * When `false` or omitted, only the boolean visibility flag is returned.
	 */
	withRatio?: boolean;
};

/**
 * Return value of [useVisible](https://react-tools.ndria.dev/hooks/events/useVisible) when `withRatio` is `false`, `undefined`,
 * or `opts` is omitted entirely.
 *
 * @template T - The element type being observed.
 */
export type UseVisibleResult<T extends Element> = [
	/**
	 * A React ref callback to attach to the target element. Only populated when
	 * `attachOptions.mode` is `"ref"` — `null` in `"effect"` and `"layout-effect"`
	 * modes where the target is provided via `targetRef` instead.
	 */
	RefCallback<T> | null,

	/**
	 * Reactive boolean that is `true` when at least part of the target element
	 * intersects the viewport (or the configured `root`), and `false` otherwise.
	 */
	boolean
];

/**
 * Return value of [useVisible](https://react-tools.ndria.dev/hooks/events/useVisible) when `withRatio` is `true`.
 *
 * @template T - The element type being observed.
 */
export type UseVisibleWithRatioResult<T extends Element> = [
	/**
	 * A React ref callback to attach to the target element. Only populated when
	 * `attachOptions.mode` is `"ref"` — `null` in `"effect"` and `"layout-effect"`
	 * modes where the target is provided via `targetRef` instead.
	 */
	RefCallback<T> | null,

	/**
	 * Reactive boolean that is `true` when at least part of the target element
	 * intersects the viewport (or the configured `root`), and `false` otherwise.
	 */
	boolean,

	/**
	 * The current intersection ratio as a number between `0` and `1`. `0` means
	 * the element is fully outside the viewport; `1` means it is fully visible.
	 * Updated on every intersection change event.
	 */
	number
];