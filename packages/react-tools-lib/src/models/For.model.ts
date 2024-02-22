import { ReactNode } from "react";

export interface ForProps<T> {
	elementKey?: T extends object ? keyof T | ((item: T) => string | number) : string | number | ((item: T) => string | number);
	children: (item: T, index: T extends object ? number | T[keyof T] | string : number) => ReactNode;
	fallback?: ReactNode;
	filter?: <S extends T>(val: T, index: number, arr: T[]) => val is S;
	map?: <U extends T>(val: T, index: number, arr: T[]) => U;
	sort?: (a: T, b: T) => number;
	of: T[];
}