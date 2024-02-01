import { useEffect } from "react";
import { useScript } from "../../../../../../../packages/react-tools/src"
declare const jQuery: { fn: { jquery: string } };

/**
The component load _jQuery_ script by _useScript_ hook and when it is __ready__ displays the jQuery version. When the component unmount, the script is removed.
The script is loaded by _appendScript_ function inside a timeout to allow visibility status changes.
 */
export const UseScript = () => {
	const [status, append, remove] = useScript(
		{
			src: `https://code.jquery.com/jquery-3.5.1.min.js`
		},
		{
			handleAppending: true,
		}
	)
	const message: string = status === "ready" ? jQuery.fn.jquery : "N.D.";

	useEffect(() => {
		const id = setTimeout(() => {
			append();
		}, 3000);
		return () => {
			clearTimeout(id);
			remove();
		};
	}, [append, remove]);
	return (<>
		<p>Script status: {status}</p>
		<p>jQuery version: {message}</p>
	</>);
}