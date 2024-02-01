import { Suspense } from "react"
import { usePromiseSuspensible } from "../../../../../../../packages/react-tools/src";

/**
The _Delayed_ component uses _usePromiseSuspensible_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered, otherwise an alert is invocked. Delayed component is returned from _UsePromiseSuspensible_ component.
 */
const Delayed = () => {
	const data = usePromiseSuspensible(() => {
		return new Promise<number[]>((res, rej) => {
			console.log("called")
			setTimeout(() => {
				Math.random() > 0.5
					? res([1, 2, 3, 4, 5])
					: rej();
			},4000)
		}).catch(() => alert("Error throwed by promise"))
	}, []);

	return <pre>{JSON.stringify(data)}</pre>;
}

export const UsePromiseSuspensible = () => {
	return <Suspense fallback="loading...">
		<Delayed/>
	</Suspense>
}