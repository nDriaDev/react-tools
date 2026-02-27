import { createHTMLMediaHook } from "../../utils";

/**
 * **`useVideo`**: Hook to use an HTML video element. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useVideo)
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useAudio)
 * @param {UseVideoProps} param - {@link UseVideoProps}
 * @returns {UseVideoResult} result {@link UseVideoResult}
 */
const useVideo = createHTMLMediaHook<HTMLVideoElement>("video");
export {useVideo}