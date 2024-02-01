import { useStateValidator } from "../../../../../../packages/react-tools/src"

/**
The component uses _useStateValidator_ hook to declare a state object with _name_ and _email_ properties attached to two input tag and validates them during typing.
 */
export const UseStateValidator = () => {
	const [state, setState, validation] = useStateValidator(
		{
			name: "", email: ""
		},
		(state, validation) => {
			if (state.name.length > 10) {
				validation.name.invalid = true;
				validation.name.message = "Max Length 10 characters"
			}
			if (!state.email.includes("@")) {
				validation.email.invalid = true;
				validation.email.message = "@ is missing"
			}
			return validation;
		}
	);

	return <div>
		<div style={{display: "flex", flexDirection: "column", width: 'fit-content', margin: "0 auto"}}>
			<input type="text" name="name" value={state.name} onChange={e => setState(s => ({...s, [e.target.name]: e.target.value}))} />
			{
				validation.name.invalid &&
				<span style={{ color: "red" }}>{validation.name.message}</span>
			}
		</div>
		<div style={{display: "flex", flexDirection: "column", width: 'fit-content', margin: "0 auto"}}>
			<input type="text" name="email" value={state.email} onChange={e => setState(s => ({...s, [e.target.name]: e.target.value}))} />
			{
				validation.email.invalid &&
				<span style={{ color: "red" }}>{validation.email.message}</span>
			}
		</div>
	</div>
}