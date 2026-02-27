import { ErrorInfo, PropsWithChildren, ReactNode } from "react";
/**
 * Internal state managed by [ErrorBoundary](https://react-tools.ndria.dev/components/ErrorBoundary) component.
 */
export interface ErrorBoundaryState {
	/**
	 * `true` when the boundary has caught an error from a descendant component,
	 * causing the `fallback` UI to be rendered in place of the component tree.
	 * Reset to `false` when the `retry` callback is invoked.
	 */
	hasError: boolean;

	/**
	 * The most recently caught {@link Error} instance. `undefined` when no error
	 * has been caught or after a successful retry.
	 */
	error?: Error;

	/**
	 * The {@link ErrorInfo} object associated with the caught error, containing
	 * the `componentStack` string that traces which components were rendering
	 * when the error was thrown. `undefined` when no error has been caught.
	 */
	info?: ErrorInfo;
}

/**
 * Props accepted by the [ErrorBoundary](https://react-tools.ndria.dev/components/ErrorBoundary) component.
 */
export interface ErrorBoundaryProps extends PropsWithChildren {
	/**
	 * Called when an error is caught by the boundary, receiving the thrown
	 * {@link Error} and the associated {@link ErrorInfo} (component stack).
	 * Use this for error reporting or logging.
	 */
	onCatch?: (error: Error, info: ErrorInfo) => void;

	/**
	 * Content rendered in place of the component tree when an error is caught.
	 * Accepts three shapes:
	 * - **`ReactNode`** — Static fallback UI displayed unconditionally.
	 * - **`(error, info, retry) => ReactNode`** — A render function receiving
	 *   the caught error, component stack info, and a `retry` callback that
	 *   resets the boundary and re-attempts rendering the original tree.
	 * - **`({ error, info, retry }) => JSX.Element`** — Same as above but
	 *   using a props object instead of positional arguments.
	 */
	fallback?:
	| ReactNode
	| ((error: Error, info: ErrorInfo, retry: () => void) => ReactNode)
	| ((props: { error: Error; info: ErrorInfo; retry: () => void }) => JSX.Element);
}