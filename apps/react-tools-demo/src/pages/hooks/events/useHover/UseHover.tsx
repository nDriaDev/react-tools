import { useRef } from "react"
import { useHover } from "../../../../../../../packages/react-tools/src";

/**
The component renders a paragraph element with some text to which is attacched a ref used for __useHover__ hook that returns if element is hovered or not. This value is rendered into another paragraph element.

When mouse is hovered paragraph element, status changes to true.
 */
export const UseHover = () => {
	const pRef = useRef<HTMLParagraphElement>(null);
	const hover = useHover(pRef);

	return (
		<div>
			<p>Is hover: {hover ? "hover" : "not hover"}</p>
			<p ref={pRef}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id delectus deserunt atque! Est id voluptatem sint accusamus non doloribus totam nobis nostrum provident facilis eos eum, placeat consequatur minus quidem.</p>
		</div>
	);
}