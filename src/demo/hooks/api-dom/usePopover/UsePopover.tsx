import { CSSProperties, useMemo } from "react"
import { usePopover } from "../../../.."

/**
The component uses _usePopover_ hook to show a popover when a button is clicked.
 */
export const UsePopover = () => {
	const { Popover, isSupported, isOpen, showPopover, hidePopover, togglePopover } = usePopover({
		mode: "manual",
	})

	const style = useMemo<CSSProperties>(() => ({
		width: 300,
		height: 200,
		position: "absolute"
	}), []);

	return <div>
		<p>Is supported: {isSupported ? "Yes" : "No"}</p>
		<p>Type: Manual</p>
		<button onClick={showPopover} disabled={isOpen}>Open Popover</button>
		<button onClick={hidePopover} disabled={!isOpen}>Hide Popover</button>
		<button onClick={togglePopover} >Toggle Popover</button>
		<Popover style={style}>
			<h2>
				Popover heading
			</h2>
			<p>Popover content</p>
		</Popover>
	</div>
}