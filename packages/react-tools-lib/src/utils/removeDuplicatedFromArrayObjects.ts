/**
 * **`removeDuplicatedFromArrayObjects`**: Function that given a property or an array of properties, and one or more array of object, returns a single array with unique objects by specified properties. If property is __none__, will be return an unique array. [See demo](https://ndriadev.github.io/react-tools/#/utils/removeDuplicatedFromArrayObjects)
 * @param {keyof T | (keyof T)[] | "none"} property - property or array of properties belonged to objects inside _arrays_ that will be used like discriminating.
 * @param {(T[])[]} args - arrays from which remove duplicated
 * @returns {T[]} result - array
 */
export function removeDuplicatedFromArrayObjects<T extends Record<string, unknown>>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[] {
	const newArray: T[] = [];
	for (const array of args) {
		newArray.push(...array);
	}
	if (property !== "none") {
		if (!Array.isArray(property)) {
			return newArray.reduce((prev: T[], curr) => {
				if (prev.findIndex(el => el[property] === curr[property]) === -1) {
					prev.push(curr);
				}
				return prev;
			}, []);
		}
		return newArray.reduce((prev: T[], curr) => {
			if (prev.findIndex(el => {
				let alreadyPresent = true;
				for (const prop of property) {
					if (el[prop] !== curr[prop]) {
						alreadyPresent = false;
						break;
					}
				}
				return alreadyPresent;
			}) === -1) {
				prev.push(curr);
			}
			return prev;
		}, []);
	}
	return [...new Set(newArray)];
}