import { useEventListener } from "./useEventListener";
import { UseBeforeUnloadProps, UseBeforeUnloadResult } from "../../models";

/**
 * **`useBeforeUnload`**: Hook to handle beforeunload event.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useBeforeUnload)
 * @param {UseBeforeUnloadProps} param - {@link UseBeforeUnloadProps}
 * @returns {UseBeforeUnloadResult} result {@link UseBeforeUnloadResult}
 */
export const useBeforeUnload = ({element, listener, opts}:UseBeforeUnloadProps): UseBeforeUnloadResult => {
	return useEventListener({
		type: "beforeunload",
		element,
		listener,
		listenerOpts: opts
	});
}