import { DependencyList, useRef, useReducer, useCallback, Dispatch, SetStateAction, useEffect } from "react";

export const useDerivedState = <T>(initialState: T|(()=>T), compute: ()=>void|Promise<void>|(()=>void), deps?: DependencyList): [T, Dispatch<SetStateAction<T>>] => {
	const [, update] = useReducer(t => !t, false);
	const ref = useRef<{ init: boolean, localState?: T, deps?: DependencyList }>({
		init: false
	});

	let localState: T;
	if (!ref.current.init || (ref.current.deps || []).length !== (deps || []).length || !(ref.current.deps || []).every((dep, i) => (deps || [])[i] === dep)) {
		localState = typeof initialState === "function" ? (initialState as ()=>T)() : initialState;
		ref.current = {
			init: true,
			localState: localState,
			deps
		}
		update();
	} else {
		localState = ref.current.localState!;
	}

	const updateLocalState = useCallback((state: T | ((state: T) => T)) => {
		if (!ref.current.init) {
			throw Error();
		}
		const localState = typeof state === "function"
			? (state as ((state: T) => T))(ref.current.localState!)
			: state;
		ref.current.localState = localState;
		update();
	}, []) as Dispatch<SetStateAction<T>>;

	useEffect(() => {
		const cleanUp = compute();
		return () => cleanUp && (cleanUp as ()=>void)();
	}, [compute]);

	return [localState, updateLocalState];

}