# ErrorBoundary
Wrapper component that lets you display some fallback UI when your application throws an error during rendering. [See demo](https://ndriadev.github.io/react-tools/#/components/ErrorBoundary)

## Usage

```tsx
const Component = () => {
	throw new Error("An error occurred.");
	return <p>Component</p>
}
export default function EB() {
	return <ErrorBoundary fallback={(error: Error, _, retry) => <><p>{error.name} - {error.message} </p><button onClick={retry}>Retry</button></>}>
		<Component/>
	</ErrorBoundary>
}
```

> The component uses _ErrorBoundary_ Component to wrap _Component_. _Component_ throw an error so _ErrorBoundary_ catch it and show the _fallback_ element passing to it _error_ and _retry_ function. [See demo](https://ndriadev.github.io/react-tools/#/components/ErrorBoundary)


## API

```tsx
class ErrorBoundary extends Component<PropsWithChildren<{ onCatch?: (error: Error, info: ErrorInfo) => void, fallback?: ReactNode | ((error: Error, info: ErrorInfo, retry: () => void) => ReactNode) | ((props: { error: Error, info: ErrorInfo, retry: () => void })=>JSX.Element)}>, { hasError: boolean, error?:Error, info?: ErrorInfo }>
```

> ### Params
>
> - __props__: _Object_
> - __props.onCatch?__: _(error:Error, info:ErrorInfo)=>void_  
function that will be executed on component did catch.
> - __props.fallback?__: _ReactNode|((error: Error, info: ErrorInfo, retry: ()=>void)=>ReactNode)|((props: { error: Error, info: ErrorInfo, retry: ()=>void })=>JSX.Element)_  
it is rendered when an error occurred. It can be an element, or a Component or a function. If it is a component or a function, it receive the _error_ the _info_ and the _retry_ function as props. _retry_ function try to rerender.
> - __props.children__: _ReactNode_  
element to render.
>

> ### Returns
>
> __result__: element or fallback.
> - _JSX.Element_  
>