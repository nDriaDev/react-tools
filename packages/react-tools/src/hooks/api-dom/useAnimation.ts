import { RefCallback, useCallback, useRef } from "react"
import { UseAnimationProps, UseAnimationResult } from "../../models";

/**
 * **`useAnimation`**: Hook to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
 * @param {UseAnimationProps} param - object
 * @param {Keyframe[] | PropertyIndexedKeyframes | null} param.keyFrames - array of keyfram objects ot a keyframe object whose properties are arrays of values to iterate over.
 * @param {boolean} [param.immediate=false] - boolean to start animation immediatly or not.
 * @param {number | KeyframeAnimationOptions} [param.opts] - either an integer representing the animation's duration (in milliseconds), or an Object containing one or more timing properties.
 * @param {(this: Animation, evt: AnimationPlaybackEvent) => void} [param.onFinish] - function that will be executed when animation has been finished.
 * @param {(this: Animation, evt: Event) => void} [param.onRemove] - function that will be executed when animation has been removed.
 * @param {(this: Animation, evt: AnimationPlaybackEvent) => void} [param.onCancel] - function that will be executed when animation has been canceled.
 * @param {(err: unknown) => void} [param.onError] - function that will be executed when an error occurred.
 * @returns {UseAnimationResult} result
 * Object with these properties:
 * - __isSupported__: boolean to indicate if Web Animations API is supported or not.
 * - __ref__: RefCallback that need to be attached to element to animate.
 * - __playAnimation__: function to play animation.
 * - __pauseAnimation__: function to pause animation.
 * - __finishAnimation__: function to finish animation.
 * - __cancelAnimation__: function to cancel animation.
 * - __persistAnimation__: function to persist animation.
 * - __reverseAnimation__: function to reverse animation.
 * - __commitStyles__: function that writes the computed values of the animation's current styles into its target element's style attribute.
 * - __updatePlaybackRate__: function that sets the speed of an animation after first synchronizing its playback position.
 */
export const useAnimation = <T extends Element>({ keyFrames, immediate, opts, onCancel, onFinish, onRemove, onError }: UseAnimationProps): UseAnimationResult<T> => {
	const isSupported = window && HTMLElement && 'animate' in HTMLElement.prototype;
	const animationRef = useRef<Animation>();
	const optsRef = useRef<{ running: boolean, runnedImmediatly: boolean, currentTime?: CSSNumberish | null, playBackRate?: number }>({running: false, runnedImmediatly: false});
	const ref = useCallback<RefCallback<T>>(node => {
		if (node) {
			animationRef.current = node.animate(keyFrames, opts);
			animationRef.current.oncancel = function (evt: AnimationPlaybackEvent) {
				optsRef.current.running = false;
				!!onCancel && onCancel.call(this, evt)
			};
			animationRef.current.onremove = function (evt: Event) {
				optsRef.current.running = false;
				!!onRemove && onRemove.call(this, evt)
			};
			animationRef.current.onfinish = function (evt: AnimationPlaybackEvent) {
				optsRef.current.running = false;
				!!onFinish && onFinish.call(this, evt)
			};
			if (optsRef.current.playBackRate !== undefined || optsRef.current.currentTime !== undefined) {
				animationRef.current.currentTime = optsRef.current.currentTime!;
				animationRef.current.updatePlaybackRate(optsRef.current.playBackRate!);
				optsRef.current = {
					running: true,
					runnedImmediatly: optsRef.current.runnedImmediatly
				};
			} else {
				!immediate || optsRef.current.runnedImmediatly
					? (optsRef.current.running = false, animationRef.current.pause())
					: (optsRef.current = { running: true, runnedImmediatly: true })
			}
		} else {
			if (animationRef.current && optsRef.current.running) {
				optsRef.current = {
					...optsRef.current,
					currentTime: animationRef.current?.currentTime,
					playBackRate: animationRef.current?.playbackRate
				};
			}
			animationRef.current = undefined;
		}
	}, [immediate, keyFrames, opts, onCancel, onFinish, onRemove]);

	const cancelAnimation = useCallback(() => {
		try {
			animationRef.current && animationRef.current.cancel();
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const commitStyles = useCallback(() => {
		try {
			animationRef.current && animationRef.current.commitStyles();
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const finishAnimation = useCallback(() => {
		try {
			animationRef.current && animationRef.current.finish();
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const pauseAnimation = useCallback(() => {
		try {
			animationRef.current && animationRef.current.pause();
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const persistAnimation = useCallback(() => {
		try {
			animationRef.current && animationRef.current.persist();
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const playAnimation = useCallback(() => {
		try {
			animationRef.current && animationRef.current.play();
			animationRef.current && (optsRef.current.running = true);
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const reverseAnimation = useCallback(() => {
		try {
			animationRef.current && animationRef.current.reverse();
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);
	const updatePlaybackRate = useCallback((playbackRate: number) => {
		try {
			animationRef.current && animationRef.current.updatePlaybackRate(playbackRate);
		} catch (error) {
			if(onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onError]);

	return {
		isSupported,
		ref,
		playAnimation,
		pauseAnimation,
		finishAnimation,
		cancelAnimation,
		persistAnimation,
		reverseAnimation,
		commitStyles,
		updatePlaybackRate
	}
}