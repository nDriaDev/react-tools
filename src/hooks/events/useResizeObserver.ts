import { RefCallback, RefObject, useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { useEffectOnce } from "../lifecycle";
import { UseResizeObserverProps, UseResizeObserverResult } from "../../models";

/**
 * **`useResizeObserver`**: Hook to use Resize Observer.
 * @see [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useResizeObserver)
 * @template T - The element type observed by the {@link ResizeObserver}.
 * @param {UseResizeObserverProps<T>["cb"]} cb - {@link UseResizeObserverProps}
 * @param {UseResizeObserverProps<T>["attachOptions"]} attachOptions - {@link UseResizeObserverProps}
 * @param {UseResizeObserverProps<T>["opts"]} [opts] - {@link UseResizeObserverProps}
 * @returns {UseResizeObserverResult<T>} result {@link UseResizeObserverResult}
 */
export const useResizeObserver = <T extends Element>(cb: UseResizeObserverProps<T>["cb"], attachOptions: UseResizeObserverProps<T>["attachOptions"], opts?: UseResizeObserverProps<T>["opts"]): UseResizeObserverResult<T> => {
	const mode = attachOptions.mode;
	const observer = useRef<ResizeObserver | null>();
	const working = useRef(true);
	const nodeRef = useRef<T | null>();
	const optsRef = useRef(opts);
	const cbRef = useRef(cb);
	cbRef.current = cb;
	optsRef.current = opts;

	const createObserver = useCallback((node: Element) => {
		observer.current = new ResizeObserver((...args) => cbRef.current(...args));
		observer.current.observe(node, optsRef.current);
	}, []);

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
		if (!working.current) {
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
		if (mode === "ref") {
			return;
		}
		const node = (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current;
		if (!node || !working.current) {
			return;
		}
		nodeRef.current = node;
		createObserver(node);

		return () => {
			destroyObserver();
			nodeRef.current = null;
		}
	}, [mode === "ref" ? null : (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current]);

	const disconnect = useCallback(() => {
		if (!working.current) {
			return;
		}
		working.current = false;
		if (observer.current && nodeRef.current) {
			observer.current.unobserve(nodeRef.current);
		}
	}, []);

	const reconnect = useCallback(() => {
		if (working.current) {
			return;
		}
		working.current = true;
		if (nodeRef.current) {
			observer.current
				? observer.current.observe(nodeRef.current, optsRef.current)
				: createObserver(nodeRef.current);
		}
	}, [createObserver]);

	return {
		ref: mode === "ref" ? refCallback as RefCallback<T> : null,
		disconnect,
		reconnect
	}
}