type UseResponsiveKeysType = "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type UseResponsiveKeys<T extends UseResponsiveKeysType = UseResponsiveKeysType> = T extends UseResponsiveKeysType ? Extract<UseResponsiveKeysType, T> : never;

export type UseResponsiveBreakpoints<T extends UseResponsiveKeys = UseResponsiveKeys> = {
	[k in T]: number | { value: number, condition: "<" | "<=" | ">" | ">=" }
}