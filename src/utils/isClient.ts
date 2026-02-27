/**
 * **`isClient`**: Returns `true` when running in a browser environment where `window` and `window.document` are available, `false` in SSR or non-browser contexts.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/isClient)
 * @returns {boolean} result
 */
export const isClient = (): boolean => {
	return typeof window !== "undefined" && !!window.document;
}