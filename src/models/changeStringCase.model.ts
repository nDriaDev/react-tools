/**
 * Parameters accepted by [changeStringCase](https://react-tools.ndria.dev/utils/changeStringCase).
 */
export type ChangeStringCaseProps = {
	/**
	 * The input string to transform. When `undefined` or an empty string,
	 * the function returns an empty string.
	 */
	string?: string;

	/**
	 * The target casing style to convert the input string to:
	 * - **`"camelCase"`** — e.g. `"myVariableName"`
	 * - **`"pascalCase"`** — e.g. `"MyVariableName"`
	 * - **`"snakeCase"`** — e.g. `"my_variable_name"`
	 * - **`"kebabCase"`** — e.g. `"my-variable-name"`
	 */
	caseType: "pascalCase" | "snakeCase" | "kebabCase" | "camelCase";

	/**
	 * An optional delimiter hint used when tokenising the input string. Accepts:
	 * - **`"upperCase"`** — Splits on uppercase letters (for camelCase / PascalCase input).
	 * - **`"lowerCase"`** — Splits on lowercase letters.
	 * - **any other string** — Used as a literal separator character (e.g. `"-"`, `"_"`, `" "`).
	 * When omitted, the function infers word boundaries automatically.
	 */
	delimiter?: "upperCase" | "lowerCase" | string;
};