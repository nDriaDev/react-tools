import { useRef } from "react"
import { UseLazyRefProps, UseLazyRefResult } from "../../models";

const noValue = Symbol("useLazyRef.noValue");
/**
 * **`useLazyRef`**: Hook that works 'partially' like the _useState_ hook with lazy initialization: ensures that the __initializer__ function is executed only once.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useLazyRef)
 * @template T - The type of the value produced by the initializer and stored in the ref. Inferred automatically from the return type of `initializer`.
 * @param {UseLazyRefProps<T>["initializer"]} initializer - {@link UseLazyRefProps}
 * @returns {UseLazyRefResult<T>} result - {@link UseLazyRefResult}
 */
export const useLazyRef = <T>(initializer: UseLazyRefProps<T>["initializer"]): UseLazyRefResult<T> => {
	const ref = useRef<T | typeof noValue>(noValue);
	if (ref.current === noValue) {
		ref.current = initializer();
	}
	return ref as React.MutableRefObject<T>;
}