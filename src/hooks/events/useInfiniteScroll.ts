import { useCallback, useEffect, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseInfiniteScrollProps, UseInfiniteScrollResult } from "../../models";

/**
 * **`useInfiniteScroll`**: Hook to deal with large sets of data. It allow users to scroll through content endlessly without explicit pagination or loading new pages.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useInfiniteScroll)
 * @template T - The type of the data returned by each page request.
 * @template E - The scrollable container element type, extending {@link Element}.
 * @param {UseInfiniteScrollProps<T,E>} param - {@link UseInfiniteScrollProps}
 * @returns {UseInfiniteScrollResult<T>} result {@link UseInfiniteScrollResult}
 */
export const useInfiniteScroll = <T, E extends Element>({ request, ref, hasMoreData, threshold, onBefore, onError, onSuccess }: UseInfiniteScrollProps<T, E>): UseInfiniteScrollResult<T> => {
	const notifyRef = useRef<() => void>();
	const cachedState = useRef<{ data?: T, loading: boolean, fullData: boolean }>({
		data: undefined,
		loading: true,
		fullData: !hasMoreData(),
	});

	const requestRef = useRef(request);
	const hasMoreDataRef = useRef(hasMoreData);
	const onBeforeRef = useRef(onBefore);
	const onSuccessRef = useRef(onSuccess);
	const onErrorRef = useRef(onError);
	const thresholdRef = useRef(threshold);
	requestRef.current = request;
	hasMoreDataRef.current = hasMoreData;
	onBeforeRef.current = onBefore;
	onSuccessRef.current = onSuccess;
	onErrorRef.current = onError;
	thresholdRef.current = threshold;

	const fetchData = useCallback((currentData?: T) => {
		if (cachedState.current.loading) {
			return Promise.resolve();
		}
		cachedState.current.loading = true;
		notifyRef.current?.();
		onBeforeRef.current?.();
		return requestRef.current(currentData)
			.then(data => {
				cachedState.current.data = data;
				cachedState.current.loading = false;
				cachedState.current.fullData = !hasMoreData(data);
				notifyRef.current?.();
				onSuccessRef.current?.();
			})
			.catch(err => {
				cachedState.current.loading = false;
				notifyRef.current?.();
				onErrorRef.current?.(err);
			});
	}, [hasMoreData]);

	const loadData = useCallback(
		() => fetchData(cachedState.current.data),
		[fetchData],
	);

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

		(scrollHeight - scrollTop <= clientHeight + (thresholdRef.current ?? 0)) && fetchData(cachedState.current.data);
	}, [fetchData]);

	const updateData = useCallback((data: T|((currentState?:T)=>T)) => {
		cachedState.current.data = data instanceof Function ? data(cachedState.current.data) : data;
		notifyRef.current?.();
	}, []);

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			const el = ref.current as Element;
			const onScroll = () => loadOnScroll(el);
			el?.addEventListener("scroll", onScroll, { passive: true });
			return () => {
				notifyRef.current = undefined;
				el?.removeEventListener("scroll", onScroll);
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
		cachedState.current.loading = false;
		fetchData();
	}, [fetchData]);

	return {
		data: state.data,
		loading: state.loading,
		fullData: state.fullData,
		updateData,
		loadData
	}
}