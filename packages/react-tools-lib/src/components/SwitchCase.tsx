import { Children, PropsWithChildren, ReactNode, isValidElement } from "react"

const Case = ({ children, when }: PropsWithChildren<{ when: boolean | undefined | null }>) => {
	return !when
		? null
		: <>{children}</>
}

/**
 * **`SwitchCase`**: It works like switch-case construct. It useful for when there are more than 2 mutual exclusive conditions. [See demo](https://ndriadev.github.io/react-tools/#/components/SwitchCase)
 * @param {ReactNode} [object.fallback] - optional element to render when _when_ prop is false.
 * @param {PropsWithChildren<any>["children"]} [object.children] - __Case__ components.
 * @returns {JSX.Element|null} element - __Case__ component with _when_ prop value __`true`__ or _fallback_ prop.
 * __Case__ Component has these properties:
 * - _children_: element to render.
 * - _when_: condition that if true return _children_, otherwise null.
 */
const Switch = ({ children, fallback }: PropsWithChildren<{ fallback?: ReactNode }>) => {
	const arr = Children.toArray(children as ReactNode);
	const child = arr.find(el => isValidElement(el) && "when" in el.props && el.props.when)
	return child
		? <>{child}</>
		: <>{fallback}</>;
}

export const SwitchCase = { Switch, Case };
