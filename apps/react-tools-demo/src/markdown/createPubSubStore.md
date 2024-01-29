# createPubSubStore
A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.

## Usage

```tsx
//File store.ts
const store = createPubSubStore({user: { id: 0, name: "", eta: 0}, spinner: false});
export const { usePubSubStore, updateStore } = store;

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

//import {updateStore, usePubSubStore} from '../store.ts';
const Comp2 = memo(() => {
	const [state, setState] = usePubSubStore(store => store.user.name);

	return <div>
		<label htmlFor="name">NAME:</label>
		<input type="text" name="name" value={state} onChange={(e) => setState(e.target.value)} />
		<button onClick={async () => {
			updateStore(store => store.spinner = true);
			await new Promise(res => setTimeout(res, 4000));
			updateStore(store => store.spinner = false);
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
createPubSubStore<T extends Record<string, unknown>>(obj: T, persist?: boolean): { getStore: () => T; updateStore: (cb: (globStore: T) => void) => void; usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C]; <C>(subscribe?: (store: T) => C):[T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T] }}
```

> ### Params
>
> - __obj__: _T extends Record<string, unknown>_  
Object that rapresent the initialState of the store.
> - __persist=false?__: _boolean_  
boolean that indicates if the store value will be persisted on the local Storage.
>

> ### Returns
>
> __result__:  __Object__:  
    - __getStore__ : _()=>T_  
    - __updateStore__ : _(cb:(globStore:T)=>void)_  
    - __usePubSubStore__ : _<C>(subscribe?: (store: T) => C)=>[T|C, (store: T|C|((currStore: T) => T)|((currStore: C) => C)) => void, () => T]_  
> An object with three _immutable_ functions:
> - __getStore__: function that returns the store object.
> - __updateStore__: function that updates the store: it receives a callback with an only parameter, the store, and return void. Inside this function it can be possible to modify any store properties: changes will be published to every subscriber.
> - __usePubSubStore__: It's the hook to be used inside components to access the store. It receives an optional callback _subscribe_ to specify to which part of store you want to subscribe.If callback missed, the whole store will be subscribed. It returns an array of three elements:
>     - _first element_: the __state__. It represents what has been subscribed.
> 	   - _second element_: the __updateState__. An _immutable_ function that represents the function to update the state. It can be executed given it a new version of the subscribed value or with a callback that receives the subscribed value and returns a new version of it.
>     - _third element_: the __getState__. An _immutable_ function that returns the current subscribed value.
>