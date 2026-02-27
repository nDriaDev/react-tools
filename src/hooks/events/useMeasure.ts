import { useCallback, useState } from "react";
import { useResizeObserver } from "./useResizeObserver"
import { UseMeasureResult } from "../../models";

/**
 * **`useMeasure`**: Hook to  measure and track element's dimensions.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useMeasure)
 * @template T - The element type being measured.
 * @returns {UseMeasureResult<T>} result {@link UseMeasureResult}
 */
export const useMeasure = <T extends Element>(): UseMeasureResult<T> => {
	const [state, setState] = useState<DOMRectReadOnly>(()=>new DOMRect());
	const { ref } = useResizeObserver<T>(
		useCallback((entries) => {
			setState(state => {
				const dim = entries[0].target.getBoundingClientRect();
				if (dim.top !== state.top || dim.left !== state.left || dim.right !== state?.right || dim.bottom !== state.bottom) {
					return dim;
				}
				return state;
			});
		}, []),
		{ mode: "ref" }
	);

	return [
		ref,
		state
	]
}