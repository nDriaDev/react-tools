import { DetectBrowserResult } from "../models";

/**
 * **`detectBrowser`**: It detects used browser or return __"No detection"__.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/detectBrowser)
 * @returns {DetectBrowserResult} result - {@link DetectBrowserResult}
 */
export function detectBrowser(): DetectBrowserResult {

	const userAgent = navigator.userAgent;
	let browserName: DetectBrowserResult;

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