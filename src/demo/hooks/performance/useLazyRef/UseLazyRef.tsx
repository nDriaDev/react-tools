import { useRef } from "react";
import { useInterval, useLazyRef, useRerender } from "../../../..";

/**
There are two functions __initializer__ and __initializerLazy__ that log a message when they runs then sum and return number from 0 to 100.

The component has:
- a __lazyValue__ creates by _useLazyRef_ hook with __initializerLazy__ function as param.
- a __value__ creates by _useRef_ hook with __initializer__ function executed as param.
- a __rerender__ function created by _useRerender_ hook to force a rerender.
- a __apply__ function created by _useInterval_ hook to execute __rerender__ function every second.
- render a div with __lazyValue__ and __value__ values.

If you open devtools will see that __initializerLazy__ message is logged once while __initializer__ message every rerender.
 */
const initializer = () => {
	console.log("initializer run...")
	return Array(100).fill(true).reduce((prev, _, index) => prev + index, 0);
}

const initializerLazy = () => {
	console.log("initializerLazy run...")
	return Array(100).fill(true).reduce((prev, _, index) => prev + index, 0);
}

export const UseLazyRef = () => {
	const rerender = useRerender();
	const [apply] = useInterval(() => rerender(), 1000);
	const lazyValue = useLazyRef(initializerLazy);
	const value = useRef(initializer());

	apply();

	return (
		<div>
			<p>Value is: {value.current}</p>
			<p>LazyValue is: {lazyValue.current}</p>
		</div>
	);
}