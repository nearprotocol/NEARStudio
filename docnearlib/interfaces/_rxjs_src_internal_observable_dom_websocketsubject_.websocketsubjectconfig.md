[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/WebSocketSubject"](../modules/_rxjs_src_internal_observable_dom_websocketsubject_.md) > [WebSocketSubjectConfig](../interfaces/_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md)

# Interface: WebSocketSubjectConfig

## Type parameters
#### T 
## Hierarchy

**WebSocketSubjectConfig**

## Index

### Properties

* [WebSocketCtor](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#websocketctor)
* [binaryType](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#binarytype)
* [closeObserver](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#closeobserver)
* [closingObserver](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#closingobserver)
* [deserializer](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#deserializer)
* [openObserver](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#openobserver)
* [protocol](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#protocol)
* [resultSelector](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#resultselector)
* [serializer](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#serializer)
* [url](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#url)

---

## Properties

<a id="websocketctor"></a>

### `<Optional>` WebSocketCtor

**● WebSocketCtor**: *`object`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:46*

A WebSocket constructor to use. This is useful for situations like using a WebSocket impl in Node (WebSocket is a DOM API), or for mocking a WebSocket for testing purposes

#### Type declaration

 constructor : function
⊕ **new __type**(url: *`string`*, protocols?: *`string` \| `string`[]*): `WebSocket`

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:46*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` protocols | `string` \| `string`[] |

**Returns:** `WebSocket`

___
<a id="binarytype"></a>

### `<Optional>` binaryType

**● binaryType**: *"blob" \| "arraybuffer"*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:48*

Sets the `binaryType` property of the underlying WebSocket.

___
<a id="closeobserver"></a>

### `<Optional>` closeObserver

**● closeObserver**: *[NextObserver](_rxjs_src_internal_types_.nextobserver.md)<`CloseEvent`>*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:35*

An Observer than watches when close events occur on the underlying webSocket

___
<a id="closingobserver"></a>

### `<Optional>` closingObserver

**● closingObserver**: *[NextObserver](_rxjs_src_internal_types_.nextobserver.md)<`void`>*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:40*

An Observer that watches when a close is about to occur due to unsubscription.

___
<a id="deserializer"></a>

### `<Optional>` deserializer

**● deserializer**: *`function`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:27*

A deserializer used for messages arriving on the socket from the server. Defaults to JSON.parse.

#### Type declaration
▸(e: *`MessageEvent`*): `T`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `MessageEvent` |

**Returns:** `T`

___
<a id="openobserver"></a>

### `<Optional>` openObserver

**● openObserver**: *[NextObserver](_rxjs_src_internal_types_.nextobserver.md)<`Event`>*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:31*

An Observer that watches when open events occur on the underlying web socket.

___
<a id="protocol"></a>

### `<Optional>` protocol

**● protocol**: *`string` \| `Array`<`string`>*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:15*

The protocol to use to connect

___
<a id="resultselector"></a>

### `<Optional>` resultSelector

**● resultSelector**: *`function`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:17*

*__deprecated__*:
 use [deserializer](_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md#deserializer)

#### Type declaration
▸(e: *`MessageEvent`*): `T`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `MessageEvent` |

**Returns:** `T`

___
<a id="serializer"></a>

### `<Optional>` serializer

**● serializer**: *`function`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:22*

A serializer used to create messages from passed values before the messages are sent to the server. Defaults to JSON.stringify.

#### Type declaration
▸(value: *`T`*): [WebSocketMessage](../modules/_rxjs_src_internal_observable_dom_websocketsubject_.md#websocketmessage)

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** [WebSocketMessage](../modules/_rxjs_src_internal_observable_dom_websocketsubject_.md#websocketmessage)

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:13*

The url of the socket server to connect to

___

