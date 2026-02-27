import { MutableRefObject, useMemo } from "react";
import { UseMergedRefProps, UseMergedRefResult } from "../../models";

/**
 * **`useMergedRef`**: Hook to merge multiple refs into one.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useMergedRef)
 * @param {UseMergedRefProps<T>["refs"]} refs - {@link UseMergedRefProps}
 * @returns {UseMergedRefResult<T>} result - {@link UseMergedRefResult}
 */
export const useMergedRef = <T>(...refs: UseMergedRefProps<T>["refs"]): UseMergedRefResult<T> => {
	return useMemo(() => {
		if (refs.every((ref) => ref == null)) return null;
		return (node: T) => {
			refs.forEach((ref) => {
				if (typeof ref === "function") {
					ref(node);
				} else if (ref != null) {
					(ref as MutableRefObject<T | null>).current = node;
				}
			});
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...refs]);
}