import { useCallback, useEffect, useReducer, useRef } from "react";
import { For } from "../../../../../../packages/react-tools/src";

/**
The component uses _For_ component to render a p element returned from _body_ memoized function for all objects assigned to _arr_  ref variable. It also specified __id__ property as _elementKey_ prop. A setInverval is executed on mount that on every second force component to rerender. If you open dev tools, you can see that _body_ function logs only three times at first, one for each element of _arr_ variable
 */
export default function ForComponent() {
	const arr = useRef([
		{ id: "1", firstName: "Jhon", lastName: "Doe" },
		{ id: "2", firstName: "Jona", lastName: "Doe" },
		{ id: "3", firstName: "Jhonney", lastName: "Doe" }
	]);
	const [, update] = useReducer(t => !t, false);

	const body = useCallback<(item: { id: string, firstName: string, lastName: string }, index: number|string) => JSX.Element>((item, index) => {
		console.log("body render");
		return <p>{index}: {item.firstName} - {item.lastName}</p>
	}, []);

	useEffect(() => {
		const id = setInterval(() => update(), 1000);
		return () => clearInterval(id)
	}, [])

	return <>
		<For
			elementKey="id"
			of={arr.current}
		>
			{body}
		</For>
	</>
}