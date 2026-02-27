import { DetailedReactHTMLElement, HTMLAttributes, MediaHTMLAttributes, MutableRefObject } from "react";
import { HTMLMediaControls, HTMLMediaState } from "./common.model";

/**
 * Props accepted by [useAudio](https://react-tools.ndria.dev/hooks/api-dom/useAudio).
 *
 * These are the standard `HTMLAudioElement` attributes you would normally pass to a `<audio>` tag
 * (e.g. `src`, `autoPlay`, `loop`, `controls`, `muted`, etc.). All attributes are optional.
 *
 * The hook creates the audio element internally and binds these attributes to it, so you do not
 * need to render an `<audio>` tag yourself — use the returned `MediaElement` instead.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 */
export type UseAudioProps = MediaHTMLAttributes<HTMLAudioElement>

/**
 * Result object returned by [useAudio](https://react-tools.ndria.dev/hooks/api-dom/useAudio).
 */
export interface UseAudioResult {
	/**
	 * Reactive snapshot of the current audio element state.
	 * Re-renders the component whenever a media event fires.
	 * See {@link HTMLMediaState} for the full list of fields.
	 */
	state: HTMLMediaState;
	/**
	 * Imperative control functions for the audio element
	 * (play, pause, mute, seek, volume, etc.).
	 * All functions are stable references and safe to call in event handlers.
	 * See {@link HTMLMediaControls} for the full API.
	 */
	controls: HTMLMediaControls;
	/**
	 * The React `<audio>` element to render in JSX.
	 * Rendering this element is required for the hook to function — it binds the
	 * internal ref and event listeners to the DOM node.
	 *
	 * @example
	 * ```tsx
	 * const { state, controls, MediaElement } = useAudio({ src: "/song.mp3" });
	 * return <div>{MediaElement}</div>;
	 * ```
	 */
	MediaElement: DetailedReactHTMLElement<HTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
	/**
	 * Direct ref to the underlying `HTMLAudioElement`.
	 * Useful for advanced imperative access not covered by `controls`.
	 * `null` before the element mounts.
	 */
	ref: MutableRefObject<HTMLAudioElement | null>;
}