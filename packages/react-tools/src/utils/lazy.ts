import { lazy as legacy, ComponentType, LazyExoticComponent } from "react";

/**
 * **`lazy`**: Wrapper around _React.lazy_ with possibility to execute a function before and after component loading.
 * @param {() => Promise<{ default: T }>} load - function that returns a Promise or another thenable.
 * @param {()=> void} beforeLoad - function that will be executed before load component.
 * @param {()=> void} afterLoad - function that will be executed after load component.
 * @returns {LazyExoticComponent<T>} result - a React component you can render in your tree.
 */
export const lazy = <T extends ComponentType<unknown>>(load: () => Promise<{ default: T }>, beforeLoad?: () => void, afterLoad?: () => void): LazyExoticComponent<T> => {
	return legacy(() => {
		!!beforeLoad && beforeLoad();
		const promise = load();
		!!afterLoad && promise.then(() => afterLoad());
		return promise;
	})
};