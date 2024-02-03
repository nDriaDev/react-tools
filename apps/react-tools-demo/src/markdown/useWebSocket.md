# useWebSocket
Hook for creating and managing a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to a server, as well as for sending and receiving data on the connection. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useWebSocket)

## API

```tsx
useWebSocket<T = string | ArrayBuffer | Blob> ({ url, protocols, binaryType, onOpen, onMessage, onError, onClose, immediateConnection, bufferingData, autoReconnect }: UseWebSocketProps): UseWebSocketResult<T>
```

> ### Params
>
> - __param__: _UseWebSocketProps_  
object
> - __param.url?__: _UseWebSocketProps_  
the URL to which to connect; this should be the URL to which the WebSocket server will respond.
> - __param.protocols?__: _UseWebSocketProps_  
either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols.
> - __param.binaryType?__: _UseWebSocketProps_  
the type of binary data being received over the WebSocket connection.
> - __param.immediateConnection?__: _UseWebSocketProps_  
boolean to open webSocket connection immediatly.
> - __param.onOpen?__: _UseWebSocketProps_  
function that will be executed when webSocket connection has been opened.
> - __param.onMessage?__: _UseWebSocketProps_  
function that will be executed when message arrived from webSocket.
> - __param.onError?__: _UseWebSocketProps_  
function that will be executed when an error occurred.
> - __param.onClose?__: _UseWebSocketProps_  
function that will be executed when webSocket connection has been closed.
> - __param.bufferingData?__: _UseWebSocketProps_  
boolean that indicates to use a buffer to keep data sent if connection aren't already opened.
> - __param.autoReconnect?__: _UseWebSocketProps_  
boolean or object with properties __retries__, __delay__ and __onFailed__. If an error closes connection and its value isn't false or undefined, a connection will be restored every _delay_ milliseconds for __retries__ time: if connection won't be restored __onFailed__ function will be executed if it is present.
>

> ### Returns
>
> __result__:  _UseWebSocketResult_  
> Object with these properties:
> - __status__: string rapresenting webSocket state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__.
> - __data__: last data value arrived from webSocket.
> - __open__: function that opens connection with optional _url_ param .
> - __send__: function that sends data by webSocket.
> - __close__: function that closes connection with optional _code_ and _reason_ params.
>