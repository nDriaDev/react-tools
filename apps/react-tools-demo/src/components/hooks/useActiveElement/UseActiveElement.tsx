import { useActiveElement } from "../../../../../../packages/react-tools/src"

/**
DEMO
 */
export const UseActiveElement = () => {
	const activeElement = useActiveElement();
	console.log("render", activeElement?.tagName)

	return (<>
		<p>Active element is: {activeElement?.tagName}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<span tabIndex={0}>Span</span>
			<p tabIndex={0}>P</p>
			<button>Button</button>
		</div>
	</>)
}