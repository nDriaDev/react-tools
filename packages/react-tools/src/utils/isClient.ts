/**
 * **`isClient`**: It detects if code is running on client.
 * @returns {boolean} result
 */
export const isClient = (): boolean => {
	return typeof window !== "undefined" && !!window.document;
}