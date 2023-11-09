export interface UseScriptProps {
	attributes: {
		src?: string,
		async?: boolean;
		crossorigin?: "anonymous" | "use-credentials" | "";
		defer?: boolean;
		fetchpriority?: "high" | "low" | "auto";
		integrity?: string;
		nomodule?: boolean;
		nonce?: string;
		referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
		type?: string;
	};
	options: {
		handleAppending?: boolean;
		removeOnUnmount?: boolean;
		iframe?: HTMLIFrameElement;
	}
}
export type UseScriptStatus = "idle" | "loading" | "error" | "ready";

export interface UseScript {
	(attributes: UseScriptProps["attributes"], options: UseScriptProps["options"]): [status: UseScriptStatus, (attributes?: UseScriptProps["attributes"], iframe?: HTMLIFrameElement) => void, () => void];
}