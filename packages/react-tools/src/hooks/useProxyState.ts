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
export const useProxyState = <T extends Record<string, any>>(initialState: T | (() => T)): T => {
	const [, update] = useState({});
	const stateRef = useRef<T>(initialState instanceof Function ? initialState() : initialState);

	const state = useMemo(() => {
		return track(stateRef.current, () => { update({}) });
	}, []);

	return state;
}