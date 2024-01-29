import { useCallback, useRef } from "react";
import { useLazyRef, useSyncExternalStore } from ".";
import { PublishSubscribePattern, isDeepEqual } from "../utils";

let id = 0;
function handler<T>(path: string[]) {
	return {
		get(target: T, prop: string):unknown {
			path.push(prop as string);
			const val = Reflect.get(target as object, prop);
			if (val instanceof Date || val instanceof RegExp || val instanceof Map || val instanceof Set || typeof val !== "object") {
				return val;
			}
			return new Proxy(val, handler(path));
		}
	}
}

/**
 * **`createPubSubStore`**: A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.
 * @param {T extends Record<string, unknown>} obj - Object that rapresent the initialState of the store.
 * @param {boolean} [persist=false] - boolean that indicates if the store value will be persisted on the local Storage.
 * @returns {{getStore:()=>T, updateStore:(cb:(globStore:T)=>void), usePubSubStore:<C>(subscribe?: (store: T) => C)=>[T|C, (store: T|C|((currStore: T) => T)|((currStore: C) => C)) => void, () => T]}} result
 * An object with three _immutable_ functions:
 * - __getStore__: function that returns the store object.
 * - __updateStore__: function that updates the store: it receives a callback with an only parameter, the store, and return void. Inside this function it can be possible to modify any store properties: changes will be published to every subscribers.
 * - __usePubSubStore__: It's the hook to be used inside components to access the store. It receives an optional callback _subscribe_ to specify to which part of store you want to subscribe.If callback missed, the whole store will be subscribed. It returns an array of three elements:
 *     - _first element_: the __state__. It represents what has been subscribed.
 * 	   - _second element_: the __updateState__. An _immutable_ function that represents the function to update the state. It can be executed given it a new version of the subscribed value or with a callback that receives the subscribed value and returns a new version of it.
 *     - _third element_: the __getState__. An _immutable_ function that returns the current subscribed value.
 */
export const createPubSubStore = <T extends Record<string, unknown>>(obj: T, persist?: boolean): { getStore: () => T; updateStore: (cb: (globStore: T) => void) => void; usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C]; <C>(subscribe?: (store: T) => C):[T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T] }} => {
	const pubSub = new PublishSubscribePattern();
	const topicName = "pub_Sub_str-" + id;
	let store:T;
	if (persist) {
		const serializedStore = localStorage.getItem(topicName);
		if (serializedStore) {
			store = JSON.parse(serializedStore);
		} else {
			store = { ...obj };
			localStorage.setItem(topicName, JSON.stringify(store));
		}
	} else {
		store = { ...obj };
		localStorage.setItem(topicName, JSON.stringify(store));
	}
	id++;
	pubSub.subscribe(topicName, (val?: T) => {
		store = val!
	});

	function getStore() {
		return store;
	}

	function updateStore(cb: (globStore: T) => void) {
		const globStore = getStore();
		cb(globStore);
		persist && localStorage.setItem(topicName, JSON.stringify(globStore));
		pubSub.publish(topicName, globStore);
	}

	function usePubSubStore(subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T];
	function usePubSubStore<C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C];
	function usePubSubStore<C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T | C] {
		const path = useRef<string[]>([]);
		const currentStore = useLazyRef<T | C>(() => {
			if (!subscribe) {
				return getStore() as T;
			} else {
				let proxy: T | null = new Proxy(getStore(), handler(path.current));
				subscribe(proxy);
				proxy = null;
				return subscribe(getStore()) as C;
			}
		});

		const state = useSyncExternalStore(
			useCallback(notif => {
				const listener = (val?: T) => {
					const newValue = subscribe ? subscribe(val!) : val!;
					if (!isDeepEqual(currentStore.current, newValue)) {
						currentStore.current = newValue;
						notif();
					}
				};
				pubSub.subscribe(topicName, listener);
				return () => {
					pubSub.unsubscribe(topicName, listener);
				}
			}, [subscribe, currentStore]),
			useCallback(() => currentStore.current, [currentStore])
		);

		const getState = useRef(() => currentStore.current);

		const publish = useRef((store: T | C | ((currStore: T) => T)  | ((currStore: C) => C)) => {
			if (!subscribe) {
				const newStore = store instanceof Function ? (store as ((currStore: T) => T))(currentStore.current as T) : store as T;
				persist && localStorage.setItem(topicName, JSON.stringify(newStore));
				pubSub.publish(topicName, newStore);
			} else {
				const newStore = store instanceof Function ? (store as ((currStore: C) => C))(currentStore.current as C) : store as C;
				let newValue: Record<string, unknown> = {};
				if (path.current.length === 1) {
					newValue = {...getStore()};
					newValue[path.current[path.current.length - 1]] = newStore;
					persist && localStorage.setItem(topicName, JSON.stringify(newValue));
					pubSub.publish(topicName, newValue);
				} else {
					for (let i = 0; i < path.current.length - 1; i++) {
						!(path.current[i] in newValue) && (newValue[path.current[i]] = getStore()[path.current[i] as keyof ReturnType<typeof getStore>]);
						newValue = newValue[path.current[i]] as Record<string, unknown>;
					}
					newValue[path.current[path.current.length - 1]] = newStore;
					persist && localStorage.setItem(topicName, JSON.stringify(getStore()));
					pubSub.publish(topicName, getStore());
				}
			}
		});

		return [state, publish.current, getState.current];
	}

	return {
		getStore,
		updateStore,
		usePubSubStore
	}
}