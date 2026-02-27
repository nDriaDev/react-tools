import { ChangeStringCaseProps } from "../models";

const caseFunc = {
	pascalCase: (string?: string) => !string ? "" : string.charAt(0)?.toUpperCase() + string.substring(1).toLowerCase(),
	snakeCase: (string?: string, delimiter?: "upperCase" | "lowerCase" | string) => {
		if (!string) {
			return "";
		}
		if (!delimiter) {
			return string;
		}
		if (["upperCase", "lowerCase"].includes(delimiter)) {
			return string.replaceAll(delimiter === "upperCase" ? /[A-Z]/g : /[a-z]/g, '_$&');
		}
		return string.replaceAll(delimiter, "_");
	},
	kebabCase: (string?: string, delimiter?: "upperCase" | "lowerCase" | string) => {
		if (!string) {
			return "";
		}
		if (!delimiter) {
			return string;
		}
		if (["upperCase", "lowerCase"].includes(delimiter)) {
			return string.replaceAll(delimiter === "upperCase" ? /[A-Z]/g : /[a-z]/g, '-$&');
		}
		return string.replaceAll(delimiter, "-");
	},
	camelCase: (string?: string, delimiter?: string) => {
		if (!string) {
			return "";
		}
		if (!delimiter) {
			return string;
		}
		return string.toLowerCase().split("").map((char, index, string) => {
			if (char === delimiter) {
				return "";
			}
			return index > 0 && string[index - 1] === delimiter ? char.toUpperCase() : char;
		}).join("");
	}
};

/**
 * **`changeStringCase`**: Function that given a string, a case type, and an optional delimiter, returns the string in the specified case or empty string.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/changeStringCase)
 * @param {ChangeStringCaseProps} props - {@link ChangeStringCaseProps}
 * @returns {string} result
 */
export function changeStringCase({string, caseType, delimiter}: ChangeStringCaseProps ): string {
	switch (caseType) {
		case "pascalCase":
			return caseFunc.pascalCase(string);
		case "snakeCase":
			return caseFunc.snakeCase(string, delimiter);
		case "kebabCase":
			return caseFunc.kebabCase(string, delimiter);
		case "camelCase":
			return caseFunc.camelCase(string, delimiter);
		default:
			throw Error("Unknown case type.");
	}
}