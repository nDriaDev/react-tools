# usePublishSubscribe
Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate.

## Usage

```tsx
const ChildComponent = memo(() => {
	const [, publish] = usePublishSubscribe("demo");
	const onChange = useCallback((e: BaseSyntheticEvent) => {
		publish({ value: e.target.value })
	}, [publish]);
	return (
		<input type="text" onChange={onChange} />
	);
})
const UsePublishSubscribe = () => {
	const [state, setState] = useState({ value: "" });
	const [subscribe] = usePublishSubscribe<typeof state>("demo");

	useEffect(() => {
		const unsub = subscribe((obj?: { value: string }) => {
			obj && setState(obj);
		})
		return () => {
			unsub();
		}
	}, [subscribe]);

	return <div>
		<p>Value is: {state.value}</p>
		<ChildComponent/>
	</div>
}

UsePublishSubscribe.displayName = "UsePublishSubscribe";

export { UsePublishSubscribe };
```

> The component has:
> - A _useState_ that receives an object, with _value property.
> - A _usePubSubModel_ that receives __demo__ as topic and returns the _subscribe_ function.
> - A child component that use _usePubSubModel_ to get _publish_ function and renders an input text with an onChange handler that invoke the publish function with input value as param.
> 
> The main component subscribe a listener, that updates component state, to the topic __demo__ inside an useEffect, in this way the listener _subscription_ is done only once and when the component is unmounted, it executes the _unsubscription_. The _subscription_ can be done outside useEffect also, what's important is that listener doesn't change when component rerenders (so it can be declared outside the component or with useCallback for example). In this case the _unsubscription_ is executed from hook.


## API

```tsx
usePublishSubscribe <T>(topic: string): [(listener: (value?: T) => Promise<void> | void) => () => void, (value?: T) => Promise<void> ] 
```

> ### Params
>
> - __topic__: _string_
>

> ### Returns
>
> __result__: contains the _publish_ and _subscribe_ functions. The result of invoking the _subscribe_ function in turn returns a function that can be used to _unsubscribe_ the topic
> - __Union of__:  
>     - __Array__:  
>         - _(listener: (value?: T) => Promise<void_  
>     - _void) => () => void, (value?: T) => Promise<void> ]_  
>