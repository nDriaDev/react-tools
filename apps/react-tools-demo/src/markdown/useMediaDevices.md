# useMediaDevices
Hook to use [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface methods, that give access to any hardware source of media data.

## Usage

```tsx
export const UseMediaDevices = () => {
	const action = useMediaDevices("devicesList");
	const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

	const onClick = async () => {
		try {
			const devices = await action(async () => {
				setDevices(await action());
			});
			setDevices(devices);
		} catch (error) {
			alert((error as Error).message);
		}
	}

	return <div style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
		<button onClick={onClick}>Acquire</button>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
			<div style={{textAlign: "center"}}>
				<p>Camera {devices.filter(el => el.kind === "videoinput").length}</p>
				<ul>
					{
						devices.filter(el => el.kind === "videoinput").map(el => <li key={el.label}>{el.label}</li>)
					}
				</ul>
			</div>
			<div style={{textAlign: "center"}}>
				<p>Spearker {devices.filter(el => el.kind === "audiooutput").length}</p>
				<ul>
					{
						devices.filter(el => el.kind === "audiooutput").map(el => <li key={el.label}>{el.label}</li>)
					}
				</ul>
			</div>
			<div style={{textAlign: "center"}}>
				<p>Microphones {devices.filter(el => el.kind === "audioinput").length}</p>
				<ul>
					{
						devices.filter(el => el.kind === "audioinput").map(el => <li key={el.label}>{el.label}</li>)
					}
				</ul>
			</div>
		</div>
	</div>
}
```

> The component uses _useMediaDevices_ to get list of all media devices and groups them into _CAMERA_ _SPEAKERS_ and _MICROPHONE_ sections.


## API

```tsx
useMediaDevices(action: UseMediaDevicesProps): UseMediaDevicesResult
```

> ### Params
>
> - __action__: _UseMediaDevicesProps_  
it is a string that identifies which method to return as a result. It can be _devicesList_, _supportedConstraintsList_, _DisplayCapture_, or _mediaInputCapture_.
>

> ### Returns
>
> __result__:  _UseMediaDevicesResult_  
> if __action__ is:
> - _devicesList_: so _result_ is __enumeratedDevices__ method of MediaDevices interface.
> - _supportedConstraintsList_: so _result_ is __getSupportedConstraints__ method of MediaDevices interface.
> - _DisplayCapture_: so _result_ is __getDisplayMedia__ method of MediaDevices interface.
> - _mediaInputCapture_: so _result_ is __getUserMedia__ method of MediaDevices interface.
>