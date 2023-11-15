import { RefObject, useCallback, useMemo, useRef } from "react";
import { TextSelection } from "../models";
import { isDeepEqual, useSyncExternalStore } from "..";

/**
 * TODO
 * non funziona bene, vanno gestiti gli eventi per come qui https://excalidraw.com/#json=7nYktheXKBE2A3aBYxPVx,s3gx5SWbNG-GHk2_VsODRw
 * il getTextSelectionDataSet non ritorna i rettangoli se il testo selezionato è di uno stesso elemento ma va a capo.
 */
export const useTextSelection = ({ target, onStart, onChange, onEnd }: { target?: RefObject<HTMLElement> | HTMLElement, onStart?: (evt: Event) => void, onChange?: (evt: Event) => void, onEnd?: (evt: Event) => void } = {}): TextSelection | null => {
	const selectionEnd = useCallback((evt: Event) => {
		const element = target
				? (target as RefObject<HTMLElement>).current
			? (target as RefObject<HTMLElement>).current
			: target as HTMLElement
		: document;
		onEnd && onEnd(evt);
		onChange && document.removeEventListener("selectionchange", onChange);
		element?.removeEventListener("pointerleave", selectionEndWrap.current!);
		document.removeEventListener("pointerup", selectionEndWrap.current!);
	}, [onEnd, onChange, target]);

	const selectionEndWrap = useRef<EventListenerOrEventListenerObject>();

	const selectionStart = useCallback((evt: Event, notif: () => void) => {
		const element = target
			? (target as RefObject<HTMLElement>).current
				? (target as RefObject<HTMLElement>).current
				: target as HTMLElement
			: document;
		if (!element?.contains(evt.target as HTMLElement)) {
			return;
		}
		onStart && onStart(evt);
		onChange && document.addEventListener("selectionchange", onChange);
		selectionEndWrap.current = (evt: Event) => {
			selectionEnd(evt);
			notif();
		}
		document.addEventListener("pointerup", selectionEndWrap.current);
		element?.addEventListener("pointerleave", selectionEndWrap.current);
	}, [onStart, onChange, selectionEnd, target]);

	return useSyncExternalStore(
		useCallback(notif => {
			const listener = (evt: Event) => {
				selectionStart(evt, notif);
			}
			document.addEventListener("selectstart", listener);

			return () => {
				document.removeEventListener("selectstart", listener)
			}
		}, [selectionStart]),
		useMemo(() => {
			let element = target
				? (target as RefObject<HTMLElement>).current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document;
			let selection = getTextSelectionDataSet(element !== document ? element as HTMLElement : undefined);
			return () => {
				const currElement = target
					? (target as RefObject<HTMLElement>).current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document;
				const currSelection = getTextSelectionDataSet(currElement !== document ? currElement as HTMLElement : undefined);
				if (element !== currElement || !isDeepEqual(currSelection, selection)) {
					element = currElement;
					selection = currSelection;
				}
				return selection;
			}
		}, [target])
	);
}

function getSelectedTextDirection(selection: Selection) {
	const range = document.createRange();
	range.setStart(selection.anchorNode!, selection.anchorOffset);
	range.setEnd(selection.focusNode!, selection.focusOffset);
	return range.collapsed ? 'backward' : 'forward';
}
function getTextSelectionDataSet(parentElement?: HTMLElement): TextSelection | null {
	const ws = window.getSelection();
	if (ws === null || ws.toString().trim() === "") {
		return null;
	}
	const parentElementDim = (parentElement ?? document.body).getBoundingClientRect();
	const selectionDim = ws.getRangeAt(0).getBoundingClientRect();
	const data: TextSelection = {
		text: ws.toString(),
		outsideRectangle: new DOMRect(
			selectionDim.x - parentElementDim.x,
			selectionDim.y - parentElementDim.y,
			selectionDim.width,
			selectionDim.height,
		),
		innerRectangles: []
	}
	const direction = getSelectedTextDirection(ws),
		ranges = [];
	let allText = data.text;
	let container, element, text: Node | null, selectedText, offset;

	if (direction === "backward") {
		text = ws.focusNode!;
		offset = ws.focusOffset;
	} else {
		text = ws.anchorNode!;
		offset = ws.anchorOffset;
	}

	element = text!.parentNode!;
	container = element!.parentNode!;

	const range = document.createRange();
	range.setStart(text, offset);
	selectedText = (text as Node & { data: string }).data.toString().substring(offset);
	if (allText.length <= selectedText.length) {
		range.setEnd(text, offset + allText.length);
		ranges.push(range);
		allText = "";
	} else {
		range.setEnd(text, offset + selectedText.length);
		ranges.push(range);
		allText = allText.substring(selectedText.length);
	}

	while (allText !== "") {
		while (allText.charAt(0) === "\n") {
			allText = allText.substring(1);
		}
		if (allText === "") {
			break;
		}
		text = text!.nextSibling;
		while (text === null || text!.nodeName !== "#text") {
			if (text === null) {
				if (element === null || element!.nextSibling === null) {
					if (container === null || container!.nextSibling === null) {
						container = container!.parentNode;
						container = container?.nextSibling ?? null;
						element = container?.firstChild ?? null;
						text = element?.firstChild ?? null;
					} else {
						container = container!.nextSibling;
						element = container!.firstChild;
						text = element?.firstChild ?? null;
					}
				} else {
					element = element!.nextSibling;
					text = element!.firstChild;
				}
			} else {
				text = text!.nextSibling;
			}
		}
		const range = document.createRange();
		selectedText = (text as Node & { data: string }).data.toString();
		range.setStart(text, 0);
		if (allText.length <= selectedText.length) {
			range.setEnd(text, allText.length);
			ranges.push(range);
			allText = "";
		} else {
			range.setEnd(text, selectedText.length);
			ranges.push(range);
			allText = allText.substring(selectedText.length);
		}
	}

	data.innerRectangles = ranges.map(el => {
		const dim = el.getBoundingClientRect();
		return new DOMRect(
			dim.x - parentElementDim.x,
			dim.y - parentElementDim.y,
			dim.width,
			dim.height
		);
	});

	return data;
}