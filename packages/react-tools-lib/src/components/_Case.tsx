import { PropsWithChildren } from "react"

/**
 * **`Case`**: Component used inside _SwitchCase_ component to represent a case construct.
 * @param {PropsWithChildren<{ when: boolean|undefined|null }} props - object props.
 * @param {ReactNode} props.children - children to render.
 * @param {boolean|undefined|null} props.when - boolean indicating if to show _children_ or _null_.
 * @returns {JSX.Element|null} element
 */
export const Case = ({ children, when }: PropsWithChildren<{ when: boolean | undefined | null }>) => {
	return !when
		? null
		: <>{children}</>
}