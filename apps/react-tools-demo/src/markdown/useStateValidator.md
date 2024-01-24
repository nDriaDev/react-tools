# useStateValidator
Custom _useState_ hook that validates state on every update.

## Usage

```tsx
export const UseStateValidator = () => {
	const [state, setState, validation] = useStateValidator(
		{
			name: "", email: ""
		},
		(state, validation) => {
			if (state.name.length > 10) {
				validation.name.result = false;
				validation.name.message = "Max Length 10 characters"
			}
			if (!state.email.includes("@")) {
				validation.email.result = false;
				validation.email.message = "@ is missing"
			}
			return validation;
		}
	);

	return <div>
		<div>
			<input type="text" name="name" value={state.name} onChange={e => setState(s => ({...s, [e.target.name]: e.target.value}))} />
			{
				validation.name.result &&
				<span style={{ color: "red" }}>{validation.name.message}</span>
			}
		</div>
		<div>
			<input type="text" name="email" value={state.email} onChange={e => setState(s => ({...s, [e.target.name]: e.target.value}))} />
			{
				validation.email.result &&
				<span style={{ color: "red" }}>{validation.email.message}</span>
			}
		</div>
	</div>
}
```

> The component uses _useStateValidator_ hook to declare a state object with _name_ and _email_ properties attached to two input tag and validates them during typing.


## API

```tsx
useStateValidator<T>(initialState: T | (() => T), validator: StateValidator<T>): [T, Dispatch<SetStateAction<T>>, T extends Record<string, unknown> ? {[k in keyof T]:{result: boolean, message?: string}} : {result: boolean, message?: string}]
```

> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
> - __validator__: _StateValidator_  
function that will be executed to validate state.
>

> ### Returns
>
> __} result__:  __Array__:  
    - _T_  
    - _Dispatch<SetStateAction<T>>_  
    - _T extends Record<string, unknown> ? {[k in keyof T]:{result: boolean, message?: string}} : {result: boolean, message?: strin_  
> Array with:
> - first element: __state__ value.
> - second element: __setState__ function to update state.
> - third element: __valid__ validation value/object for state.
>