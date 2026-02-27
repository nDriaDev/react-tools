import { useMediaQuery } from "../../../.."

/**
The component uses _useMediaQuery_ hook to detect color-scheme and displays result.
 */
export const UseMediaQuery = () => {
	const mediaQuery = useMediaQuery('(prefers-color-scheme: dark)');

	return <div style={{textAlign: "left"}}>
		<p>
			Color-scheme: {mediaQuery.matches ? "dark" : "light"}
		</p>
		<p>
			Media matched: {mediaQuery.media}
		</p>
	</div>
}