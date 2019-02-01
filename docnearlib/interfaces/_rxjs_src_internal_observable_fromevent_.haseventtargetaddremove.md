[rxjs](../README.md) > ["rxjs/src/internal/observable/fromEvent"](../modules/_rxjs_src_internal_observable_fromevent_.md) > [HasEventTargetAddRemove](../interfaces/_rxjs_src_internal_observable_fromevent_.haseventtargetaddremove.md)

# Interface: HasEventTargetAddRemove

## Type parameters
#### E 
## Hierarchy

**HasEventTargetAddRemove**

## Index

### Methods

* [addEventListener](_rxjs_src_internal_observable_fromevent_.haseventtargetaddremove.md#addeventlistener)
* [removeEventListener](_rxjs_src_internal_observable_fromevent_.haseventtargetaddremove.md#removeeventlistener)

---

## Methods

<a id="addeventlistener"></a>

###  addEventListener

▸ **addEventListener**(type: *`string`*, listener: *`function` \| `null`*, options?: *`boolean` \| [AddEventListenerOptions](_rxjs_src_internal_observable_fromevent_.addeventlisteneroptions.md)*): `void`

*Defined in rxjs/src/internal/observable/fromEvent.ts:30*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` \| `null` |
| `Optional` options | `boolean` \| [AddEventListenerOptions](_rxjs_src_internal_observable_fromevent_.addeventlisteneroptions.md) |

**Returns:** `void`

___
<a id="removeeventlistener"></a>

###  removeEventListener

▸ **removeEventListener**(type: *`string`*, listener?: *`function` \| `null`*, options?: *[EventListenerOptions](_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md) \| `boolean`*): `void`

*Defined in rxjs/src/internal/observable/fromEvent.ts:31*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` listener | `function` \| `null` |
| `Optional` options | [EventListenerOptions](_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md) \| `boolean` |

**Returns:** `void`

___

