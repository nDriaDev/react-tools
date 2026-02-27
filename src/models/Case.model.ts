import { PropsWithChildren } from "react";

/**
 * Props accepted by the [SwitchCase.Case](https://react-tools.ndria.dev/components/SwitchCase) component.
 */
export interface CaseProps extends PropsWithChildren {
	/**
	 * When truthy, this `<Case>`'s children are rendered and evaluation stops.
	 * Only the first truthy `<Case>` in the tree is rendered.
	 */
	when: boolean | undefined | null;
}