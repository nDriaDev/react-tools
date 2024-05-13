/**
 * **`isShallowEqual`**: It returns true if the params are equal until first level depth. [See demo](https://react-tools.ndria.dev/#/utils/isShallowEqual)
 * @param {unknown} objA
 * @param {unknown} objB
 * @returns {boolean} result
 */
export const isShallowEqual = (objA: unknown, objB: unknown): boolean => {
	if (Object.is(objA, objB)) {
		return true;
	}

	if (
		typeof objA !== 'object' ||
		objA === null ||
		typeof objB !== 'object' ||
		objB === null
	) {
		return false;
	}

	const keysA = Reflect.ownKeys(objA);
	const keysB = Reflect.ownKeys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	for (let i = 0, sizeA = keysA.length; i < sizeA; i++) {
		const currentKey = keysA[i];
		if (
			!Reflect.has(objB, currentKey) ||
			!Object.is((objA as { [key: string | symbol]: unknown })[currentKey], (objB as { [key: string | symbol]: unknown })[currentKey])
		) {
			return false;
		}
	}

	return true;
}