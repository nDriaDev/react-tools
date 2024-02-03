import { lazy as legacy, ComponentType, LazyExoticComponent } from "react";

/**
 * **`lazy`**: Wrapper around _React.lazy_ that works also with component without default export and with possibility to execute a function before and after component loading. [See demo](https://nDriaDev.io/react-tools/#/utils/lazy)
 * @param {() => Promise<{ [k:string]: T }>} load - function that returns a Promise or another thenable.
 * @param {Object} [opts] - optional settings.
 * @param {string} [opts.componentName] - name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
 * @param {()=> void} [opts.beforeLoad] - function that will be executed before load component.
 * @param {()=> void} [opts.afterLoad] - function that will be executed after load component.
 * @returns {LazyExoticComponent<T>} result - a React component you can render in your tree.
 */
export const lazy = <T extends ComponentType<unknown>>(load: () => Promise<{ [k:string]: T }>, opts: { componentName?: string, beforeLoad?: () => void, afterLoad?: () => void } = {}): LazyExoticComponent<T> => {
	return legacy(() => {
		!!opts.beforeLoad && opts.beforeLoad();
		const promise = load();
		promise.then(() => !!opts.afterLoad && opts.afterLoad());
		return promise.then(res => {
			if ("default" in res) {
				return {default: res.default};
			}
			if (!!opts.componentName && opts.componentName in res) {
				return {default: res[opts.componentName]};
			}
			const keys = Reflect.ownKeys(res).filter(el => el !== "__esModule");
			if (keys.length > 0) {
				return {default: res[keys[0] as keyof typeof res]};
			}
			throw Error("Invalid import");
		}) as Promise<{ default: T; }>;
	})
};