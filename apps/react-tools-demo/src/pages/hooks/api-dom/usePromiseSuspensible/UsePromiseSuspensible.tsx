import { Suspense, useCallback } from "react"
import { ErrorBoundary, usePromiseSuspensible } from "../../../../../../../packages/react-tools-lib/src";

/**
The _Delayed_ component uses _usePromiseSuspensible_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered with a button to invalidate result, otherwise an alert is invocked. Delayed component is returned from _UsePromiseSuspensible_ component.
 */
const Delayed = () => {
	const [data, invalidate] = usePromiseSuspensible(
		async () => {
			return await new Promise<number[]>((res, rej) => {
				console.log("called");
				setTimeout(() => {
					Math.random() > 0.5
						? res([1, 2, 3, 4, 5])
						: rej("Error throwed by promise");
				}, 4000);
			});
		},
		[],
		{
			cache: 25, //25 seconds
			cleanOnError: true,
			identifier: "ss",
			invalidateManually: true
		}
	);

	return <>
		<button onClick={invalidate}>Invalidate</button>
		<pre>{JSON.stringify(data)}</pre>
	</>;
}

export const UsePromiseSuspensible = () => {
	const fallback = useCallback<(error: Error, info: React.ErrorInfo, retry: () => void) => React.ReactNode>((_, __, retry) => {
		return <button onClick={retry}>Retry</button>
	}, []);

	return <ErrorBoundary fallback={fallback}>
		<Suspense fallback="loading...">
			<Delayed />
		</Suspense>
	</ErrorBoundary>
}