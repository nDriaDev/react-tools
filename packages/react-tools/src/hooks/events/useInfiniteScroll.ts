import { RefObject, useCallback, useEffect, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";

/**
 * **`useInfiniteScroll`**: Hook to deal with large sets of data. It allow users to scroll through content endlessly without explicit pagination or loading new pages. [See demo](https://nDriaDev.io/react-tools/#/hooks/events/useInfiniteScroll)
 * @param {Object} param
 * @param {(data?: T | undefined) => Promise<T>} param.request - request to obtain data.
 * @param {RefObject<E extends Element>} param.ref - a reference to container element.
 * @param {(data?: T | undefined) => boolean} param.hasMoreData - function that will be executed every time _data_ changes to detect if there will be new data values.
 * @param {number|undefined} [param.threshold=0] - a threshold value by which load next data during scroll.
 * @param {()=>void} [param.onBefore] - function that will be executed before to execute __request__.
 * @param {()=>void} [param.onSuccess] - function that will be executed if __request__ execution has success.
 * @param {(err:unknown)=>void} [param.onError] - function that will be executed if an error occurred calling __request__.
 * @returns {{data: T|undefined, loading: boolean, fullData: boolean, updateData: (data:T|((currentState?:T)=>T))=>void, loadData: ()=>Promise<void>}} result
 * Object with these properties:
 * - __data__: data returned from _request_ execution.
 * - __loading__: boolean that will be true if a _request_ execution is in pending, otherwise it will be false.
 * - __fullData__: boolean that indicates if all data are returned or not.
 * - __updateData__: function to update data from outside.
 * - __loadData__:  function to manual load next data.
 */
export const useInfiniteScroll = <T, E extends Element>({ request, ref, hasMoreData, threshold, onBefore, onError, onSuccess }: { request: (data?: T) => Promise<T>, ref: RefObject<E>, hasMoreData: (data?: T) => boolean, threshold?: number, onBefore?: () => void, onSuccess?: () => void, onError?: (err: unknown) => void }): { data: T | undefined, loading: boolean, fullData: boolean, updateData: (data: T | ((currentState?: T) => T)) => void, loadData: () => Promise<void> } => {
	const notifyRef = useRef<() => void>();
	const cachedState = useRef<{ data?: T, loading: boolean, fullData: boolean }>({
		data: undefined,
		loading: true,
		fullData: !hasMoreData(),
	});

	const loadData = useCallback(() => {
		if (cachedState.current.loading) {
			return Promise.resolve();
		}
		cachedState.current.loading = true;
		!!notifyRef.current && notifyRef.current();
		!!onBefore && onBefore();
		return request(cachedState.current.data)
			.then(data => {
				cachedState.current.data = data;
				cachedState.current.loading = false;
				cachedState.current.fullData = !hasMoreData(data);
				!!notifyRef.current && notifyRef.current();
				!!onSuccess && onSuccess();
			})
			.catch(err => {
				cachedState.current.loading = false;
				!!notifyRef.current && notifyRef.current();
				!!onError && onError(err);
			});
	}, [onBefore, onSuccess, onError, request, hasMoreData]);

	const loadOnScroll = useCallback((el: Element) => {
		if (cachedState.current.loading || cachedState.current.fullData) {
			return
		}
		const scrollTop = el === (document.documentElement as Element)
			? Math.max(
				window.scrollY,
				(document.documentElement as Element).scrollTop,
				document.body.scrollTop,
			)
			: el.scrollTop;
		const scrollHeight = el.scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
		const clientHeight = el.clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);

		(scrollHeight - scrollTop <= clientHeight + (threshold ?? 0)) && loadData();
	}, [loadData, threshold]);

	const updateData = useCallback((data: T|((currentState?:T)=>T)) => {
		cachedState.current.data = data instanceof Function ? data(cachedState.current.data) : data;
		!!notifyRef.current && notifyRef.current();
	}, []);

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			const el = ref.current as Element;
			const onScroll = () => loadOnScroll(el);
			el && el.addEventListener("scroll", onScroll, { passive: true });
			return () => {
				notifyRef.current = undefined;
				el && el.removeEventListener("scroll", onScroll);
			}
		}, [loadOnScroll, ref]),
		useMemo(() => {
			let state: typeof cachedState.current = {
				loading: true,
				fullData: cachedState.current.fullData
			};
			return () => {
				if (state.data !== cachedState.current.data) {
					state.data = (cachedState.current.data === undefined
						? undefined
						: Array.isArray(cachedState.current.data)
							? [...cachedState.current.data]
							: typeof cachedState.current.data === "object"
								? { ...cachedState.current.data }
								: cachedState.current.data) as T|undefined;
					state = { ...cachedState.current };
				}
				if (state.loading !== cachedState.current.loading || state.fullData !== cachedState.current.fullData) {
					state = { ...cachedState.current };
				}
				return state;
			}
		}, [])
	);

	useEffect(() => {
		!!onBefore && onBefore();
		cachedState.current.loading = true;
		request()
			.then(data => {
				cachedState.current.data = data;
				cachedState.current.loading = false;
				cachedState.current.fullData = !hasMoreData(data);
				!!notifyRef.current && notifyRef.current();
				!!onSuccess && onSuccess();
			})
			.catch(err => {
				cachedState.current.loading = false;
				!!notifyRef.current && notifyRef.current();
				!!onError && onError(err);
			})
	}, [request, onError, onBefore, onSuccess, hasMoreData]);

	return {
		data: state.data,
		loading: state.loading,
		fullData: state.fullData,
		updateData,
		loadData
	}
}