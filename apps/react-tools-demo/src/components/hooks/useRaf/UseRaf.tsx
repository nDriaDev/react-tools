import { useState } from "react"
import { useRaf, useResizeObserver } from "../../../../../../packages/react-tools/src";

/**
The component renders a textarea element and when it is resized, updates __state__ variable inside function __start__ returned from _useRaf_ hook.
 */
export const UseRaf = () => {
	const [state, setState] = useState({ width: 0, height: 0 });
	const [start] = useRaf((timer: number, dim: DOMRectReadOnly) => {
		setState({width:dim.width, height: dim.height})
	});
	const [refCb] = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			start(entries[0].contentRect);
		}
	);

	return <div>
		<p>{"Textarea dimension: " + JSON.stringify(state)}</p>
		<textarea ref={refCb} rows={3}></textarea>
	</div>
}