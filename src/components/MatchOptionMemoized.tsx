import { memo } from "react";
import { MatchOption } from "./MatchOption";

//#IGNORE

/**
 * **`MatchOptionMemoized`**: Memoized version of _MatchOption_ component.
 * Both [Match] and [Option] are wrapped with `React.memo`, preventing re-renders
 * when their props have not changed.
 * Prefer this over [MatchOption](https://react-tools.ndria.dev/components/MatchOption)
 * in performance-sensitive trees where the parent re-renders frequently.
 *
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/MatchOptionMemoized)
 */
export const MatchOptionMemoized = {
	Switch: memo(MatchOption.Match),
	Case: memo(MatchOption.Option)
};
