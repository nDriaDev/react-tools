import * as React from "react"

/**
 * __`useDeferredValue`__: _useDeferredValue_ hook polyfilled for React versions below 18.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useDeferredValue)
 * @template T - The type of the value to defer. Inferred automatically from the
 * @param {T} param
 * @returns {T} result
 */
function useDeferredValuePolyfill<T>(value: T): T {
	const [state, setState] = React.useState<T>(value);
	const idTimeout = React.useRef<number>();

	if (value !== state) {
		idTimeout.current !== null && clearTimeout(idTimeout.current);
		idTimeout.current = setTimeout(() => setState(value)) as unknown as number;
	}

	return state;
}

export const useDeferredValue = ((React as any).useDeferredValue ?? useDeferredValuePolyfill) as typeof useDeferredValuePolyfill;