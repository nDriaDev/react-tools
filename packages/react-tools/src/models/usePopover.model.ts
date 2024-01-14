import { RefObject } from "react"

export interface UsePopoverProps<T extends HTMLElement> {
	refBtn: RefObject<HTMLButtonElement>;
	refPopover: RefObject<T>;
	mode: "auto" | "manual",
	buttonTrigger: "on/off" | "toggle"
}