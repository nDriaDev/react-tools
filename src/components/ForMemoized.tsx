import { memo } from "react";
import { For } from "./For";
//#IGNORE
/**
 * **`ForMemoized`**: Memoized version of _For_ component.
 * {@link For} is wrapped with `React.memo`, preventing re-renders when his props have
 * not changed. Prefer this over {@link For} in performance-sensitive
 * trees where the parent re-renders frequently.
 *
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/ForMemoized)
 */
const ForMemoized = memo(For) as typeof For;

ForMemoized.displayName = "ForMemoized";

export { ForMemoized };