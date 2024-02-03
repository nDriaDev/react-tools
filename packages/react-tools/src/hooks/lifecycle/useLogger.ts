import { useEffect, useRef } from "react"

/**
 * **`useLogger`**: Hook to log componet details during Lifecycle events. [See demo](https://nDriaDev.io/react-tools/#/hooks/lifecycle/useLogger)
 * @param {string} name - component name.
 * @param {object} props - props object to track.
 */
export const useLogger = (name: string, props: object) => {
	const prevProps = useRef<object>();

	useEffect(() => {
		if (!prevProps.current) {
			prevProps.current = props;
		} else {
			const keys = Reflect.ownKeys(props);
			for (const key of keys) {
				if (Reflect.get(props, key) !== Reflect.get(prevProps.current, key)) {
					console.log(name + " component updated", prevProps, props);
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