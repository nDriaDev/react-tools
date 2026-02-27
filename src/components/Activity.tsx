import * as React from "react";
import { Show } from "./Show";

// eslint-disable-next-line react-refresh/only-export-components
function ActivityPolyfill({ children, mode }: React.PropsWithChildren<{ mode: "visible" | "hidden" }>) {
	return <Show when={mode === "visible"} mode="visibility">{children}</Show>
}

/**
 * **`Activity`**: Polyfill of the React 19 `<Activity>` component for earlier versions.
 *
 * Keeps the subtree always mounted in the DOM, preserving state and context
 * across visibility changes. When `mode="hidden"` the subtree is hidden via
 * `display: none`; when `mode="visible"` it is rendered normally.
 *
 * ### Differences from the native React 19 `<Activity>`
 *
 * - **Effects are not deactivated**: the native `<Activity>` tears down effects
 *   (e.g. `useEffect` cleanup) when hidden and replays them on re-show, enabling
 *   things like pausing network requests or timers. This polyfill keeps the
 *   subtree fully active — effects continue running while hidden.
 * - **No Suspense integration**: the native `<Activity>` can pre-render hidden
 *   subtrees in the background and reveal them instantly. This polyfill has no
 *   such capability.
 * - **No transition support**: the native `<Activity>` integrates with
 *   `startTransition` to defer hiding/showing. This polyfill applies changes
 *   synchronously.
 *
 * @see [React 19 Activity docs](https://react.dev/reference/react/Activity)
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/Activity)
 * @param {{ mode: "visible" | "hidden", children?: React.ReactNode }} props
 * @returns {JSX.Element} element
 */
export const Activity: React.ComponentType<{ mode: "visible" | "hidden"; children?: React.ReactNode }> =(React as any).Activity ?? ActivityPolyfill;