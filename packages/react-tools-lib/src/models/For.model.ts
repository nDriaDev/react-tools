import { Key, ReactNode } from "react";

export interface ForProps<T> {
	elementKey?: T extends object ? keyof T | ((item: T) => Key) : Key | ((item: T) => Key);
	children: (item: T, index: number, key: Key) => ReactNode;
	fallback?: ReactNode;
	filter?: <S extends T>(val: T, index: number, arr: T[]) => val is S;
	map?: <U extends T>(val: T, index: number, arr: T[]) => U;
	sort?: true | ((a: T, b: T) => number);
	of: T[];
}