import { useCallback } from "react";
import { useColorScheme } from "../../../.."

/**
The component uses _useColorScheme_ with these properties:
- _defaultValue_: __"mediaQuery"__, so it read color-scheme with media query.
- _returnValue_: __true__, so it returns current value.
- _getter_: a function that returns value from sessionStorage item with key "color-scheme".
- _setter_: a function that save current value to sessionStorage item with key "color-scheme".
The component renders a div with a class container that changes border and text colors by color-scheme selected and a button to manually change value.
 */
export const UseColorScheme = () => {
	const [value, update] = useColorScheme({
		defaultValue: "mediaQuery",
		returnValue: true,
		getter: useCallback(() => sessionStorage.getItem("color-scheme") as "dark" | "light" | null, []),
		setter: useCallback((val: "dark" | "light") => sessionStorage.setItem("color-scheme", val), [])
	});

	return (
		<div className="container-themed" data-color={value}>
			<p>Current color-scheme is: {value}</p>
			<button onClick={() => update(value === "dark" ? "light" : "dark")}>Change color</button>
		</div>
	);
}