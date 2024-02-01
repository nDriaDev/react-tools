import { useRef } from "react"
import { useShare } from "../../../../../../../packages/react-tools/src"

/**
The component uses _useShare_ hook to know if Web share API is supported and returns a button to share link to this library.
 */
export const UseShare = () => {
	const sharedDate = useRef<ShareData>({
		title: "React-tools",
		text: "React tools",
		url: window.location.origin + "/index.html"
	})
	const { isSupported, share } = useShare();

	const onClick = () => share(sharedDate.current);

	return <div style={{textAlign: "center"}}>
		<p>Is supported: {isSupported.toString()}</p>
		<button onClick={onClick}>Share</button>
	</div>
}