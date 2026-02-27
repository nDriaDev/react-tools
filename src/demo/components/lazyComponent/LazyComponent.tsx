import { LazyComponent } from "../../..";

/**
The component uses _LazyComponent_ component to lazy load a component imported dynamically by _factory_ prop. The component loading is delayed by 5 seconds. During this time, _fallback_ prop is shown that renders a p element with the text __Loading component...__.
 */
export default function LC() {
	return (
		<LazyComponent
			factory={() => import('./LazyComp').then(async res => {
				await new Promise(resolve => setTimeout(resolve, 5000));
				return res;
			})}
			fallback={<p>Loading component...</p>}
		/>
	);
}