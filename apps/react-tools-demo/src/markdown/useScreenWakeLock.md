# useScreenWakeLock
Hook to use [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useScreenWakeLock)

## Usage

```tsx
export const UseScreenWakeLock = () => {
	const [info, acquire, release] = useScreenWakeLock();

	return <>
		<p>WakeLock API supported: {info.isSupported ? "Yes" : "No"}</p>
		<p>WakeLock type: {info.type ? info.type : "WakeLock not found."}</p>
		<p>WakeLock active: {info.isActive ? "Yes" : "No"}</p>
		<button
			type="button"
			onClick={() => {
				info.isActive ? release() : acquire();
			}}
			disabled={!info.isSupported}
		>
			{info.isActive ? "UnLock": "Lock"}
		</button>
	</>
}
```

> The component uses _useScreenWakeLock_ hook to detect if WakeLock API is available and renders informations about it. It has a button also, to acquire and release a WakeLock.


## API

```tsx
useScreenWakeLock(onRelease?: (evt?: Event) =>void): [{isSupported: boolean, type: "screen"|null, isActive: boolean|null}, ()=>Promise<void>, ()=>Promise<void>]
```

> ### Params
>
> - __onRelease?__: _(evt?:Event)=>void_  
function that will be executed on release event.
>

> ### Returns
>
> __result__:  __Array__:  
    - __Object__:  
        - __isSupported__ : _boolean_  
        - __type__ : _"screen"|null_  
        - __isActive__ : _boolean|null_  
    - _()=>Promise<void>_  
    - _()=>Promise<void>_  
> - 1. __info__: object with these properties:
> 		- _isSupported_: returns a boolean to know if API is available.
> 		- _type_: returns a string representation of the currently acquired WakeLock type.
> 		- _isActive_: returns a boolean indicating whether the WakeLockSentinel has been activated.
> - 2. __acquire__: function to request a WakeLock.
> - 3. __release__: function to release a WakeLock.
>