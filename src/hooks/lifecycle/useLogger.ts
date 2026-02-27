import { useEffect, useRef } from "react"
import { UseLoggerProps } from "../../models";

/**
 * **`useLogger`**: Hook to log componet details during Lifecycle events.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useLogger)
 * @param {UseLoggerProps["name"]} name - {@link UseLoggerProps}
 * @param {UseLoggerProps["props"]} props - {@link UseLoggerProps}
 * @returns {void} result
 */
export const useLogger = (name: UseLoggerProps["name"], props: UseLoggerProps["props"]) => {
	const prevProps = useRef<object>();

	useEffect(() => {
		if (!prevProps.current) {
			prevProps.current = props;
		} else {
			const keys = Reflect.ownKeys(props);
			for (const key of keys) {
				if (Reflect.get(props, key) !== Reflect.get(prevProps.current, key)) {
					console.log(name + " component updated", prevProps.current, props);
				}
			}
		}
	}, [name, props]);

	useEffect(() => {
		console.log(name + " component mounted");

		return () => {
			console.log(name + " component unmounted");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}