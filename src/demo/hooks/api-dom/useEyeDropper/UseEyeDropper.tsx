import { useState } from "react"
import { useEyeDropper } from "../../../.."

/**
The component uses _useEyeDropper_ hook to know if EyeDropper API is supported and returns a button to get a color with EyeDropper API.
 */
export const UseEyeDropper = () => {
	const [color, setColor] = useState("");
	const { isSupported, open } = useEyeDropper();

	const onClick = async () => {
		const result = await open();
		result && setColor(result);
	};

	return <div style={{ textAlign: "center" }}>
		<p>Is supported: {isSupported.toString()}</p>
		<button onClick={onClick}>Get Color</button>
		<br />
		<br />
		<label>Color </label><input type="color" value={color} readOnly/>
	</div>
}