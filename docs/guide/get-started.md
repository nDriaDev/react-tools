---
title: Get Started
---

# Get Started

This guide takes you from zero to productive with `@ndriadev/react-tools` in a few minutes.

## Your first hook

Install the library and import your first hook:

```tsx
import { useArray } from '@ndriadev/react-tools/hooks/state'

function ShoppingList() {
  const items = useArray<string>(['apples', 'bread'])

  return (
    <>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={() => items.push('milk')}>Add milk</button>
      <button onClick={() => items.pop()}>Remove last</button>
    </>
  )
}
```

`useArray` returns a reactive `Array<T>`: all mutating methods (`push`, `pop`, `splice`, …) automatically trigger a re-render.

## Persistent state

`useLocalStorageState` keeps state in sync with the browser's `localStorage` — it survives page refreshes.

```tsx
import { useLocalStorageState } from '@ndriadev/react-tools/hooks/state'

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorageState<'light' | 'dark'>('theme', 'light')

  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  )
}
```

## Advanced effects

### Run once

```tsx
import { useEffectOnce } from '@ndriadev/react-tools/hooks/lifecycle'

function Analytics() {
  useEffectOnce(() => {
    trackPageView()
  })
  return null
}
```

### Deep comparison

`useEffectDeepCompare` runs the effect only when dependencies change by value, preventing unnecessary executions caused by new object references.

```tsx
import { useEffectDeepCompare } from '@ndriadev/react-tools/hooks/lifecycle'

function DataTable({ filters }: { filters: Record<string, unknown> }) {
  useEffectDeepCompare(() => {
    fetchData(filters)
  }, [filters]) // Does not re-run if filters has the same values
}
```

### Abortable effect

Useful for fetch calls and async operations that need to be cancelled when dependencies change or the component unmounts.

```tsx
import { useEffectAbortable } from '@ndriadev/react-tools/hooks/lifecycle'

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)

  useEffectAbortable(async (signal) => {
    const res = await fetch(`/api/users/${userId}`, { signal })
    const data = await res.json()
    setUser(data)
  }, [userId])
}
```

## Performance

### Stable function without dependencies

`useMemoizedFn` returns a function with a stable reference that always reads the latest values from its closure — a more ergonomic alternative to `useCallback`.

```tsx
import { useMemoizedFn } from '@ndriadev/react-tools/hooks/performance'

function Counter() {
  const [count, setCount] = useState(0)

  // Reference never changes, but the function always sees the latest count
  const logCount = useMemoizedFn(() => {
    console.log('Count:', count)
  })

  return <button onClick={logCount}>Log</button>
}
```

### Merging refs

```tsx
import { useMergedRef } from '@ndriadev/react-tools/hooks/performance'

function Input({ inputRef }: { inputRef: React.Ref<HTMLInputElement> }) {
  const localRef = useRef<HTMLInputElement>(null)
  const merged   = useMergedRef(localRef, inputRef)

  return <input ref={merged} />
}
```

## User interactions

### Click outside

```tsx
import { useClickOutside } from '@ndriadev/react-tools/hooks/events'

function Dropdown() {
  const [open, setOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(o => !o)}>Open</button>
      {open && <ul><li>Option 1</li><li>Option 2</li></ul>}
    </div>
  )
}
```

### Keyboard shortcuts

```tsx
import { useHotKeys } from '@ndriadev/react-tools/hooks/events'

function Editor() {
  useHotKeys({
    'ctrl+s': () => saveDocument(),
    'ctrl+z': () => undo(),
    'ctrl+shift+z': () => redo(),
  })

  return <textarea />
}
```

## Web APIs

### Fetch

```tsx
import { useFetch } from '@ndriadev/react-tools/hooks/api-dom'

function UserCard({ id }: { id: number }) {
  const { data, loading, error } = useFetch<User>(`/api/users/${id}`, {
    onError: (err) => console.error(err),
  })

  if (loading) return <p>Loading…</p>
  if (error)   return <p>Error: {String(error)}</p>
  return <p>{data?.name}</p>
}
```

### WebSocket

```tsx
import { useWebSocket } from '@ndriadev/react-tools/hooks/api-dom'

function Chat() {
  const { send, lastMessage, readyState } = useWebSocket({
    url: 'wss://chat.example.com',
  })

  return (
    <>
      <p>Status: {readyState}</p>
      <p>Last message: {lastMessage}</p>
      <button onClick={() => send('Hello!')}>Send</button>
    </>
  )
}
```

## Components

### Conditional rendering

```tsx
import { Show } from '@ndriadev/react-tools/components'

function Dashboard({ user }: { user: User | null }) {
  return (
    <Show
      when={user !== null}
      fallback={<p>Please sign in to continue</p>}
    >
      <p>Welcome, {user!.name}</p>
    </Show>
  )
}
```

### Optimised list

`For` handles keys automatically and is optimised for lists with memoised child components.

```tsx
import { For } from '@ndriadev/react-tools/components'

function ProductList({ products }: { products: Product[] }) {
  return (
    <For of={products} elementKey="id">
      {(product) => <ProductCard key={product.id} {...product} />}
    </For>
  )
}
```

### Error boundary

```tsx
import { ErrorBoundary } from '@ndriadev/react-tools/components'

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <MyComponent />
    </ErrorBoundary>
  )
}
```

## Next steps

Explore the full reference documentation by category:

- [**Hooks State**](/hooks/state/useArray) — advanced state management
- [**Hooks Lifecycle**](/hooks/lifecycle/useEffectAbortable) — enhanced lifecycle hooks
- [**Hooks Performance**](/hooks/performance/useMemoizedFn) — render optimisation
- [**Hooks Events**](/hooks/events/useClickOutside) — user interactions
- [**Hooks API DOM**](/hooks/api-dom/useFetch) — modern Web APIs
- [**Components**](/components/ErrorBoundary) — ready-to-use components
- [**Utils**](/utils/isDeepEqual) — utility functions
- [**Utility Types**](/types/) — advanced TypeScript types