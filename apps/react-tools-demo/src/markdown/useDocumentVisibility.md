# useDocumentVisibility
Hook to track document visibility. Refers to [Document VisibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState).

## Usage

```tsx
export const UseDocumentVisibility = () => {
	const status = useDocumentVisibility();
	const [messages, setMessages] = useState <{ status: DocumentVisibilityState, date: string }[]>([]);

	useEffect(() => {
		setMessages(m => ([...m, {status: status, date: new Date().toLocaleTimeString()}]))
	}, [status])

	return (<div>
		<h3>Status:</h3>
		{
			messages.map(el => (
				<p key={el.date}>{el.date}: {el.status}</p>
			))
		}
	</div>);
}
```

> The component tracks every document visibility status change and display them on screen with date they taking place. Minimize window or change tab to show them.


## API

```tsx
useDocumentVisibility (): DocumentVisibilityState 
```

> ### Params
>
>
>

> ### Returns
>
> __documentVisibility__
> - _DocumentVisibilityState_  
>