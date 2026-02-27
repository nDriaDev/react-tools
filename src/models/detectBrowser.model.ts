/**
 * Return value of [detectBrowser](https://react-tools.ndria.dev/utils/detectBrowser).
 * Detects the current browser based on `navigator.userAgent` and known
 * engine fingerprints.
 *
 * @returns One of `"chrome"`, `"firefox"`, `"safari"`, `"opera"`, `"edge"`,
 *   or `"No detection"` when the browser cannot be identified.
 */
export type DetectBrowserResult = "chrome" | "firefox" | "safari" | "opera" | "edge" | "No detection"

