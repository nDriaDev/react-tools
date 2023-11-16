import { useMemo, useRef } from "react";
import { useTextSelection } from "../../../../../../packages/react-tools/src"
export const UseTextSelection = () => {
	const ref = useRef<HTMLDivElement>(null);
	const selection = useTextSelection({ target: ref, onEnd: () => {getSelection()?.removeAllRanges()} });
	const rectangles = useMemo(() => {
		if (!selection) {
			return null;
		} else {
			const rectangles = [];
			rectangles.push(
				<div
					key="outside-rectangle"
					style={{
						position: "absolute",
						border: ".5px solid red",
						top: selection.outsideRectangle.top + "px",
						left: selection.outsideRectangle.left + "px",
						width: selection.outsideRectangle.width + "px",
						height: selection.outsideRectangle.height + "px",
					}}
				></div>
			);
			selection.innerRectangles.forEach((el, index) => {
				rectangles.push(<div
					key={"inner-rectangle-"+index}
					style={{
						position: "absolute",
						border: ".5px solid darkcyan",
						top: el.top + "px",
						left: el.left + "px",
						width: el.width + "px",
						height: el.height + "px",
					}}
				></div>);
			})
			return rectangles;
		}
	}, [selection]);

	return <div style={{ display: "grid", gridTemplateColumns: "50% 50%", columnGap: 15 }}>
		<div ref={ref} style={{ position: "relative", border: "1px solid lightgray" }}>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			{rectangles}
		</div>
		<div style={{textAlign: "left", padding: "0 1em", overflow: "auto", border: "1px solid lightgray"}}>
			<p><strong>Selection:</strong></p>
			<pre>{JSON.stringify(selection, null, 2)}</pre>
		</div>
	</div>
}