/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useRef } from "react"

/**
 * __`useProxyState`__: Hook to handle component state that allows you to use an object for your state and mutating it in a way more idiomatic for JS. __*N.B.*__ not destructure state, otherwise break changes updated. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useProxyState)
 * @param {T | () => T} initialState - value or function
 * @param {boolean} [proxyInDepth=false] - if true, it creates proxy for nested object also.
 * @returns {T} state
 */
export const useProxyState = <T extends Record<string, any>>(initialState: T | (() => T), proxyInDepth:boolean=false): T => {
	const initialStateComputed = useRef(initialState instanceof Function ? initialState() : initialState);
	const [, update] = useReducer(t => t + 1, 0);
	const buildProxy = useRef((obj: T) => {
		let proxyObj: Record<string, unknown> = {};
		if (!proxyInDepth) {
			proxyObj = obj;
		} else {
			const keys: string[] = Reflect.ownKeys(obj) as string[];
			for (const key of keys) {
				proxyObj[key] = initialStateComputed.current[key] instanceof Date || initialStateComputed.current[key] instanceof RegExp || Array.isArray(initialStateComputed.current[key]) || typeof initialStateComputed.current[key] !== "object"
					? initialStateComputed.current[key]
					: buildProxy.current(initialStateComputed.current[key]);
			}
		}
		return new Proxy(proxyObj, {
			set(target, p, newValue, receiver) {
				Reflect.set(target, p, newValue, receiver);
				update();
				return true;
			},
		});
	});
	const proxy = useRef(buildProxy.current(initialStateComputed.current) as T);

	return proxy.current;
}