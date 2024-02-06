export type GeoLocationObject = ({
	isSupported: true;
	position?: GeolocationPosition;
}) | ({
	isSupported: false;
	position?: never;
})