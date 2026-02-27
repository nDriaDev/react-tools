/**
 * @internal
 */
export type PromiseStatus =
	| { status: "pending"; promise: Promise<void> }
	| { status: "fulfilled"; value: unknown }
	| { status: "rejected"; reason: unknown };
