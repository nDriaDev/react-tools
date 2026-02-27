/**
 * Constructs a union of dot-separated path strings representing all reachable
 * properties and nested properties of `T`.
 *
 * @template T - A record type whose keys are strings or numbers.
 *
 * @example
 * ```ts
 * type Paths = NestedKeyOf<{ user: { name: string; age: number }; id: number }>;
 * // "user" | "user.name" | "user.age" | "id"
 * ```
 */
export type NestedKeyOf<T extends Record<string, unknown>> =
	{ [Key in keyof T & (string | number)]: T[Key] extends Record<string, unknown>
		? `${Key}.${NestedKeyOf<T[Key]>}`
		: `${Key}`
	}[keyof T & (string | number)];

/**
 * Constructs a mirrored type from `T` where every property — including nested
 * ones — is replaced with `boolean`. Useful for representing validation error
 * maps that track which fields are invalid.
 *
 * @template T - An object type to mirror.
 *
 * @example
 * ```ts
 * type Errors = ErrorModel<{ name: string; address: { city: string } }>;
 * // { name: boolean; address: { city: boolean } }
 * ```
 */
export type ErrorModel<T extends object> = {
	[k in keyof T]: T[k] extends object ? ErrorModel<T[k]> : boolean;
};

/**
 * Constructs a type identical to `T` except that the properties listed in `E`
 * are made optional. All other properties remain required.
 *
 * @template T - The base object type.
 * @template E - A union of keys from `T` to make optional.
 *
 * @example
 * ```ts
 * type User = { id: number; name: string; age: number };
 * type PartialUser = SelectivePartial<User, "age" | "name">;
 * // { id: number; name?: string; age?: number }
 * ```
 */
export type SelectivePartial<T extends object, E extends keyof T> =
	Omit<T, E> & Partial<Pick<T, E>>;

/**
 * Constructs a deeply partial version of `T`, making every property and every
 * nested property optional. Analogous to `Partial<T>` but applied recursively.
 *
 * @template T - The object type to make recursively partial.
 *
 * @example
 * ```ts
 * type Config = { server: { host: string; port: number }; debug: boolean };
 * type PartialConfig = RecursivePartial<Config>;
 * // { server?: { host?: string; port?: number }; debug?: boolean }
 * ```
 */
export type RecursivePartial<T extends object> = {
	[K in keyof T]?: T[K] extends object ? RecursivePartial<T[K]> : Partial<T[K]>;
};

/**
 * Constructs a type that is either `T` or `E`. Defaults to `T | null` when `E`
 * is not specified. A semantic alias for nullable or alternative value types.
 *
 * @template T - The primary value type.
 * @template E - The alternative type. Defaults to `null`.
 *
 * @example
 * ```ts
 * type MaybeString = Optional<string>;       // string | null
 * type MaybeError  = Optional<string, Error>; // string | Error
 * ```
 */
export type Optional<T = unknown, E = null> = T | E;

/**
 * A strictly-typed variant of React's `DependencyList`. Behaves identically
 * to `ReadonlyArray<unknown>` but allows the element type to be narrowed to
 * `T`, enabling compile-time checking of dependency types in custom hooks such
 * as {@link useCallbackCompare} and {@link useMemoCompare}.
 *
 * @template T - The type of each dependency element. Defaults to `unknown`.
 *
 * @example
 * ```ts
 * const deps: DependencyListTyped<string> = ["hello", "world"];
 * ```
 */
export type DependencyListTyped<T = unknown> = ReadonlyArray<T>;

/**
 * Constructs a union type from the element types of the tuple or array `T`.
 * Equivalent to `T[number]`.
 *
 * @template T - A tuple or array type.
 *
 * @example
 * ```ts
 * type U = Union<[string, number, boolean]>; // string | number | boolean
 * ```
 */
export type Union<T extends unknown[]> = T[number];

/**
 * Given a tuple `T`, constructs a new tuple containing all elements except the
 * first. Returns `never` when `T` has fewer than two elements.
 *
 * @template T - A tuple type with at least one element.
 *
 * @example
 * ```ts
 * type Tail = ExtractTail<[string, number, boolean]>; // [number, boolean]
 * ```
 */
export type ExtractTail<T extends unknown[]> =
	T extends [unknown, ...infer Tail] ? Tail : never;

/**
 * Given a tuple `T`, constructs a new tuple containing all elements except the
 * first and the last. Returns `never` when `T` has fewer than three elements.
 *
 * @template T - A tuple type with at least two elements.
 *
 * @example
 * ```ts
 * type Middle = ExtractMiddle<[string, number, boolean]>; // [number]
 * ```
 */
export type ExtractMiddle<T extends unknown[]> =
	T extends [unknown, ...infer Tail, unknown] ? Tail : never;

/**
 * Given a tuple `T`, constructs a new tuple containing all elements except the
 * last. Returns `never` when `T` has fewer than two elements.
 *
 * @template T - A tuple type with at least one element.
 *
 * @example
 * ```ts
 * type Head = ExtractHead<[string, number, boolean]>; // [string, number]
 * ```
 */
export type ExtractHead<T extends unknown[]> =
	T extends [...infer Tail, unknown] ? Tail : never;

/**
 * Constructs a `Record<K, T>` where all properties are optional. A shorthand
 * for `Partial<Record<K, T>>`.
 *
 * @template K - The key type, constrained to valid record key types.
 * @template T - The value type.
 *
 * @example
 * ```ts
 * type Cache = PartialRecord<string, number>; // { [key: string]: number | undefined }
 * ```
 */
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

/**
 * Constructs an `Array<T>` that is guaranteed to contain at least one element.
 * Enforced via an intersection with `{ 0: T }`, making index `0` always
 * required.
 *
 * @template T - The element type.
 *
 * @example
 * ```ts
 * const keys: ArrayMinLength1<string> = ["name"];          // ✅
 * const empty: ArrayMinLength1<string> = [];               // ❌ type error
 * ```
 */
export type ArrayMinLength1<T> = { 0: T } & Array<T>;

/**
 * A union of all valid
 * [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags supported by
 * the library. Each tag is a combination of an ISO 639-1 language code and an
 * ISO 3166-1 alpha-2 region code (e.g. `"en-US"`, `"it-IT"`, `"zh-CN"`).
 * Used to type locale parameters in internationalisation utilities.
 */
export type LanguageBCP47Tags =
	| "ar-SA" | "bn-BD" | "bn-IN" | "cs-CZ" | "da-DK"
	| "de-AT" | "de-CH" | "de-DE" | "el-GR" | "en-AU"
	| "en-CA" | "en-GB" | "en-IE" | "en-IN" | "en-NZ"
	| "en-US" | "en-ZA" | "es-AR" | "es-CL" | "es-CO"
	| "es-ES" | "Central-No" | "es-MX" | "es-US" | "fi-FI"
	| "fr-BE" | "fr-CA" | "fr-CH" | "fr-FR" | "he-IL"
	| "hi-IN" | "hu-HU" | "id-ID" | "it-CH" | "it-IT"
	| "ja-JP" | "ko-KR" | "nl-BE" | "nl-NL" | "no-NO"
	| "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU"
	| "sk-SK" | "sv-SE" | "ta-IN" | "ta-LK" | "th-TH"
	| "tr-TR" | "zh-CN" | "zh-HK" | "zh-TW";

/**
 * A union of all
 * [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
 * constructors. Useful for constraining parameters that accept any fixed-size
 * binary array view over an `ArrayBuffer`.
 *
 * Includes: `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`,
 * `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`,
 * `BigInt64Array`, `BigUint64Array`.
 */
export type TypedArray =
	| Int8Array | Uint8Array | Uint8ClampedArray
	| Int16Array | Uint16Array
	| Int32Array | Uint32Array
	| Float32Array | Float64Array
	| BigInt64Array | BigUint64Array;

/**
 * A union of all valid
 * [`KeyboardEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
 * string values. Represents the physical key on the keyboard regardless of the
 * user's active keyboard layout or language. Used to type parameters in
 * keyboard event utilities such as {@link useHotKeys} and
 * {@link clickElementOnKeydownEvent}.
 *
 * @example
 * ```ts
 * const code: KeyboardEventCode = "Enter";  // ✅
 * const bad:  KeyboardEventCode = "return"; // ❌ type error
 * ```
 */
export type KeyboardEventCode =
	| "Escape" | "Digit1" | "Digit2" | "Digit3" | "Digit4" | "Digit5"
	| "Digit6" | "Digit7" | "Digit8" | "Digit9" | "Digit0" | "Minus"
	| "Equal" | "Backspace" | "Tab" | "KeyQ" | "KeyW" | "KeyE" | "KeyR"
	| "KeyT" | "KeyY" | "KeyU" | "KeyI" | "KeyO" | "KeyP" | "BracketLeft"
	| "BracketRight" | "Enter" | "ControlLeft" | "KeyA" | "KeyS" | "KeyD"
	| "KeyF" | "KeyG" | "KeyH" | "KeyJ" | "KeyK" | "KeyL" | "Semicolon"
	| "Quote" | "Backquote" | "ShiftLeft" | "Backslash" | "KeyZ" | "KeyX"
	| "KeyC" | "KeyV" | "KeyB" | "KeyN" | "KeyM" | "Comma" | "Period"
	| "Slash" | "ShiftRight" | "NumpadMultiply" | "AltLeft" | "Space"
	| "CapsLock" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8"
	| "F9" | "F10" | "Pause" | "ScrollLock" | "Numpad7" | "Numpad8"
	| "Numpad9" | "NumpadSubtract" | "Numpad4" | "Numpad5" | "Numpad6"
	| "NumpadAdd" | "Numpad1" | "Numpad2" | "Numpad3" | "Numpad0"
	| "NumpadDecimal" | "IntlBackslash" | "F11" | "F12" | "NumpadEqual"
	| "F13" | "F14" | "F15" | "F16" | "F17" | "F18" | "F19" | "F20"
	| "F21" | "F22" | "F23" | "KanaMode" | "Lang2" | "Lang1" | "IntlRo"
	| "F24" | "Lang4" | "Lang3" | "Convert" | "NonConvert" | "IntlYen"
	| "NumpadComma" | "MediaTrackPrevious" | "MediaTrackNext" | "NumpadEnter"
	| "ControlRight" | "AudioVolumeMute" | "LaunchApp2" | "MediaPlayPause"
	| "MediaStop" | "VolumeDown" | "AudioVolumeDown" | "VolumeUp"
	| "AudioVolumeUp" | "BrowserHome" | "NumpadDivide" | "PrintScreen"
	| "AltRight" | "NumLock" | "Home" | "ArrowUp" | "PageUp" | "ArrowLeft"
	| "ArrowRight" | "End" | "ArrowDown" | "PageDown" | "Insert" | "Delete"
	| "MetaLeft" | "OSLeft" | "MetaRight" | "ContextMenu" | "Power"
	| "BrowserSearch" | "BrowserFavorites" | "BrowserRefresh" | "BrowserStop"
	| "BrowserForward" | "BrowserBack" | "LaunchApp1" | "LaunchMail"
	| "MediaSelect";