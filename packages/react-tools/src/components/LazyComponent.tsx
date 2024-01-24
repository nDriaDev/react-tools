import { Suspense, JSX } from "react";

const promise: { name: string; promise: Promise<void>; response?:()=>JSX.Element }[] = [];
const DynamicComponent = ({ name }: { name: string }) => {
	for (const prom of promise) {
		if (prom.name === name) {
			return prom.response && prom.response();
		}
	}

	const current: typeof promise[number] = {
		name,
		promise: import(`../components/hooks/${name}/${name.charAt(0).toUpperCase() + name.substring(1)}.tsx`).then((res) => {
			current.response = res[name.charAt(0).toUpperCase() + name.substring(1)]
		}),
	}
	promise.push(current);
	throw current.promise;
};

const LazyComponent = ({ name }: { name: string }) => {
	return <Suspense fallback="loading">
		<DynamicComponent name={name} />
	</Suspense>
}