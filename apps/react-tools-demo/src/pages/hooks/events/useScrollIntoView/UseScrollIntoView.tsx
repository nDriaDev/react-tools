import { useScrollIntoView } from "../../../../../../../packages/react-tools/src";

export const UseScrollIntoView = () => {
	const { scroll, targetRef } = useScrollIntoView<HTMLParagraphElement, HTMLDivElement>({
		scrollableElement: ()=>document.querySelector('.container') as HTMLDivElement
	});

	return (
		<div>
			<button
				onClick={()=>scroll('start')}
			>
				Scroll to target
			</button>
			<div
				style={{
					width: '100%',
					height: '50vh',
				}}
			/>
			<p ref={targetRef}>Hello there</p>
		</div>
	);
}