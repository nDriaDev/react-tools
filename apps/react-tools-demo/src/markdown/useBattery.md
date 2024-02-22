# useBattery
Hook for accessing and monitoring device battery status. Refer to [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useBattery)

## Usage

```tsx
export const UseBattery = () => {
	const status = useBattery();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(status).map(el => (
				<p key={el}>{el}: {el === "isSupported" ? status.isSupported ? "Yes" : "No": status[el as keyof typeof status]}</p>
			))
		}
	</div>)
}
```

> The component displays device battery information.


## API

```tsx
useBattery(opts?: { onChargingChange?: (evt: Event) => void, onChargingTimeChange?: (evt: Event) => void, onDischargingTimeChange?: (evt: Event) => void, onLevelChange?: (evt: Event) => void }): BatteryStatus
```

> ### Params
>
> - __opts?__: _Object_  
optional object parameter to listen battery events change.
> - __opts.onChargingChange?__: _(evt: Event) => void_  
callback that will be executed when chargingchange event is fired.
> - __opts.onChargingTimeChange?__: _(evt: Event) => void_  
callback that will be executed when chargingtimechange event is fired.
> - __opts.onDischargingTimeChange?__: _(evt: Event) => void_  
callback that will be executed when dischargingtimechange event is fired.
> - __opts.onLevelChange?__: _(evt: Event) => void_  
callback that will be executed when levelchange event is fired.
>


> ### Returns
>
> __result__:  _BatteryStatus_  
> Object with:
> - __isSupported__: boolean that indicates if Battery Status API is available.
> - __level__: number that indicates battery level: is a number between 0 and 1.
> - __charging__: boolean that indicates if battery is charging.
> - __chargingTime__: number that indicates time in seconds remaining to full charge, or infinity.
> - __dischargingTime__: number that indicates time in seconds remaining to empty charge, rounded in 15 minutes by API.
>