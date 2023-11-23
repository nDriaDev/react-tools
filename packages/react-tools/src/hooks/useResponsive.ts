import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from ".";
import { useResponsiveBreakpoints, useResponsiveKeys } from "../models/useResponsive.model";

const listeners = new Set<() => void>();

const handler = () => listeners.forEach(l => l());

const defaultConfig: useResponsiveBreakpoints<"xs" | "sm" | "md" | "lg" | "xl"> = {
	xs: {
		value: 576,
		condition: "<"
	},
	sm: {
		value: 576,
		condition: ">="
	},
	md: {
		value: 768,
		condition: ">="
	},
	lg: {
		value: 992,
		condition: ">="
	},
	xl: {
		value: 1200,
		condition: ">="
	}
};

function calcResponsive<T extends useResponsiveKeys>(config?: useResponsiveBreakpoints<T>): { [s in keyof typeof defaultConfig]: boolean } | { [s in useResponsiveKeys<T>]: boolean } {
	const width = window.innerWidth;
	const conf = {};
	const target = config ?? defaultConfig;
	const keys = Object.keys(target) as ((keyof typeof conf)[]);
	for (const key of keys) {
		if (Reflect.get(target, key)) {
			const point = Reflect.get(target, key);
			const { value, condition } = typeof point === "number" ? { value: point, condition: ">" } : point;
			Reflect.set(conf, key, eval(`${width}${condition}${value}`) as boolean);
		}
	}
	return conf as typeof config extends undefined ? { [k in keyof typeof defaultConfig]: boolean } : { [k in useResponsiveKeys<T>]: boolean };
}

/**
 * **`useResponsive`**: Hook for getting responsive window size. It receives an optional param __config__ to manually setting breakpoint keys. __config__ can have a keys subset and value can be a number or an object with _value_ and _condition_ properties. If _value_ is a number, the condition will be ">". By default Breakpoints are:
 *
 * - xs: { value: 576, condition: "<" }
 * - sm: { value: 576, condition: ">=" }
 * - md: { value: 768, condition: ">=" }
 * - lg: { value: 992, condition: ">=" }
 * - xl: { value: 1200, condition: ">=" }
 * @param {useResponsiveBreakpoints} [config] - custom breakpoint object.
 * @returns {keyof useResponsiveBreakpoints} breakpoint key - returns the __size key__ of the __config__, parameter if passed otherwise  __default config__, corresponding to the size of the window.
 */
function useResponsive(config?: undefined): { [s in (keyof typeof defaultConfig)]: boolean };
function useResponsive<T extends useResponsiveKeys>(config?: useResponsiveBreakpoints<T>): { [s in useResponsiveKeys<T>]: boolean };
function useResponsive<T extends useResponsiveKeys>(config?: useResponsiveBreakpoints<T>): { [s in (keyof typeof defaultConfig)]: boolean } | { [s in useResponsiveKeys<T>]: boolean } {
	const configCache = useRef(() => {
		if (config === undefined) {
			return calcResponsive(defaultConfig);
		} else {
			return calcResponsive<T>(config);
		}
	});
	return useSyncExternalStore(
		useCallback(notif => {
			listeners.size === 0 && window.addEventListener('resize', handler);
			listeners.add(notif);
			return () => {
				listeners.delete(notif);
				listeners.size === 0 && window.removeEventListener("resize", handler);
			}
		}, []),
		useMemo(() => {
			let cache = configCache.current();
			return () => {
				const result = configCache.current();
				const keys = Object.keys(result);
				for (const key of keys) {
					if (Reflect.get(cache, key) !== Reflect.get(result, key)) {
						cache = result;
						break;
					}
				}
				return cache;
			}
		}, []),
	);
}

export { useResponsive };
