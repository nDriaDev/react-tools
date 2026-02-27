import { useCallback, useEffect, useRef } from "react"
import { UsePreviousProps, UsePreviousResult } from "../../models";

/**
 * **`usePrevious`**: It's track the previous value of a variable, with possibility to enable/disable tracking.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/usePrevious)
 * @template T - The type of the value being tracked.
 * @param {UsePreviousProps<T>["variable"]} variable - {@link UsePreviousProps}
 * @returns {UsePreviousResult<T>} result - {@link UsePreviousResult}
 */
export const usePrevious = <T = unknown>(variable: UsePreviousProps<T>["variable"]): UsePreviousResult<T> => {
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