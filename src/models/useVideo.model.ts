import { DetailedReactHTMLElement, HTMLAttributes, MediaHTMLAttributes, MutableRefObject } from "react";
import { HTMLMediaControls, HTMLMediaState } from "./common.model";

/**
 * Props accepted by [useVideo](https://react-tools.ndria.dev/hooks/api-dom/useVideo).
 *
 * These are the standard `HTMLVideoElement` attributes you would normally pass to a `<video>` tag
 * (e.g. `src`, `autoPlay`, `loop`, `controls`, `muted`, `playsInline`, `poster`, etc.).
 * All attributes are optional.
 *
 * The hook creates the video element internally and binds these attributes to it, so you do not
 * need to render a `<video>` tag yourself — use the returned `MediaElement` instead.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 */
export type UseVideoProps = MediaHTMLAttributes<HTMLVideoElement>;

/**
 * Result object returned by [useVideo](https://react-tools.ndria.dev/hooks/api-dom/useVideo).
 */
export interface UseVideoResult {
	/**
	 * Reactive snapshot of the current video element state.
	 * Re-renders the component whenever a media event fires.
	 * See {@link HTMLMediaState} for the full list of fields.
	 */
	state: HTMLMediaState;

	/**
	 * Imperative control functions for the video element
	 * (play, pause, mute, seek, volume, playback rate, etc.).
	 * All functions are stable references and safe to call in event handlers.
	 * See {@link HTMLMediaControls} for the full API.
	 */
	controls: HTMLMediaControls;

	/**
	 * The React `<video>` element to render in JSX.
	 * Rendering this element is required for the hook to function — it binds the
	 * internal ref and event listeners to the DOM node.
	 *
	 * @example
	 * ```tsx
	 * const { state, controls, MediaElement } = useVideo({ src: "/movie.mp4", controls: true });
	 * return <div>{MediaElement}</div>;
	 * ```
	 */
	MediaElement: DetailedReactHTMLElement<HTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

	/**
	 * Direct ref to the underlying `HTMLVideoElement`.
	 * Useful for advanced imperative access not covered by `controls`
	 * (e.g. reading `videoWidth`, `videoHeight`, or calling `requestPictureInPicture`).
	 * `null` before the element mounts.
	 */
	ref: MutableRefObject<HTMLVideoElement | null>;
}
