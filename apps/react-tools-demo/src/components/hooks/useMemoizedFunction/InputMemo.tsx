import { BaseSyntheticEvent, memo } from "react";

const render: { [k: string]: number } = {};

const Input = memo(({ id, name, value, onChange }: { id: string, name: string, value: string | number, onChange: (e: BaseSyntheticEvent) => void }) => {
	render[id] = render[id] !== undefined ? ++render[id] : 1;
	return (<div style={{ gridTemplateColumns: "1fr 1.5fr", justifyContent: "center", textAlign: "left", display: "grid", gap: 5 }}>
		<label htmlFor={id}>
			{name}: render {render[id]}
		</label>
		<input
			type="text"
			id={id}
			name={name}
			value={value}
			onChange={onChange}
		/>
	</div>)
})

export { Input }