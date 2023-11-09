import { RefObject, memo } from "react";

export const Dropdown = memo(({ btnRef }: { btnRef: RefObject<HTMLButtonElement> }) => {
	return (
		<div className="dropdown">
			<button ref={btnRef} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Dropdown button
			</button>
			<ul className="dropdown-menu">
				<li><p className="dropdown-item">Action</p></li>
				<li><p className="dropdown-item">Another action</p></li>
				<li><p className="dropdown-item">Something else here</p></li>
			</ul>
		</div>
	);
})