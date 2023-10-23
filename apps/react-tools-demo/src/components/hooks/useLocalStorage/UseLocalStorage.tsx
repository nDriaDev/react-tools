import { BaseSyntheticEvent, useCallback, useEffect } from "react";
import { useLocalStorage } from "../../../../../../packages/react-tools/src/hooks";

/**
The component has:
- A Child component 1 that uses _useLocalStorage_ to read item with key _demo_.
- A Child component 2 that uses _useLocalStorage_ to write item with key _demo_ by an onSubmit form event with a input text value.
- An useEffect that removes item with key _demo_ when the component unmounts.
 */
const Child = () => {
	const [state] = useLocalStorage<string>({key:"demo"});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
}

const Child2 = () => {
	const [, setState] = useLocalStorage<string>({key:"demo"});
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

const UseLocalStorage = () => {
	const [, , , remove] = useLocalStorage({ key: "demo" });

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

UseLocalStorage.displayName = "UseLocalStorage";

export { UseLocalStorage };