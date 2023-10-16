# useStateGetter
Custom useState with getter state function.

## Usage

```tsx
const UseStateGetter = () => {
	const [stateG, setStateG, getState] = useStateGetter({ id: "", name: "", eta: "" });
	const [state, setState] = useState({ id: "", name: "", eta:"" });

	const onChangeGetter = useCallback((e: BaseSyntheticEvent) => {
		const state = getState();
		setStateG({
			...state,
			[e.target.name]: e.target.value
		});
	}, [getState, setStateG])

	const onChange = useCallback((e: BaseSyntheticEvent) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}, [state, setState])

	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<div>
				<p><strong>With getter</strong></p>
				<div style={{ gridTemplateRows: "auto auto auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="idG" name="id" value={stateG.id} onChange={onChangeGetter} />
					<Input id="nameG" name="name" value={stateG.name} onChange={onChangeGetter} />
					<Input id="etaG" name="eta" value={stateG.eta} onChange={onChangeGetter} />
				</div>
			</div>
			<div>
				<p><strong>Without getter</strong></p>
				<div style={{ gridTemplateRows: "auto auto auto", justifyContent: 'center', display: 'grid', gap: '10px' }}>
					<Input id="id" name="id" value={state.id} onChange={onChange} />
					<Input id="name" name="name" value={state.name} onChange={onChange} />
					<Input id="eta" name="eta" value={state.eta} onChange={onChange} />
				</div>
			</div>
		</div>
	);
};

UseStateGetter.displayName = "UseStateGetter";

export { UseStateGetter };
```

> The component has:
> - A _useStateGetter_ that receives an object, with three properties _id_, _name_, _eta_, and returns a tuple with _stateG_, _setterG_ and _getter_.
> - A _useState_ that receives same object of useStateGetter and returns a tuple with _state_ and _setter_.
> - Each property of _state_ and _stateG_ is rendered an Input component that renders the input and label fields and the _component's number of renders_.
> - A _onChangeGetter_ function made with useCallback to handle stateGetter input onChange, reading other values with getter function.
> - A _onChange_ function made with useCallback to handle stater input onChange, reading other values by state variable.
> The two functions onChange and onChange Getter update their respective _state_ every time they are executed. Since the _onChange_ function depends on the state, every time this changes it will be reevaluated and this will also trigger the rerender of the input components that have not undergone a change to their _value_ variable. The _onChangeGetter_ doesn't have this behavior: since the _getter_ function isn't reevaluated even if the _stateG_ changes, so the _onChangeGetter_ is never reevaluated and only the input component that has a change in the _value_ variable is rerendered.


## API

```tsx
useStateGetter <T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T] 
```

> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
>

> ### Returns
>
> - __array__: _[T, Dispatch<SetStateAction<T>>, () => T]_
>