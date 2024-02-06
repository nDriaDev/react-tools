/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { PropsWithChildren, ReactNode } from "react";

/**
 * **`Show`**: Generic component used to conditional render part of the view: it renders _children_ when the _when_ prop is truthy, otherwise the _fallback_ prop, if it is present, or null. [See demo](https://ndriadev.github.io/react-tools/#/components/Show)
 * @param {PropsWithChildren<{when: boolean, fallback?: ReactNode}>} object
 * @param {T|boolean|undefined|null} object.when - boolean indicating if to show _children_ or _fallback_/_null_.
 * @param {ReactNode} [object.fallback] - optional element to render when _when_ prop is false.
 * @param {PropsWithChildren<any>["children"]} [object.children] - optional element to render when _when_ prop is true.
 * @returns {JSX.Element|null} element - the element rendered or null.
 */
export const Show = <T extends unknown>({ when, fallback, children }: PropsWithChildren<{ when: T|boolean|undefined|null, fallback?: ReactNode }>) => {
	if (!when) {
		return fallback ? <>{fallback}</> : null;
	}
	return <>{children}</>;
}