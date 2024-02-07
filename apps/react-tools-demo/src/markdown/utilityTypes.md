# Utility Types

Typescript utility types for specified use cases.

## NestedKeyOf

Utility type that constructs a type by picking all properties and nested proprerties from __`T`__ in form _`property.nestedProprerty`_.
```tsx
type NestedKeyOf<T extends Record<string, unknown>>
```

## ErrorModel

Utility type that constructs an object from __`T`__ and whose property values are _`boolean`_.
```tsx
type ErrorModel<T extends object>
```

## SelectivePartial

Utility type that works like __Partial__ but allows to specify which properties set to optional.
```tsx
type SelectivePartial<T extends object, E extends keyof T>
```

## RecursivePartial

Utility type that works like __Partial__ but set nested properties to optional also.
```tsx
type RecursivePartial<T extends object>
```

## Optional

Utility type that constructs a type that is __`T`__ or __`E`__, if specified otherwise __`null`__.
```tsx
type Optional<T = unknown, E = null>
```

## DependencyListTyped

Utility type that works like __DependencyList__ react type but it can be specified dependencies list element types.
```tsx
type DependencyListTyped<T = unknown>
```

## Union

Utility type that given an array constructs union type from array elements type.
```tsx
type Union<T extends unknown[]>
```

## ExtractTail

Utility type that given an array extracts a new array with all elements from array expect first.
```tsx
type ExtractTail<T extends unknown[]>
```

## ExtractMiddle

Utility type that given an array extracts a new array with all elements from array expect first and last.
```tsx
type ExtractMiddle<T extends unknown[]>
```

## ExtractHead

Utility type that given an array extracts a new array with all elements from array expect last.
```tsx
type ExtractHead<T extends unknown[]>
```

## PartialRecord

Utility type that constructs a record with all properties set to optional.
```tsx
type PartialRecord<K extends keyof any, T>
```

## ArrayMinLength1

Utility type that constructs an array of __`T`__ with one element at least.
```tsx
type ArrayMinLength1<T>
```

## LanguageBCP47Tags

Utility type for Language BCP-47 tags.
```tsx
type LanguageBCP47Tags
```

## TypedArray

Utility type for __`Typed Arrays`__.
```tsx
type TypedArray
```

