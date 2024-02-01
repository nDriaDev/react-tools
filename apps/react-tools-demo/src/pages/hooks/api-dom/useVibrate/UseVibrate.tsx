import { useVibrate } from "../../../../../../../packages/react-tools/src"

/**
The component uses _useVibrate_ hook to know if vibrate is supported and to activate/deactivate vibration with two buttons.
 */
export const UseVibrate = () => {
	const { isSupported, vibrate, cancel } = useVibrate();

	return <div>
		<p>Supported: {isSupported.toString()}</p>
		<button type="button" onClick={() => vibrate([200, 30, 200, 30, 200])}>Vibrate</button>
		<button type="button" onClick={cancel}>Cancel</button>
	</div>
}