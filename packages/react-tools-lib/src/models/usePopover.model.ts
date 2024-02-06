import { ComponentPropsWithRef, AriaAttributes, DOMAttributes } from "react";

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	popover?: "auto" | "manual";
}

export interface UsePopoverProps {
	mode: "auto" | "manual";
	onBeforeToggle?: (evt: ToggleEvent) => void;
	onToggle?: (evt: ToggleEvent) => void;
}

export interface UsePopoverResult {
	isSupported: boolean,
	isOpen: boolean,
	showPopover: () => void,
	hidePopover: () => void,
	togglePopover: () => void,
	Popover: ({ children, ...rest }: ComponentPropsWithRef<"div"> & HTMLAttributes<"div">) => false | JSX.Element;
}