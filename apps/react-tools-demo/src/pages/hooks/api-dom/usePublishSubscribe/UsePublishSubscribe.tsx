import { BaseSyntheticEvent, memo, useCallback, useEffect, useState } from "react";
import { usePublishSubscribe } from "../../../../../../../packages/react-tools-lib/src";

/**
The component has:
- A _useState_ that receives an object, with _value property.
- A _usePubSubModel_ that receives __demo__ as topic and returns the _subscribe_ function.
- A child component that use _usePubSubModel_ to get _publish_ function and renders an input text with an onChange handler that invoke the publish function with input value as param.

The main component subscribe a listener, that updates component state, to the topic __demo__ inside an useEffect, in this way the listener _subscription_ is done only once and when the component is unmounted, it executes the _unsubscription_. The _subscription_ can be done outside useEffect also, what's important is that listener doesn't change when component rerenders (so it can be declared outside the component or with useCallback for example). In this case the _unsubscription_ is executed from hook.
 */
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