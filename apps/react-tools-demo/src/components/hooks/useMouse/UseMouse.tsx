import { useRef } from "react";
import { useMouse } from "../../../../../../packages/react-tools/src";

/**
The component tracks the relative mouse position to _element_
 */
export const UseMouse = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { x, y, relativeElementDim: { top = null, left = null, width = null, height = null } = {} } = useMouse({ relativeElement: ref });

	return (
		<>
			<div
				ref={ref}
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: 'gray',
					color: 'white',
					lineHeight: '200px',
					textAlign: 'center',
				}}
			>
				element
			</div>
			<div>
				<p>
					Mouse Position relative to Element - x: {x}, y: {y}
				</p>
				<p>
					Element Dimensions - top: {top}  left: {left}  width: {width}  height: {height}
				</p>
			</div>
		</>
	);
}