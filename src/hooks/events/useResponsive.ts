import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseResponsiveBreakpoints, UseResponsiveKeys, UseResponsiveResult } from "../../models";

const listeners = new Set<() => void>();

const handler = () => listeners.forEach(l => l());

const defaultConfig: UseResponsiveBreakpoints<"xs" | "sm" | "md" | "lg" | "xl"> = {
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

function calcResponsive<T extends UseResponsiveKeys>(config?: UseResponsiveBreakpoints<T>): { [s in keyof typeof defaultConfig]: boolean } | { [s in UseResponsiveKeys<T>]: boolean } {
	const width = window.innerWidth;
	const conf = {};
	const target = config ?? defaultConfig;
	const keys = Object.keys(target) as ((keyof typeof conf)[]);
	for (const key of keys) {
		if (Reflect.get(target, key)) {
			const point = Reflect.get(target, key);
			const { value, condition } = typeof point === "number" ? { value: point, condition: ">" } : point;
			Reflect.set(conf, key, Function(`return ${width}${condition}${value}`)() as boolean);
		}
	}
	return conf as typeof config extends undefined ? { [k in keyof typeof defaultConfig]: boolean } : { [k in UseResponsiveKeys<T>]: boolean };
}

/**
 * **`useResponsive`**: Hook for getting responsive window size.
 *
 * By default Breakpoints are:
 *
 * - xs: { value: 576, condition: "<" }
 * - sm: { value: 576, condition: ">=" }
 * - md: { value: 768, condition: ">=" }
 * - lg: { value: 992, condition: ">=" }
 * - xl: { value: 1200, condition: ">=" }
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useResponsive)
 * @template T - The breakpoint key type inferred from the provided config.
 * @param {UseResponsiveBreakpoints<T>} [config] - {@link UseResponsiveBreakpoints}
 * @returns {UseResponsiveResult<"xs" | "sm" | "md" | "lg" | "xl"> | UseResponsiveResult<T>} result {@link UseResponsiveResult}
 */
function useResponsive(config?: undefined): UseResponsiveResult<"xs" | "sm" | "md" | "lg" | "xl">;
function useResponsive<T extends UseResponsiveKeys>(config?: UseResponsiveBreakpoints<T>): UseResponsiveResult<T>;
function useResponsive<T extends UseResponsiveKeys>(config?: UseResponsiveBreakpoints<T>): UseResponsiveResult<"xs" | "sm" | "md" | "lg" | "xl"> | UseResponsiveResult<T> {
	const configCache = useRef(() => {
		if (config === undefined) {
			return calcResponsive(defaultConfig);
		} else {
			return calcResponsive<T>(config);
		}
	});
	return useSyncExternalStore(
		useCallback(notif => {
			listeners.size === 0 && window.addEventListener('resize', handler, {passive: true});
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
