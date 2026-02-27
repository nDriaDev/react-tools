import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state"
import { UseColorSchemeProps, UseColorSchemeResult } from "../../models";

/**
 * **`useColorScheme`**: Hook to handle ColorScheme.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useColorScheme)
 * @param {UseColorSchemeProps} param - {@link UseColorSchemeProps}
 * @returns {UseColorSchemeResult} result {@link UseColorSchemeResult}
 */
function useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light" | "dark") => void, returnValue: true }): ["light" | "dark", (schema: "light" | "dark") => void]
function useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light" | "dark") => void, returnValue: false }): ((schema: "light" | "dark") => void)
function useColorScheme({ defaultValue, getter, setter, returnValue }: UseColorSchemeProps): UseColorSchemeResult {
	const currentValue = useRef<"dark" | "light">(useMemo(() => {
		let val = getter ? getter() : null;
		if (!val) {
			val = defaultValue === "mediaQuery" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : defaultValue;
			setter && setter(val);
		}
		return val;
	},[defaultValue, getter, setter]));
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