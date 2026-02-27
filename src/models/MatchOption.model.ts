import { PropsWithChildren, ReactElement, ReactNode } from "react";

/**
 * Props accepted by the [MatchOption](https://react-tools.ndria.dev/components/MatchOption) component.
 *
 * @template T - The type of the `value` to be compared.
 */
export interface MatchProps<T> {
	/**
	 * The central value to compare against the `is` prop of each <MatchOption.Option> child.
	 * The first <MatchOption.Option> whose `is` value or function strictly matches (`===`) this `value`
	 * will be rendered.
	 */
	value: T;

	/**
	 * One or more {@link Option} elements to evaluate in order. The first `Option`
	 * whose `is` prop is truthy is rendered; all others are ignored.
	 */
	children?:
		| ReactElement<OptionProps<T>>
		| ReactElement<OptionProps<T>>[]
		| undefined;

	/**
	 * Optional content rendered when no <MatchOption.Option> matches the provided `value`.
	 * Accepts any valid React node.
	 */
	fallback?: ReactNode;
}

/**
 * Props accepted by the [MatchOption](https://react-tools.ndria.dev/components/MatchOption) component.
 *
 * @template T - The type of the `is` value, should match the `value` type of the parent <MatchOption.Match>.
 */
export interface OptionProps<T> extends PropsWithChildren {
	/**
	 * The value used to determine if this option should be rendered.
	 * If `is === value` (from the parent [Match]), the `children` are displayed.
	 */
	is: T | ((value:T) => boolean);
}
