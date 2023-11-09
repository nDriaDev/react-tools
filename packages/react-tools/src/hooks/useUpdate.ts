import React, { useReducer } from "react"

/**
 * **`useUpdate`**: Hook that force a render.
 * @returns {React.DispatchWithoutAction} update
 */
export const useUpdate = (): React.DispatchWithoutAction => {
	const [, update] = useReducer(t => !t, true);

	return update;
}