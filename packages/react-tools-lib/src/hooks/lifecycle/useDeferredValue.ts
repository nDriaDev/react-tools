import { useRef, useState } from "react"

let legacy;
(async () => {
	try {
		const react = await import('react');
		legacy = react?.useDeferredValue;
	} catch (error) {
		legacy = undefined;
	}
})()
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

export const useDeferredValue = legacy ?? useDeferredValuePolyfill;