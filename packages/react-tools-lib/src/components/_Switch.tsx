import { Children, PropsWithChildren, ReactElement, ReactNode, isValidElement } from "react";

/**
 * **`Switch`**: Component used inside _SwitchCase_ component to represent switch construct.
 * @param {{ children: ReactElement<PropsWithChildren<{ when: boolean|undefined|null }>>|Array<ReactElement<PropsWithChildren<{ when: boolean|undefined|null }>>>, fallback?: ReactNode }} props - object props.
 * @param {ReactNode} [props.fallback] - optional element to render when no _when_ prop of Case components is true.
 * @returns {JSX.Element|null} element
 */
export const Switch = ({ children, fallback }: { children: ReactElement<PropsWithChildren<{ when: boolean | undefined | null }>> | Array<ReactElement<PropsWithChildren<{ when: boolean | undefined | null }>>>, fallback?: ReactNode }) => {
	const child = Children.toArray(children).find(el => isValidElement(el) && el.props.when)
	return child
		? <>{child}</>
		: fallback !== undefined
			? <> {fallback}</>
			: null;
}
