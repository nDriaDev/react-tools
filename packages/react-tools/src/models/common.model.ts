export type DependencyListTyped<T = unknown> = ReadonlyArray<T>;

/**
 * **`CompareFn<T>`**: receive 2 parameters of type T, respectively *old* and *new* version. It compares them
 * and returns `true` if they are different, otherwise `false`.
 */
export interface CompareFn<T = unknown> {
	(oldDeps: DependencyListTyped<T>, newDeps: DependencyListTyped<T>): boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>
