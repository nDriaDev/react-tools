import { useCallback } from "react";
import { useId } from "..";
import { UsePopoverProps } from "../models";

function usePopover<T extends HTMLElement>({ refBtn, refPopover, mode, buttonTrigger }: { refBtn: UsePopoverProps<T>["refBtn"], refPopover: UsePopoverProps<T>["refPopover"], mode: UsePopoverProps<T>["mode"], buttonTrigger: "on/off" }): { open: () => void, close: () => void };
function usePopover<T extends HTMLElement>({ refBtn, refPopover, mode, buttonTrigger }: { refBtn: UsePopoverProps<T>["refBtn"], refPopover: UsePopoverProps<T>["refPopover"], mode: UsePopoverProps<T>["mode"], buttonTrigger: "toggle" }): { toggle: (isOpen: boolean) => void };
function usePopover<T extends HTMLElement>({ refBtn, refPopover, mode, buttonTrigger }: UsePopoverProps<T>): { open: () => void, close: () => void } | { toggle: (isOpen: boolean) => void } {
	const isSupported = refPopover.current ? "showPopover" in refPopover.current : false;
	const id = useId();
	if (refPopover.current) {
		if (isSupported) {
			refPopover.current.setAttribute("popover", mode);
			!refPopover.current.id && (refPopover.current.id = id);
		}
	}
	if (refBtn.current) {
		if (isSupported) {
			refBtn.current.setAttribute("popovertarget", refPopover.current?.id || "");
			refBtn.current.setAttribute("popovertargetaction", buttonTrigger);
		}
	}

	const open = useCallback(() => refPopover.current && "showPopover" in refPopover.current && refPopover.current.showPopover(), [refPopover]);
	const close = useCallback(() => refPopover.current && "showPopover" in refPopover.current && refPopover.current.hidePopover(), [refPopover]);
	const toggle = useCallback(() => refPopover.current && "showPopover" in refPopover.current && refPopover.current.togglePopover(), [refPopover]);

	if (buttonTrigger === "on/off") {
		return {
			open,
			close
		}
	}
	return {
		toggle
	}
}

export { usePopover };