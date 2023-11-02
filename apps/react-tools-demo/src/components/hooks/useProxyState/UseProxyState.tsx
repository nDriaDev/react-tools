import { memo, useCallback } from "react";
import { useProxyState } from "../../../../../../packages/react-tools/src";

/**
DEMO
 */
const Child1 = memo(({ state, onClick }: { state: number, onClick: ()=>void }) => {
	return (<>
		<p>Num value is: {state}</p>
		<button onClick={onClick} type={'button'}>Increment</button>
	</>);
});

const Child2 = memo(({ state, onClick }: { state: string, onClick: () => void }) => {
	return (<>
		<p>Random value is: {state}</p>
		<button onClick={onClick} type={'button'}>
			Change random
		</button>
	</>);
});

const UseProxyState = () => {
	const state = useProxyState({ num: 0, nested: { random: "" } }, true);
	const increment = useCallback(() => state.num++, [state.num]);
	const random = useCallback(() => state.nested.random = Math.random().toFixed(2), [state.nested]);
	return (
		<div>
			<p>
				Current Value (in the proxy state): {state.num}  -  random: {state.nested.random}
			</p>
			<Child1 state={state.num} onClick={increment}/>
			<Child2 state={state.nested.random} onClick={random} />
		</div>
	);
}

UseProxyState.displayName = "UseProxyState";

export { UseProxyState };