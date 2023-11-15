function getSelectedTextDirection(selection: Selection) {
	const range = document.createRange();
	range.setStart(selection.anchorNode!, selection.anchorOffset);
	range.setEnd(selection.focusNode!, selection.focusOffset);
	return range.collapsed ? 'backward' : 'forward';
}
function getTextSelectionDataSet() {
	const ws = window.getSelection();
	if (ws === null || ws.toString().trim() === "") {
		return { text: "", outsideRectangle: null, innerRectangles: [] };
	}
	const data: { text: string, outsideRectangle: DOMRect | null, innerRectangles: Omit<DOMRect, "toJSON">[] } = {
		text: ws.toString(),
		outsideRectangle: ws.getRangeAt(0).getBoundingClientRect(),
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
	selectedText = (text as Node & {data: string}).data.toString().substring(offset);
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
		// if (spanText === null) {
		// 	container = container!.nextSibling;
		// 	for (let i = 0, size = (container! as HTMLElement).children.length; i < size; i++) {
		// 		if ((container! as HTMLElement).children[i].nodeName === "SPAN") {
		// 			spanText = (container! as HTMLElement).children[i];
		// 			break;
		// 		}
		// 	}
		// }
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
		return {
			x: dim.x - (data.outsideRectangle ? data.outsideRectangle.x : 0),
			y: dim.y - (data.outsideRectangle ? data.outsideRectangle.y : 0),
			top: dim.top - (data.outsideRectangle ? data.outsideRectangle.top : 0),
			left: dim.left - (data.outsideRectangle ? data.outsideRectangle.left : 0),
			right: dim.right - (data.outsideRectangle ? data.outsideRectangle.right : 0),
			bottom: dim.bottom - (data.outsideRectangle ? data.outsideRectangle.bottom : 0),
			width: dim.width,
			height: dim.height
		}
	});

	window.getSelection()?.removeAllRanges();
	console.log("TEXT_SELECTION_RANGES", data);
}