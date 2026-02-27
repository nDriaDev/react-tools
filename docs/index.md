---
layout: home

hero:
  name: "React Tools"
  text: "Hooks · Components · Utils · Types"
  tagline: "115+ production-ready tools for React — fully typed, tree-shakeable, zero extra dependencies."
  image:
    src: /react-red.webp
    alt: React Tools
  actions:
    - theme: brand
      text: Get Started
      link: /guide/get-started
    - theme: alt
      text: GitHub
      link: https://github.com/nDriaDev/react-tools

features:
  - icon: 🎣
    title: 115+ Hooks
    details: State, lifecycle, performance, events, and 45+ browser-API hooks — useArray, useFetch, useWebSocket, useSpeechRecognition and many more.
    link: /hooks/state/createPubSubStore
    linkText: Browse Hooks
  - icon: 🧩
    title: 8 Components
    details: ErrorBoundary, For, Show, LazyComponent, SwitchCase and their memoized variants.
    link: /components/ErrorBoundary
    linkText: Browse Components
  - icon: 🛠️
    title: 20+ Utils
    details: Pure utility functions for strings, objects, async detection, deep equality and more.
    link: /utils/alphanumericCompare
    linkText: Browse Utils
  - icon: 🔷
    title: Utility Types
    details: Precise TypeScript utility types — NestedKeyOf, ErrorModel, SelectivePartial, DependencyListTyped and more.
    link: /types/
    linkText: Browse Types
  - icon: 🌲
    title: Tree-Shakeable
    details: Import only what you use via sub-path exports. Each hook is independently importable.
  - icon: ⚡
    title: React 16.8+ Compatible
    details: Works with React 16.8 and above. Polyfills included for useId, useDeferredValue and useSyncExternalStore.
---

## Installation

```sh
pnpm add @ndriadev/react-tools   # pnpm
npm  i   @ndriadev/react-tools   # npm
yarn add @ndriadev/react-tools   # yarn
```

## Usage

```tsx
// Full package
import { useArray, useFetch, Show } from '@ndriadev/react-tools'

// Sub-path imports (better tree-shaking)
import { useArray }    from '@ndriadev/react-tools/hooks/state'
import { useFetch }    from '@ndriadev/react-tools/hooks/api-dom'
import { Show }        from '@ndriadev/react-tools/components'
import { isDeepEqual } from '@ndriadev/react-tools/utils'
```

## ESLint — exhaustive-deps

To validate dependencies in compare-hooks correctly, add:

```js
// eslint.config.js
'react-hooks/exhaustive-deps': ['warn', {
  additionalHooks: '(useMemoCompare|useMemoDeepCompare|useCallbackCompare|useCallbackDeepCompare|useLayoutEffectCompare|useLayoutEffectDeepCompare|useEffectCompare|useEffectDeepCompare)'
}]
```
