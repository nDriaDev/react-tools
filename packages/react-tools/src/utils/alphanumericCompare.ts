/**
 * **`alphanumericCompare`**: Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://nDriaDev.io/react-tools/#/utils/alphanumericCompare)
 * @param {string} string1 - first string to compare.
 * @param {string} string2 - second string to compare.
 * @param {"<" | ">" | "=" | ">=" | "<="} compareType - type of compare to verify.
 * @param {Intl.CollatorOptions} opts - options object to execute compare.
 * @returns {boolean} result - boolean that indicates whether the indicated comparison is respected or not.
 */
export function alphanumericCompare(string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", opts?: Intl.CollatorOptions) {
	const result = string1.localeCompare(string2, "it", opts);
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