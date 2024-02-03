import { BaseSyntheticEvent, useCallback, useState } from "react";
import { useMemoizedFn } from "../../../../../../../packages/react-tools/src";
import { Input } from "./InputMemo";

/**
The component has:
- A _useState_ that receives an object, with two properties _memoizedValue and _value_ passed respectively like value to _input component 1_ nd _input component 2_.
- A _updateStateMemoized_ function to handle onChange event of the _input component 1_, create with _useMemoizedFn_.
- A _updateState_ function to handle onChange event of the _input component 2_, created with _useCallback_.
- Both functions update state with a new object create with previous state object and the new value that the specific input component has changed.

When value of _input component 1_ changes, the state changes and _updateState_ function is reevaluated, so a new value props is passed to _input component 2_ that rerenders.
Instead when value of _input component 2_ changes, the _updateStateMemoized_ function doesn't change, so _input component 1_ doesn't rerender.
 */
export const UseMemoizedFn = () => {
	const [state, setState] = useState({memoizedValue: "", value: ""});

	const updateStateMemoized = useMemoizedFn((e: BaseSyntheticEvent) => setState({...state, memoizedValue: e.target.value}));
	const updateState = useCallback((e: BaseSyntheticEvent) => setState({...state, value: e.target.value}), [state])
	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<div>
				<p><strong>updateStateMemoized</strong></p>
				<div style={{ gridTemplateRows: "auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="idG" name="id" value={state.memoizedValue} onChange={updateStateMemoized} />
				</div>
			</div>
			<div>
				<p><strong>updateState</strong></p>
				<div style={{ gridTemplateRows: "auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="eta" name="eta" value={state.value} onChange={updateState} />
				</div>
			</div>
		</div>
	);
}

