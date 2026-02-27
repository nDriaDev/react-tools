import { useCallback, useMemo, useRef } from "react"
import { useSyncExternalStore } from "../state"
import { UseMediaQueryProps, UseMediaQueryResult } from "../../models";

/**
 * **`useMediaQuery`**: Hook to handle CSS mediaQuery. It returns an object with __matches__ and __media__ properties and receives an optional _onChange_ function to handle _MediaQueryListEvent change_ event.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useMediaQuery)
 * @param {UseMediaQueryProps["mediaQuery"]} mediaQuery - {@link UseMediaQueryProps["mediaQuery"]}
 * @param {UseMediaQueryProps["onChange"]} [onChange] - {@link UseMediaQueryProps["onChange"]}
 * @returns {UseMediaQueryResult} result {@link UseMediaQueryResult}
 */
export const useMediaQuery = (mediaQuery: UseMediaQueryProps["mediaQuery"], onChange?: UseMediaQueryProps["onChange"] ): UseMediaQueryResult => {
	const cachedMediaQuery = useRef(useMemo(() => {
		const { media, matches } = window.matchMedia(mediaQuery);
		return {
			matches,
			media
		}
	}, [mediaQuery]));

	return useSyncExternalStore(
		useCallback(notif => {
			const mq = window.matchMedia(mediaQuery);
			const listener = (evt: MediaQueryListEvent) => {
				!!onChange && onChange(evt);
				notif();
			}
			mq.addEventListener("change", listener, { passive: true });
			return () => {
				mq.removeEventListener("change", listener);
			}
		}, [mediaQuery, onChange]),
		useCallback(() => {
			const {media, matches} = window.matchMedia(mediaQuery);
			if (matches !== cachedMediaQuery.current.matches) {
				cachedMediaQuery.current = {
					matches,
					media
				};
			}
			return cachedMediaQuery.current;
		}, [mediaQuery])
	)
}