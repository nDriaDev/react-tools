import { lazy as legacy, ComponentType } from "react";
import { LazyProps, LazyResult } from "../models";

/**
 * **`lazy`**: Wrapper around _React.lazy_ that works also with component without default export and with possibility to execute a function before and after component loading.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/lazy)
 * @template T - The `ComponentType` exported by the dynamic module.
 * @param {LazyProps<T>["load"]} load - {@link LazyProps}
 * @param {LazyProps<T>["opts"]} opts - {@link LazyProps}
 * @returns {LazyResult<T>} result - {@link LazyResult}
 */
export const lazy = <T extends ComponentType<unknown>>(load: LazyProps<T>["load"], opts: LazyProps<T>["opts"] = {}): LazyResult<T> => {
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