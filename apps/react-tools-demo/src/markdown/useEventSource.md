# useEventSource
Hook to handle an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useEventSource)

## API

```tsx
useEventSource<T>({ url, opts, events, immediateConnection, onOpen, onError, onMessage }: UseEventSourceProps): UseEventSourceResult<T>
```


> ### Params
>
> - __param__: _UseEventSourceProps_  
object
> - __param.url?__: _string|URL_  
string that represents the location of the remote resource serving the events/messages.
> - __param.opts?__: _EventSourceInit_  
options to configure the new connection. The possible entries are: __withCredentials__ -> boolean value, defaulting to false, indicating if CORS should be set to include credentials.
> - __param.events?__: _{name: string, handler?:(evt:MessagEvent)=>void}[]_  
array of objects with properties __name__ and __handler__ to listen specified events from source.
> - __param.immediateConnection?__: _boolean_  
boolean to start connection immediatly.
> - __param.onOpen?__: _(evt: Event)=>void_  
function that will be executed when connection is opened.
> - __param.onError?__: _(evt: Event)=>void_  
function that will be executed when an error occurred.
> - __param.onMessage?__: _(evt: MessageEvent<T>)=>void_  
function that will be executed when a message from without event arrived.
>



> ### Returns
>
> __result__:  _UseEventSourceResult_  
> Object with these properties:
> - __status__: string rapresenting eventsource state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__.
> - __data__: last data value arrived from eventSource.
> - __open__: function that opens connection.
> - __close__: function that closes connection.
>