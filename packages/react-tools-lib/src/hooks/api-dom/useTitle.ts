import { useLayoutEffect } from "react";

const setTitle = (title: string) => {
	document.title = title;
};

const getTitle = () => document.title;

/**
 * **`useTitle`**: Hook to handling app page title. It works _outside Component_ also and it returns array of two functions to read and write title. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useTitle)
 * @param {string} [title]
 * @returns {[() => string, (title: string) => void]} array
 */
export const useTitle = (title?: string): [() => string, (title: string) => void] => {
	title && (document.title = title);
	try {
		useLayoutEffect(() => {
			title && (document.title = title);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [])
	} catch (error) {
		return [getTitle, setTitle];
	}
	return [getTitle, setTitle];
}