import { useDeferredValue as legacy, useRef, useState } from "react"

/**
 * __`useDeferredValue`__: _useDeferredValue_ hook polyfilled for React versions below 18. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useDeferredValue)
 * @param {T} value
 * @returns {T} deferred value
 */
function useDeferredValuePolyfill<T>(value: T): T {
	const [state, setState] = useState<T>(value);
	const idTimeout = useRef<number>();

	if (value !== state) {
		idTimeout.current !== null && clearTimeout(idTimeout.current);
		idTimeout.current = setTimeout(() => setState(value)) as unknown as number;
	}

	return state;
}

export const useDeferredValue = legacy !== undefined ? legacy : useDeferredValuePolyfill;