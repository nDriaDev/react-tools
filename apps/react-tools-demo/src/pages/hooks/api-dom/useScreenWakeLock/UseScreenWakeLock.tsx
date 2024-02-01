import { useScreenWakeLock } from "../../../../../../../packages/react-tools/src"

/**
The component uses _useScreenWakeLock_ hook to detect if WakeLock API is available and renders informations about it. It has a button also, to acquire and release a WakeLock.
 */
export const UseScreenWakeLock = () => {
	const [info, acquire, release] = useScreenWakeLock();

	return <>
		<p>WakeLock API supported: {info.isSupported ? "Yes" : "No"}</p>
		<p>WakeLock type: {info.type ? info.type : "WakeLock not found."}</p>
		<p>WakeLock active: {info.isActive ? "Yes" : "No"}</p>
		<button
			type="button"
			onClick={() => {
				info.isActive ? release() : acquire();
			}}
			disabled={!info.isSupported}
		>
			{info.isActive ? "UnLock": "Lock"}
		</button>
	</>
}