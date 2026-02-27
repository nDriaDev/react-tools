import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { usePointerLock } from "../../../..";

const canvasDraw = (x: number, y: number, canvas: HTMLCanvasElement) => {
	const ctx = canvas.getContext("2d");

	function find2ndCenter(pos: number, max: number) {
		if (pos < 20) {
			pos += max;
		}
		else if (pos + 20 > max) {
			pos -= max;
		}
		else {
			pos = 0;
		}
		return pos;
	}

	function drawBall(x: number, y: number) {
		ctx!.beginPath();
		ctx!.arc(x, y, 20, 0, 2 * Math.PI, true);
		ctx!.fill();
	}

	const x2 = find2ndCenter(x, canvas.width);
	const y2 = find2ndCenter(y, canvas.height);

	ctx!.fillStyle = "black";
	ctx!.fillRect(0, 0, canvas.width, canvas.height);
	ctx!.fillStyle = "#f00";

	drawBall(x, y); // main ball
	if (x2) {
		drawBall(x2, y); // partial ball
	}
	if (y2) {
		drawBall(x, y2); // partial ball
	}
	if (x2 && y2) {
		drawBall(x2, y2); // partial ball
	}
};
/**
The component uses _usePointerLock_ hook to acquire pointer lock. Clicking on canvas area and moving mouse you will directly control the ball inside the canvas. Pressing escape you return to expected state.
 */
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