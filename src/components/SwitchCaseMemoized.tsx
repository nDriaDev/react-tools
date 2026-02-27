import { memo } from "react";
import { Case } from "./_Case";
import { Switch } from "./_Switch";

//#IGNORE

/**
 * **`SwitchCaseMemoized`**: Memoized version of _SwitchCase_ component.
 * Both [Switch] and [Case] are wrapped with `React.memo`, preventing re-renders
 * when their props have not changed.
 * Prefer this over [SwitchCase](https://react-tools.ndria.dev/components/SwitchCase)
 * in performance-sensitive trees where the parent re-renders frequently.
 *
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/SwitchCaseMemoized)
 */
export const SwitchCaseMemoized = {
	Switch: memo(Switch),
	Case: memo(Case)
};
