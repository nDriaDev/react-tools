import { memo } from "react";
import { createProxyStore, useProxyStore } from "../../../../../../packages/react-tools/src";

const store = createProxyStore({ name: "prova", count: 0 });

const Child1 = memo(() => {
	const {name} = useProxyStore<{ name: string, count: number }>(store);
	return (<>
		<p>Name is {name}</p>
	</>);
})

const Child2 = memo(() => {
	const state = useProxyStore<{ name: string, count: number }>(store);
	return (<>
		<button type="button" onClick={()=>state.count++}>Increment count</button>
	</>);
})

/**
DEMO
 */
const UseProxyStore = () => {
	const state = useProxyStore<{ name: string, count: number }>(store);
	return (
		<div>
			<p>State is {state.name} - {state.count}</p>
			<Child1/>
			<Child2/>
		</div>
	);
}

UseProxyStore.displayName = "UseProxyStore";

export { UseProxyStore };