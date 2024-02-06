import { DetailedReactHTMLElement, HTMLAttributes, MediaHTMLAttributes, MutableRefObject } from "react";
import { HTMLMediaControls, HTMLMediaState } from "./common.model";

export type UseAudioProps = MediaHTMLAttributes<HTMLAudioElement>

export interface UseAudioResult {
	state: HTMLMediaState;
	controls: HTMLMediaControls;
	MediaElement: DetailedReactHTMLElement<HTMLAttributes<HTMLAudioElement>, HTMLAudioElement >;
	ref: MutableRefObject<HTMLAudioElement | null>;
}