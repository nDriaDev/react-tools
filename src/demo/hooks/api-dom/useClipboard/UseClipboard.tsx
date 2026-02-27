import { useCallback, useRef, useState } from "react";
import { useClipboard } from "../../../..";

/**
- The component has an internal state _val_ and invokes _useClipboard_ hook with these properties: _useValue_=__true__ _target_=__ref__ and _dataType_=__text__. It means that hook will return _value_ of type __string__ and _write_ and _read_ functions that handle __text__ data type. The component declares also two functions:
	- _copy_ that invokes __write__ function to write into clipboard text selected.
	- _paste_ that invokes __read__ function to get value from clipboard and setting it to internal stave variable _val_.
- __ref__ is attached to a div that contains two buttons _COPY_ and _PASTE_, that have _copy_ and _paste_ functions respectively to handle their click event and two paragraph texts.
- Another div is rendered that displays the internal state _val_ and current _clipboard_ values.
*/
export const UseClipboard = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [val, setVal] = useState("");
	const [value, write, read] = useClipboard({ useValue: true, target: ref, dataType: "text" });
	const copy = useCallback(async () => {
		await write(getSelection()?.toString() || "");
	}, [write])

	const paste = useCallback(async () => {
		const value = await read();
		setVal(value as string);
	}, [read])

	return <div style={{ display: "grid", gridTemplateColumns: "50% 50%", columnGap: 15 }}>
		<div ref={ref} style={{ position: "relative", border: "1px solid lightgray" }}>
			<div style={{ display: "grid", gridTemplateColumns: "100px 100px", justifyContent: "center", columnGap: 15 }}>
				<button onClick={copy}>Copy</button>
				<button onClick={paste}>Paste</button>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
		</div>
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 15, border: "1px solid lightgray" }}>
			<div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto" }}>
				<p><strong>Use ClipboardValue:</strong></p>
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</div>
			<div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto" }}>
				<p><strong>Internal value:</strong></p>
				<pre>{JSON.stringify(val, null, 2)}</pre>
			</div>
		</div>
	</div>
}