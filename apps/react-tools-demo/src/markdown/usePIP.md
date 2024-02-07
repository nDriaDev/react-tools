# usePIP
Hook to use PIP [(Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePIP)

## Usage

```tsx
export const UsePIP = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [show, setShow] = useState(true);
	const { isSupported, openPIP } = usePIP({
		target: videoRef,
		onOpen: () => setShow(false),
		onClose: () => setShow(true)
	});

	return <div>
		<p>Supported: {isSupported ? 'Yes' : 'No'}</p>
		{
			show &&
			<>
				<video ref={videoRef} width="400" controls>
					<source src={video} type="video/mp4" />
					Your browser does not support HTML video.
				</video>
				<div>
					<button onClick={openPIP}>Open PIP</button>
				</div>
			</>
		}
	</div>
}

```

> The component uses _usePIP_ hook to show a video and a button to enable PIP.


## API

```tsx
usePIP({ onOpen, onOpened, onClose, onError, target }: UsePIPProps): UsePIPResult
```

> ### Params
>
> - __param__: _UsePIPProps_  
object
> - __param.target__: _RefObject<HTMLVideoElement>|HTMLVideoElement_  
element to PIP.
> - __param.onOpen?__: _()=>void_  
function that will be executed on PIP opening.
> - __param.onOpened?__: _(pip: PictureInPictureWindow)=>void_  
function that will be executed when PIP is opened.
> - __param.onClose?__: _(evt: PictureInPictureEvent)=>void_  
function that will be executed on PIP closing.
> - __param.onError?__: _(err: unknown)=>void_  
function that will be executed when error is throwing.
>


> ### Returns
>
> __result__:  _UsePIPResult_  
> Object with three properties:
> - __isSupported__: boolean that indicates if PIP is supported or not.
> - __openPIP__: function to open PIP.
> - __closePIP__: function to close PIP.
>