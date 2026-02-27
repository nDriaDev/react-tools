/**
 * Return value of [useIsMounted](https://react-tools.ndria.dev/hooks/lifecycle/useIsMounted).
 *
 * A stable function that returns `true` when the component is currently mounted
 * and `false` after it has unmounted. Useful for guarding async callbacks or
 * deferred operations that should not update state after the component is gone.
 */
export type UseIsMountedResult = () => boolean;