/**
 * Parameters accepted by all overloads of [alphanumericCompare](https://react-tools.ndria.dev/utils/alphanumericCompare).
 */
export type AlphanumericCompareProps = {
	/**
	 * The first string to compare.
	 */
	string1: string;

	/**
	 * The second string to compare.
	 */
	string2: string;

	/**
	 * Controls the return type and comparison mode:
	 * - **`undefined`** *(default)* — Returns a numeric sort order value
	 *   (`-1`, `0`, or `1`), following the same semantics as
	 *   `Intl.Collator.prototype.compare`.
	 * - **`"<"` | `">"` | `"="` | `">="` | `"<="`** — Returns a `boolean`
	 *   indicating whether the comparison satisfies the given operator.
	 */
	compareType?: "<" | ">" | "=" | ">=" | "<=";

	/**
	 * A BCP 47 language tag or array of tags forwarded to `Intl.Collator`.
	 * Determines locale-sensitive string ordering rules (e.g. `"en"`, `"de"`,
	 * `"it"`). When omitted, the runtime default locale is used.
	 */
	locales?: Intl.LocalesArgument;

	/**
	 * Options forwarded to the `Intl.Collator` constructor, allowing fine-grained
	 * control over sensitivity, case handling, numeric ordering, and more.
	 * See {@link Intl.CollatorOptions}.
	 */
	opts?: Intl.CollatorOptions;
};