import { useRef } from "react";
import { useSyncExternalStore } from "../utils";
const LISTENER = Symbol();

const storeMap = new WeakMap();
export const createProxyStore = <T extends object>(initialState: T): T & {[LISTENER]: Set<()=>void>} => {
	!storeMap.has(initialState) && storeMap.set(initialState, new Proxy({ ...initialState, [LISTENER]: new Set<() => void>() }, {
		get(target, p, receiver) {
			return Reflect.get(target, p, receiver);
		},
		set(target, p, newValue, receiver) {
			Reflect.set(target, p, newValue, receiver);
			target[LISTENER].forEach(listener => listener());
			return true;
		},
	}));
	return storeMap.get(initialState);
}

export const useProxyStore = <T extends object>(store: T & { [LISTENER]: Set<() => void> }) => {
	const version = useRef(0);
	const prevVersion = useRef(0);
	const cachedStore = useRef(store);
	return useSyncExternalStore(
		notifier => {
			const listener = () => {
				version.current += 1;
				notifier();
			}
			!cachedStore.current[LISTENER].has(listener) && cachedStore.current[LISTENER].add(listener);
			return () => cachedStore.current[LISTENER].delete(listener);
		},
		() => {
			if (version.current !== prevVersion.current) {
				prevVersion.current = version.current;
				cachedStore.current = new Proxy(cachedStore.current, {
					get(target, p, receiver) {
						return Reflect.get(target, p, receiver);
					},
					set(target, p, newValue, receiver) {
						Reflect.set(target, p, newValue, receiver);
						target[LISTENER].forEach(listener => listener());
						return true;
					},
				});
			}
			return cachedStore.current;
		}
	);
}