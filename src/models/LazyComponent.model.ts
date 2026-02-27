import { ComponentType, ReactNode } from "react";

/**
 * Props accepted by the [LazyComponent](https://react-tools.ndria.dev/components/LazyComponent) component.
 *
 * @template T - The module type returned by `factory`. Must export either a `default` export or one or more named `ComponentType` exports.
 */
export interface LazyComponentProps<T extends | { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }> {
		/**
		 * A dynamic import factory function that returns a `Promise` resolving to
		 * the module containing the component to render (e.g.
		 * `() => import("./MyComponent")`). The component is loaded once and cached
		 * — subsequent renders reuse the resolved result without re-fetching.
		 */
		factory: () => Promise<{ [k: string]: T }>;

		/**
		 * The named export to render from the resolved module. When omitted,
		 * the `default` export is used. Required when the module does not have a
		 * default export or when a specific named export should be rendered.
		 */
		componentName?: string;

		/**
		 * Content rendered while the component is loading (passed to the internal
		 * `<Suspense fallback>` boundary). Accepts any valid React node.
		 */
		fallback?: ReactNode;

		/**
		 * Called synchronously before the factory `Promise` is initiated. Use this
		 * to show a loading indicator or perform pre-load side effects.
		 */
		beforeLoad?: () => void;

		/**
		 * Called after the factory `Promise` resolves and the component is ready
		 * to render. Use this to hide a loading indicator or perform post-load
		 * side effects.
		 */
		afterLoad?: () => void;
	}