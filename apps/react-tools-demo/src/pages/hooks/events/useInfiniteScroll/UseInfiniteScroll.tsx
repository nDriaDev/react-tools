import { useCallback, useMemo, useRef } from "react";
import { useInfiniteScroll } from "../../../../../../../packages/react-tools/src";

/**
The component uses _useInfiniteScroll_ hook to render an items list that load all items while user scroll its container.
 */
export const UseInfiniteScroll = () => {
	const ref = useRef<HTMLDivElement>(null);
	const resultData = useMemo(() => Array(40).fill(undefined).map((_, index)=> index.toString()),[]);

	const getLoadMoreList = useCallback((data?: string[]): Promise<string[]> => {
		let list;
		if (!data) {
			list = resultData.slice(0, 10);
		} else {
			const limit = 10;
			let start = 0;
			if (data!.length !== resultData.length) {
				start = data!.length;
			}
			const end = start + limit;
			list = [...data, ...resultData.slice(start, end)];
		}
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(list!);
			}, 1000);
		});
	}, [resultData]);

	const { data, loading, loadData, fullData } = useInfiniteScroll<string[], HTMLDivElement>({
		request: getLoadMoreList,
		ref,
		hasMoreData: useCallback((d?: string[]) => (d || []).length !== resultData.length, [resultData]),
		threshold: 240
	});

	return (<>
		<h2 style={{textAlign: "left"}}>Items List</h2>
		<div ref={ref} style={{ height: 250, overflow: 'auto', border: '1px solid', padding: 12 }}>
			<div>
				{data?.map((item) => (
					<div key={item} style={{ padding: 12, border: '1px solid #f5f5f5' }}>
						item-{Number(item) + 1}
					</div>
				))}
			</div>
			<div style={{ marginTop: 8 }}>
				{!fullData && (
					<button type="button" onClick={loadData} disabled={loading}>
						{loading ? 'Loading more...' : 'Click to load more'}
					</button>
				)}

				{fullData && <span>No more data</span>}
			</div>
		</div>
	</>);
}