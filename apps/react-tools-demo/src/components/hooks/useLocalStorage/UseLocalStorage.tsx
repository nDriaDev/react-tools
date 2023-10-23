import { useCallback } from "react";
import { useLocalStorage } from "../../../../../../packages/react-tools/src/hooks";

/**
DEMO
 */
const UseLocalStorage = () => {
	const [state, setState, , remove] = useLocalStorage({ key: "key" });
	const func = useCallback(() => {
		setState(Math.random() > .5 ? "MAGGIORE" : "MINORE");
	}, [setState]);

	const clear = useCallback(() => remove(), [remove]);


	return (<>
		{state}
		<button onClick={func}>Prova</button>
		<button onClick={clear}>clear</button>
	</>);
}

UseLocalStorage.displayName = "UseLocalStorage";

export { UseLocalStorage };