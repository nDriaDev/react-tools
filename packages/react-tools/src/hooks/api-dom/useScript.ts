import { useCallback, useRef, useState } from "react";
import { UseScript, UseScriptProps, UseScriptStatus } from "../../models";
import { useEffectOnce } from "../lifecycle";
import { useSyncExternalStore } from "../state";

const getScriptNode = (attributes: UseScriptProps["attributes"]): HTMLScriptElement | null => {
	let selector = "script";
	for (const [key, value] of Object.entries(attributes)) {
		if (value) {
			selector += `[${key}${typeof value === "boolean" ? "" : `="${value}"`}]`;
		}
	}
	return document.querySelector(selector);
}

const createScriptNode = (attributes: UseScriptProps["attributes"]): HTMLScriptElement => {
	const script = document.createElement("script");
	attributes.src && (script.src = attributes.src);
	attributes.async && (script.async = true);
	attributes.defer && (script.defer = true);
	attributes.type && script.setAttribute("type", attributes.type);
	attributes.crossorigin && script.setAttribute("crossorigin", attributes.crossorigin);
	attributes.fetchpriority && script.setAttribute("fetchpriority", attributes.fetchpriority);
	attributes.integrity && script.setAttribute("integrity", attributes.integrity);
	attributes.nonce && script.setAttribute("nonce", attributes.nonce);
	attributes.nomodule && script.setAttribute("nomodule", attributes.nomodule.toString());
	attributes.referrerpolicy && script.setAttribute("referrerpolicy", attributes.referrerpolicy);
	script.setAttribute("data-status", "loading");
	return script;
}

/**
 * **`useScript`**: Hook to dinamically load an external script like Google Analitycs.
 * @param {{ src?: string, async?: boolean, crossorigin?: "anonymous" | "use-credentials" | "", defer?: boolean, fetchpriority?: "high" | "low" | "auto", integrity?: string, nomodule?: boolean, nonce?: string, referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url", type?: string }} attributes - script attributes.
 * @param {{ handleAppending?: boolean, removeOnUnmount?: boolean, iframe?: HTMLIFrameElement }} options - to handle appending and removing script, to automatically remove script when component unmount and to append script to an iframe.
 * @returns {[status: UseScriptStatus, (attributes: UseScriptProps["attributes"], iframe?: HTMLIFrameElement) => void, () => void]} array - first element returns script status and second and thirds elements allow to manually handle script.
 */
export const useScript: UseScript = function (attributes, options) {
	const opts = useRef(options);
	const attrs = useRef(attributes);
	const [handleAppending, setHandleAppending] = useState(opts.current.handleAppending ? 1 : 0)

	const appendScript = useCallback((attributes?: UseScriptProps["attributes"], iframe?: HTMLIFrameElement) => {
		attributes && (attrs.current = attributes);
		iframe && (opts.current.iframe = iframe);
		setHandleAppending(t => t+1);
	}, []);

	const removeScript = useCallback(() => {
		const node = getScriptNode(attrs.current);
		node?.parentElement?.removeChild(node);
	}, []);

	useEffectOnce(() => {
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (opts.current.removeOnUnmount) {
				removeScript();
			}
		}
	});

	const status = useSyncExternalStore(
		useCallback(notif => {
			if (handleAppending%2 === 0) {
				let node: HTMLScriptElement | null, alreadyExist=true;
				node = getScriptNode(attrs.current);
				if (!node) {
					alreadyExist = false;
					node = createScriptNode(attrs.current)
				}
				const listener = (evt: Event) => {
					const node = getScriptNode(attrs.current);
					node?.setAttribute("data-status", evt.type === "load" ? "ready" : "error");
					notif();
				}
				node!.addEventListener("load", listener, { passive: true });
				node!.addEventListener("error", listener, { passive: true });
				!alreadyExist && (opts.current.iframe?.contentWindow?.document || document).body.appendChild(node);

				return () => {
					const node = getScriptNode(attrs.current);
					node?.removeEventListener("load", listener);
					node?.removeEventListener("error", listener);
				}
			} else {
				return () => { }
			}
		}, [handleAppending]),
		useCallback(() => {
			const status = getScriptNode(attrs.current)?.getAttribute("data-status") as UseScriptStatus | undefined;
			return status ?? (opts.current.handleAppending ? "idle" : "loading") as UseScriptStatus
		}, [])
	);

	return [
		status,
		appendScript,
		removeScript
	]
}