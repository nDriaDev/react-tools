import { RefCallback, RefObject, useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { useEffectOnce } from "../lifecycle";
import { UseIntersectionObserverProps, UseIntersectionObserverResult } from "../../models";

/**
 * **`useIntersectionObserver`**: Hook to use Intersection Observer.
 * @see [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useIntersectionObserver)
 * @template T - The element type observed by the {@link IntersectionObserver}.
 * @param {UseIntersectionObserverProps<T>["cb"]} cb - {@link UseIntersectionObserverProps}
 * @param {UseIntersectionObserverProps<T>["attachOptions"]} attachOptions - {@link UseIntersectionObserverProps}
 * @param {UseIntersectionObserverProps<T>["opts"]} [opts] - {@link UseIntersectionObserverProps}
 * @returns {UseIntersectionObserverResult<T>} result {@link UseIntersectionObserverResult}
 */
export const useIntersectionObserver = <T extends Element>(cb: UseIntersectionObserverProps<T>["cb"], attachOptions: UseIntersectionObserverProps<T>["attachOptions"], opts?: UseIntersectionObserverProps<T>["opts"]): UseIntersectionObserverResult<T> => {
	const mode = attachOptions.mode;
	const observer = useRef<IntersectionObserver | null>();
	const working = useRef(true);
	const nodeRef = useRef<T | null>();
	const cbRef = useRef(cb);
	const optsRef = useRef(opts);
	cbRef.current = cb;
	optsRef.current = opts;

	const createObserver = useCallback((node: Element) => {
		observer.current = new IntersectionObserver((...args) => cbRef.current(...args), optsRef.current);
		observer.current.observe(node);
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
		if (mode === "ref") return;
		const node = (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current;
		if (!node || !working.current) return;
		nodeRef.current = node;
		createObserver(node);

		return () => {
			destroyObserver();
			nodeRef.current = null;
		};
	}, [mode === "ref" ? null : (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current]);

	const disconnect = useCallback(() => {
		if (!working.current) return;
		working.current = false;
		if (observer.current && nodeRef.current) {
			observer.current.unobserve(nodeRef.current);
		}
	}, []);

	const reconnect = useCallback(() => {
		if (working.current) return;
		working.current = true;
		if (nodeRef.current) {
			observer.current
				? observer.current.observe(nodeRef.current)
				: createObserver(nodeRef.current);
		}
	}, [createObserver]);

	return {
		ref: mode === "ref" ? refCallback as RefCallback<T> : null,
		disconnect,
		reconnect
	}
}