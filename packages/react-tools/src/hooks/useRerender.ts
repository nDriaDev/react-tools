import React, { useReducer } from "react"

/**
 * **`useRerender`**: Hook that force a render.
 * @returns {React.DispatchWithoutAction} update
 */
export const useRerender = (): React.DispatchWithoutAction => {
	const [, update] = useReducer(t => !t, true);

	return update;
}