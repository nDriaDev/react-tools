# useStateValidator
Custom _useState_ hook that validates state on every update. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateValidator)

## Usage

```tsx
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
```

> The component uses _useStateValidator_ hook to declare a state object with _name_ and _email_ properties attached to two input tag and validates them during typing.


## API

```tsx
useStateValidator<T>(initialState: T | (() => T), validator: StateValidator<T>): [T, Dispatch<SetStateAction<T>>, T extends object ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: string}]
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
> __} invalid__:  __Array__:  
    - _T_  
    - _Dispatch<SetStateAction<T>>_  
    - _T extends object ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: strin_  
> Array with:
> - first element: __state__ value.
> - second element: __setState__ function to update state.
> - third element: __valid__ validation value/object for state.
>