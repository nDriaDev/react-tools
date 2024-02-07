import { BaseSyntheticEvent, useCallback, useEffect } from "react";
import { useSessionStorageState } from "../../../../../../../packages/react-tools-lib/src";

/**
The component has:
- An internal _useSessionStorage_ state with __key__ _demo_ and __initialState__ _prova_ from which gets __remove__ function.
- A Child component 1 that uses _useSessionStorage_ with _read_ __mode__ and __key__ _demo_ to read from sessionStorage.
- A Child component 2 that uses _useSessionStorage_ with _write_ __mode__ and __key__  _demo_ to write to sessionStorage with an onSubmit form event with a input text value.
- An useEffect that invokes __remove__ function and delete item with key _demo_ from sessionStorage when the component unmounts.

When component is mounted, the Child1 state is _prova_. It can be changed by Child2. If you open the page into another tab, changes aren't reflected in both tabs.
 */
const Child = () => {
	const [state] = useSessionStorageState<string>({key:"demo", opts: {mode: "read"}});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
}

const Child2 = () => {
	const [setState] = useSessionStorageState<string>({key:"demo", opts: {mode: "write"}});
	return (<>
		<h3>Child component 2</h3>
		<form onSubmit={(e: BaseSyntheticEvent) => {
			setState(e.target[0].value);
			e.preventDefault();
		}}>
			<input type="text" />
		</form>
	</>)
}

const UseSessionStorageState = () => {
	const [, , , remove] = useSessionStorageState({ key: "demo", initialState: "prova" });

	const clear = useCallback(() => remove(), [remove]);

	useEffect(() => {
		return () => {
			clear();
		}
	}, [clear]);

	return (<>
		<Child />
		<br />
		<Child2/>
	</>);
}

UseSessionStorageState.displayName = "UseSessionStorageState";

export { UseSessionStorageState };