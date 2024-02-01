import { useMeasure } from "../../../../../../../packages/react-tools/src"

/**
The component tracks div element dimensions and display them on screen. Try to resize div to see its current dimensions.
 */
export const UseMeasure = () => {
	const [cbRef, state] = useMeasure<HTMLDivElement>();

	return <div style={{margin: '0 auto'}}>
		<p>Dimensions: {JSON.stringify(state)}</p>
		<br />
		<div ref={cbRef} style={{margin:'0 auto', width: 100, height: 100, overflow: 'auto', resize: 'both', border: '1px solid lightblue'}}/>
	</div>
}