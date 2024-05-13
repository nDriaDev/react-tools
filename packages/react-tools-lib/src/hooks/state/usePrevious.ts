import { useCallback, useEffect, useRef } from "react"

/**
 * **`usePrevious`**: It's track the previous value of a variable, with possibility to enable/disable tracking. [See demo](https://react-tools.ndria.dev/#/hooks/state/usePrevious)
 * @param {T} variable - variable whose value is to be tracked.
 * @returns {[T|undefined, (enable:boolean)=>void]} array
 */
export const usePrevious = <T = unknown>(variable: T): [T|undefined, (enable: boolean) => void] => {
    const internalValue = useRef<T>();
	const trackingPrevious = useRef(true);
	const lastValueBeforeChange = useRef<T | null>(variable);
	const trackUpdate = useCallback((enable: boolean) => (trackingPrevious.current = enable), []);

	useEffect(() => {
		trackingPrevious.current
			? (internalValue.current = variable)
			: (lastValueBeforeChange.current = variable)
    }, [variable]);

	if (trackingPrevious.current && lastValueBeforeChange.current) {
		internalValue.current = lastValueBeforeChange.current;
		lastValueBeforeChange.current = null;
	}
    return [internalValue.current, trackUpdate];
}