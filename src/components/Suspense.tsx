import * as React from "react";
import { SuspenseProps, SuspenseState } from "../models";

/**
 * Catches Promise throws from descendants and schedules a re-render once
 * the Promise settles. This is the core mechanism that makes the Suspense
 * polyfill work: React's error boundary lifecycle (`componentDidCatch`) is
 * repurposed to intercept thrown Promises instead of thrown Errors.
 */
class SuspenseBoundary extends React.Component<SuspenseProps, SuspenseState> {
	public state: SuspenseState = {
		isSuspended: false,
		suspendedPromise: null,
	};

	/**
	 * `getDerivedStateFromError` is called synchronously during rendering when
	 * a descendant throws. If the thrown value is a Promise (the Suspense
	 * contract), we mark the boundary as suspended. If it is a real Error we
	 * re-throw it so it can be caught by a parent `ErrorBoundary`.
	 */
	public static getDerivedStateFromError(error: unknown): Partial<SuspenseState> | null {
		if (error instanceof Promise) {
			return { isSuspended: true, suspendedPromise: error };
		}
		// Not a Promise — let it propagate to an ErrorBoundary above.
		throw error;
	}

	/**
	 * Once the boundary has caught a Promise, we attach a `.then` handler so
	 * that when the Promise resolves (data ready, lazy import loaded, etc.) we
	 * reset state and trigger a re-render, allowing React to attempt rendering
	 * the children again.
	 */
	public componentDidUpdate(_: SuspenseProps, prevState: SuspenseState): void {
		const { isSuspended, suspendedPromise } = this.state;
		if (isSuspended && suspendedPromise && suspendedPromise !== prevState.suspendedPromise) {
			suspendedPromise.then(
				() => this.setState({ isSuspended: false, suspendedPromise: null }),
				() => this.setState({ isSuspended: false, suspendedPromise: null }),
			);
		}
	}

	public render(): React.ReactNode {
		if (this.state.isSuspended) {
			return <>{this.props.fallback}</>;
		}
		return <>{this.props.children}</>;
	}
}

/**
 * **`Suspense`**: Polyfill of the React `<Suspense>` component.
 *
 * Renders `children` normally. When a descendant component suspends by
 * throwing a Promise (the standard Suspense contract used by `React.lazy`,
 * data-fetching libraries such as SWR, React Query, and Relay, and the
 * `use()` hook), `fallback` is rendered in its place until the Promise
 * resolves, at which point `children` are rendered again.
 *
 * ### How it works
 *
 * The polyfill relies on the same mechanism used by `ErrorBoundary`:
 * `getDerivedStateFromError` is called synchronously when any descendant
 * throws during rendering. If the thrown value is a `Promise`, the boundary
 * marks itself as suspended and renders `fallback`. Once the Promise settles
 * (resolved or rejected), the boundary resets and React re-renders
 * `children`.
 *
 * ### Differences from native React `<Suspense>`
 *
 * - **No concurrent rendering**: the native `<Suspense>` integrates with
 *   React's concurrent mode to render suspended subtrees in the background
 *   without blocking the UI. This polyfill performs a synchronous
 *   `setState` on Promise resolution, which may cause a brief flash of the
 *   `fallback` even when the Promise resolves immediately.
 * - **No `startTransition` integration**: the native `<Suspense>` can keep
 *   the previous UI visible during a transition while the new subtree loads.
 *   This polyfill always shows `fallback` immediately on suspend.
 * - **No streaming / server-side rendering support**: the native `<Suspense>`
 *   supports streaming HTML from the server. This polyfill is client-only.
 * - **Promise rejection**: when a suspended Promise rejects, this polyfill
 *   resets the suspended state and re-renders `children`, which will throw
 *   again — resulting in an infinite loop unless the child handles the error
 *   internally. Wrap with an `ErrorBoundary` to handle rejection gracefully.
 *
 * @see [React Suspense docs](https://react.dev/reference/react/Suspense)
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/Suspense)
 * @param {SuspenseProps} props - {@link SuspenseProps}
 * @returns {JSX.Element} element
 */
export const Suspense: React.ComponentType<SuspenseProps> =
	(React as any).Suspense ?? SuspenseBoundary;
