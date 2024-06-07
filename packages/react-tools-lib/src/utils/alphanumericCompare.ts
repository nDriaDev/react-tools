/**
 * **`alphanumericCompare`**: Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://react-tools.ndria.dev/#/utils/alphanumericCompare)
 * @param {Object} param - object
 * @param {string} param.string1 - first string to compare.
 * @param {string} param.string2 - second string to compare.
 * @param {"<" | ">" | "=" | ">=" | "<="} [param.compareType] - type of compare to verify.
 * @param {Intl.LocalesArgument} [param.locales] - A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported.
 * @param {Intl.CollatorOptions} [param.opts] - An object adjusting the output format. Corresponds to the options parameter of the Intl.Collator() constructor.
 * @returns {boolean|number} result - boolean or number that indicates whether the indicated comparison is respected or not.
 */
function alphanumericCompare({ string1, string2, compareType, locales, opts }: { string1: string, string2: string, compareType?: undefined, locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions }): number;
function alphanumericCompare({ string1, string2, compareType, locales, opts }: { string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions }): boolean;
function alphanumericCompare({ string1, string2, compareType, locales, opts }: {string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions}): boolean|number {
	const result = string1.localeCompare(string2, locales, opts);
	switch (compareType) {
		case "<":
			return result < 0;
		case ">":
			return result > 0;
		case "=":
			return result === 0;
		case "<=":
			return result <= 0;
		case ">=":
			return result >= 0;
		default:
			return result;
	}
}

export { alphanumericCompare };