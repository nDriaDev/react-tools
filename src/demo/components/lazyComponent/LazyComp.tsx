import { useEffect, useState } from "react";

export const LazyComponent = () => {
	const [timer, setTimer] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const id = setInterval(() => setTimer(new Date().toLocaleTimeString()), 1000);
		return () => clearInterval(id);
	}, []);
	return (<>
		<h3>Lazy Component</h3>
		<p>Clock: {timer}</p>
		<p>This component has been loaded lazy.</p>
	</>);
}