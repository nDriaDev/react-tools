import { Children, isValidElement } from "react";
import { SwitchProps } from "../models";

/**
 * **`Switch`**: Component used inside _SwitchCase_ component to represent switch construct.
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/SwitchCase)
 * @param {SwitchProps} props - {@link SwitchProps}
 * @returns {JSX.Element|null} element
 */
export const Switch = ({ children, fallback }: SwitchProps) => {
	const activeChild = Children.toArray(children).find(
		(el) => isValidElement(el) && el.props.when === true
	);

	if (!activeChild) {
		return fallback ?? null;
	}

	return activeChild;
}
