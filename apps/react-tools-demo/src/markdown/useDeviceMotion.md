# useDeviceMotion
Hook to handle [device motion](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event).

## Usage

```tsx
export const UseDeviceMotion = () => {
	const data = useDeviceMotion();

	return <div style={{ textAlign: "center" }}>
		{
			Object.keys(data).map(key => {
				const value = data[key as keyof typeof data];
				return value !== null && typeof value === "object" && Reflect.get(value, "x")
					? <Fragment key={key}>
						<p>{key}:</p>
						<ul>
							<li>x: {Reflect.get(data[key as keyof typeof data] as object, "x")}</li>
							<li>y: {Reflect.get(data[key as keyof typeof data] as object, "y")}</li>
							<li>z: {Reflect.get(data[key as keyof typeof data] as object, "z")}</li>
						</ul>
					</Fragment>
					: value !== null && typeof value === "object" && Reflect.get(value, "alpha")
						? <Fragment key={key}>
							<p>{key}:</p>
							<ul>
								<li>alpha: {Reflect.get(data[key as keyof typeof data] as object, "alpha")}</li>
								<li>beta: {Reflect.get(data[key as keyof typeof data] as object, "beta")}</li>
								<li>gamma: {Reflect.get(data[key as keyof typeof data] as object, "gamma")}</li>
							</ul>
						</Fragment>
						: <p key={key}>{key}: {value !== null ? value.toString(): ""}</p>
			})
		}
	</div>
}
```

> The component uses _useDeviceMotion_ hook to show device motion details.


## API

```tsx
useDeviceMotion(): DeviceMotionProps
```

> ### Params
>
>
>

> ### Returns
>
> __props__: device motion properties.
> - _DeviceMotionProps_  
>