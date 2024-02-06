import { Suspense, JSX, ComponentType, ReactNode } from "react";

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
					if ("default" in res) {
						current.response = res.default as ComponentType<unknown>;
					}
					if (!!componentName && componentName in res) {
						current.response = res[componentName] as ComponentType<unknown>;
					}
					const keys = Reflect.ownKeys(res).filter(el => el !== "__esModule");
					if (keys.length > 0) {
						current.response = res[keys[0] as keyof typeof res] as ComponentType<unknown>;
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
 * **`Lazy`**: Component Wrapper to lazy loading a Component. [See demo](https://ndriadev.github.io/react-tools/#/components/Lazy)
 * @param {Object} param - properties to load component.
 * @param {() => Promise<{ [k:string]: T }>} param.factory - function that returns a Promise or another thenable.
 * @param {string} [param.componentName] - name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
 * @param {ReactNode} [object.fallback] - optional element to render when _when_ prop is false.
 * @param {()=>void} [param.beforeLoad] - function that will be executed before loading component .
 * @param {()=>void} [param.afterLoad] - function that will be executed after loading component .
 * @returns {JSX.Element} element
 */
export const Lazy = <T extends { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }>({ factory, componentName, fallback, beforeLoad, afterLoad }: { factory: () => Promise<T>, componentName?: string, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void }) => {
	return <Suspense fallback={fallback}>
		<DynamicComponent factory={factory} componentName={componentName} beforeLoad={beforeLoad} afterLoad={afterLoad} />
	</Suspense>
}
