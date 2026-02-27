import { Children, isValidElement } from "react";
import { MatchProps, OptionProps } from "../models";

/**
 * **`Match`**: Component used inside _MatchOption_ component to represent a match construct.
 *
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/Match)
 * @template T - The type of the `value` to be compared.
 * @param {MatchProps<T>} props - {@link MatchProps}
 * @returns {JSX.Element|null} element
 */
const Match = <T,>({ value, children, fallback }: MatchProps<T>) => {
	const childrenArray = Children.toArray(children);

	const match = childrenArray.find(
		(child) => {
			let result = false;
			if (isValidElement(child)) {
				if ("is" in child.props) {
					result = typeof child.props.is === "function"
						? child.props.is(value)
						: child.props.is === value;
				}
			}
			return result;
		}
	);

	return match ?? fallback ?? null;
};

/**
 * **`Option`**: Component used inside _MatchOption_ component to represent an option construct.
 *
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/MatchOption)
 * @template T - The type of the `is` value, should match the `value` type of the parent [Match].
 * @param {OptionProps<T>} props - {@link OptionProps}
 * @returns {JSX.Element|null} element
 */
const Option = <T,>({ children }: OptionProps<T>) => {
	return children;
};

/**
 * **`MatchOption`**: Provides a declarative switch-case pattern. It compares the [Match] component's `value` against the `is` prop of its [Option] children.
 * The first matching [Option] is rendered; otherwise, the `fallback` is displayed.
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/MatchOption)
 */
export const MatchOption = { Match, Option };