export interface StateValidator<T> {
	(this: T, state: T, validation: T extends object ? {[k in keyof T]: {invalid: boolean, message?: string}}: {invalid: boolean, message?: string}): typeof validation;
	(state: T, validation: T extends object ? { [k in keyof T]: {invalid: boolean, message?: string} } : {invalid: boolean, message?: string}): typeof validation;
}