---
title: Installation
---

# Installation

`@ndriadev/react-tools` requires **React 16.8+** and has no dependencies other than React itself.

## Package manager

::: code-group

```sh [pnpm]
pnpm add @ndriadev/react-tools
```

```sh [npm]
npm install @ndriadev/react-tools
```

```sh [yarn]
yarn add @ndriadev/react-tools
```

:::

## Requirements

| Dependency | Minimum version |
|---|---|
| React | 16.8 |
| react-dom | 16.8 |
| TypeScript *(optional)* | 4.7 |

The library is written entirely in TypeScript and ships its own type definitions. There is no need to install a separate `@types` package.

## Imports

Three import styles are available — pick the one that fits your project best.

### Root package import

Import directly from the root package. Your bundler handles tree-shaking automatically.

```tsx
import { useArray, useFetch, Show, isDeepEqual } from '@ndriadev/react-tools'
```

### Sub-path imports (explicit tree-shaking)

Each category exposes its own sub-path for maximum control over the final bundle:

```tsx
import { createPubSubStore, useArray, useMap }   from '@ndriadev/react-tools/hooks/state'
import { useEffectAbortable, useIsMounted }       from '@ndriadev/react-tools/hooks/lifecycle'
import { useMemoizedFn, useMergedRef }            from '@ndriadev/react-tools/hooks/performance'
import { useClickOutside, useHotKeys, useSwipe }  from '@ndriadev/react-tools/hooks/events'
import { useFetch, useWebSocket, useBluetooth }   from '@ndriadev/react-tools/hooks/api-dom'
import { ErrorBoundary, For, Show, SwitchCase }   from '@ndriadev/react-tools/components'
import { isDeepEqual, mergeObjects, lazy }        from '@ndriadev/react-tools/utils'
```

### All hooks import

```tsx
import { useArray, useFetch, useWebSocket } from '@ndriadev/react-tools/hooks'
```

## ESLint configuration

The `*Compare` and `*DeepCompare` hooks accept a custom dependency array. To enable `exhaustive-deps` checking for them as well, add the following configuration:

```js
// eslint.config.js
export default [
  {
    rules: {
      'react-hooks/exhaustive-deps': ['warn', {
        additionalHooks: [
          'useMemoCompare',
          'useMemoDeepCompare',
          'useCallbackCompare',
          'useCallbackDeepCompare',
          'useEffectCompare',
          'useEffectDeepCompare',
          'useLayoutEffectCompare',
          'useLayoutEffectDeepCompare',
        ].join('|'),
      }],
    },
  },
]
```