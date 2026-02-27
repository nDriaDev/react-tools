/**
 * Parameters accepted by [useLogger](https://react-tools.ndria.dev/hooks/lifecycle/useLogger).
 */
export type UseLoggerProps = {
	/**
	 * The display name of the component being logged, used as a prefix in all
	 * console output (e.g. `"MyComponent mounted"`, `"MyComponent updated"`).
	 */
	name: string;

	/**
	 * The current props of the component. On each render the hook compares these
	 * with the previous render's props and logs which individual properties changed,
	 * along with their old and new values.
	 */
	props: object;
};