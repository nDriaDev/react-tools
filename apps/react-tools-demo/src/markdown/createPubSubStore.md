# createPubSubStore
A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.__N.B.: to work properly, objects like Set, Map, Date or more generally objects without _Symbol.iterator_ must be treated as immutable__. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/createPubSubStore)

## Usage

```tsx
//File store.ts
const store = createPubSubStore(
	{
		user: {
			id: 0,
			name: "",
			eta: 0
		},
		spinner: false
	},
	{
		toggleSpinner: (store, val: boolean) => {
			store.spinner = val;
		}
	}
);
export const { usePubSubStore, mutateStore } = store;

//import {usePubSubStore} from '../store.ts';
const Comp1 = () => {
	const [state, setState] = usePubSubStore(store => store.user);

	return <div>
		<label htmlFor="id">ID:</label>
		<input type="number" name="id" value={state.id} onChange={(e) => setState(store => ({ ...store, id: Number(e.target.value) }))} />
		<label htmlFor="name">NAME:</label>
		<input type="text" name="name" value={state.name} onChange={(e) => setState(store => ({ ...store, name: e.target.value }))} />
		<label htmlFor="eta">ETA:</label>
		<input type="number" name="eta" value={state.eta} onChange={(e) => setState(store => ({ ...store, eta: Number(e.target.value) }))} />
	</div>
}

//import {usePubSubStore} from '../store.ts';
const Comp2 = memo(() => {
	const [state, setState, , mutators] = usePubSubStore(store => store.user.name);

	return <div>
		<label htmlFor="name">NAME:</label>
		<input type="text" name="name" value={state} onChange={(e) => setState(e.target.value)} />
		<button onClick={async () => {
			mutators.toggleSpinner(true);
			await new Promise(res => setTimeout(res, 4000));
			mutators.toggleSpinner(false);
		}}>Enable Spinner</button>
	</div>
})

//import {usePubSubStore} from '../store.ts';
export const CreatePubSubStore = () => {
	const [spinner] = usePubSubStore(store => store.spinner);
	return <div style={{ display: "grid", gridTemplateRows: "auto auto", gap: 20, justifyContent: "center" }}>
		<fieldset style={{padding: 20}}>
			<legend>Component 2</legend>
			<Comp2 />
		</fieldset>
		{
			spinner
				? <p>Loading...</p>
				: <fieldset style={{padding: 20}}>
					<legend>Component 1</legend>
					<Comp1 />
				</fieldset>
		}
	</div>
}
```

> In this example it has been used _createPubSubStore_ hook to create a global store that contains a _user_ object and a _spinner_ value to handle logic of two components. The _updateStore_ and _usePubSubStore_ function returned from __createPubSubStore__ are exported to be used from other components:
> - __Component 1_ uses _usePubSubStore_ hook subscribing _user_ object from __store__ to edit user object properties by three input tags.
> - __Component 2_ uses:
> 	- _usePubSubStore_ hook subscribing only _name_ property of _user_ object from __store__ to edit name value.
> 	- _updateStore_ hook to update _spinner_ property from __store__ when button _handle spinner_ is clicked.


## API

```tsx
createPubSubStore<T extends Record<string, unknown>, E extends Record<string, (store: T, ...args: any) => void>>(obj: T, mutatorsFn?: E, persist?: boolean): { getStore: () => T; mutateStore: (cb: (globStore: T) => void) => void; mutators: Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>, usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>] }}
```

> ### Params
>
> - __obj__: _T extends Record<string, unknown>_  
Object that rapresent the initialState of the store.
> - __mutatorsFn?__: _E extends Record<string, (store: T, ...args: any) => void>_  
Object that contains specified void function to mutate the store value, not the store itself, that receives the store as first parameter and other optional parameters.
> - __persist=false?__: _boolean_  
boolean that indicates if the store value will be persisted on the local Storage.
>

> ### Returns
>
> __result__:  __Object__:  
    - __getStore__ : _()=>T_  
    - __mutateStore__ : _(cb:(globStore:T)=>void)_  
    - __usePubSubStore__ : _<C>(subscribe?: (store: T) => C)=>[T|C, (store: T|C|((currStore: T) => T)|((currStore: C) => C)) => void, () => T]_  
> An object with:
> - __getStore__: __IMMUTABLE__ function that returns the store object.
> - __mutateStore__:  __IMMUTABLE__ function that modifies the store value, not the store itself, by a void callback function that receives an only parameter, the store. Changes will be published to every subscriber.
> - __mutators__: object with  __IMMUTABLE__ functions built on _mutatorsFn_ param, if it is present: they work like __mutateStore__ function and they can be executed passing them optional parameters if specified in _mutatorsFn param_. Changes will be published to every subscriber.
> - __usePubSubStore__: It's the hook to be used inside components to access the store. It receives an optional callback _subscribe_ to specify to which part of store you want to subscribe.If callback missed, the whole store will be subscribed. It returns an array of four elements:
>     - _first element_: the __state__. It represents what has been subscribed.
> 	   - _second element_: the __setState__. An _immutable_ function to update the state. It can be executed given it a new version of the subscribed value or with a callback that receives the subscribed value and returns a new version of it.
>     - _third element_: the __getState__. An _immutable_ function that returns the current subscribed value.
>     - _fourth element_: the __mutators__. Like above.
>