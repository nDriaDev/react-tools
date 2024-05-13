import { Case } from "./_Case";
import { Switch } from "./_Switch";

/**
 * **`SwitchCase`**: It works like switch-case construct. It useful for when there are more than 2 mutual exclusive conditions. [See demo](https://react-tools.ndria.dev/#/components/SwitchCase)
 * @param {Object} object - Object with _Switch_ and _Case_ components.
 * @returns {{Switch: (props:{children:ReactElement<CaseProps>|ReactElement<CaseProps>[], fallback?:ReactNode})=>JSX.Element|null, Case: (props:{children:ReactNode, when:booleaan|undefined|null})=>JSX.Element|null}}
 */
export const SwitchCase = { Switch, Case };
