import { RefObject, useCallback, useMemo, useRef } from "react";
import { UseTextSelectionProps, UseTextSelectionResult } from "../../models";
import { useSyncExternalStore } from "../state";
import { isDeepEqual } from "../../utils";

/**
 * **`useTextSelection`**: Hook to track text selection.
 * @see [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useTextSelection)
 * @param {UseTextSelectionProps} param - {@link UseTextSelectionProps}
 * @returns {UseTextSelectionResult} result {@link UseTextSelectionResult}
 */
export const useTextSelection = ({ target, onStart, onChange, onEnd }: UseTextSelectionProps = {}): UseTextSelectionResult => {
	const selecting = useRef(false);
	const selectedText = useRef<string | null>(null);
	const notifRef = useRef<() => void>();
	const selection = useRef<UseTextSelectionResult | null>(null);

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

function getSelectedTextDirection(selection: Selection): Exclude<UseTextSelectionResult, null>["direction"] {
	const position = selection.anchorNode!.compareDocumentPosition(selection.focusNode!);
	let backward = false;
	// position == 0 if nodes are the same
	if (!position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
		backward = true;
	}
	return backward ? "backward" : "forward"
}
function getTextSelectionDataSet(parentElement: HTMLElement): UseTextSelectionResult | null {
	const ws = window.getSelection();
	if (ws === null || ws.toString().trim() === "") {
		return null;
	}
	const parentElementDim = parentElement.getBoundingClientRect();
	const selectionDim = ws.getRangeAt(0).getBoundingClientRect();
	const data: UseTextSelectionResult = {
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