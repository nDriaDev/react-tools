import { useCallback, useState } from "react";
import { useResizeObserver } from "./useResizeObserver"

/**
 * **`useMeasure`**: Hook to  measure and track element's dimensions. [See demo](https://nDriaDev.io/react-tools/#/hooks/events/useMeasure)
 * @returns {[React.RefCallback<T>, DOMRectReadOnly]} result - a refCallback for target element and a object with target element size.
 */
export const useMeasure = <T extends Element>(): [React.RefCallback<T>, DOMRectReadOnly] => {
	const [state, setState] = useState<DOMRectReadOnly>(()=>new DOMRect());
	const [cbRef] = useResizeObserver<T>(useCallback((entries) => {
		setState(state => {
			const dim = entries[0].target.getBoundingClientRect();
			if (dim.top !== state.top || dim.left !== state.left || dim.right !== state?.right || dim.bottom !== state.bottom) {
				return dim;
			}
			return state;
		});
	}, []));

	return [
		cbRef,
		state
	]
}