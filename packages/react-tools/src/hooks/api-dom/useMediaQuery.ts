import { useCallback, useMemo, useRef } from "react"
import { useSyncExternalStore } from "../state"

/**
 * **`useMediaQuery`**: Hook to handle CSS mediaQuery. It returns an object with __matches__ and __media__ properties and receives an optional _onChange_ function to handle _MediaQueryListEvent change_ event. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useMediaQuery)
 * @param {string} mediaQuery - media query to test.
 * @param {(evt: MediaQueryListEvent) => void} [onChange] - MediaQueryListEvent change handler.
 * @returns {{matches: boolean, media: string}} result - object with __matches__, boolean value that returns true if the document currently matches the media query, __media__, string that represents media query.
 */
export const useMediaQuery = (mediaQuery: string, onChange?: (evt: MediaQueryListEvent) => void ): {matches: boolean, media: string} => {
	const cachedMediaQuery = useRef(useMemo(() => {
		const { media, matches } = window.matchMedia(mediaQuery);
		return {
			matches,
			media
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []));

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