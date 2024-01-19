# usePermission
Hook to query the status of API permissions attributed to the current context. Refer to [PermissionAPI](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API).

## Usage

```tsx
export const UsePermission = () => {
	const [accelerometer] = usePermission("accelerometer");
	const [camera] = usePermission("camera");
	const [microphone] = usePermission("microphone");
	const [notifications] = usePermission("notifications");
	const [speaker] = usePermission("speaker-selection");

	return <div>
		<p>accelerometer: {accelerometer}</p>
		<p>camera: {camera}</p>
		<p>microphone: {microphone}</p>
		<p>notifications: {notifications}</p>
		<p>speaker: {speaker}</p>
	</div>
}
```

> The component uses _usePermission_ hook to check permission status of accelerometer, camera, microphone, notifications ans speaker.


## API

```tsx
usePermission(permission: TPermissionName): UsePermissionResult
```

> ### Params
>
> - __permission__: _TPermissionName_  
name of the API whose permissions you want to query.
>

> ### Returns
>
> __result__:  _UsePermissionResult_  
> Array of two elements:
> - first element: current state of the request permission: one of __'asking'__, __'granted'__, __'denied'__, __'prompt'__ or __'not supported'__.
> - second element: function to manual query fot permission status.
>