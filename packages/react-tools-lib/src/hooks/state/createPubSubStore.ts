/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { useLazyRef } from "../performance";
import { PublishSubscribePattern, isDeepEqual } from "../../utils";
import { ExtractTail } from "../../models";

let id = 0;
function handler<T>(path: string[]) {
	return {
		get(target: T, prop: string):unknown {
			path.push(prop as string);
			const val = Reflect.get(target as object, prop);
			if (val === null || val === undefined || val instanceof Blob || val instanceof Date || val instanceof RegExp || val instanceof Map || val instanceof Set || typeof val !== "object") {
				return val;
			}
			return new Proxy(val, handler(path));
		}
	}
}

function updateReference<T extends object, C>(currStore: T, storeSlice: object, property: string, updatedValue: C) {
	if (currStore === storeSlice) {
		currStore[property as keyof T] = updatedValue as T[keyof T];
		return;
	}
	for (const prop in currStore) {
		if (currStore[prop] === storeSlice) {
			if (Array.isArray(currStore[prop])) {
				currStore[prop] = [...(currStore[prop] as Array<unknown>)] as T[Extract<keyof T, string>];
			} else {
				currStore[prop] = { ...(currStore[prop] as object) } as T[Extract<keyof T, string>];
			}
			currStore[prop][property as keyof typeof currStore[typeof prop]] = updatedValue as T[Extract<keyof T, string>][keyof T[typeof prop]];
			return;
		} else if (Array.isArray(currStore[prop]) || typeof currStore[prop] === "object") {
			return updateReference(currStore[prop] as T, storeSlice, property, updatedValue);
		}
	}
}

/**
 * **`createPubSubStore`**: A state management hook implemented on Publish-Subscribe pattern. It allows components to subscribe to state changes and receive updates whenever the state is modified, providing a scalable and decoupled state management solution.__N.B.: to work properly, objects like Set, Map, Date or more generally objects without _Symbol.iterator_ must be treated as immutable__. [See demo](https://react-tools.ndria.dev/#/hooks/state/createPubSubStore)
 * @param {T extends object} obj - Object that rapresent the initialState of the store.
 * @param {E extends Record<string, (store: T, ...args: any) => void>} [mutatorsFn] - Object that contains specified void function to mutate the store value, not the store itself, that receives the store as first parameter and other optional parameters.
 * @param {"localStorage" | "sessionStorge"|undefined} [persist=undefined] - value that indicates where persist the store, on the local or session Storage. If it isn't provided then store will not persist.
 * @returns {{getStore:()=>T, mutateStore:(cb:(globStore:T)=>void), usePubSubStore:<C>(subscribe?: (store: T) => C)=>[T|C, (store: T|C|((currStore: T) => T)|((currStore: C) => C)) => void, () => T]}} result
 * An object with:
 * - __getStore__: __IMMUTABLE__ function that returns the store object.
 * - __mutateStore__:  __IMMUTABLE__ function that modifies the store value, not the store itself, by a void callback function that receives an only parameter, the store. Changes will be published to every subscriber.
 * - __mutators__: object with  __IMMUTABLE__ functions built on _mutatorsFn_ param, if it is present: they work like __mutateStore__ function and they can be executed passing them optional parameters if specified in _mutatorsFn param_. Changes will be published to every subscriber.
 * - __usePubSubStore__: It's the hook to be used inside components to access the store. It receives an optional callback _subscribe_ to specify to which part of store you want to subscribe.If callback missed, the whole store will be subscribed. It returns an array of four elements:
 *     - _first element_: the __state__. It represents what has been subscribed.
 * 	   - _second element_: the __setState__. An _immutable_ function to update the state. It can be executed given it a new version of the subscribed value or with a callback that receives the subscribed value and returns a new version of it.
 *     - _third element_: the __getState__. An _immutable_ function that returns the current subscribed value.
 *     - _fourth element_: the __mutators__. Like above.
 */
export const createPubSubStore = <T extends object, E extends Record<string, (store: T, ...args: any) => void>>(obj: T, mutatorsFn?: E, persist?: "localStorage" | "sessionStorge"): { getStore: () => T; mutateStore: (cb: (globStore: T) => void) => void; mutators: Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>, usePubSubStore: { (subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>]; <C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>] }} => {
	const pubSub = new PublishSubscribePattern();
	const topicName = "pub_Sub_str-" + id;
	id++;
	let store:T;
	const mutators: Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void> = {} as Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>;
	const storage = persist === "localStorage" ? localStorage : sessionStorage;

	if (persist) {
		const serializedStore = storage.getItem(topicName);
		if (serializedStore) {
			store = JSON.parse(serializedStore);
		} else {
			store = { ...obj };
			storage.setItem(topicName, JSON.stringify(store));
		}
	} else {
		store = { ...obj };
	}

	if (mutatorsFn) {
		for (const key in mutatorsFn) {
			mutators[key] = (...args) => {
				const str = getStore();
				mutatorsFn[key](str, ...args);
				persist && storage.setItem(topicName, JSON.stringify(str));
				pubSub.publish(topicName, str);
			}
		}
	}
	pubSub.subscribe(topicName, (val?: T) => {
		store = val!
	});

	function getStore() {
		return store;
	}

	function mutateStore(cb: (globStore: T) => void) {
		const globStore = getStore();
		cb(globStore);
		persist && storage.setItem(topicName, JSON.stringify(globStore));
		pubSub.publish(topicName, globStore);
	}

	function usePubSubStore(subscribe?: undefined): [T, (store: T | ((currStore: T) => T)) => void, () => T, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>)=>void>];
	function usePubSubStore<C>(subscribe?: (store: T) => C): [C, (store: C | ((currStore: C) => C)) => void, () => C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>)=>void>];
	function usePubSubStore<C>(subscribe?: (store: T) => C): [T | C, (store: T | C | ((currStore: T) => T) | ((currStore: C) => C)) => void, () => T | C, Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>)=>void>] {
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

		const setState = useRef((store: T | C | ((currStore: T) => T)  | ((currStore: C) => C)) => {
			if (!subscribe) {
				//INFO if subscribe is undefined, i am updating the whole store.
				const updatedValue = store instanceof Function ? (store as ((currStore: T) => T))(currentStore.current as T) : store as T;
				persist && storage.setItem(topicName, JSON.stringify(updatedValue));
				pubSub.publish(topicName, updatedValue);
			} else {
				/**
				 * INFO if subscribe provided, i computed updatedValue and i rebuild the path of state defined by subscribe function with path.current variable.
				 * If updatedValue is an object or an array, i edit the store by variable reference, assigning store value to storeSlice variable if it is empty.
				 * Otherwise if updatedValue isn't an object or an array, by updateReference function i assign the updatedValue to store directly, searching in its
				 * properties the reference to storeSlice value.
				 */
				const updatedValue = store instanceof Function ? (store as ((currStore: C) => C))(currentStore.current as C) : store as C;
				let storeSlice: Record<string, unknown> = getStore() as Record<string, unknown>;
				for (let i = 0; i < path.current.length - 1; i++) {
					!(path.current[i] in storeSlice) && (storeSlice[path.current[i]] = getStore()[path.current[i] as keyof ReturnType<typeof getStore>]);
					storeSlice = storeSlice[path.current[i]] as Record<string, unknown>;
				}
				if (Array.isArray(updatedValue) || typeof updatedValue === "object") {
					storeSlice[path.current[path.current.length - 1]] = updatedValue;
					persist && storage.setItem(topicName, JSON.stringify(getStore()));
					pubSub.publish(topicName, getStore());
				} else {
					const currStore = getStore();
					updateReference(currStore, storeSlice, path.current[path.current.length - 1], updatedValue);
					storeSlice = currStore as Record<string, unknown>;
					persist && storage.setItem(topicName, JSON.stringify(storeSlice));
					pubSub.publish(topicName, storeSlice);
				}
			}
		});

		return [state, setState.current, getState.current, mutators];
	}

	return {
		getStore,
		mutateStore,
		mutators,
		usePubSubStore
	}
}
