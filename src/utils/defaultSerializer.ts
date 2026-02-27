import { DefaultSerializerProps } from "../models";

/**
 * **`defaultSerializer`**: Function to serialize any type of value.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/defaultSerializer)
 * @template T - The type of the value to serialize.
 * @param {AlphanumericCompareProps} target - {@link AlphanumericCompareProps}
 * @returns {string}
 */
export function defaultSerializer<T>(target: DefaultSerializerProps<T>["target"]): string {
	return target instanceof Map
		? JSON.stringify(Object.fromEntries(target))
		: target instanceof Set
			? JSON.stringify(Array.from(target))
			: JSON.stringify(target);
}