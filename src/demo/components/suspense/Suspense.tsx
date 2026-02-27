import { useState } from "react";
import { Suspense } from "../../..";

/**
The component demonstrates the _Suspense_ polyfill with two scenarios:
- **Lazy component**: a button triggers the lazy load of a component via `React.lazy`. While loading, a spinner fallback is shown. Once ready, the component appears.
- **Data fetching**: a button triggers a simulated async data fetch (1.5s delay) using the Suspense throw-Promise contract. While fetching, a skeleton fallback is shown. Once resolved, the data is displayed.
Both scenarios show the `fallback` prop in action and demonstrate that `Suspense` catches thrown Promises from descendant components.
*/

// ---------------------------------------------------------------------------
// Lazy component scenario
// ---------------------------------------------------------------------------

const LazyChild = (() => {
	let loaded = false;
	let promise: Promise<void> | null = null;

	return function LazyChild() {
		if (!loaded) {
			if (!promise) {
				promise = new Promise<void>(res => setTimeout(() => { loaded = true; res(); }, 1200));
			}
			throw promise;
		}
		return <p style={{ margin: 0, color: "green" }}>✓ Lazy component loaded!</p>;
	};
})();

// ---------------------------------------------------------------------------
// Data fetching scenario
// ---------------------------------------------------------------------------

type Status = "idle" | "pending" | "done";

const createResource = (delay: number) => {
	let status: Status = "pending";
	let result = "";
	const promise = new Promise<string>(res =>
		setTimeout(() => { result = `Fetched at ${new Date().toLocaleTimeString()}`; status = "done"; res(result); }, delay)
	);
	return {
		read(): string {
			if (status === "pending") throw promise;
			return result;
		},
	};
};

type Resource = ReturnType<typeof createResource>;

const DataChild = ({ resource }: { resource: Resource }) => {
	const data = resource.read();
	return <p style={{ margin: 0, color: "#1e88e5" }}>✓ {data}</p>;
};

// ---------------------------------------------------------------------------
// Demo component
// ---------------------------------------------------------------------------

export default function SuspenseDemo() {
	const [showLazy, setShowLazy] = useState(false);
	const [resource, setResource] = useState<Resource | null>(null);

	return (
		<div style={{ display: "grid", gap: 24, maxWidth: 420, margin: "0 auto" }}>

			{/* Lazy component */}
			<div style={{ border: "1px solid #e0e0e0", borderRadius: 8, padding: 16 }}>
				<p style={{ margin: "0 0 12px", fontWeight: "bold" }}>Lazy component</p>
				<button onClick={() => setShowLazy(true)} disabled={showLazy}>
					Load component
				</button>
				{showLazy && (
					<div style={{ marginTop: 12 }}>
						<Suspense fallback={<p style={{ margin: 0, color: "#999" }}>⏳ Loading…</p>}>
							<LazyChild />
						</Suspense>
					</div>
				)}
			</div>

			{/* Data fetching */}
			<div style={{ border: "1px solid #e0e0e0", borderRadius: 8, padding: 16 }}>
				<p style={{ margin: "0 0 12px", fontWeight: "bold" }}>Data fetching</p>
				<button onClick={() => setResource(createResource(1500))}>
					{resource ? "Fetch again" : "Fetch data"}
				</button>
				{resource && (
					<div style={{ marginTop: 12 }}>
						<Suspense
							fallback={
								<div style={{ background: "#f5f5f5", borderRadius: 4, height: 20, width: "60%", margin: 0, color: 'black' }}>Fallback</div>
							}
						>
							<DataChild resource={resource} />
						</Suspense>
					</div>
				)}
			</div>

		</div>
	);
}
