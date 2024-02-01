import { useCallback, useState } from "react";
import { useDoubleClick } from "../../../../../../packages/react-tools/src"

/**
The component renders a tag p with __message__ state variable and a button which has an onClick handler. Its handler is __handler__, the returned function of _useDoubleClick_ hook that set __message__ value in different way by click type.
 */
export const UseDoubleClick = () => {
	const [message, setMessage] = useState("");
	const handler = useDoubleClick({
		doubleClick: useCallback(() => {
			setMessage("Double click executed.")
		}, []),
		singleClick: useCallback(() => {
			setMessage("Single click executed.")
		}, [])
	});

	return <div>
		<p>Message: {message}</p>
		<button onClick={handler}>Click/DoubleClick</button>
	</div>
}