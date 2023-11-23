type useResponsiveKeysType = "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type useResponsiveKeys<T extends useResponsiveKeysType = useResponsiveKeysType> = T extends useResponsiveKeysType ? Extract<useResponsiveKeysType, T> : never;

export type useResponsiveBreakpoints<T extends useResponsiveKeys = useResponsiveKeys> = {
	[k in T]: number | { value: number, condition: "<" | "<=" | ">" | ">=" }
}