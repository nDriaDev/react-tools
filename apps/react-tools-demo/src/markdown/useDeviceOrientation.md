# useDeviceOrientation
Hook to handle [device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event).

## Usage

```tsx
export const UseDeviceOrientation = () => {
	const data = useDeviceOrientation();

	return <div style={{ textAlign: "center" }}>
		{
			Object.keys(data).map(key => {
				const value = data[key as keyof typeof data];
				return <p key={key}>{key}: {value !== null ? value.toString(): ""}</p>
			})
		}
	</div>
}
```

> The component uses _useDeviceOrientation_ hook to show device motion details.


## API

```tsx
useDeviceOrientation(): DeviceOrientationProps
```

> ### Params
>
>
>

> ### Returns
>
> __props__: device orientation properties.
> - _DeviceOrientationProps_  
>