import { CaseProps } from "../models"

/**
 * **`Case`**: Component used inside _SwitchCase_ component to represent a case construct.
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/SwitchCase)
 * @param {CaseProps} props - {@link CaseProps}
 * @returns {JSX.Element|null} element
 */
export const Case = ({ children, when }: CaseProps) => {
	return !when
		? null
		: <>{children}</>
}