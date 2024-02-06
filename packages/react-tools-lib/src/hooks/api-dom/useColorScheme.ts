import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state"

/**
 * **`useColorScheme`**: Hook to handle ColorScheme. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useColorScheme)
 * @param {Object} param
 * @param {"dark"|"light"|"mediaQuery"} param.defaultValue - initial value if _getter_ function isn't present or isn't return a valid value. It can be _dark_ _light_ or _mediaQuery_ which means that must to be used media query prefers-color-scheme to detect initial value.
 * @param {()=>"dark"|"light"|null|undefined} [param.getter] - an optional function used to initialize current value. For example, it can be useful for reading the value from an attribute of an html file or from localStorage.
 * @param {("dark"|"light")=>void} [param.setter] - an optional function, which should work in conjunction with the _getter_ function, to run when the color scheme changes to save the value for future runs.
 * @param {boolean} param.returnValue - if true returns only a function to manually change the color scheme value.
 * @returns {["dark"|"light", (schema:"dark"|"light") => void] | (schema:"dark"|"light") => void} result - if _returnValue_ is true, _result_ is the function to update color scheme value, otherwise is an array where first element is current value and second element is the function to update value.
 */
function useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light" | "dark") => void, returnValue: true }): ["light" | "dark", (schema: "light" | "dark") => void]
function useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light" | "dark") => void, returnValue: false }): ((schema: "light" | "dark") => void)
function useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light"|"dark") => void, returnValue: boolean }): ["light" | "dark", (schema: "light" | "dark") => void] | ((schema: "light" | "dark") => void) {
	const currentValue = useRef<"dark" | "light">(useMemo(() => {
		let val = getter ? getter() : null;
		if (!val) {
			val = defaultValue === "mediaQuery" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : defaultValue;
			setter && setter(val);
		}
		return val;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]));
	const cacheValue = useRef(currentValue.current);
	const notifRef = useRef<(() => void) | null>();

	const updateValue = useCallback((schema: "dark" | "light") => {
		currentValue.current = schema;
		setter && setter(currentValue.current);
		notifRef.current && notifRef.current();
	}, [setter])

	const value = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			const mq = window.matchMedia("(prefers-color-scheme: dark)")
			const listener = (evt: MediaQueryListEvent) => {
				updateValue(evt.matches ? "dark" : "light");
			};

			defaultValue === "mediaQuery" && mq.addEventListener("change", listener, {passive: true})
			return () => {
				defaultValue === "mediaQuery" && mq.removeEventListener("change", listener)
				notifRef.current = null;
			}
		}, [defaultValue, updateValue]),
		useCallback(() => {
			if (currentValue.current !== cacheValue.current) {
				cacheValue.current = currentValue.current;
			}
			return cacheValue.current
		}, [])
	);

	if (returnValue) {
		return [
			value,
			updateValue
		]
	}

	return updateValue
}

export {useColorScheme}