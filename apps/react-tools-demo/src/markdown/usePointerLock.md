# usePointerLock
Hook to use [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/events/usePointerLock)

## Usage

```tsx
export const UsePointerLock = () => {
	const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const mousemove = useRef((e: MouseEvent) => {
		function updateCoord(delta: {x: number, y: number}, max: {x: number, y: number}) {
			setPosition(t => {
				let x = t.x + delta.x;
				let y = t.y + delta.y;
				x %= max.x;
				y %= max.y;
				if (x < 0) {
					x += max.x;
				}
				if (y < 0) {
					y += max.y;
				}
				canvasDraw(x, y, canvasRef.current!);
				return { x, y };
			});
		}
		updateCoord({x:e.movementX, y: e.movementY}, {x:canvasRef.current!.width, y:canvasRef.current!.height});
	});

	const onError = useCallback(() => alert("PointerLock API not supported."), []);

	const onLock = useCallback(() => {
		canvasRef.current!.addEventListener('mousemove', mousemove.current);
	}, []);

	const onUnlock = useCallback(() => canvasRef.current!.removeEventListener("mousemove", mousemove.current), []);

	const { lock } = usePointerLock({
		target: canvasRef,
		onError,
		onLock,
		onUnlock
	});

	useLayoutEffect(() => {
		canvasRef.current && canvasDraw(20, 20, canvasRef.current);
	}, []);

	return (<>
		<div>
			{
				position && <p>Position X:{position.x} - Y:{position.y}</p>
			}
		</div>
		<canvas ref={canvasRef} width="640" height="360" onClick={lock}>
			Your browser does not support HTML5 canvas
		</canvas>
	</>);
}
```

> The component uses _usePointerLock_ hook to acquire pointer lock. Clicking on canvas area and moving mouse you will directly control the ball inside the canvas. Pressing escape you return to expected state.


## API

```tsx
usePointerLock<T extends HTMLElement>({ target, unadjustedMovement, onLock, onUnlock, onError }: UsePointerLockProps<T>): UsePointerLockResult
```

> ### Params
>
> - __param__: _UsePointerLockProps_  
object
> - __param.target__: _RefObject<T>|T_  
element that requires lock.
> - __param.unadjustedMovement?__: _boolean_  
Disables OS-level adjustment for mouse acceleration, and accesses raw mouse input instead. The default value is false; setting it to true will disable mouse acceleration.
> - __param.onError__: _(e: unknown)=>void_  
function that will be executed when an error throwing during request.
> - __param.onLock?__: _(target: RefObject<T>|T) => void_  
function that will be executed when lock has been acquired.
> - __param.onUnlock?__: _() => void_  
function that will be executed when lock has been released.
>

> ### Returns
>
> __result__:  _UsePointerLockResult_  
> Object with two properties:
> - __lock__: function to acquire lock.
> - __unlock__: function to release lock.
>