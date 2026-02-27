import { ComponentType, LazyExoticComponent } from "react";

/**
 * Parameters accepted by [lazy](https://react-tools.ndria.dev/utils/lazy).
 *
 * @template T - The `ComponentType` exported by the dynamic module.
 */
export type LazyProps<T extends ComponentType<unknown>> = {
	/**
	 * A dynamic import factory that returns a `Promise` resolving to a module
	 * object whose values are `ComponentType` instances (e.g.
	 * `() => import("./MyComponent")`). The resolved component is cached after
	 * the first load.
	 */
	load: () => Promise<{ [k: string]: T }>;

	/**
	 * Optional configuration.
	 */
	opts?: {
		/**
		 * The named export key to use as the component. When omitted, the
		 * `default` export is used.
		 */
		componentName?: string;

		/**
		 * Called synchronously before the factory `Promise` is initiated.
		 */
		beforeLoad?: () => void;

		/**
		 * Called after the factory `Promise` resolves and the component is ready.
		 */
		afterLoad?: () => void;
	};
};

/**
 * Return value of [lazy](https://react-tools.ndria.dev/utils/lazy).
 *
 * A {@link LazyExoticComponent} wrapping the resolved component `T`, compatible
 * with `<Suspense>` for code-splitting.
 *
 * @template T - The `ComponentType` exported by the dynamic module.
 */
export type LazyResult<T extends ComponentType<unknown>> = LazyExoticComponent<T>;