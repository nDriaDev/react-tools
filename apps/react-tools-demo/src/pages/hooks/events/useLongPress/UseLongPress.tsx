import { useState } from "react";
import { useLongPress } from "../../../../../../packages/react-tools/src";

/**
The component has:
- a __pressCounter__ state variable.
- a __clickCounter__ state variable.
- a RefCallback __cbRef__ attached to a button __Press me__. It is returned from _useLongPress_ hook that has a cb a function to update __pressCounter__ state and _normalPress_ option to update __clickCounter__ state.
- it renders a div with __Press me__ button and two p elements that display __pressCounter__ and __clickCounter__.

When the button is clicked for less than a second, _normalPress_ callback is executed, otherwise _long press_ callback is executed.
 */
export const UseLongPress = () => {
	const [pressCounter, setPressCounter] = useState(0);
	const [clickCounter, setClickCounter] = useState(0);
	const [color, setColor] = useState(-1)


	const cbRef = useLongPress<HTMLButtonElement>(() => {
		setPressCounter((s) => s + 1);
		setColor(1);
	}, {
		normalPress: () => setClickCounter((s) => s + 1),
		onStart() {
			setColor(0);
		},
		onFinish() {
			setColor(-1);
		},
	});

	return (
		<div>
			<button ref={cbRef} type="button" style={{ ...(color === -1 ? {} : { backgroundColor: color === -1 ? "inherit" : color === 0 ? "#8e830f" : "#0b5f07"})}}>
				Press me
			</button>
			<p>pressCounter: {pressCounter}</p>
			<p>clickCounter: {clickCounter}</p>
		</div>
	);
}