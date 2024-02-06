import { ErrorBoundary } from "../../../../../../packages/react-tools/src";

/**
The component uses _ErrorBoundary_ Component to wrap _Component_. _Component_ throw an error so _ErrorBoundary_ catch it and show the _fallback_ element passing to it _error_ and _retry_ function.
 */
const Component = () => {
	throw new Error("An error occurred.");
	return <p>Component</p>
}
export default function EB() {
	return <ErrorBoundary fallback={(error: Error, _, retry) => <><p>{error.name} - {error.message} </p><button onClick={retry}>Retry</button></>}>
		<Component/>
	</ErrorBoundary>
}