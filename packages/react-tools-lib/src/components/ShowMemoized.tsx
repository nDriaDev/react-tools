/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { memo } from "react";
import { Show } from "./Show";

//#IGNORE

/**
 * **`ShowMemoized`**: Memoized version of _Show_ component. [See demo](https://ndriadev.github.io/react-tools/#/components/ShowMemoized)
 * @param {PropsWithChildren<{when: T|boolean|undefined|null, fallback?: ReactNode}>} object
 * @param {T|boolean|undefined|null} object.when - boolean indicating if to show _children_ or _fallback_/_null_.
 * @param {ReactNode} [object.fallback] - optional element to render when _when_ prop is false.
 * @param {PropsWithChildren<any>["children"]} [object.children] - optional element to render when _when_ prop is true.
 * @returns {JSX.Element|null} element - the element rendered or null.
 */
export const ShowMemoized = memo(Show);