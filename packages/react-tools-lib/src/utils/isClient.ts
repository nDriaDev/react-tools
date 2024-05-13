/**
 * **`isClient`**: It detects if code is running on client. [See demo](https://react-tools.ndria.dev/#/utils/isClient)
 * @returns {boolean} result
 */
export const isClient = (): boolean => {
	return typeof window !== "undefined" && !!window.document;
}