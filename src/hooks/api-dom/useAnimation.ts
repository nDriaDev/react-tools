import { RefCallback, useCallback, useRef } from "react"
import { UseAnimationProps, UseAnimationResult } from "../../models";

/**
 * **`useAnimation`**: hook to implement animation on elements.
 * @see [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useAnimation)
 * @template T Type of the target DOM element (defaults to `Element`).
 * @param {UseAnimationProps} param - {@link UseAnimationProps}
 * @returns {UseAnimationResult} result {@link UseAnimationResult}
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