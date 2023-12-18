import React, { MutableRefObject, useRef } from "react";

/**
 * **`useMergedRef`**: Hook to merge multiple refs into one.
 * @param {React.Ref<T>[]} refs
 * @returns {React.RefObject<T>} mergedRef
 */
export const useMergedRef = <T>(...refs: React.Ref<T>[]) => {
	const mergedRef = useRef<T>(null);
	refs.forEach(ref => typeof ref === "function" ? ref(mergedRef.current) : (ref as MutableRefObject<T|null>).current = mergedRef.current);

	return mergedRef;
}