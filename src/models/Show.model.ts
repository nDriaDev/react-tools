import { PropsWithChildren, ReactNode } from "react";

/**
 * Props accepted by the [Show](https://react-tools.ndria.dev/components/Show) component.
 *
 * @template T - The type of the `when` value. When truthy, `children` are rendered; otherwise `fallback` is shown.
 */
export interface ShowProps<T> extends PropsWithChildren {
	/**
	 * The condition that controls rendering. When truthy, `children` are
	 * displayed; when falsy (`false`, `null`, or `undefined`), `fallback`
	 * is rendered instead (or nothing if `fallback` is omitted).
	 */
	when: T | boolean | undefined | null;

	/**
	 * Optional content rendered when `when` is falsy. Accepts any valid
	 * React node. When omitted, nothing is rendered in the falsy case.
	 */
	fallback?: ReactNode;

	/**
	 * Controls how the component behaves when `when` is falsy:
	 *
	 * - `"unmount"` _(default)_ — children are fully removed from the DOM.
	 *   The `fallback` prop is rendered instead (if provided).
	 * - `"hidden"` — children remain in the DOM. When `when` is falsy, the
	 *   `hidden` HTML attribute is applied directly to the children's root
	 *   element via `cloneElement`. When `when` is truthy the attribute is removed.
	 * - `"visibility"` — children remain in the DOM. When `when` is falsy,
	 *   `display: none !important` CSS rule is applied directly to the
	 *   children'root element via `cloneElement`. When `when` is truthy
	 *   the rule is removed.
	 *
	 * @default "unmount"
	 */
	mode?: "unmount" | "hidden" | "visibility";
}