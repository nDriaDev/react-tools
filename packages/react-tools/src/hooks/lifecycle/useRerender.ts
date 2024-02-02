import { useReducer } from "react"

/**
 * **`useRerender`**: Hook that force a render.
 * @returns {React.DispatchWithoutAction} update
 */
export const useRerender = (): React.DispatchWithoutAction => {
	const [, update] = useReducer(t => t+0.00000000001, 0);

	return update;
}