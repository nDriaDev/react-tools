import { useRef, useState } from "react"
import { useClickOutside } from "../../../../../../../packages/react-tools-lib/src";
import { Dropdown } from "./Dropdown";

/**
The component renders a button to open a dropdown. When dropdown is open, the button is disabled. To close dropdown is used _useClickOutside_ that keeps a reference to dropdown container and closes dropdown when there is a click outside dropdown container.
 */
export const UseClickOutside = () => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, () => setIsOpen(false));

	return <div style={{ margin: "0 auto", width: "fit-content" }}>
		<button onClick={() => setIsOpen(true)} disabled={isOpen}>Dropdown</button>
		<div ref={ref}>
			{
				isOpen && <Dropdown/>
			}
		</div>
	</div>
}