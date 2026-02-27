import { memo } from "react";
import { Show } from "./Show";

//#IGNORE

/**
 * **`ShowMemoized`**: Memoized version of _Show_ component.
 * [Show] is wrapped with `React.memo`, preventing re-renders when his props have not changed.
 * Prefer this over [Show](https://react-tools.ndria.dev/components/Show) in performance-sensitive
 * trees where the parent re-renders frequently.
 *
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/ShowMemoized)
 */
export const ShowMemoized = memo(Show);