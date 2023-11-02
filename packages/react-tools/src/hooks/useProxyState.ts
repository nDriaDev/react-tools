import { useMemo, useRef, useState } from "react"
import { isPlainObject } from "../utils";

const proxyMap = new WeakMap();
const mapProxy = new WeakMap();

const track = <T extends Record<string, any>>(initialState: T, cb: () => void): T => {
	const hasProxy = proxyMap.get(initialState);

	if (hasProxy) {
		return hasProxy;
	}

	if (mapProxy.has(initialState)) {
		return initialState;
	}

	const proxy = new Proxy<T>(initialState, {
		get(target, key, receiver) {
			const res = Reflect.get(target, key, receiver);
			const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
			if (!descriptor?.configurable && !descriptor?.writable) {
				return res;
			}

			return isPlainObject(res) || Array.isArray(res) ? track(res, cb) : res;
		},
		set(target, key, val) {
			const ret = Reflect.set(target, key, val);
			cb();
			return ret;
		},
		deleteProperty(target, key) {
			const ret = Reflect.deleteProperty(target, key);
			cb();
			return ret;
		},
	});

	proxyMap.set(initialState, proxy);
	mapProxy.set(proxy, initialState);

	return proxy;


};

/**
 * __`useProxyState`__:
 * @param {T | () => T} initialState - value or function
 * @returns {T} state
 */
export const useProxyStatess = <T extends Record<string, any>>(initialState: T | (() => T)): T => {
	const [, update] = useState({});
	const stateRef = useRef<T>(initialState instanceof Function ? initialState() : initialState);

	const state = useMemo(() => {
		return track(stateRef.current, () => { update({}) });
	}, []);

	return state;
}

const map = new WeakMap<object,Map<string, Set<()=>void>>>();

const subscribe = (target: any, key: string, setState: (val:any) => void) => {
	const effect = () => {
		setState(target[key]);
	}
	const targetMap = map.get(target);
	const listeners = targetMap?.get(key) ?? new Set();
	!listeners.has(effect) && listeners.add(effect);
}

const trigger = (target: any, key: string) => {
	const listeners = map.get(target)?.get(key) ?? new Set();
	listeners.forEach(l => l());
}

export const useProxyState = <T extends Record<string,any>>(initialState: T) => {
	const [state, setState] = useState(initialState);

	const proxy = useMemo(() => new Proxy(state, {
		get(target, key: string) {
			subscribe(target, key, setState)
			return Reflect.get(target, key);
		},
		set(target, key: string, value) {
			Reflect.set(target, key, value);
			trigger(target, key)
			return true;
		}
	}), [state])

	return proxy;
}