import { useCallback, useRef } from "react"
import { useContextMenu } from "../../../..";

/**
The component uses _useContextMenu_ hook and renders two paragraph. It uses the hook to disabled native contextmenu event on first paragraph.
 */
export const UseContextMenu = () => {
	const pRef = useRef<HTMLParagraphElement>(null);
	useContextMenu({
		element: pRef,
		listener: useCallback((evt: PointerEvent) => {
			evt.preventDefault();
		}, [])
	});

	return <div>
		<p ref={pRef}>The context menu on this paragraph is disabled.</p>
		<p>On this paragraph context menu is enabled.</p>
	</div>
}