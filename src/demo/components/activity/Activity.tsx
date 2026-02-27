import { useReducer, useState } from "react";
import { Activity } from "../../..";

const Panel = ({ label, color }: { label: string; color: string }) => {
	const [count, inc] = useReducer(c => c + 1, 0);
	return (
		<div style={{ padding: 24, textAlign: "center" }}>
			<p style={{ margin: "0 0 12px", fontWeight: "bold", color }}>{label}</p>
			<p style={{ margin: "0 0 8px", fontSize: 13, color: "#666" }}>
				This panel stays mounted even when inactive.
			</p>
			<strong style={{ fontSize: 28 }}>{count}</strong>
			<br />
			<button style={{ marginTop: 8 }} onClick={inc}>+1</button>
		</div>
	);
};

const TABS = [
	{ id: 0, label: "Panel A", color: "#e53935" },
	{ id: 1, label: "Panel B", color: "#1e88e5" },
	{ id: 2, label: "Panel C", color: "#43a047" },
];

/**
The component demonstrates _Activity_ as a polyfill of the experimental React `<Activity>` component.
- Three tabs represent three independent panels, each rendered inside an `<Activity>` with `mode="hidden"`.
- Switching tabs sets the active panel — inactive panels receive `mode="hidden"`.
- Each panel contains a counter. Because `mode="hidden"` keeps the subtree mounted, counters preserve their values across tab switches — unlike conditional rendering which would reset them.
- A note under the tabs confirms that all three panels remain in the DOM at all times.
*/
export default function ActivityDemo() {
	const [active, setActive] = useState(0);

	return (
		<div style={{ maxWidth: 400, margin: "0 auto" }}>
			<div style={{ display: "flex", gap: 4, marginBottom: 0 }}>
				{TABS.map(t => (
					<button
						key={t.id}
						onClick={() => setActive(t.id)}
						style={{
							flex: 1,
							fontWeight: active === t.id ? "bold" : "normal",
							borderBottom: active === t.id ? `2px solid ${t.color}` : "2px solid transparent",
						}}
					>
						{t.label}
					</button>
				))}
			</div>
			<div style={{ border: "1px solid #e0e0e0", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
				{TABS.map(t => (
					<Activity key={t.id} mode={active === t.id ? "visible" : "hidden"}>
						<Panel label={t.label} color={t.color} />
					</Activity>
				))}
			</div>
			<p style={{ fontSize: 12, color: "#999", textAlign: "center", marginTop: 8 }}>
				All 3 panels are always in the DOM — counters never reset on tab switch.
			</p>
		</div>
	);
}