import { useState } from "react"
import { useRaf, useResizeObserver } from "../../../..";

/**
The component renders a textarea element and when it is resized, updates __state__ variable inside function __start__ returned from _useRaf_ hook.
 */
export const UseRaf = () => {
	const [state, setState] = useState({ width: 0, height: 0 });
	const [start] = useRaf((_: number, __:()=>void, dim: DOMRectReadOnly) => {
		setState({ width: dim.width, height: dim.height });
	});
	const {ref} = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			start(entries[0].contentRect);
		},
		{ mode: "ref" }
	);

	return <div>
		<p>{"Textarea dimension: " + JSON.stringify(state)}</p>
		<textarea ref={ref} rows={3}></textarea>
	</div>
}