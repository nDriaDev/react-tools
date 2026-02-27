import * as React from 'react';
import { useMemoizedFn } from '../performance';
import { UseEffectEventProps, UseEffectEventResult } from '../../models';

/**
 * __`useEffectEvent`__: _useEffectEvent_ hook polyfilled for React versions below 19.
 *
 * Returns a stable event-handler wrapper whose identity never changes between
 * renders, yet always delegates to the **latest** version of `fn` captured at
 * render time. This makes it safe to call inside effects without listing it as
 * a dependency — the handler can freely read current props, state, or context
 * without causing the effect to re-run.
 *
 * Implemented on top of {@link useMemoizedFn}, which provides the same
 * identity-stable / always-fresh semantics using `useLayoutEffect` and a ref.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useEffectEvent)
 * @template T - The type of the handler function. Inferred automatically from `fn`.
 * @param {UseEffectEventProps<T>["fn"]} fn - {@link UseEffectEventProps}
 * @returns {UseEffectEventResult<T>} result - {@link UseEffectEventResult}
 */
export const useEffectEvent = <T extends (...args: any[]) => any>(fn: UseEffectEventProps<T>["fn"]): UseEffectEventResult<T> => (React as any).useEffectEvent ?? useMemoizedFn(fn);