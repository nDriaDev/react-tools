import { useAnimation } from "../../../..";

/**
The component uses _useAnimation_ to compute an animation on p element. Use the buttons to perform action on animation.
 */
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