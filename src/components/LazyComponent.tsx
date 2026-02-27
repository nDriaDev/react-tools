import { Suspense, JSX, ComponentType } from "react";
import { LazyComponentProps } from "../models";

const promise: { factorySerialized: string; promise: Promise<void>; response?: ComponentType<unknown>, error?: unknown }[] = [];
const DynamicComponent = ({ factory, componentName, beforeLoad, afterLoad }: { factory: () => Promise<{[k:string]:unknown}>, componentName?:string, beforeLoad?: () => void, afterLoad?: () => void }) => {
	const fSerialized = factory.toString();
	for (const prom of promise) {
		if (prom.factorySerialized === fSerialized) {
			if (prom.response) {
				!!afterLoad && afterLoad();
				return prom.response && (prom as unknown as {response: () => JSX.Element}).response();
			}
			if (prom.error) {
				throw prom.error;
			}
			throw prom.promise;
		}
	}

	const current: typeof promise[number] = {
		factorySerialized: String.raw`${fSerialized}`,
		promise: (() => {
			!!beforeLoad && beforeLoad();
			return factory()
				.then((res) => {
					if (!!componentName && componentName in res) {
						current.response = res[componentName] as ComponentType<unknown>;
						return;
					}
					if ("default" in res) {
						current.response = res.default as ComponentType<unknown>;
						return;
					}
					const keys = Reflect.ownKeys(res).filter(el => el !== "__esModule");
					if (keys.length > 0) {
						current.response = res[keys[0] as keyof typeof res] as ComponentType<unknown>;
						return;
					}
					throw Error("Invalid import");
				})
				.catch(err => current.error = err);
		})(),
	}
	promise.push(current);
	throw current.promise;
};

/**
 * **`LazyComponent`**: Component Wrapper to lazy loading a Component.
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/LazyComponent)
 * @template T - The module type returned by `factory`. Must export either a `default` export or one or more named `ComponentType` exports.
 * @param {LazyComponentProps<T>} props - {@link LazyComponentProps}
 * @returns {JSX.Element} element
 */
export const LazyComponent = <T extends { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }>({ factory, componentName, fallback, beforeLoad, afterLoad }: LazyComponentProps<T> ) => {
	return <Suspense fallback={fallback}>
		<DynamicComponent factory={factory} componentName={componentName} beforeLoad={beforeLoad} afterLoad={afterLoad} />
	</Suspense>
}
