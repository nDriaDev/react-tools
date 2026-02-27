import { createHTMLMediaHook } from "../../utils";

/**
 * **`useAudio`**: Hook to use an HTML audio element.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useAudio)
 * @param {UseAudioProps} param - {@link UseAudioProps}
 * @returns {UseAudioResult} result {@link UseAudioResult}
 */
const useAudio = createHTMLMediaHook<HTMLAudioElement>("audio");
export {useAudio}