import { forwardRef } from "react"

export const Dropdown = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div style={{ position: 'relative' }}>
			<div ref={ref} style={{ top: 5, position: "absolute", zIndex: 99, width: 120, height: 100, backgroundColor: "rgb(97, 175, 239)"}}>
				<p>Click outside to close</p>
			</div>
		</div>
	)
})