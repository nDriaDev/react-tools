import { useReducedMotion } from "../../../../../../../packages/react-tools/src/hooks/api-dom/useReducedMotion"

/**
The component display user preferences about reducing motion.
 */
export const UseReducedMotion = () => {
	const value = useReducedMotion();

	return <>
		<p
			style={{ color: value ? "red" : "rgb(152, 195, 121)"}}
		>
			{value ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
		</p>
	</>
}