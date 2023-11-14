function getSelectedTextDirection(selection) {
	const range = document.createRange();
	range.setStart(selection.anchorNode, selection.anchorOffset);
	range.setEnd(selection.focusNode, selection.focusOffset);
	return range.collapsed ? 'backward' : 'forward';
}
function getTextSelectionDataSet() {
        let ws = window.getSelection();
        let data = {
            text: '',
            rect: null,
            rectAnnotations: []
        }
        if (ws === null) {
            return data;
        }
        data = {
            text: ws?.toString(),
            rect: ws?.getRangeAt(0).getBoundingClientRect(),
            rectAnnotations: [],
        }
        if(data.text === "") {
            return data;
        }
        let allText = ws.toString();
        let direction = getSelectedTextDirection(ws);
        let ranges = [];
        let spanText, spanContainer, selectedText, offset;

        if(direction === "backward") {
            spanText = ws.focusNode.parentNode;
            spanContainer = spanText.parentNode;
            offset = ws.focusOffset;
        } else {
            spanText = ws.baseNode.parentNode;
            spanContainer = spanText.parentNode;
            offset = ws.anchorOffset;
        }

        let range = document.createRange();
        range.setStart(spanText.firstChild, offset);
        selectedText = spanText.firstChild.data.toString().substring(offset);
        if(allText.length<= selectedText.length) {
            range.setEnd(spanText.firstChild, offset+allText.length);
            ranges.push(range);
            allText = "";
        } else {
            range.setEnd(spanText.firstChild, offset+selectedText.length);
            ranges.push(range);
            allText = allText.substring(selectedText.length);
        }

        while(allText !== "") {
            while(allText.charAt(0) === "\n") {allText = allText.substring(1)};
            allText = allText.charAt(0) === "\n" ? allText.substring(1) : allText;
            while(spanText.nextSibling !== null) {
                spanText = spanText.nextSibling;
            }
            let range = document.createRange();
            selectedText = spanText.firstChild.data.toString();
            range.setStart(spanText.firstChild, 0);
            if(allText.length <= selectedText.length) {
                range.setEnd(spanText.firstChild, allText.length);
                ranges.push(range);
                allText = "";
            } else {
                range.setEnd(spanText.firstChild, selectedText.length);
                ranges.push(range);
                allText = allText.substring(selectedText.length);
            }
        }

        data.rectAnnotations = ranges.map(el => {
            let dim = el.getBoundingClientRect();
            return {
                x: dim.x-(data.rect ? data.rect.x : 0) ,
                y: dim.y-(data.rect ? data.rect.y : 0),
                width: dim.width,
                height: dim.height
            }
        });

        window.getSelection()?.removeAllRanges();
        console.log("TEXT_SELECTION_RANGES", data);
}