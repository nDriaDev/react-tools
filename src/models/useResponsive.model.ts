type UseResponsiveKeysType = "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type UseResponsiveKeys<T extends UseResponsiveKeysType = UseResponsiveKeysType> = T extends UseResponsiveKeysType ? Extract<UseResponsiveKeysType, T> : never;

/**
 * Options accepted by {@link useResponsive}.
 *
 * @template T - The breakpoint key type inferred from the provided config.
 */
export type UseResponsiveBreakpoints<T extends UseResponsiveKeys> = {
	[k in T]: number | { value: number, condition: "<" | "<=" | ">" | ">=" }
};

/**
 * A record mapping each breakpoint key to a boolean indicating whether the
 * current viewport matches that breakpoint. Returned by {@link useResponsive}.
 *
 * @template T - The breakpoint key type. Defaults to the keys of the built-in
 *   `defaultConfig` when no custom config is provided.
 */
export type UseResponsiveResult<T extends UseResponsiveKeys> = {
	[s in UseResponsiveKeys<T>]: boolean;
};
