[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/WebSocketSubject"](../modules/_rxjs_src_internal_observable_dom_websocketsubject_.md)

# External module: "rxjs/src/internal/observable/dom/WebSocketSubject"

## Index

### Classes

* [WebSocketSubject](../classes/_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubject.md)

### Interfaces

* [WebSocketSubjectConfig](../interfaces/_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubjectconfig.md)

### Type aliases

* [WebSocketMessage](_rxjs_src_internal_observable_dom_websocketsubject_.md#websocketmessage)

### Variables

* [WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT](_rxjs_src_internal_observable_dom_websocketsubject_.md#websocketsubject_invalid_error_object)

### Object literals

* [DEFAULT_WEBSOCKET_CONFIG](_rxjs_src_internal_observable_dom_websocketsubject_.md#default_websocket_config)

---

## Type aliases

<a id="websocketmessage"></a>

###  WebSocketMessage

**Ƭ WebSocketMessage**: *`string` \| `ArrayBuffer` \| `Blob` \| `ArrayBufferView`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:60*

___

## Variables

<a id="websocketsubject_invalid_error_object"></a>

### `<Const>` WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT

**● WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT**: *"WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"* = "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:57*

___

## Object literals

<a id="default_websocket_config"></a>

### `<Const>` DEFAULT_WEBSOCKET_CONFIG

**DEFAULT_WEBSOCKET_CONFIG**: *`object`*

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:51*

<a id="default_websocket_config.url"></a>

####  url

**● url**: *`string`* = ""

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:52*

___
<a id="default_websocket_config.deserializer"></a>

####  deserializer

▸ **deserializer**(e: *`MessageEvent`*): `any`

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:53*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `MessageEvent` |

**Returns:** `any`

___
<a id="default_websocket_config.serializer"></a>

####  serializer

▸ **serializer**(value: *`any`*): `string`

*Defined in rxjs/src/internal/observable/dom/WebSocketSubject.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `string`

___

___

