/**
 * Parameters accepted by [defaultSerializer](https://react-tools.ndria.dev/utils/defaultSerializer).
 * A generic serializer that converts a value of type `T` to its string
 * representation using `JSON.stringify`. Used as the default serializer
 * in storage hooks and utilities when no custom serializer is provided.
 *
 * @template T - The type of the value to serialize.
 * @param target - The value to convert to a JSON string.
 * @returns The JSON string representation of `target`.
 */
export type DefaultSerializerProps<T> = {
	target: T;
};