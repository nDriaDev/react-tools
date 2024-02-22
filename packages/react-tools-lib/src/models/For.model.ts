import { ReactNode } from "react";

export interface ForProps<T> {
	elementKey?: T extends Record<string, unknown> ? keyof T | ((item:T)=> string|number) : never;
	children: (item: T, index: T extends Record<string,unknown> ? number | T[keyof T] | string : number) => ReactNode;
	fallback?: ReactNode;
	filter?: <S extends T>(val: T, index: number, arr: T[]) => val is S;
	map?: <U extends T>(val: T, index: number, arr: T[]) => U;
	sort?: (a: T, b: T) => number;
	of: T[];
}