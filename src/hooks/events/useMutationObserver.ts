import { RefCallback, RefObject, useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { useEffectOnce } from "../lifecycle";
import { UseMutationObserverProps, UseMutationObserverResult } from "../../models";

/**
 * **`useMutationObserver`**: Hook to use Mutation Observer.
 * @see [Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useMutationObserver)
 * @template T - The element type observed by the {@link MutationObserver}.
 * @param {UseMutationObserverProps<T>["cb"]} cb - {@link UseMutationObserverProps}
 * @param {UseMutationObserverProps<T>["attachOptions"]} attachOptions - {@link UseMutationObserverProps}
 * @param {UseMutationObserverProps<T>["opts"]} [opts] - {@link UseMutationObserverProps}
 * @returns {UseMutationObserverResult<T>} result {@link UseMutationObserverResult}
 */
export const useMutationObserver = <T extends Element>(cb: UseMutationObserverProps<T>["cb"], attachOptions: UseMutationObserverProps<T>["attachOptions"], opts?: UseMutationObserverProps<T>["opts"]): UseMutationObserverResult<T> => {
	const mode = attachOptions.mode;
	const observer = useRef<MutationObserver | null>();
	const working = useRef(true);
	const nodeRef = useRef<T | null>();
	const cbRef = useRef(cb);
	const optsRef = useRef(opts);
	cbRef.current = cb;
	optsRef.current = opts;

	const createObserver = useCallback((node: Element) => {
		observer.current = new MutationObserver((...args) => cbRef.current(...args));
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
		if (mode === "ref") return;
		const node = (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current;
		if (!node || !working.current) return;
		nodeRef.current = node;
		createObserver(node);
		return () => { destroyObserver(); nodeRef.current = null; };
	}, [mode === "ref" ? null : (attachOptions as { mode: "effect" | "layout-effect", targetRef: RefObject<T> }).targetRef?.current]);

	const disconnect = useCallback(() => {
		if (!working.current) return;
		working.current = false;
		observer.current?.disconnect();
	}, []);

	const reconnect = useCallback(() => {
		if (working.current) return;
		working.current = true;
		if (nodeRef.current) {
			observer.current
				? observer.current.observe(nodeRef.current, optsRef.current)
				: createObserver(nodeRef.current);
		}
	}, [createObserver]);

	const takeRecords = useCallback(() => observer.current?.takeRecords() ?? [], []);

	return {
		ref: mode === "ref" ? refCallback as RefCallback<T> : null,
		disconnect,
		reconnect,
		takeRecords,
	};

}