import { useCallback } from "react"
import { AlertHandler, ConfirmHandler, DialogHandler, DialogType, PromptHandler } from "../../models";


/**
 * **`useDialogBox`**: Hook to use Dialog Box _prompt_, _alert_ or _confirm_.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useDialogBox)
 * @param {DialogType} type - {@link DialogType}
 * @returns {DialogHandler} result {@link DialogHandler}
 */
function useDialogBox(type: "prompt"): PromptHandler;
function useDialogBox(type: "alert"): AlertHandler;
function useDialogBox(type: "confirm"): ConfirmHandler;
function useDialogBox(type: DialogType): DialogHandler {
	const IS_SSR = typeof window === "undefined";
	const prompt = useCallback((message?: string, _default?: string) => IS_SSR ? null : window.prompt(message, _default), [IS_SSR]);
	const alert = useCallback((message?: any) => IS_SSR ? null : window.alert(message), [IS_SSR]);
	const confirm = useCallback((message?: string) => IS_SSR ? null : window.confirm(message), [IS_SSR]);

	return type === "prompt"
		? prompt
		: type === "alert"
			? alert
			: confirm;
}

export { useDialogBox };