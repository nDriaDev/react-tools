import { Children, cloneElement, CSSProperties, isValidElement, ReactElement, ReactNode } from "react";
import { ShowProps } from "../models";
import { useId } from "../hooks";

function isSingleNativeElement(children: ReactNode): ReactElement | null {
	const arr = Children.toArray(children);
	if (arr.length > 1) {
		throw Error("Show component must have exactly one child");
	}
	if (arr.length === 1 && isValidElement(arr[0]) && typeof arr[0].type === "string") {
		return arr[0];
	}
	return null;
}

/**
* **`Show`**: Generic component used to conditionally render part of the view.
*
* Renders `children` when `when` is truthy. When falsy, the behaviour depends
* on the `mode` prop:
*
* ---
*
* ### `mode="unmount"` _(default)_
* Children are fully removed from the DOM. `fallback` is rendered instead
* (if provided), otherwise `null`. State inside the subtree is lost on hide
* and reset on re-show.
*
* ---
*
* ### `mode="hidden"`
* Children always remain in the DOM, preserving their state and avoiding
* remount costs. Hiding is achieved via `display: none`:
*
* - **Native DOM children** (e.g. `<div>`, `<span>`): the `hidden` HTML
*   attribute is injected directly onto the root element via `cloneElement`.
*   No wrapper element is introduced. `fallback` is rendered alongside the
*   hidden children regardless of `when`.
* - **Custom component children**: a `<div style={{ display: "none" }}>` wrapper
*   is introduced only when `when` is falsy. When `when` is truthy the wrapper
*   is absent and children are rendered unwrapped, so the layout is unaffected
*   in the visible state. `fallback` is rendered alongside when `when` is falsy.
*
* ---
*
* ### `mode="visibility"`
* Children always remain in the DOM. Hiding preserves the layout space
* occupied by the element:
*
* - **Native DOM children**: `visibility: hidden` is merged into the root
*   element's inline style via `cloneElement`. No wrapper is introduced.
*   `fallback` is rendered alongside when `when` is falsy.
* - **Custom component children**: a wrapper `<div>` with `display: contents`
*   (visible) or `display: none` (hidden) is always present in the DOM to
*   preserve component state across visibility changes.
*   ⚠️ **Layout limitation**: `display: contents` is incompatible with
*   `visibility: hidden`, so layout space is **not** preserved for custom
*   components — the element is fully removed from flow when hidden, identical
*   to `mode="hidden"`. To get true `visibility: hidden` behaviour, wrap the
*   custom component in a native element (e.g. `<div><MyComponent /></div>`)
*   so that `Show` can apply `visibility: hidden` via `cloneElement` directly
*   on the native wrapper.
*
* @see [📖 Documentation](https://react-tools.ndria.dev/components/Show)
* @template T - The type of the `when` value. When truthy, `children` are rendered; otherwise `fallback` is shown.
* @param {ShowProps<T>} props - {@link ShowProps}
* @returns {JSX.Element|null} element - the element rendered or null.
*/
function Show<T>({ when, fallback, children, mode = "unmount" }: ShowProps<T>) {
	const id = useId().replace(/:/g, "");
	void id;

	if (mode === "hidden") {
		const native = isSingleNativeElement(children);
		if (native) {
			return (
				<>
					{cloneElement(native, { hidden: !when || undefined } as any)}
					{!when && (fallback ?? null)}
				</>
			);
		}
		return <>
			<div style={{ display: when ? "contents" : "none" }}>{children}</div>
			{!when && (fallback ?? null)}
		</>
	}

	if (mode === "visibility") {
		const native = isSingleNativeElement(children);
		if (native) {
			const existingStyle: CSSProperties = (native.props as any).style ?? {};
			return (
				<>
					{cloneElement(native, {
						style: { ...existingStyle, visibility: when ? "visible" : "hidden" },
					} as any)}
					{!when && (fallback ?? null)}
				</>
			);
		}
		return <>
			<div style={{ display: when ? "contents" : "none" }}>{children}</div>
			{!when && (fallback ?? null)}
		</>
	}

	if (!when) {
		return fallback ? <>{fallback}</> : null;
	}
	return <>{children}</>;
}

export { Show };