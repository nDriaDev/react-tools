import { DetailedReactHTMLElement, HTMLAttributes, MediaHTMLAttributes, MutableRefObject } from "react";
import { HTMLMediaControls, HTMLMediaState } from "./common.model";

export type UseVideoProps = MediaHTMLAttributes<HTMLVideoElement>

export interface UseVideoResult {
	state: HTMLMediaState;
	controls: HTMLMediaControls;
	MediaElement: DetailedReactHTMLElement<HTMLAttributes<HTMLVideoElement>, HTMLVideoElement >;
	ref: MutableRefObject<HTMLVideoElement | null>;
}