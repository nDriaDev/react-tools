import { RefObject, useCallback, useMemo, useRef } from "react";
import { TextSelection } from "../../models";
import { useSyncExternalStore } from "../state";
import { isDeepEqual } from "../../utils";

/**
 * **`useTextSelection`**: Hook to track text selection. Refers to [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useTextSelection)
 * @param {Object} param - object with selection properties
 * @param {RefObject<HTMLElement> | HTMLElement} [param.target] - element in which allow selection. Default is _document.body_.
 * @param {(evt: Event) => void} [param.onStart] - function to execute when selection starts.
 * @param {(evt: Event) => void} [param.onChange] - function to execute while selection changes.
 * @param {(evt: Event) => void} [param.onEnd] - function to execute while selection ends.
 * @returns {{text: string, direction: "forward"|"backward", outsideRectangle: DOMRect, innerRectangles: DOMRect[]}} TextSelection - object with: _text_: selected text; _direction_: selection direction; _outsideRectangle_: a __DOMRect__ of selection rectangle; _innerRectangles_: list of __DOMRect__ representing the selection slices.
 */
export const useTextSelection = ({ target, onStart, onChange, onEnd }: { target?: RefObject<HTMLElement> | HTMLElement, onStart?: (evt: Event) => void, onChange?: (evt: Event) => void, onEnd?: (evt: Event) => void } = {}): TextSelection | null => {
	const selecting = useRef(false);
	const selectedText = useRef<string | null>(null);
	const notifRef = useRef<() => void>();
	const selection = useRef<TextSelection | null>(null);

	const selectionEnd = useCallback((evt: Event) => {
		const element = target
			? (target as RefObject<HTMLElement>)?.current
				? (target as RefObject<HTMLElement>).current
				: target as HTMLElement
			: document.body;
		selection.current = getTextSelectionDataSet(element ?? document.body);
		onEnd && onEnd(evt);
		notifRef.current && notifRef.current();
	}, [onEnd, target]);

	const pointerDownDocHandler = useCallback(() => {
		selecting.current = true;
		selectedText.current = null;
	}, []);

	const pointerUpLeaveDocHandler = useCallback((evt: Event) => {
		selecting.current = false;
		if ((getSelection() ?? "").toString() === selectedText.current) {
			selectedText.current = null;
			selectionEnd(evt);
		}
	}, [selectionEnd]);

	const pointerDownTargetHandler = useCallback((evt: Event) => {
		selecting.current = true;
		onStart && onStart(evt);
		onChange && document.addEventListener("selectionchange", onChange, { passive: true });
	}, [onChange, onStart]);

	const pointerUpLeaveTargetHandler = useCallback(() => {
		selecting.current = false;
		selectedText.current = (getSelection() ?? "").toString();
		onChange && document.removeEventListener("selectionchange", onChange);
	}, [onChange]);

	const pointerEnterTargetHandler = useCallback((evt: Event) => {
		if (selecting.current && (getSelection() ?? "").toString() === "") {
			onStart && onStart(evt);
			onChange && document.addEventListener("selectionchange", onChange, { passive: true });
		}
	}, [onStart, onChange]);

	return useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			const element = target
				? (target as RefObject<HTMLElement>)?.current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document.body;
			document.addEventListener("pointerdown", pointerDownDocHandler, { passive: true });
			document.addEventListener("pointerup", pointerUpLeaveDocHandler, { passive: true });
			document.addEventListener("pointerleave", pointerUpLeaveDocHandler, { passive: true });

			element && element.addEventListener("pointerdown", pointerDownTargetHandler, { passive: true });
			element && element.addEventListener("pointerup", pointerUpLeaveTargetHandler, { passive: true });
			element && element.addEventListener("pointerleave", pointerUpLeaveTargetHandler, { passive: true });
			element && element.addEventListener("pointerenter", pointerEnterTargetHandler, { passive: true });

			return () => {
				document.removeEventListener("pointerdown", pointerDownDocHandler);
				document.removeEventListener("pointerup", pointerUpLeaveDocHandler);
				document.removeEventListener("pointerleave", pointerUpLeaveDocHandler);

				element && element.removeEventListener("pointerdown", pointerDownTargetHandler);
				element && element.removeEventListener("pointerup", pointerUpLeaveTargetHandler);
				element && element.removeEventListener("pointerleave", pointerUpLeaveTargetHandler);
				element && element.removeEventListener("pointerenter", pointerEnterTargetHandler);
			}
		}, [pointerDownDocHandler, pointerUpLeaveDocHandler, pointerDownTargetHandler, pointerUpLeaveTargetHandler, pointerEnterTargetHandler, target]),
		useMemo(() => {
			let element = target
				? (target as RefObject<HTMLElement>)?.current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document.body;
			let currSelection = selection.current;
			return () => {
				const currElement = target
					? (target as RefObject<HTMLElement>)?.current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document.body;
				if (element !== currElement || !isDeepEqual(currSelection, selection.current)) {
					element = currElement;
					currSelection = selection.current;
				}
				return currSelection;
			}
		}, [target])
	);
}

function getSelectedTextDirection(selection: Selection): TextSelection["direction"] {
	const position = selection.anchorNode!.compareDocumentPosition(selection.focusNode!);
	let backward = false;
	// position == 0 if nodes are the same
	if (!position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
		backward = true;
	}
	return backward ? "backward" : "forward"
}
function getTextSelectionDataSet(parentElement: HTMLElement): TextSelection | null {
	const ws = window.getSelection();
	if (ws === null || ws.toString().trim() === "") {
		return null;
	}
	const parentElementDim = parentElement.getBoundingClientRect();
	const selectionDim = ws.getRangeAt(0).getBoundingClientRect();
	const data: TextSelection = {
		text: ws.toString(),
		direction: getSelectedTextDirection(ws),
		outsideRectangle: new DOMRect(
			selectionDim.x - parentElementDim.x,
			selectionDim.y - parentElementDim.y,
			selectionDim.width,
			selectionDim.height,
		),
		innerRectangles: Array.from(ws.getRangeAt(0).getClientRects() || []).map(el => {
			el.x = el.x - parentElementDim.x;
			el.y = el.y - parentElementDim.y;
			return el;
		})
	}

	return data;
}