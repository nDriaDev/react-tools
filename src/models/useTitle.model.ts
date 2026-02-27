/**
 * Parameters accepted by [useTitle](https://react-tools.ndria.dev/hooks/api-dom/useTitle).
 */
export type UseTitleProps = {
	/**
	 * Optional title to set on `document.title` immediately. When provided, the title
	 * is applied both synchronously in the render body (for non-React environments such
	 * as SSR or usage outside a component tree) and inside a `useLayoutEffect` for
	 * standard React usage. When omitted, the current document title is left unchanged.
	 */
	title?: string;
};

/**
 * Return value of [useTitle](https://react-tools.ndria.dev/hooks/api-dom/useTitle).
 */
export type UseTitleResult = [
	/**
	 * Returns the current value of `document.title` at call time. Not reactive —
	 * does not trigger a re-render when the title changes externally. Call it on
	 * demand when you need to read the latest title.
	 */
	() => string,

	/**
	 * Sets `document.title` to the provided string immediately. Can be called at
	 * any time, inside or outside a component, and takes effect synchronously.
	 */
	(title: string) => void
];