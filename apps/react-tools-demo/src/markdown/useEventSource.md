# useEventSource
Hook to handle an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format.

## API

```tsx
useEventSource<T>({ url, opts, events, immediateConnection, onOpen, onError, onMessage }: UseEventSourceProps): UseEventSourceResult<T>
```

> ### Params
>
> - __param__: _UseEventSourceProps_  
object
> - __param.url__: _UseEventSourceProps_  
string that represents the location of the remote resource serving the events/messages.
> - __param.opts?__: _UseEventSourceProps_  
options to configure the new connection. The possible entries are: __withCredentials__ -> boolean value, defaulting to false, indicating if CORS should be set to include credentials.
> - __param.events?__: _UseEventSourceProps_  
array of objects with properties __name__ and __handler__ to listen specified events from source.
> - __param.immediateConnection?__: _UseEventSourceProps_  
boolean to start connection immediatly.
> - __param.onOpen?__: _UseEventSourceProps_  
function that will be executed when connection is opened.
> - __param.onError?__: _UseEventSourceProps_  
function that will be executed when an error occurred.
> - __param.onMessage?__: _UseEventSourceProps_  
function that will be executed when a message from without event arrived.
>

> ### Returns
>
> __result__:  _UseEventSourceResult_  
> Object with these properties:
> - __status__: string rapresenting eventsource state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__
> - __data__: last data value arrived from eventSource.
> - __open__: function that opens connection.
> - __close__: function that closes connection.
>