import { memo, useCallback } from "react";
import { useProxyState } from "../../../../../../packages/react-tools/src";

/**
The component has:
- a state created with _useProxyStore_, that is a object with _num_ property, a number, and _nested_ property that is a object with _random_ property that is a string.
- a useCallback function _increment_ that increment _num_ property.
- a useCallback function _random_ that generate random number, assigned to _nested.random_ property.
- a _Child1_ component that receives _num_ and _increment_ as props.
- a _Child2_ component that receives _nested.random_ and _random_ as props.
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