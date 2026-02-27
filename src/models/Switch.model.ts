import { ReactElement, ReactNode } from "react";
import { CaseProps } from "./Case.model";

/**
 * Props accepted by the [SwitchCase.Switch](https://react-tools.ndria.dev/components/SwitchCase) component.
 */
export interface SwitchProps {
	/**
	 * One or more {@link Case} elements to evaluate in order. The first `Case`
	 * whose `when` prop is truthy is rendered; all others are ignored.
	 */
	children?:
	| ReactElement<CaseProps>
	| ReactElement<CaseProps>[]
	| undefined;

	/**
	 * Optional content rendered when no `Case` child has a truthy `when` prop.
	 * Accepts any valid React node.
	 */
	fallback?: ReactNode;
}