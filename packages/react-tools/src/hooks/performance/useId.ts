import { useId as legacy } from "react"
import { useLazyRef } from "./useLazyRef";

let count = 0;
const increment = () => {
	return `:${(count++).toString(32)}:`;
}

/**
 * __`useId`__: _useId_ hook polyfilled for React versions below 18: __not use for key prop__.
 * @returns {string}
 */
function useIdPolyfilled(): string {
	const id = useLazyRef(increment);
	return id.current;
}

export const useId = legacy === undefined ? useIdPolyfilled : legacy;