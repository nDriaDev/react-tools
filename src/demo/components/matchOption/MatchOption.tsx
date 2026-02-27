import { useEffect, useRef, useState } from "react";
import { MatchOption } from "../../../";

/**
The component has an array of numbers and a variable state number used like index of array. Every 2 seconds index changes value. It uses __MatchOption__ component to render different p element with a text indicating the value of array with the current index.
 */
export default function SM() {
	const valuesCounter = useRef([1, 2, 3]);
	const [indexCounter, setIndexCounter] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIndexCounter(i => i%4+1 === 4 ? 0 : i%4+1), 2000);
		return () => clearInterval(id);
	}, []);

	return (<div style={{textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center"}}>
		<p style={{width: 230}}>Counter values: {JSON.stringify(valuesCounter.current, null, 2)}</p>
		<p style={{width: 230}}>Counter index: {indexCounter}</p>
		<MatchOption.Match value={indexCounter} fallback={<p style={{color: "darkorange", width: 230}}>Counter value unsetted.</p>}>
			<MatchOption.Option is={0}>
				<p style={{color: "darkturquoise", width: 230, fontWeight: 800}}>Counter value is 1.</p>
			</MatchOption.Option>
			<MatchOption.Option is={(value) => value === 1}>
				<p style={{color: "darkkhaki", width: 230, fontWeight: 800}}>Counter value is 2.</p>
			</MatchOption.Option>
			<MatchOption.Option is={2}>
				<p style={{color: "darkcyan", width: 230, fontWeight: 800}}>Counter value is 3.</p>
			</MatchOption.Option>
		</MatchOption.Match>
	</div>);
}