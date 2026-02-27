import { useState } from "react";
import { useGeolocation } from "../../../.."

/**
The component displays geographic location info.
 */
export const UseGeolocation = () => {
	const [error, setError] = useState("")
	const [location, currentPosition] = useGeolocation({
		mode: "manual",
		onError(error) {
			setError(error.message);
		}
	});

	return (<div style={{ textAlign: "left", width: 'fit-content', margin:'0 auto' }}>
		{
			error && <p style={{ color: 'red' }}>{error}</p>
		}
		<br/>
		<button onClick={currentPosition}>Get Location</button>
		<br />
		<p >isSupported: {location.isSupported ? "true" : "false"}</p>
		<p >Timestamp: {location?.position?.timestamp}</p>
		<p >Coords:</p>
		<div style={{paddingLeft: 10, textAlign: 'left', width: 'fit-content', margin: '0 auto'}}>
			<p>accuracy: {location.position?.coords.accuracy}</p>
			<p>altitude: {location.position?.coords.altitude}</p>
			<p>altitudeAccuracy: {location.position?.coords.altitudeAccuracy}</p>
			<p>heading: {location.position?.coords.heading}</p>
			<p>latitude: {location.position?.coords.latitude}</p>
			<p>longitude: {location.position?.coords.longitude}</p>
			<p>speed: {location.position?.coords.speed}</p>
		</div>
	</div>)
}