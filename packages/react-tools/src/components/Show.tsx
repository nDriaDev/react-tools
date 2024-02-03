import { PropsWithChildren, ReactNode } from "react";

/**
 * **`Show`**: Generic component used to conditional render part of the view: it renders _children_ when the _when_ prop is truthy, otherwise the _fallback_ prop, if it is present, or null. [See demo](https://nDriaDev.io/react-tools/#/components/Show)
 * @param {PropsWithChildren<{when: boolean, fallback?: ReactNode}>} object
 * @param {boolean} object.when - boolean indicating if to show _children_ or _fallback_/_null_.
 * @param {ReactNode} [object.fallback] - optional element to render when _when_ prop is false.
 * @param {PropsWithChildren<any>["children"]} [object.children] - optional element to render when _when_ prop is true.
 * @returns {JSX.Element|null} element - the element rendered or null.
 */
export const Show = ({ when, fallback, children }: PropsWithChildren<{ when: boolean, fallback?: ReactNode }>) => {
	if (!when) {
		return fallback ? <>{fallback}</> : null;
	}
	return <>{children}</>;
}