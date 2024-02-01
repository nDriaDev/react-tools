import { Suspense } from "react";
import { useFetch } from "../../../../../../packages/react-tools/src";

/**
The component uses _useFetch_ hook to call jsonplaceholder API with suspense support and without it.
 */
export const Delayed = () => {
	const [data, callSuspensable] = useFetch("https://jsonplaceholder.typicode.com/comments?id=5", { cache: "no-cache", suspensable: true });
	const [data1, call, loading, error] = useFetch("https://jsonplaceholder.typicode.com/comments?id=5", { cache: "no-cache" });

	if (loading ) {
		return <p>Loading...</p>
	}
	if (error) {
		return <p>Error: {JSON.stringify(error)}</p>
	}
	return <>
		<button onClick={() => callSuspensable()}>Call suspensable</button>
		<button onClick={() => call()}>Call</button>
		<pre>{JSON.stringify(data??data1, null, 2)}</pre>
	</>
}

export const UseFetch = () => {
	return <Suspense fallback="loading suspense...">
		<Delayed />
	</Suspense>
}