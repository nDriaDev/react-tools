import { useResponsive } from "../../../.."

/**
The component initialize _useResponsive_ hook without param and displays screen size value.

Try to change window size to see how value changes.
 */
export const UseResponsive = () => {
	const responsive = useResponsive();

	return <p>{JSON.stringify(responsive, null, 2)}</p>
}