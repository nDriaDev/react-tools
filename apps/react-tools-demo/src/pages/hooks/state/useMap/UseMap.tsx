import { useCallback, useMemo, useRef } from "react";
import { useMap } from "../../../../../../../packages/react-tools-lib/src";

/**
The component has:
- A _useMap_ internal state.
- An uncontrolled input with _inputRef_ ref used to execute buttons actions.
- A button _Set_ that set the input value (format like __id__ _-_ __value__) into state by _set_ method of Map interface.
- A button _Delete_ that remove item into state by _key_, written in input by _delete_ method of Map interface.
- A button _Clear_ that clear state by _clear_ method of Map interface.
- A button _IncrementAll_ that adds 1 to every value into map by _forEach_ method of Map interface.
- A variable parsed create with useMemo that memoized a concatenated string of state key-value pairs, separated by comma.
 */
const UseMap = () => {
	const map = useMap<string, number>();

	const inputRef = useRef<HTMLInputElement>(null);

	const del = useCallback(() => {
		map.delete(inputRef.current!.value);
	}, [map]);

	const set = useCallback(() => {
		const [key, value] = inputRef.current!.value.split("-");
		map.set(key, Number(value));
	}, [map]);

	const clear = useCallback(() => {
		map.clear();
	}, [map]);

	const incrementAll = useCallback(() => {
		map.forEach((value, key, map) => { map.set(key, value + 1) });
	}, [map]);

	const parsed = useMemo(() => {
		const temp: string[] = [];
		temp.map
		map.forEach((value, key) => temp.push(key + " - " + value));
		return temp.join(", ");
	}, [map]);

	return (<>
		{parsed}
		<br/>
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={set}>Set</button>
			<button onClick={del}>Delete</button>
			<button onClick={clear}>Clear</button>
			<button onClick={incrementAll}>Increment all</button>
		</div>
	</>);
}

UseMap.displayName = "UseMap";

export {UseMap}