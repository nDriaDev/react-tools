import { useRef } from "react"

const noValue = Symbol("useLazyRef.noValue");
/**
 * **`useLazyRef`**: Hook that works 'partially' like the _useState_ hook with lazy initialization: ensures that the __initializer__ function is executed only once. [See demo](https://nDriaDev.io/react-tools/#/hooks/performance/useLazyRef)
 * @param {()=>T} initializer
 * @returns {React.MutableRefObject<T>}
 */
export const useLazyRef = <T>(initializer: () => T): React.MutableRefObject<T> => {
	const ref = useRef<T | typeof noValue>(noValue);
	if (ref.current === noValue) {
		ref.current = initializer();
	}
	return ref as React.MutableRefObject<T>;
}