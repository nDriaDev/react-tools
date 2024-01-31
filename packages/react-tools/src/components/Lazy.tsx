import { Suspense, JSX, ComponentType, ReactNode } from "react";

const promise: { factorySerialized: string; promise: Promise<void>; response?: () => JSX.Element, reject?: unknown }[] = [];
const DynamicComponent = ({ factory, beforeLoad, afterLoad }: { factory: () => Promise<unknown>, beforeLoad?: () => void, afterLoad?: () => void }) => {
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
					const keys = Object.getOwnPropertyNames(res);
					current.response = Reflect.get(res as object, keys[0]);
				})
				.catch(err => current.reject = err);
		})(),
	}
	promise.push(current);
	throw current.promise;
};

export const Lazy = <T extends ComponentType<unknown>>({ factory, fallback, beforeLoad, afterLoad }: { factory: () => Promise<T | { default: T }>, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void }) => {
	return <Suspense fallback={fallback}>
		<DynamicComponent factory={factory} beforeLoad={beforeLoad} afterLoad={afterLoad} />
	</Suspense>
}
