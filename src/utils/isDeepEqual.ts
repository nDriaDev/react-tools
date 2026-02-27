import { IsDeepEqualProps } from "../models";

/**
 * __`isDeepEqual`__: It returns true if the params are equal in depth.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/isDeepEqual)
 * @param {IsDeepEqualProps["objA"]} objA - {@link IsDeepEqualProps}
 * @param {IsDeepEqualProps["objB"]} objB - {@link IsDeepEqualProps}
 * @param {IsDeepEqualProps["map"]} map - {@link IsDeepEqualProps}
 * @returns {boolean} result
 */
export const isDeepEqual = (objA: IsDeepEqualProps["objA"], objB: IsDeepEqualProps["objB"], map: IsDeepEqualProps["map"] = new WeakMap()): boolean => {
	if (Object.is(objA, objB)) {
		return true;
	}

	if (objA instanceof Date && objB instanceof Date) {
		return objA.getTime() === objB.getTime();
	}
	if (objA instanceof RegExp && objB instanceof RegExp) {
		return objA.toString() === objB.toString();
	}

	if (
		typeof objA !== 'object' ||
		objA === null ||
		typeof objB !== 'object' ||
		objB === null
	) {
		return false;
	}

	if (map.get(objA) === objB) {
		return true;
	}

	map.set(objA, objB);

	const keysA = Reflect.ownKeys(objA);
	const keysB = Reflect.ownKeys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	for (let i = 0; i < keysA.length; i++) {
		if (
			!Reflect.has(objB, keysA[i]) ||
			!isDeepEqual((objA as { [key: string | symbol]: unknown })[keysA[i]], (objB as { [key: string | symbol]: unknown })[keysA[i]], map)
		) {
			return false;
		}
	}

	return true;
};