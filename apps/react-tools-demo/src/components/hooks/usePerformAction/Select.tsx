import { ChangeEvent, memo, useCallback, useState } from "react";

export const Select = memo(({ action }: { action: () => void }) => {
	const [state, setState] = useState("");
	const onChange = useCallback(async (e: ChangeEvent<HTMLSelectElement>) => {
		setState(e.target.value);
		e.target.value === "2" && action();
	}, [action])

	return (
		<select onChange={onChange} value={state}>
			<option></option>
			<option value={1}>1</option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
		</select>
	);
});