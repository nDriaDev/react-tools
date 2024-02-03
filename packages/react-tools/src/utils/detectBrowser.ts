/**
 * **`detectBrowser`**: It detects used browser or return __"No detection"__. [See demo](https://nDriaDev.io/react-tools/#/utils/detectBrowser)
 * @returns {"chrome"|"firefox"|"safari"|"opera"|"edge"|"No detection"} result
 */
export function detectBrowser(): "chrome" | "firefox" | "safari" | "opera" | "edge" | "No detection" {

	const userAgent = navigator.userAgent;
	let browserName: "chrome" | "firefox" | "safari" | "opera" | "edge" | "No detection";

	if (userAgent.match(/chrome|chromium|crios/i)) {
		browserName = "chrome";
	} else if (userAgent.match(/firefox|fxios/i)) {
		browserName = "firefox";
	} else if (userAgent.match(/safari/i)) {
		browserName = "safari";
	} else if (userAgent.match(/opr/i)) {
		browserName = "opera";
	} else if (userAgent.match(/edg/i)) {
		browserName = "edge";
	} else {
		browserName = "No detection";
	}
	return browserName;
}