import { RefObject, useCallback, useMemo, useRef } from "react";
import { TextSelection } from "../models";
import { isDeepEqual, useSyncExternalStore } from "..";

export const useTextSelection = ({ target, onStart, onChange, onEnd }: { target?: RefObject<HTMLElement> | HTMLElement, onStart?: (evt: Event) => void, onChange?: (evt: Event) => void, onEnd?: (evt: Event) => void } = {}): TextSelection | null => {
	const selecting = useRef(false);
	const selectedText = useRef<string | null>(null);
	const notifRef = useRef<() => void>();
	const selection = useRef<TextSelection | null>(null);

	const selectionEnd = useCallback((evt: Event) => {
		const element = target
			? (target as RefObject<HTMLElement>).current
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
		onChange && document.addEventListener("selectionchange", onChange);
	}, [onChange, onStart]);

	const pointerUpLeaveTargetHandler = useCallback(() => {
		selecting.current = false;
		selectedText.current = (getSelection() ?? "").toString() || null;
		onChange && document.removeEventListener("selectionchange", onChange);
	}, [onChange]);

	const pointerEnterTargetHandler = useCallback((evt: Event) => {
		if (selecting.current && (getSelection() ?? "").toString() === "") {
			onStart && onStart(evt);
			onChange && document.addEventListener("selectionchange", onChange);
		}
	}, [onStart, onChange]);

	return useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			const element = target
				? (target as RefObject<HTMLElement>).current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document;
			document.addEventListener("pointerdown", pointerDownDocHandler);
			document.addEventListener("pointerup", pointerUpLeaveDocHandler);
			document.addEventListener("pointerleave", pointerUpLeaveDocHandler);

			element && element.addEventListener("pointerdown", pointerDownTargetHandler);
			element && element.addEventListener("pointerup", pointerUpLeaveTargetHandler);
			element && element.addEventListener("pointerleave", pointerUpLeaveTargetHandler);
			element && element.addEventListener("pointerenter", pointerEnterTargetHandler);

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
				? (target as RefObject<HTMLElement>).current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document;
			let currSelection = selection.current;
			return () => {
				const currElement = target
					? (target as RefObject<HTMLElement>).current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document;
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