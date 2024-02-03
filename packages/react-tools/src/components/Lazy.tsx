import { Suspense, JSX, ComponentType, ReactNode } from "react";

const promise: { factorySerialized: string; promise: Promise<void>; response?: () => JSX.Element, reject?: unknown }[] = [];
const DynamicComponent = ({ factory, componentName, beforeLoad, afterLoad }: { factory: () => Promise<{[k:string]:unknown}>, componentName?:string, beforeLoad?: () => void, afterLoad?: () => void }) => {
	const fSerialized = factory.toString();
	for (const prom of promise) {
		if (prom.factorySerialized === fSerialized) {
			if (prom.response) {
				!!afterLoad && afterLoad();
				return prom.response && prom.response();
			}
			if (prom.reject) {
				throw prom.reject;
			}
			throw prom.promise;
		}
	}

	const current: typeof promise[number] = {
		factorySerialized: fSerialized,
		promise: (() => {
			!!beforeLoad && beforeLoad();
			return factory()
				.then((res) => {
					if ("default" in res) {
						return { default: res.default };
					}
					if (!!componentName && componentName in res) {
						return { default: res[componentName] };
					}
					const keys = Reflect.ownKeys(res).filter(el => el !== "__esModule");
					if (keys.length > 0) {
						return { default: res[keys[0] as keyof typeof res] };
					}
					throw Error("Invalid import");
				})
				.catch(err => current.reject = err);
		})(),
	}
	promise.push(current);
	throw current.promise;
};

/**
 * **`Lazy`**: Component Wrapper to lazy loading a Component. [See demo](https://nDriaDev.io/react-tools/#/components/Lazy)
 * @param {Object} param - properties to load component. 
 * @param {() => Promise<{ [k:string]: T }>} param.factory - function that returns a Promise or another thenable.
 * @param {string} [param.componentName] - name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
 * @param {ReactNode} [object.fallback] - optional element to render when _when_ prop is false.
 * @param {()=>void} [param.beforeLoad] - function that will be executed before loading component . 
 * @param {()=>void} [param.afterLoad] - function that will be executed after loading component . 
 * @returns {JSX.Element} element
 */
export const Lazy = <T extends ComponentType<unknown>>({ factory, componentName, fallback, beforeLoad, afterLoad }: { factory: () => Promise<{ [K:string]: T }>, componentName?: string, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void }) => {
	return <Suspense fallback={fallback}>
		<DynamicComponent factory={factory} componentName={componentName} beforeLoad={beforeLoad} afterLoad={afterLoad} />
	</Suspense>
}
