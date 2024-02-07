/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Utility type that constructs a type by picking all properties and nested proprerties from __`T`__ in form _`property.nestedProprerty`_.
 */
export type NestedKeyOf<T extends Record<string, unknown>> =
	{ [Key in keyof T & (string | number)]: T[Key] extends Record<string, unknown>
		? `${Key}.${NestedKeyOf<T[Key]>}`
		: `${Key}`
	}[keyof T & (string | number)];

/**
 * Utility type that constructs an object from __`T`__ and whose property values are _`boolean`_.
 */
export type ErrorModel<T extends object> = {
	[k in keyof T]: T[k] extends object ? ErrorModel<T[k]> : boolean;
}

/**
 * Utility type that works like __Partial__ but allows to specify which properties set to optional.
 */
export type SelectivePartial<T extends object, E extends keyof T> = Omit<T, E> & Partial<Pick<T, E>>;

/**
 * Utility type that works like __Partial__ but set nested properties to optional also.
 */
export type RecursivePartial<T extends object> = {
	[K in keyof T]?: T[K] extends object ? RecursivePartial<T[K]> : Partial<T[K]>;
}

/**
 * Utility type that constructs a type that is __`T`__ or __`E`__, if specified otherwise __`null`__.
 */
export type Optional<T = unknown, E = null> = T | E;

/**
 * Utility type that works like __DependencyList__ react type but it can be specified dependencies list element types.
 */
export type DependencyListTyped<T = unknown> = ReadonlyArray<T>;

/**
 * Utility type that given an array constructs union type from array elements type.
 */
export type Union<T extends unknown[]> = T[number];

/**
 * Utility type that given an array extracts a new array with all elements from array expect first.
 */
export type ExtractTail<T extends unknown[]> = T extends [unknown, ...infer Tail] ? Tail : never;

/**
 * Utility type that given an array extracts a new array with all elements from array expect first and last.
 */
export type ExtractMiddle<T extends unknown[]> = T extends [unknown, ...infer Tail, unknown] ? Tail : never;

/**
 * Utility type that given an array extracts a new array with all elements from array expect last.
 */
export type ExtractHead<T extends unknown[]> = T extends [...infer Tail, unknown] ? Tail : never;

/**
 * Utility type that constructs a record with all properties set to optional.
 */
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>

/**
 * Utility type that constructs an array of __`T`__ with one element at least.
 */
export type ArrayMinLength1<T> = { 0: T } & Array<T>;

/**
 * Utility type for Language BCP-47 tags.
 */
export type LanguageBCP47Tags = "ar-SA" | "bn-BD" | "bn-IN" | "cs-CZ" | "da-DK" | "de-AT" | "de-CH" | "de-DE" | "el-GR" | "en-AU" | "en-CA" | "en-GB" | "en-IE" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "es-AR" | "es-CL" | "es-CO" | "es-ES" | "Central-No" | "es-MX" | "es-US" | "fi-FI" | "fr-BE" | "fr-CA" | "fr-CH" | "fr-FR" | "he-IL" | "hi-IN" | "hu-HU" | "id-ID" | "it-CH" | "it-IT" | "ja-JP" | "ko-KR" | "nl-BE" | "nl-NL" | "no-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "sk-SK" | "sv-SE" | "ta-IN" | "ta-LK" | "th-TH" | "tr-TR" | "zh-CN" | "zh-HK" | "zh-TW";

/**
 * Utility type for __`Typed Arrays`__.
 */
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
