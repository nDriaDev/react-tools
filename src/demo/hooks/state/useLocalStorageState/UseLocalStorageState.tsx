import { BaseSyntheticEvent, memo, useCallback } from "react";
import { useEffectOnce, useLocalStorageState } from "../../../..";

/**
The component has:
- An internal _useLocalStorage_ state with __key__ _demo_ and __initialState__ _prova_ from which gets __remove__ function.
- A Child component 1 that uses _useLocalStorage_ with _read_ __mode__ and __key__ _demo_ to read from localStorage.
- A Child component 2 that uses _useLocalStorage_ with _write_ __mode__ and __key__  _demo_ to write to LocalStorage with an onSubmit form event with a input text value.
- An useEffect that invokes __remove__ function and delete item with key _demo_ from localStorage when the component unmounts.

When component is mounted, the Child1 state is _prova_. It can be changed by Child2. If you change state and open the page into another tab, after mounting, the Child1 display the new value of state and every changes made is reflected in both tabs.
 */
const Child = memo(() => {
	const [state] = useLocalStorageState<string>({key:"demo", opts: {mode: "read"}});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
})

const Child2 = memo(() => {
	const [setState] = useLocalStorageState<string>({key:"demo", opts: {mode: "write"}});
	return (<>
		<h3>Child component 2</h3>
		<form onSubmit={(e: BaseSyntheticEvent) => {
			setState(e.target[0].value);
			e.preventDefault();
		}}>
			<input type="text" />
		</form>
	</>)
})

const UseLocalStorageState = () => {
	const [, , , remove] = useLocalStorageState({ key: "demo", initialState: "prova" });
	const clear = useCallback(() => remove(), [remove]);

	useEffectOnce(() => {
		return () => clear();
	})

	return (<>
		<Child />
		<br />
		<Child2/>
	</>);
}

UseLocalStorageState.displayName = "UseLocalStorageState";

export { UseLocalStorageState };