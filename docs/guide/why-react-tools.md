---
title: Why React Tools
---

# Why React Tools?

React is a deliberately minimal library: it handles rendering and local state, leaving everything else to the ecosystem. That is a strength, but it means every project ends up re-implementing the same solutions — debounce, fetch with abort, localStorage sync, keyboard shortcuts, observers, Web APIs.

`@ndriadev/react-tools` collects those solutions into one coherent, fully typed, production-ready library.

## The problem it solves

Every medium-complexity React application eventually contains code like this:

```tsx
// How many times have you written this?
useEffect(() => {
  const controller = new AbortController()
  fetch(url, { signal: controller.signal })
    .then(r => r.json())
    .then(setData)
    .catch(err => { if (err.name !== 'AbortError') setError(err) })
  return () => controller.abort()
}, [url])
```

With `@ndriadev/react-tools` it becomes:

```tsx
const { data, error } = useFetch(url)
```

The same applies to dozens of recurring patterns: storage synchronisation, media element control, DOM observers, keyboard shortcuts, undo/redo state.

## Design principles

### TypeScript-first

Every hook, component, and utility is written in TypeScript with precise generics. Types are designed to be informative, not just present: parameters are typed individually, return values are structured with explicit names.

```tsx
// Return type is precise: [T, Dispatch<SetStateAction<T>>, StateHistoryControls<T>]
const [count, setCount, { undo, redo, canUndo, canRedo }] = useStateHistory(0, 10)
```

### Zero extra dependencies

The library depends exclusively on React and react-dom, which are already present in any React project. No utility belt, no transitive dependencies to manage or update.

### Real tree-shaking

The build output uses `preserveModules`: every source file becomes its own module in the dist directory. Bundlers (Vite, webpack, Rollup, esbuild) include only the imports your code actually uses — nothing more.

```tsx
// Only useArray enters the bundle — nothing else
import { useArray } from '@ndriadev/react-tools/hooks/state'
```

### Built-in polyfills for React 16–17

The hooks `useId`, `useDeferredValue`, and `useSyncExternalStore`, introduced in React 18, are available from React 16.8+ through the library's internal implementations. Your code migrates to React 18 without changing imports.

## Comparison

| Feature | React Tools | ahooks | react-use |
|---|---|---|---|
| TypeScript-first | ✅ | ✅ | ⚠️ partial |
| Zero extra deps | ✅ | ⚠️ some | ✅ |
| Sub-path exports | ✅ | ❌ | ❌ |
| Components included | ✅ | ❌ | ❌ |
| Utility types | ✅ | ❌ | ❌ |
| React 16.8+ | ✅ | ✅ | ✅ |
| Live demos | ✅ | ✅ | ❌ |

## What's inside

### 115+ Hooks across 5 categories

**State (17)** — `useArray`, `useMap`, `useSet`, `useStateHistory`, `useReducerHistory`, `useLocalStorageState`, `useSessionStorageState`, `useProxyState`, `useStateValidator`, `useDerivedState`, `createPubSubStore`, and more.

**Lifecycle (12)** — enhanced versions of `useEffect` and `useLayoutEffect` with custom comparison, deep comparison, single execution, and built-in abort controller. Plus `useIsMounted`, `useLogger`, `useRerender`.

**Performance (8)** — `useMemoizedFn` for stable functions without dependencies, compare variants of `useMemo` and `useCallback`, `useLazyRef`, `useMergedRef`, `useId`.

**Events (25+)** — mouse, touch, and keyboard handling: `useClickOutside`, `useHover`, `useLongPress`, `useSwipe`, `usePinchZoom`, `useHotKeys`, `useIntersectionObserver`, `useResizeObserver`, `useMutationObserver`, `useInfiniteScroll`, `useIsOnline`, `useNetwork`, and more.

**API DOM (50+)** — typed wrappers for the main browser Web APIs: `useFetch`, `useWebSocket`, `useWebWorker`, `useEventSource`, `useBroadcastChannel`, `useGeolocation`, `useBattery`, `useMediaDevices`, `useAudio`, `useVideo`, `useFullscreen`, `useClipboard`, `useSpeechRecognition`, `useSpeechSynthesis`, `useColorScheme`, `useShare`, `useEyeDropper`, and many more.

### 9 Components

`ErrorBoundary`, `For`, `ForMemoized`, `Show`, `ShowMemoized`, `SwitchCase`, `SwitchCaseMemoized`, `LazyComponent` — components for the most common rendering patterns, with memoised variants for performance-sensitive trees.

### 25+ Utilities

Pure functions with no side effects: `isDeepEqual`, `isShallowEqual`, `mergeObjects`, `alphanumericCompare`, `changeStringCase`, `getObjectFromDottedString`, `lazy`, `getBase64`, `isAsync`, `detectBrowser`, and more.

### Utility Types

General-purpose TypeScript utility types: `NestedKeyOf`, `ErrorModel`, `SelectivePartial`, `RecursivePartial`, `DependencyListTyped`, `ExtractHead`, `ExtractTail`, `ExtractMiddle`, `LanguageBCP47Tags`, `TypedArray`, `KeyboardEventCode`, and more.