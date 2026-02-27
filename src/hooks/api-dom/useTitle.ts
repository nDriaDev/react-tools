import { useLayoutEffect } from "react";
import { UseTitleProps, UseTitleResult } from "../../models";

const setTitle = (title: string) => {
	document.title = title;
};

const getTitle = () => document.title;

/**
 * **`useTitle`**: Hook to handling app page title. It works _outside Component_ also and it returns array of two functions to read and write title.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useTitle)
 * @param {UseTitleProps["title"]} [title] - {@link UseTitleProps["title"]}
 * @returns {UseTitleResult} result {@link UseTitleResult}
 */
export const useTitle = (title?: UseTitleProps["title"]): UseTitleResult => {
	title && (document.title = title);
	try {
		useLayoutEffect(() => {
			title && (document.title = title);
		}, [title])
	} catch {
		return [getTitle, setTitle];
	}
	return [getTitle, setTitle];
}