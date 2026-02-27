import { RefCallback, RefObject, useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { useSyncExternalStore } from "../state";
import { useEffectOnce } from "../lifecycle";
import { UseVisibleAttachOptions, UseVisibleOptions, UseVisibleResult, UseVisibleWithRatioResult } from "../../models";

/**
 * **`useVisible`**: Hook to know if an element is visible and optionally the visible area ration of the element.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useVisible)
 * @template T - The element type being observed.
 * @param {UseVisibleAttachOptions<T>} attachOptions - {@link UseVisibleAttachOptions}
 * @param {UseVisibleOptions} [opts] - {@link UseVisibleOptions}
 * @returns {UseVisibleResult<T> | UseVisibleWithRatioResult<T>} result {@link UseVisibleResult}
 */
function useVisible<T extends Element>(attachOptions: UseVisibleAttachOptions<T>, opts?: undefined): UseVisibleResult<T>;
function useVisible<T extends Element>(attachOptions: UseVisibleAttachOptions<T>, opts?: IntersectionObserverInit & { withRatio?: undefined }): UseVisibleResult<T>;
function useVisible<T extends Element>(attachOptions: UseVisibleAttachOptions<T>, opts?: IntersectionObserverInit & { withRatio?: true }): UseVisibleWithRatioResult<T>;
function useVisible<T extends Element>(attachOptions: UseVisibleAttachOptions<T>, opts?: UseVisibleOptions): UseVisibleResult<T> | UseVisibleWithRatioResult<T> {
	const mode = attachOptions.mode;
	const nodeRef = useRef<T | null>();
	const observer = useRef<IntersectionObserver | null>();
	const notifRef = useRef<(() => void) | null>();
	const prevState = useRef({ isVisible: false, ratio: 0 });
	const currentState = useRef({ isVisible: false, ratio: 0 });
	const optsRef = useRef(opts);
	optsRef.current = opts;

	const handleEntries = useCallback((entries: IntersectionObserverEntry[]) => {
		const { isIntersecting, intersectionRatio } = entries[0];
		const next = { isVisible: isIntersecting, ratio: intersectionRatio };
		if (
			next.isVisible !== currentState.current.isVisible ||
			next.ratio !== currentState.current.ratio
		) {
			currentState.current = next;
			notifRef.current?.();
		}
	}, []);

	const createObserver = useCallback((node: Element) => {
		observer.current = new IntersectionObserver(handleEntries, {
			root: optsRef.current?.root,
			rootMargin: optsRef.current?.rootMargin,
			threshold: optsRef.current?.threshold,
		});
		observer.current.observe(node);
	}, [handleEntries]);

	const destroyObserver = useCallback(() => {
		observer.current?.disconnect();
		observer.current = null;
	}, []);

	useEffectOnce(() => () => {
		destroyObserver();
		nodeRef.current = null;
	});

	const refCallback = useCallback((node: T | null) => {
		if (!node) {
			destroyObserver();
			nodeRef.current = null;
			return;
		}
		if (nodeRef.current !== node) {
			destroyObserver();
			nodeRef.current = node;
			createObserver(node);
		}
	}, [createObserver, destroyObserver]);

	const useEffectVariant = mode === "layout-effect" ? useLayoutEffect : useEffect;

	useEffectVariant(() => {
		if (mode === "ref") return;
		const node = (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current;
		if (!node) return;
		nodeRef.current = node as T;
		createObserver(node);
		return () => { destroyObserver(); nodeRef.current = null; };
	}, [mode === "ref" ? null : (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current]);

	const state = useSyncExternalStore(
		useCallback((notif) => {
			notifRef.current = notif;
			return () => { notifRef.current = null; };
		}, []),
		useCallback(() => {
			if (
				currentState.current.isVisible !== prevState.current.isVisible ||
				currentState.current.ratio !== prevState.current.ratio
			) {
				prevState.current = currentState.current;
			}
			return opts?.withRatio ? prevState.current : prevState.current.isVisible;
		}, [opts?.withRatio]),
	);

	const ref = mode === "ref" ? refCallback as RefCallback<T> : null;

	if (opts?.withRatio) {
		return [
			ref,
			(state as { isVisible: boolean, ratio: number }).isVisible,
			(state as { isVisible: boolean, ratio: number }).ratio,
		];
	}
	return [ref, state as boolean];
}

export { useVisible };