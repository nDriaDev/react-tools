import { useVisible } from "../../../..";

/**
The component renders a scrollable div with inside a bordered div element to which is attached __cbRef_ refCallback returned from _useVisible_ hook. Component displays the bordered div __visibility__ and __ratio__ that change when parent div is scrolled.
 */
export const UseVisible = () => {
	const [cbRef, isVisible, ratio] = useVisible(
		{ mode: "ref" },
		{
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
			withRatio: true
		}
	);
	return (
		<div>
			<div style={{ marginTop: 16, color: ratio === 1 ? '#98c379' : ratio === 0 ? '#e46962' : '#d2c04c' }}>
				<p>isVisible: {isVisible ? 'visible' : 'hidden'}</p>
				<p>ratio: {ratio}</p>
			</div>
			<div style={{ margin: 'auto', width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
				<p>scrollable div</p>
				<div style={{ height: 800 }}>
					<div
						ref={cbRef}
						style={{
							border: '1px solid',
							margin: '320px auto 0px',
							height: 100,
							width: 100,
							textAlign: 'center',
						}}
					>
						bordered div
					</div>
				</div>
			</div>
		</div>
	);
}