import { RefCallback } from "react";

export interface UseAnimationProps {
	keyFrames: Keyframe[] | PropertyIndexedKeyframes | null;
	immediate?: boolean;
	opts?: number | KeyframeAnimationOptions;
	onFinish?: (this: Animation, evt: AnimationPlaybackEvent) => void;
	onRemove?: (this: Animation, evt: Event) => void;
	onCancel?: (this: Animation, evt: AnimationPlaybackEvent) => void;
	onError?: (err: unknown) => void;
}

export interface UseAnimationResult<T extends Element> {
	isSupported: boolean;
	ref: RefCallback<T>;
	playAnimation: () => void;
	pauseAnimation: () => void;
	finishAnimation: () => void;
	cancelAnimation: () => void;
	persistAnimation: () => void;
	reverseAnimation: () => void;
	commitStyles: () => void;
	updatePlaybackRate: (playbackRate: number) => void;
}