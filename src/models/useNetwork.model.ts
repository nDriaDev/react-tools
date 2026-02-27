import { ArrayMinLength1 } from "./utilityTypes.model";

/**
 * Reactive state snapshot of the browser's network connection, returned by `useNetwork`.
 * Properties from the Network Information API (`downlink`, `effectiveType`, etc.) are
 * only populated when the API is supported by the browser.
 */
interface ConnectionState {
	/** `true` when the browser supports the Network Information API (`navigator.connection`). */
	isSupported: boolean;
	/** `true` when the browser reports being online (`navigator.onLine`). */
	isOnline: boolean;
	/** Timestamp (ms since epoch) of the last connectivity change. Only available when supported. */
	since?: number;
	/**
	 * Effective bandwidth estimate in Mb/s. Based on recently observed application-layer
	 * throughput. Only available when `isSupported` is `true`.
	 */
	downlink?: number;
	/**
	 * Maximum downlink speed for the underlying connection technology in Mb/s.
	 * Only available for some connection types (e.g. cellular).
	 */
	downlinkMax?: number;
	/**
	 * Effective connection type determined from round-trip time and downlink values.
	 * - `"slow-2g"` — suitable for text-only pages.
	 * - `"2g"` — suitable for small images.
	 * - `"3g"` — suitable for media.
	 * - `"4g"` — suitable for HD video, real-time apps.
	 */
	effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
	/**
	 * Estimated round-trip time of the current connection in milliseconds, rounded to
	 * the nearest 25ms. Only available when `isSupported` is `true`.
	 */
	rtt?: number;
	/**
	 * `true` when the user or device has requested reduced data usage
	 * (Data Saver / Low Data Mode). Only available when `isSupported` is `true`.
	 */
	saveData?: boolean;
	/**
	 * Underlying connection technology type.
	 * Only available when `isSupported` is `true`.
	 */
	type?: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
}

/**
 * Parameters accepted by [useNetwork](https://react-tools.ndria.dev/hooks/events/useNetwork) when called without `selectedInfo`.
 * The hook returns the full {@link ConnectionState} object and re-renders on any
 * network property change.
 */
export type UseNetworkProps = {
	selectedInfo?: undefined;
};

/**
 * Parameters accepted by [useNetwork](https://react-tools.ndria.dev/hooks/events/useNetwork) when called with a `selectedInfo` array.
 * The hook returns only the requested subset of {@link ConnectionState} properties,
 * avoiding re-renders when unrelated network properties change.
 *
 * @template T - A non-empty subset of {@link ConnectionState} property keys to subscribe to.
 */
export type UseNetworkSelectedProps<T extends keyof ConnectionState> = {
	/**
	 * A non-empty array of {@link ConnectionState} property keys to selectively
	 * subscribe to (e.g. `["isOnline", "effectiveType"]`). The hook returns an object
	 * containing only these keys, preventing unnecessary re-renders when other network
	 * properties change. Must contain at least one element — use the unparameterised
	 * overload instead if you need the full state.
	 */
	selectedInfo: ArrayMinLength1<T>;
};

/**
 * Return value of [useNetwork](https://react-tools.ndria.dev/hooks/events/useNetwork) when called without `selectedInfo`.
 * The full reactive {@link ConnectionState} snapshot. See {@link ConnectionState}
 * for a description of each property.
 */
export type UseNetworkResult = ConnectionState;

/**
 * Return value of [useNetwork](https://react-tools.ndria.dev/hooks/events/useNetwork) when called with a `selectedInfo` array.
 * A partial reactive snapshot containing only the requested {@link ConnectionState}
 * keys. See {@link ConnectionState} for a description of each property.
 *
 * @template T - The subset of {@link ConnectionState} keys that were requested.
 */
export type UseNetworkSelectedResult<T extends keyof ConnectionState> = {
	[K in T]: ConnectionState[K];
};