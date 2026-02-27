import { memo } from "react";
import { createPubSubStore } from "../../../..";

/**
In this example it has been used _createPubSubStore_ hook to create a global store that contains a _user_ object and a _spinner_ value to handle logic of two components. The _updateStore_ and _usePubSubStore_ function returned from __createPubSubStore__ are exported to be used from other components:
- __Component 1__ uses _usePubSubStore_ hook subscribing _user_ object from __store__ to edit user object properties by three input tags.
- __Component 2__ uses:
	- _usePubSubStore_ hook subscribing only _name_ property of _user_ object from __store__ to edit name value.
	- _updateStore_ hook to update _spinner_ property from __store__ when button _handle spinner_ is clicked.
 */
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