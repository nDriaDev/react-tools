/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react"


/**
 * **`useDialogBox`**: Hook to use Dialog Box _prompt_, _alert_ or _confirm_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDialogBox)
 * @param {"prompt"|"alert"|"confirm"} type - set dialog box type.
 * @returns {((message?: string, default?: string) => string|null) | ((message?: any) => void) | ((message?: string) => boolean)} open - function to activate dialog box.
 */
function useDialogBox(type: "prompt"): ((message?: string, _default?: string) => string | null);
function useDialogBox(type: "alert"): ((message?: any) => void);
function useDialogBox(type: "confirm"): ((message?: string) => boolean);
function useDialogBox(type: "prompt" | "confirm" | "alert"): ((message?: string, _default?: string) => string | null) | ((message?: any) => void) | ((message?: string) => boolean) {
	const prompt = useCallback((message?: string, _default?: string) => window.prompt(message, _default), []);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const alert = useCallback((message?: any) => window.alert(message), []);
	const confirm = useCallback((message?: string) => window.confirm(message), []);

	return type === "prompt"
		? prompt
		: type === "alert"
			? alert
			: confirm;
}

export { useDialogBox };