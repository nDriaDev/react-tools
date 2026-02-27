import { AlphanumericCompareProps } from "../models";

/**
 * **`alphanumericCompare`**: Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/alphanumericCompare)
 * @param {AlphanumericCompareProps} props - {@link AlphanumericCompareProps}
 * @returns {boolean|number} result
 */
function alphanumericCompare({ string1, string2, compareType, locales, opts }: { string1: string, string2: string, compareType?: undefined, locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions }): number;
function alphanumericCompare({ string1, string2, compareType, locales, opts }: { string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions }): boolean;
function alphanumericCompare({ string1, string2, compareType, locales, opts }: AlphanumericCompareProps): boolean|number {
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