function getSelectedTextDirection(selection: Selection) {
	const range = document.createRange();
	range.setStart(selection.anchorNode!, selection.anchorOffset);
	range.setEnd(selection.focusNode!, selection.focusOffset);
	return range.collapsed ? 'backward' : 'forward';
}
function getTextSelectionDataSet() {
	const ws = window.getSelection();
	if (ws === null || ws.toString() === "") {
		return { text: "", rect: null, rects: [] };
	}
	const data: { text: string, rect: DOMRect | null, rects: Omit<DOMRect, "toJSON">[] } = {
		text: ws.toString(),
		rect: ws.getRangeAt(0).getBoundingClientRect(),
		rects: []
	}
	const direction = getSelectedTextDirection(ws),
		ranges = [];
	let allText = data.text;
	let spanText: Node | null, selectedText, offset;

	if (direction === "backward") {
		spanText = ws.focusNode!.parentNode;
		offset = ws.focusOffset;
	} else {
		spanText = ws.anchorNode!.parentNode;
		offset = ws.anchorOffset;
	}

	const range = document.createRange();
	range.setStart(spanText!.firstChild!, offset);
	selectedText = (spanText!.firstChild! as ChildNode & {data: string}).data.toString().substring(offset);
	if (allText.length <= selectedText.length) {
		range.setEnd(spanText!.firstChild!, offset + allText.length);
		ranges.push(range);
		allText = "";
	} else {
		range.setEnd(spanText!.firstChild!, offset + selectedText.length);
		ranges.push(range);
		allText = allText.substring(selectedText.length);
	}

	while (allText !== "") {
		while (allText.charAt(0) === "\n") {
			allText = allText.substring(1);
		}
		spanText = spanText!.nextSibling;
		if (spanText === null || allText === "") {
			break;
		}
		const range = document.createRange();
		selectedText = (spanText!.firstChild! as ChildNode & { data: string }).data.toString();
		range.setStart(spanText!.firstChild!, 0);
		if (allText.length <= selectedText.length) {
			range.setEnd(spanText!.firstChild!, allText.length);
			ranges.push(range);
			allText = "";
		} else {
			range.setEnd(spanText!.firstChild!, selectedText.length);
			ranges.push(range);
			allText = allText.substring(selectedText.length);
		}
	}

	data.rects = ranges.map(el => {
		const dim = el.getBoundingClientRect();
		return {
			x: dim.x - (data.rect ? data.rect.x : 0),
			y: dim.y - (data.rect ? data.rect.y : 0),
			top: dim.top - (data.rect ? data.rect.top : 0),
			left: dim.left - (data.rect ? data.rect.left : 0),
			right: dim.right - (data.rect ? data.rect.right : 0),
			bottom: dim.bottom - (data.rect ? data.rect.bottom : 0),
			width: dim.width,
			height: dim.height
		}
	});

	window.getSelection()?.removeAllRanges();
	console.log("TEXT_SELECTION_RANGES", data);
}