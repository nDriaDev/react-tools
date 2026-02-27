import { PropsWithChildren, ReactNode } from "react";

/**
 * Internal state managed by the
 * [Suspense](https://react-tools.ndria.dev/components/Suspense) polyfill.
 */
export interface SuspenseState {
	/**
	 * `true` when a descendant component has thrown a Promise that has not yet
	 * resolved, causing the `fallback` UI to be rendered in its place.
	 * Reset to `false` once the Promise resolves and the component tree is
	 * ready to be rendered.
	 */
	isSuspended: boolean;

	/**
	 * The Promise thrown by a suspended descendant, or `null` when no
	 * component is currently suspended. Used internally to schedule a
	 * re-render once the Promise settles.
	 */
	suspendedPromise: Promise<unknown> | null;
}

/**
 * Props accepted by the [Suspense](https://react-tools.ndria.dev/components/Suspense) polyfill.
 */
export interface SuspenseProps extends PropsWithChildren {
	/**
	 * Content rendered while one or more descendant components are suspended
	 * (i.e. while a thrown Promise is pending). Accepts any valid React node —
	 * typically a spinner, skeleton, or loading message.
	 *
	 * When the suspended Promise resolves, `fallback` is replaced by the
	 * original `children`.
	 */
	fallback: ReactNode;
}
