import { useRef } from "react";
import { usePerformAction } from "../../../../../../../packages/react-tools-lib/src/hooks/events/usePerformAction";
import { useScript } from "../../../../../../../packages/react-tools-lib/src/hooks/api-dom/useScript"
import { Dropdown } from "./Dropdown";
import { Select } from "./Select";

/**
The component load bootstrap script with _useScript_ hook to use Bootstrap Dropdown, and renders two child components that render a Select and a Dropdown components. Every child component when select value is _2_, executes a click on dropdown to open it by a ref attached on dropdown button.

The _Child1_ executes click on button but dropdown isn't displayed. The _Child2_ executes click with _usePerformAction_ hook and shows the dropdown.
 */
const Child1 = () => {
	const ref = useRef<HTMLButtonElement>(null);
	const perform = (() => ref.current?.click());
	return (<div>
		<p><strong>
			Component without performAction
		</strong></p>
		<Select action={perform}/>
		<br />
		<br />
		<Dropdown btnRef={ref}/>
	</div>);
}

const Child2 = () => {
	const ref = useRef<HTMLButtonElement>(null);
	const perform = usePerformAction(() => ref.current?.click());
	return (<div>
		<p><strong>
			Component with performAction
		</strong></p>
		<Select action={perform} />
		<br />
		<br />
		<Dropdown btnRef={ref} />
	</div>);
}

const UsePerformAction = () => {
	const [status] = useScript(
		{
			src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
			integrity:"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
			crossorigin: "anonymous"
		},
		{
			removeOnUnmount: true
		}
	);

	if (status === "loading") {
		return null;
	}

	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<Child1 />
			<Child2 />
		</div>
	);
}

UsePerformAction.displayName = "UsePerformAction";

export { UsePerformAction };