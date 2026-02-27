/**
 * The possible types for the native dialog box.
 */
export type DialogType = "prompt" | "alert" | "confirm";

/**
 * Function that triggers a native `window.prompt`.
 * @param message - Text to display in the dialog.
 * @param _default - Default value for the input field.
 * @returns The string entered by the user or null if cancelled.
 */
export type PromptHandler = (message?: string, _default?: string) => string | null;

/**
 * Function that triggers a native `window.alert`.
 * @param message - The message to display.
 */
export type AlertHandler = (message?: any) => void;

/**
 * Function that triggers a native `window.confirm`.
 * @param message - The question to display.
 * @returns True if the user clicks OK, false otherwise.
 */
export type ConfirmHandler = (message?: string) => boolean;

/**
 * Union of all possible handler functions returned by the hook.
 */
export type DialogHandler = PromptHandler | AlertHandler | ConfirmHandler;
