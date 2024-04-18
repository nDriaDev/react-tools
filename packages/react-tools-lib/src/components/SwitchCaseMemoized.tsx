import { memo } from "react";
import { Case } from "./_Case";
import { Switch } from "./_Switch";

//#IGNORE

/**
 * **`SwitchCaseMemoized`**: Memoized version of _SwitchCase_ component. [See demo](https://ndriadev.github.io/react-tools/#/components/SwitchCaseMemoized)
 * @param {Object} object - Object with _Switch_ and _Case_ components.
 * @returns {{Switch: (props:{children:ReactElement<CaseProps>|ReactElement<CaseProps>[], fallback?:ReactNode})=>JSX.Element|null, Case: (props:{children:ReactNode, when:booleaan|undefined|null})=>JSX.Element|null}}
 */
export const SwitchCaseMemoized = {
	Switch: memo(Switch),
	Case: memo(Case)
};
