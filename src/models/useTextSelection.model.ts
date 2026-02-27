import { RefObject } from "react";

/**
 * Parameters accepted by [useTextSelection](https://react-tools.ndria.dev/hooks/api-dom/useTextSelection).
 */
export type UseTextSelectionProps = {
	/**
	 * The element within which text selection is tracked. Accepts either a React
	 * `RefObject<HTMLElement>` or a direct `HTMLElement` reference.
	 * When omitted, selection is tracked globally on `document.body`.
	 */
	target?: RefObject<HTMLElement> | HTMLElement;

	/**
	 * Called when the user begins a selection gesture inside the target element
	 * (on `pointerdown`). Also fired when the pointer re-enters the target while
	 * a selection is already in progress and no text is currently selected.
	 */
	onStart?: (evt: Event) => void;

	/**
	 * Called on every `selectionchange` event while a selection gesture is active
	 * inside the target element. Registered on `document` for the duration of the
	 * gesture and removed on `pointerup` or `pointerleave`.
	 */
	onChange?: (evt: Event) => void;

	/**
	 * Called when the selection gesture ends inside the target element (on `pointerup`
	 * or `pointerleave`), after the final {@link TextSelection} value has been computed
	 * and the reactive state has been updated.
	 */
	onEnd?: (evt: Event) => void;
};

/**
 * Text selection state returned by [useTextSelection](https://react-tools.ndria.dev/hooks/api-dom/useTextSelection).
 * Updated whenever the user changes the text selection in the document.
 */
export type UseTextSelectionResult = null | {
	/** The raw text content of the current selection (equivalent to `Selection.toString()`). */
	text: string;
	/**
	 * Direction of the selection relative to the anchor point.
	 * - `"forward"` — the user dragged from left to right / top to bottom.
	 * - `"backward"` — the user dragged from right to left / bottom to top.
	 */
	direction: "forward" | "backward";
	/**
	 * Bounding rectangle that fully encloses the entire selection, even when it spans
	 * multiple lines or nodes. Equivalent to the union of all `innerRectangles`.
	 */
	outsideRectangle: DOMRect;
	/**
	 * Array of `DOMRect` objects, one per text line or range fragment.
	 * Use these for fine-grained positioning (e.g. rendering a floating toolbar aligned
	 * to each line of a multi-line selection).
	 */
	innerRectangles: DOMRect[];
}
