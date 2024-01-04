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

export type ArrayMinLength1<T> = { 0: T } & Array<T>;

export type LanguageBCP47Tags = "ar-SA" | "bn-BD" | "bn-IN" | "cs-CZ" | "da-DK" | "de-AT" | "de-CH" | "de-DE" | "el-GR" | "en-AU" | "en-CA" | "en-GB" | "en-IE" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "es-AR" | "es-CL" | "es-CO" | "es-ES" | "Central-No" | "es-MX" | "es-US" | "fi-FI" | "fr-BE" | "fr-CA" | "fr-CH" | "fr-FR" | "he-IL" | "hi-IN" | "hu-HU" | "id-ID" | "it-CH" | "it-IT" | "ja-JP" | "ko-KR" | "nl-BE" | "nl-NL" | "no-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "sk-SK" | "sv-SE" | "ta-IN" | "ta-LK" | "th-TH" | "tr-TR" | "zh-CN" | "zh-HK" | "zh-TW";
