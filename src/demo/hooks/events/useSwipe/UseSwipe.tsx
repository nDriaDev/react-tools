import { useRef } from "react";
import { useSwipe } from "../../../..";

/**
The component uses _useSwipe_ hook to handle swipe event on a div element.
 */
export const UseSwipe = () => {
	const divRef = useRef<HTMLDivElement>(null);
	useSwipe({
		target: divRef,
		onSwipe(_, direction, delta) {
			console.log(direction)
			delta.x >=0 && (divRef.current!.style.left = delta.x + "px");
		},
		onSwipeEnd(_, __, delta) {
			divRef.current!.style.left = `${delta.x>330 ? "400" : "0"}px`
		},
	});
	const reset = () => {
		divRef.current!.style.left = "0";
	}
	return <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 400, height: 100, border: "1px solid lightgray", overflow: "hidden", margin: "0 auto" }}>
		<button onClick={reset}>RESET</button>
		<div ref={divRef} style={{ position: "absolute", backgroundColor: "rgb(73 84 104)", zIndex: 100, inset: 0 }}><p>SWIPE</p></div>
	</div>
}