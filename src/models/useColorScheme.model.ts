/**
 * Props accepted by [useColorScheme](https://react-tools.ndria.dev/hooks/api-dom/useColorScheme).
 */
export interface UseColorSchemeProps {
	/** initial value if _getter_ function isn't present or isn't return a valid value. */
	defaultValue: "dark" | "light" | "mediaQuery";
	/** an optional function used to initialize current value. For example, it can be useful for reading the value from an attribute of an html file or from localStorage */
	getter?: () => "dark" | "light" | null | undefined;
	/** an optional function, which should work in conjunction with the _getter_ function, to run when the color scheme changes to save the value for future runs. */
	setter?: (schema: "light" | "dark") => void;
	/** if true returns only a function to manually change the color scheme value. */
	returnValue: boolean;
}

/**
 * Result returned by [useColorScheme](https://react-tools.ndria.dev/hooks/api-dom/useColorScheme).
 * - `[0]` — curren color schema value.
 * - `[1]` — function to update value.
 *
 * OR
 * - `[0]` — function to update value.
 */
export type UseColorSchemeResult =
	| [
		/**curren color schema value */
		"light" | "dark",
		/**
		 * function to update value
		 * @param value - The value to update.
		 */
		(schema: "light" | "dark") => void
	]
	| ((schema: "light" | "dark") => void);