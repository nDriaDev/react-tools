# LazyComponent
Component Wrapper to lazy loading a Component. [See demo](https://react-tools.ndria.dev/#/components/LazyComponent)

## Usage

```tsx
export default function LC() {
	return (
		<LazyComponent
			factory={() => import('./LazyComp').then(async res => {
				await new Promise(resolve => setTimeout(resolve, 5000));
				return res;
			})}
			fallback={<p>Loading component...</p>}
		/>
	);
}
```

> The component uses _LazyComponent_ component to lazy load a component imported dynamically by _factory_ prop. The component loading is delayed by 5 seconds. During this time, _fallback_ prop is shown that renders a p element with the text __Loading component...__.


## API

```tsx
LazyComponent<T extends { default: ComponentType<unknown> } | { [k: string]: ComponentType<unknown> }>({ factory, componentName, fallback, beforeLoad, afterLoad }: { factory: () => Promise<T>, componentName?: string, fallback?: ReactNode, beforeLoad?: ()=>void, afterLoad?: ()=>void })
```


> ### Params
>
> - __param__: _Object_  
properties to load component.
> - __param.factory__: _() => Promise<{ [k:string]: T }>_  
function that returns a Promise or another thenable.
> - __param.componentName?__: _string_  
name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
> - __object.fallback?__: _ReactNode_  
optional element to render when _when_ prop is false.
> - __param.beforeLoad?__: _()=>void_  
function that will be executed before loading component .
> - __param.afterLoad?__: _()=>void_  
function that will be executed after loading component .
>



> ### Returns
>
> __element__
> - _JSX.Element_  
>