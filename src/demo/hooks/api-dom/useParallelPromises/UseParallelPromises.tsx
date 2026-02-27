import { Suspense, useCallback } from "react"
import { ErrorBoundary } from "../../../..";
import { useParallelPromises } from "../../../../hooks/api-dom/useParallelPromises";

/**
The _Delayed_ component uses _usePromise_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered with a button to invalidate result, otherwise an alert is invocked. Delayed component is returned from _UsePromise_ component.
 */
const Delayed = () => {
	const {result, invalidate} = useParallelPromises(
		[async () => {
			return await new Promise<number[]>((res, rej) => {
				console.log("called");
				setTimeout(() => {
					Math.random() > 0.5
						? res([1, 2, 3, 4, 5])
						: rej("Error throwed by promise");
				}, 4000);
			});
		}],
		[],
		{
			identifiers: ["ss"],
		}
	);

	return <>
		<button onClick={invalidate}>Invalidate</button>
		<pre>{JSON.stringify(result[0])}</pre>
	</>;
}

export const UseParallelPromise = () => {
	const fallback = useCallback<(error: Error, info: React.ErrorInfo, retry: () => void) => React.ReactNode>((_, __, retry) => {
		return <button onClick={retry}>Retry</button>
	}, []);

	return <ErrorBoundary fallback={fallback}>
		<Suspense fallback="loading...">
			<Delayed />
		</Suspense>
	</ErrorBoundary>
}