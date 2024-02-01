import { useActiveElement } from "../../../../../../../packages/react-tools/src";
/**
The component has 3 HTML elements: a _span_ element with __tabindex__ attribute, a _p_ element with __tabindex__ attribute and a _button_ element. It renders also the current _active element_. If element focused changes, _active element_ displayed will change.
 */
export const UseActiveElement = () => {
	const activeElement = useActiveElement();

	return (<>
		<p>Active element is: {activeElement?.tagName}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<span tabIndex={0} style={{backgroundColor: '#1A1A1A', borderRadius: 8, cursor: "pointer", padding: "15px 25px", margin: 'auto'}}>Span</span>
			<p tabIndex={0} style={{backgroundColor: '#1A1A1A', borderRadius: 8, cursor: "pointer", padding: "15px 25px", margin: 0}}>P</p>
			<button>Button</button>
		</div>
	</>)
}