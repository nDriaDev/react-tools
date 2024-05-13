# useInfiniteScroll
Hook to deal with large sets of data. It allow users to scroll through content endlessly without explicit pagination or loading new pages. [See demo](https://react-tools.ndria.dev/#/hooks/events/useInfiniteScroll)

## Usage

```tsx
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
```

> The component uses _useInfiniteScroll_ hook to render an items list that load all items while user scroll its container.


## API

```tsx
useInfiniteScroll<T, E extends Element>({ request, ref, hasMoreData, threshold, onBefore, onError, onSuccess }: { request: (data?: T) => Promise<T>, ref: RefObject<E>, hasMoreData: (data?: T) => boolean, threshold?: number, onBefore?: () => void, onSuccess?: () => void, onError?: (err: unknown) => void }): { data: T | undefined, loading: boolean, fullData: boolean, updateData: (data: T | ((currentState?: T) => T)) => void, loadData: () => Promise<void> }
```


> ### Params
>
> - __param__: _Object_
> - __param.request__: _(data?: T | undefined) => Promise<T>_  
request to obtain data.
> - __param.ref__: _RefObject<E extends Element>_  
a reference to container element.
> - __param.hasMoreData__: _(data?: T | undefined) => boolean_  
function that will be executed every time _data_ changes to detect if there will be new data values.
> - __param.threshold=0?__: _number|undefined_  
a threshold value by which load next data during scroll.
> - __param.onBefore?__: _()=>void_  
function that will be executed before to execute __request__.
> - __param.onSuccess?__: _()=>void_  
function that will be executed if __request__ execution has success.
> - __param.onError?__: _(err:unknown)=>void_  
function that will be executed if an error occurred calling __request__.
>



> ### Returns
>
> __result__:  __Object__:  
    - __data__ : _T|undefined_  
    - __loading__ : _boolean_  
    - __fullData__ : _boolean_  
    - __updateData__ : _(data:T|((currentState?:T)=>T))=>void_  
    - __loadData__ : _()=>Promise<void>_  
> Object with these properties:
> - __data__: data returned from _request_ execution.
> - __loading__: boolean that will be true if a _request_ execution is in pending, otherwise it will be false.
> - __fullData__: boolean that indicates if all data are returned or not.
> - __updateData__: function to update data from outside.
> - __loadData__:  function to manual load next data.
>