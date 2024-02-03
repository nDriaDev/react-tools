# useAnimation
Hook to use [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useAnimation)

## Usage

```tsx
export const UseAnimation = () => {
	const { ref, playAnimation, pauseAnimation, finishAnimation, reverseAnimation } = useAnimation({
		keyFrames: [
			{ clipPath: 'circle(20% at 0% 30%)' },
			{ clipPath: 'circle(20% at 50% 80%)' },
			{ clipPath: 'circle(20% at 100% 30%)' },
		],
		immediate: true,
		opts: {
			duration: 3000,
			iterations: 2,
			direction: 'alternate',
			easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
		}
	});

	return <div>
		<p ref={ref} style={{ color: '#d23e49', fontSize: '3rem', lineHeight: 1, fontWeight: 800, display: 'inline-flex', padding: '0 5rem' }}>useAnimate</p>
		<div style={{ display: 'flex', justifyContent: "center", gap: 20 }}>
			<button onClick={playAnimation}>Play</button>
			<button onClick={pauseAnimation}>Pause</button>
			<button onClick={reverseAnimation}>Reverse</button>
			<button onClick={finishAnimation}>Finish</button>
		</div>
	</div>
}
```

> The component uses _useAnimation_ to compute an animation on p element. Use the buttons to perform action on animation.


## API

```tsx
useAnimation<T extends Element>({ keyFrames, immediate, opts, onCancel, onFinish, onRemove, onError }: UseAnimationProps): UseAnimationResult<T>
```

> ### Params
>
> - __param__: _UseAnimationProps_  
object
> - __param.keyFrames__: _Keyframe[] | PropertyIndexedKeyframes | null_  
array of keyfram objects ot a keyframe object whose properties are arrays of values to iterate over.
> - __param.immediate=false?__: _boolean_  
boolean to start animation immediatly or not.
> - __param.opts?__: _number | KeyframeAnimationOptions_  
either an integer representing the animation's duration (in milliseconds), or an Object containing one or more timing properties.
> - __param.onFinish?__: _(this: Animation, evt: AnimationPlaybackEvent) => void_  
function that will be executed when animation has been finished.
> - __param.onRemove?__: _(this: Animation, evt: Event) => void_  
function that will be executed when animation has been removed.
> - __param.onCancel?__: _(this: Animation, evt: AnimationPlaybackEvent) => void_  
function that will be executed when animation has been canceled.
> - __param.onError?__: _(err: unknown) => void_  
function that will be executed when an error occurred.
>

> ### Returns
>
> __result__:  _UseAnimationResult_  
> Object with these properties:
> - __isSupported__: boolean to indicate if Web Animations API is supported or not.
> - __ref__: RefCallback that need to be attached to element to animate.
> - __playAnimation__: function to play animation.
> - __pauseAnimation__: function to pause animation.
> - __finishAnimation__: function to finish animation.
> - __cancelAnimation__: function to cancel animation.
> - __persistAnimation__: function to persist animation.
> - __reverseAnimation__: function to reverse animation.
> - __commitStyles__: function that writes the computed values of the animation's current styles into its target element's style attribute.
> - __updatePlaybackRate__: function that sets the speed of an animation after first synchronizing its playback position.
>