# useVibrate
Hook to use device vibration hardware. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useVibrate)

## Usage

```tsx
export const UseVibrate = () => {
	const { isSupported, vibrate, cancel } = useVibrate();

	return <div>
		<p>Supported: {isSupported.toString()}</p>
		<button type="button" onClick={() => vibrate([200, 30, 200, 30, 200])}>Vibrate</button>
		<button type="button" onClick={cancel}>Cancel</button>
	</div>
}
```

> The component uses _useVibrate_ hook to know if vibrate is supported and to activate/deactivate vibration with two buttons.


## API

```tsx
useVibrate():{isSupported: boolean, vibrate: ((pattern: number | number[]) => void), cancel: ()=>void}
```

> ### Params
>
>
>

> ### Returns
>
> __result__:  __Union of__:  
    - __Object__:  
        - __isSupported__ : _boolean_  
        - __vibrate__ : _((pattern: numbe_  
    - _number[]) => void), cancel: ()=>void}_  
> - _isSupported_: boolean to detect if vibration is supported or not.
> - _vibrate_: function to activate device vibration hardware.
> - _cancel_: function to stop vibration running.
>