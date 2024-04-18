# useDeviceOrientation
Hook to handle [device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useDeviceOrientation)

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

> The component uses _useDeviceOrientation_ hook to show device orientation details.


## API

```tsx
useDeviceOrientation(): DeviceOrientationProps
```





> ### Returns
>
> __props__: device orientation properties.
> - _DeviceOrientationProps_  
>