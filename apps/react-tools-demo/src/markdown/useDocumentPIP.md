# useDocumentPIP
Hook to use Document PIP [(Document-Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useDocumentPIP)

## Usage

```tsx
export const UseDocumentPIP = () => {
	const [show, setShow] = useState(true);
	const [c, setC] = useState(0);
	const { isSupported, openPIP, PipWindow, closePIP } = useDocumentPIP({
		onOpened: useCallback(() => setShow(false), []),
		onClose: useCallback(() => setShow(true), [])
	});

	return <div>
		<p>Window Counter</p>
		<button onClick={() => setC(c => c + 1)}>{c}</button>
		<p>Supported: {isSupported ? 'Yes' : 'No'}</p>
		{
			show &&
			<>
				<div>
					<button
						onClick={() => openPIP({
							inheritCSS: true
						})}
					>
						Open PIP
					</button>
				</div>
			</>
		}
		<PipWindow>
			<div style={{display: 'flex', flexDirection: "column", alignItems: "center", width: "100%", gap: 20}}>
				<h4 style={{textAlign: "center"}}>PIP Window Counter</h4>
				<button onClick={() => setC(c => c + 1)}>{c}</button>
				<button onClick={closePIP}>Close</button>
			</div>
		</PipWindow>
	</div>
}
```

> The component uses _useDocumentPIP_ hook to show in a separate window the counter showed renderes by the component.


## API

```tsx
useDocumentPIP({ options: { inheritCSS, window: wind } = { window: { height: 300, width: 450 } }, onOpen, onOpened, onClose, onError }: UseDocumentPIPProps): UseDocumentPIPResult
```

> ### Params
>
> - __param__: _UseDocumentPIPProps_  
object
> - __param.options?__: _DocumentPIPOptions_  
object
> - __param.options.inheritCSS?__: _boolean_  
boolean that indicates if PIP window will inherit CSS from main window.
> - __param.options.window?__: _Object_  
object
> - __param.options.width=450?__: _number_  
number that indicates PIP window width. Default value is 450.
> - __param.options.height=300?__: _number_  
number that indicates PIP window height. Default value is 300.
> - __param.onOpen?__: _()=>void_  
function that will be executed on PIP opening.
> - __param.onOpened?__: _(evt: DocumentPictureInPictureEvent)=>void_  
function that will be executed when PIP is opened.
> - __param.onClose?__: _(evt: PageTransitionEvent)=>void_  
function that will be executed on PIP closing.
> - __param.onError?__: _(err: unknown)=>void_  
function that will be executed when error is throwing.
>

> ### Returns
>
> __result__:  _UseDocumentPIPResult_  
> Object with four properties:
> - __isSupported__: boolean that indicates if PIP is supported or not.
> - __openPIP__: function to open PIP.
> - __closePIP__: function to close PIP.
> - __PipWindow__: Component that wraps the element to render in Document Picture in Picture.
>