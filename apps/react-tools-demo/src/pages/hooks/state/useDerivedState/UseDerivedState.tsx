import { memo, useEffect, useState } from "react";
import { useDerivedState } from "../../../../../../../packages/react-tools/src";

const serverAPI = (user: string) => {
	const names = [
		"Keith Allison",
		"Ora Nelson",
		"Thomas Chavez",
		"Claudia Wheeler",
		"Iva Gibson",
		"Jose Daniel",
		"Mattie Greer",
		"Belle Schultz",
		"Milton Weber",
		"Olive Rivera",
		"Patrick Caldwell",
		"Adeline Wheeler",
		"Arthur Russell",
		"Anthony Hogan",
		"Rodney Munoz",
		"Ricky Woods",
		"Sean Stone",
		"Leona Leonard",
		"Brent Turner",
		"Cecelia Parks",
	]
	return new Promise(res => setTimeout(res, 2000))
		.then(() => {
			return names.filter(n => n.toLowerCase().includes(user.toLowerCase()));
		})
};

const renders = {
	1: 0,
	2: 0,
	3: 0
}

/**
The component has _three internal string states_ and renders three input fields and three components that receive one state each. These three components have an object as internal state with two properties _loading_, initially set to __true__, and _friends_ which is an initially empty array.
Based on the _user_ prop they receive, they set the _loading_ property of the internal state to __true__ and invoke a _serverAPI_ function that simulates a backend call and returns a list of names filtered by the passed _prop_. This list values the _friends_ property of the internal state and this list together with the passed _user_ prop are rendered:
- The _Without useDerivedState_ component uses the _useState_ and _useEffect_ hooks to implement this logic.
- The _With useDerivedState_ component uses the _useDerivedState_ hook and the _useEffect_.
- The _With useDerivedStateAndCompute_ component uses the _useDerivedState_ hook and the optional third parameter to implement all logic.

Each component also renders a counter of the times it is rendered.

The component without _useDerivedState_ hook is rendered one more time every time its _prop_ changes while the other two have the same number of renders.

Furthermore, if you debug the code you can see how in the first component there is no synchronization in the updating of the values since in a first render the rendered _prop_ user is updated and in a second render the writing `loading` is rendered instead of the list of names.
 */
export const UseDerivedState = () => {
	const [state, setState] = useState("");
	const [state1, setState1] = useState("");
	const [state2, setState2] = useState("");

	return <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
		<div>
			<p>Without useDerivedState</p>
			<input type="text" placeholder="User.." value={state1} onChange={(e) => setState1(e.target.value)} />
			<WithoutUseDerivedState user={state1} />
		</div>
		<div>
			<p>With useDerivedState</p>
			<input type="text" placeholder="User.." value={state} onChange={(e) => setState(e.target.value)} />
			<WithUseDerivedState user={state} />
		</div>
		<div>
			<p>With useDerivedState and compute</p>
			<input type="text" placeholder="User.." value={state2} onChange={(e) => setState2(e.target.value)} />
			<WithUseDerivedStateAndCompute user={state2} />
		</div>
	</div>
}

const WithoutUseDerivedState = memo(({user}:{user:string}) => {
	renders[1]++;
	const [state, setState] = useState<{ loading: boolean, friends: string[] }>({ loading: true, friends: [] });

	useEffect(() => {
		setState({ loading: true, friends: [] });
		serverAPI(user).then(data => setState({ loading: false, friends: data }));
	}, [user])

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[1]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})

const WithUseDerivedStateAndCompute = memo(({ user }: { user: string }) => {
	renders[2]++;
	const [state, setState] = useDerivedState<{ loading: boolean, friends: string[] }>(
		{ loading: true, friends: [] },
		[user],
		() => {
			state.loading && serverAPI(user).then(data => {
				setState({ loading: false, friends: data })
			});
		}
	);

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[2]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})

const WithUseDerivedState = memo(({ user }: { user: string }) => {
	renders[3]++;
	const [state, setState] = useDerivedState<{loading: boolean, friends: string[]}>(
		{ loading: true, friends: [] },
		[user]
	);

	useEffect(() => {
		serverAPI(user).then(data => {
			setState({ loading: false, friends: data })
		});
	}, [setState, user]);

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[3]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})