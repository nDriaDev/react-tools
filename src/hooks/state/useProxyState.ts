import { useReducer, useRef } from "react"
import { UseProxyStateProps, UseProxyStateResult } from "../../models";

/**
 * __`useProxyState`__: Hook to handle component state that allows you to use an object for your state and mutating it in a way more idiomatic for JS.
 *
 * __*N.B.*__: not destructure state, otherwise break changes updated.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useProxyState)
 * @template T - The state object type. Must be a plain object (record).
 * @param {UseProxyStateProps<T>["initialState"]} initialState - {@link UseProxyStateProps}
 * @param {UseProxyStateProps<T>["proxyInDepth"]} [proxyInDepth] - {@link UseProxyStateProps}
 * @returns {UseProxyStateResult<T>} result - {@link UseProxyStateResult}
 */
export const useProxyState = <T extends Record<string, any>>(initialState: UseProxyStateProps<T>["initialState"], proxyInDepth: UseProxyStateProps<T>["proxyInDepth"] = false): UseProxyStateResult<T> => {
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