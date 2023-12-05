# useGeolocation
Hook to use user's geographic location. Refer to [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Usage

```tsx
export const UseGeolocation = () => {
	const [error, setError] = useState("")
	const [location] = useGeolocation({onError(error) {
		setError(error.message);
	}});

	return (<div style={{ textAlign: "center" }}>
		{
			error && <p style={{ color: 'red' }}>{error}</p>
		}
		<p >isSupported: {location?.isSupported}</p>
		<p >Timestamp: {location?.position?.timestamp}</p>
		<p >Coords:</p>
		<ul>
			{
				Object.entries(location?.position?.coords ?? []).map(([key, value]) => {
					return <li>
						{key}: {value}
					</li>
				})
			}
		</ul>
	</div>)
}
```

> The component displays geographic location info.


## API

```tsx
useGeolocation * - _first element_: is the location object with two properties: __isSupported__ and __position__.
```

> ### Params
>
> - __opts__: _Object_  
options to use geolocation.
> - __opts.locationOptions?__: _PositionOptions_  
An optional object which provides options for retrieval of the position data.
> - __opts.observe?__: _boolean_  
if true returns current position and observes position change, otherwise returns only position in that time.
> - __opts.onError?__: _GeolocationPositionError_  
callback that will be executed if there will be errors.
>

> ### Returns
>
> __results__:  __Array__:  
    - _GeoLocationObject|undefined_  
    - _(successCallback: PositionCallback, errorCallback?: PositionErrorCallback|null|undefined, options?: PositionOptions|undefined) => number|void_  
    - _()=>void_  
> Array with:
> - _first element_: is the location object with two properties: __isSupported__ and __position__.
> - _second element_: function to observe location changes and it receives one param __successCallback__ and two optional params __errorCallback__ and __options__.
> - _third element_: function to cancel previous observing location changes.
>