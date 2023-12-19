import { Ref, MutableRefObject, useMemo, useRef } from "react";

/**
 * **`useMergedRef`**: Hook to merge multiple refs into one.
 * @param {Ref<T>[]} refs
 * @returns {RefObject<T>} mergedRef
 */
export const useMergedRef = <T>(...refs: Ref<T>[]) => {
	const mergedRef = useRef<T>(null);
	return useMemo(() => (Object.defineProperty({}, "current", {
		get() {
			return (mergedRef as MutableRefObject<T>).current;
		},
		set(value: T) {
			(mergedRef as MutableRefObject<T | null>).current = value;
			refs.forEach(ref => typeof ref === "function" ? ref(mergedRef.current) : (ref as MutableRefObject<T | null>).current = mergedRef.current);
		},
		enumerable: false,
		configurable: false,
	})), [refs]) as Ref<T>;
}