import { useDeferredValue as legacy, useEffect, useState } from "react"

/**
 * __`useDeferredValue`__: _useDeferredValue_ hook polyfilled for React versions below 18.
 * @param {T} value
 * @returns {T} deferred value
 */
function useDeferredValuePolyfill<T>(value: T): T {
	const [state, setState] = useState<T>(value);

	useEffect(() => {
		const id = setTimeout(() => {
			setState(value);
		}, 50);
		return () => {
			clearTimeout(id);
		}
	}, [value])

	return state;
}

export const useDeferredValue = legacy !== undefined ? legacy : useDeferredValuePolyfill;