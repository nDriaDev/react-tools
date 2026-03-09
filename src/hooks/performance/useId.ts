import * as React from "react"
import { useLazyRef } from "./useLazyRef";


let count = 0;
const increment = () => {
	return `:${(count++).toString(32)}:`;
}

/**
 * __`useId`__: _useId_ hook polyfilled for React versions below 18: __not use for key prop__.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useId)
 * @returns {string} result
 */
function useIdPolyfilled(): string {
	const id = useLazyRef(increment);
	return id.current;
}

const key = 'useId';
const _useId = (React as any)[key];

export const useId = (_useId ?? useIdPolyfilled) as typeof useIdPolyfilled;