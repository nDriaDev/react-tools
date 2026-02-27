/**
 * Props for the [useScript](https://react-tools.ndria.dev/hooks/api-dom/useScript).
 */
export interface UseScriptProps {
	/** HTML `<script>` element attributes to set on the injected script tag. */
	attributes: {
		/** URL of the external script to load (`src` attribute). */
		src?: string;
		/**
		 * When `true`, the script is downloaded in parallel and executed as soon as it is available,
		 * without blocking HTML parsing.
		 */
		async?: boolean;
		/** Cross-origin request mode for the script. */
		crossorigin?: "anonymous" | "use-credentials" | "";
		/**
		 * When `true`, the script is executed after the document has been parsed but before
		 * the `DOMContentLoaded` event fires.
		 */
		defer?: boolean;
		/** Fetch priority hint for the resource. */
		fetchpriority?: "high" | "low" | "auto";
		/** Subresource Integrity (SRI) hash for validating the fetched script. */
		integrity?: string;
		/** When `true`, the script is not executed in browsers that support ES modules. */
		nomodule?: boolean;
		/** Cryptographic nonce for use with a Content Security Policy. */
		nonce?: string;
		/** Referrer policy to use when fetching the script. */
		referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
		/** MIME type of the script. Use `"module"` for ES module scripts. */
		type?: string;
	};
	/** Behavioural options for the hook itself. */
	options: {
		/**
		 * When `true`, the hook manages appending and removing the `<script>` element.
		 * @default true
		 */
		handleAppending?: boolean;
		/**
		 * When `true`, the `<script>` element is removed from the DOM when the component unmounts.
		 * @default false
		 */
		removeOnUnmount?: boolean;
		/**
		 * When provided, the script is injected into the document of this `<iframe>` instead of
		 * the main document.
		 */
		iframe?: HTMLIFrameElement;
	};
}

/**
 * Loading status of the script, returned as the first element of `useScript`'s result tuple.
 */
export type UseScriptStatus = "idle" | "loading" | "error" | "ready";

/**
 * Function signature for the [useScript](https://react-tools.ndria.dev/hooks/api-dom/useScript).
 */
export interface UseScript {
	(attributes: UseScriptProps["attributes"], options: UseScriptProps["options"]): [
		/** Current loading status of the script. */
		status: UseScriptStatus,
		/**
		 * Reload the script with optional updated attributes.
		 * @param attributes - New `<script>` attributes to apply before reloading.
		 * @param iframe - Target iframe for reloading (overrides the constructor option).
		 */
		(attributes?: UseScriptProps["attributes"], iframe?: HTMLIFrameElement) => void,
		/** Remove the `<script>` element from the DOM. */
		() => void
	];
}
