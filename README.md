<div align="center">

<h1 align="center">
	<a href="https://react-tools.ndria.dev/">
  		<img src="https://react-tools.ndria.dev/react-red.webp" alt="logo">
	</a>
</h1>

# @ndriadev/react-tools

### 🎯 The Ultimate React Toolkit

**115+ Production-Ready Hooks** • **9 Smart Components** • **25+ Utilities** • **Full TypeScript**

[![npm version](https://img.shields.io/npm/v/%40ndriadev/react-tools?color=f53340&style=flat-square)](https://www.npmjs.org/package/%40ndriadev/react-tools)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@ndriadev/react-tools?color=success&label=size&style=flat-square)](https://bundlephobia.com/package/@ndriadev/react-tools)
[![downloads](https://img.shields.io/npm/dm/%40ndriadev/react-tools?color=orange&style=flat-square)](https://www.npmjs.org/package/%40ndriadev/react-tools)
[![license](https://img.shields.io/npm/l/%40ndriadev/react-tools?color=blue&style=flat-square)](https://github.com/nDriaDev/react-tools/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

[📚 Documentation](https://react-tools.ndria.dev) • [🎮 Live Demos](https://react-tools.ndria.dev) • [🐛 Report Bug](https://github.com/nDriaDev/react-tools/issues) • [✨ Request Feature](https://github.com/nDriaDev/react-tools/issues)

</div>

---

## ✨ Why React Tools?

<table>
<tr>
<td width="50%">

### 🎨 **Developer Experience**
- 💎 **TypeScript-first** with complete type safety
- 🎯 **Intuitive APIs** that feel natural
- 📖 **Rich documentation** with live examples
- 🔍 **IntelliSense** everywhere

</td>
<td width="50%">

### ⚡ **Performance**
- 🌳 **Tree-shakeable** - import only what you need
- 📦 **Tiny bundles** - optimized for production
- 🚀 **Zero dependencies** (except React)
- ⚙️ **Optimized** re-renders

</td>
</tr>
<tr>
<td width="50%">

### 🛠️ **Battle-Tested**
- ✅ **Production-ready** hooks and components
- 🧪 **Thoroughly tested** patterns
- 🔒 **Type-safe** implementations
- 📱 **Cross-platform** compatible

</td>
<td width="50%">

### 🎁 **Feature-Rich**
- 🎣 **115+ hooks** across 5 categories
- 🧩 **9 components** for common patterns
- 🔧 **25+ utilities** for everyday tasks
- 🌐 **Modern Web APIs** integrated

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Installation

```bash
# npm
npm install @ndriadev/react-tools

# pnpm (recommended)
pnpm add @ndriadev/react-tools

# yarn
yarn add @ndriadev/react-tools
```

### Basic Usage

```tsx
import { useLocalStorageState, useDebounce, useWebSocket } from '@ndriadev/react-tools'

function App() {
  // Persistent state with localStorage sync
  const [theme, setTheme] = useLocalStorageState('theme', 'dark')

  // Debounced search with automatic cleanup
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  // WebSocket with auto-reconnect and type-safety
  const ws = useWebSocket<MessageType>({
    url: 'wss://api.example.com',
    reconnect: { attempts: 5, exponentialBackoff: true },
    onMessage: (data) => console.log('Received:', data)
  })

  return <div>Your app here</div>
}
```

### Tree-Shakeable Imports

Import only what you need for optimal bundle size:

```tsx
// ✅ Import entire library (tree-shakeable)
import { useState History, useWebSocket } from '@ndriadev/react-tools'

// ✅ Import by category
import { useStateHistory } from '@ndriadev/react-tools/hooks/state'
import { useWebSocket } from '@ndriadev/react-tools/hooks/api-dom'

// ✅ Import components separately
import { SwitchCase, ErrorBoundary } from '@ndriadev/react-tools/components'

// ✅ Import utilities
import { isDeepEqual, mergeObjects } from '@ndriadev/react-tools/utils'
```

---

## 📦 What's Inside?

### 🎣 Hooks (115+)

<details open>
<summary><b>🗂️ State Management (17 hooks)</b></summary>

Advanced state management with history, validation, and persistence:

| Hook | Description |
|------|-------------|
| `useStateHistory` | useState with undo/redo and time-travel |
| `useReducerHistory` | useReducer with history tracking |
| `useLocalStorageState` | Sync state with localStorage |
| `useSessionStorageState` | Sync state with sessionStorage |
| `useProxyState` | Deep reactive state with Proxy |
| `useStateValidator` | State with built-in validation |
| `useDerivedState` | Computed state from props |
| `usePrevious` | Track previous value |
| `useArray` | Array manipulation utilities |
| `useMap` | Map state management |
| `useSet` | Set state management |
| `createPubSubStore` | Global pub/sub state |

```tsx
// Example: Undo/Redo functionality
const [count, setCount, { undo, redo, canUndo, canRedo }] = useStateHistory(0, 10)

<button onClick={() => setCount(c => c + 1)}>Increment</button>
<button onClick={undo} disabled={!canUndo}>Undo</button>
<button onClick={redo} disabled={!canRedo}>Redo</button>
```

</details>

<details>
<summary><b>♻️ Lifecycle (12 hooks)</b></summary>

Enhanced lifecycle hooks with custom comparison and abort control:

- `useEffectOnce` - Run effect only once
- `useEffectCompare` - Custom dependency comparison
- `useEffectDeepCompare` - Deep equality check
- `useEffectAbortable` - Built-in AbortController
- `useLayoutEffect*` variants
- `useIsMounted` - Check mount status
- `useLogger` - Debug lifecycle changes

```tsx
// Example: Deep comparison for objects
useEffectDeepCompare(() => {
  fetchData(filters) // Only runs when filters deeply change
}, [filters])
```

</details>

<details>
<summary><b>⚡ Performance (8 hooks)</b></summary>

Optimize your components with smart memoization:

- `useMemoizedFn` - Stable function references
- `useMemoCompare` / `useCallbackCompare` - Custom comparison
- `useLazyRef` - Lazy initialization
- `useMergedRef` - Merge multiple refs
- `useId` - Unique IDs (React 18 polyfill)

```tsx
// Example: Stable callback without dependencies
const handleClick = useMemoizedFn((id) => {
  // Always has access to latest state
  // But reference never changes
  console.log('Clicked:', id, latestState)
})
```

</details>

<details>
<summary><b>👆 Events (25 hooks)</b></summary>

Handle user interactions and DOM events efficiently:

**Mouse & Touch:**
- `useClickOutside` - Detect clicks outside element
- `useHover` - Hover state
- `useDoubleClick` - Distinguish single/double click
- `useLongPress` - Long press detection
- `useSwipe` - Swipe gestures
- `usePinchZoom` - Pinch-to-zoom

**Observers:**
- `useIntersectionObserver` - Visibility detection
- `useResizeObserver` - Element size changes
- `useMutationObserver` - DOM mutations

**Keyboard & Actions:**
- `useHotKeys` - Keyboard shortcuts
- `usePerformAction` - Action delegation pattern
- `useEventListener` - Generic event handling

**Network & System:**
- `useIsOnline` - Online/offline status
- `useNetwork` - Network information
- `useBeforeUnload` - Prevent page close

```tsx
// Example: Click outside to close
const ref = useClickOutside(() => setIsOpen(false))
<div ref={ref}>{isOpen && <Dropdown />}</div>
```

</details>

<details>
<summary><b>🌐 Web APIs (50+ hooks)</b></summary>

Modern browser APIs made easy:

**Media:**
- `useAudio` / `useVideo` - Media element control
- `useMediaDevices` - Camera/microphone access
- `useDisplayMedia` - Screen sharing
- `usePIP` - Picture-in-Picture
- `useSpeechRecognition` / `useSpeechSynthesis`

**Communication:**
- `useWebSocket` - WebSocket with reconnection
- `useWebWorker` - Multi-threading
- `useFetch` - Fetch with abort & caching
- `useEventSource` - Server-Sent Events
- `useBroadcastChannel` - Cross-tab messaging

**Device & Sensors:**
- `useBattery` - Battery status
- `useGeolocation` - GPS location
- `useDeviceOrientation` / `useDeviceMotion`
- `useVibrate` - Haptic feedback

**UI & UX:**
- `useFullscreen` - Fullscreen mode
- `useClipboard` - Clipboard operations
- `useColorScheme` - Dark/light mode
- `useShare` - Web Share API
- `useEyeDropper` - Color picker

```tsx
// Example: WebSocket with auto-reconnect
const ws = useWebSocket({
  url: 'wss://api.example.com',
  reconnect: {
    attempts: 5,
    exponentialBackoff: true
  },
  parser: 'json',
  onMessage: (data) => updateUI(data)
})

ws.sendJSON({ type: 'ping' })
```

</details>

### 🧩 Components (9)

**Conditional Rendering:**
```tsx
// Show/Hide with fallback
<Show when={isLoggedIn} fallback={<Login />}>
  <Dashboard />
</Show>

// Switch-case logic
<SwitchCase.Switch>
  <SwitchCase.Case when={status === 'loading'}>
    <Spinner />
  </SwitchCase.Case>
  <SwitchCase.Case when={status === 'error'}>
    <Error />
  </SwitchCase.Case>
</SwitchCase.Switch>
```

**List Rendering:**
```tsx
// Optimized list rendering
<For each={items} fallback={<EmptyState />}>
  {(item, index) => <ItemCard key={item.id} {...item} />}
</For>
```

**Error Handling:**
```tsx
// Error boundary with reset
<ErrorBoundary
  fallback={(error, reset) => (
    <ErrorDisplay error={error} onReset={reset} />
  )}
  onError={(error) => logToService(error)}
>
  <App />
</ErrorBoundary>
```

**Lazy Loading:**
```tsx
// Advanced lazy loading with retry
<LazyComponent
  loader={() => import('./HeavyComponent')}
  loading={<Skeleton />}
  error={(retry) => <ErrorWithRetry onRetry={retry} />}
/>
```

### 🔧 Utilities (25+)

**Type Guards:**
- `isDeepEqual` / `isShallowEqual` - Equality checks
- `isMouseEvent` / `isTouchEvent` - Event type guards
- `isAsync` - Async function detection
- `isClient` - SSR detection

**Object & Array:**
- `mergeObjects` - Deep merge
- `getObjectFromDottedString` - Path access ("user.profile.name")
- `uniqueElementsArray` - Remove duplicates
- `alphanumericCompare` - Natural sorting

**String:**
- `changeStringCase` - Convert between cases
- `detectBrowser` - Browser detection

**DOM:**
- `clickElementOnKeydownEvent` - Accessibility helper
- `hotKeyHandler` - Keyboard shortcuts
- `getBase64` - File conversion

**Patterns:**
- `PublishSubscribePattern` - Pub/Sub implementation
- `EventsPattern` - Event emitter
- `lazy` - Lazy function execution

---

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ≥ 90 |
| Firefox | ≥ 88 |
| Safari | ≥ 14 |
| Edge | ≥ 90 |

**React Compatibility:** React ≥ 16.8.0 (Hooks support required)

---

## 🎯 Use Cases

<table>
<tr>
<td width="33%">

### 📱 **Modern Web Apps**
Perfect for SPAs with complex state management and real-time features

</td>
<td width="33%">

### 🏢 **Enterprise Applications**
Battle-tested patterns for large-scale applications with strict requirements

</td>
<td width="33%">

### 🚀 **Rapid Prototyping**
Skip boilerplate and focus on features with ready-to-use hooks

</td>
</tr>
</table>

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history and breaking changes.

## 📄 License

MIT © [nDriaDev](https://github.com/nDriaDev)

---

## 📞 Support

- **Documentation**: [futurable.ndria.dev](https://react-tools.ndria.dev/)
- **Issues**: [GitHub Issues](https://github.com/nDriaDev/react-tools/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nDriaDev/react-tools/discussions)
- **Email**: info@ndria.dev

---

<div align="center">

**If you find Futurable useful, please consider giving it a ⭐ on [GitHub](https://github.com/nDriaDev/react-tools)!**

</div>