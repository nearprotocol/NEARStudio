[rxjs](../README.md) > ["rxjs/src/internal/Notification"](../modules/_rxjs_src_internal_notification_.md) > [Notification](../classes/_rxjs_src_internal_notification_.notification.md)

# Class: Notification

Represents a push-based event or value that an [Observable](_rxjs_src_internal_observable_.observable.md) can emit. This class is particularly useful for operators that manage notifications, like [materialize](../modules/_rxjs_src_internal_operators_materialize_.md#materialize), [dematerialize](../modules/_rxjs_src_internal_operators_dematerialize_.md#dematerialize), [observeOn](../modules/_rxjs_src_internal_operators_observeon_.md#observeon), and others. Besides wrapping the actual delivered value, it also annotates it with metadata of, for instance, what type of push message it is (`next`, `error`, or `complete`).

*__see__*: [materialize](../modules/_rxjs_src_internal_operators_materialize_.md#materialize)

*__see__*: [dematerialize](../modules/_rxjs_src_internal_operators_dematerialize_.md#dematerialize)

*__see__*: [observeOn](../modules/_rxjs_src_internal_operators_observeon_.md#observeon)

*__class__*: Notification

## Type parameters
#### T 
## Hierarchy

**Notification**

## Index

### Constructors

* [constructor](_rxjs_src_internal_notification_.notification.md#constructor)

### Properties

* [error](_rxjs_src_internal_notification_.notification.md#error)
* [hasValue](_rxjs_src_internal_notification_.notification.md#hasvalue)
* [kind](_rxjs_src_internal_notification_.notification.md#kind)
* [value](_rxjs_src_internal_notification_.notification.md#value)
* [completeNotification](_rxjs_src_internal_notification_.notification.md#completenotification)
* [undefinedValueNotification](_rxjs_src_internal_notification_.notification.md#undefinedvaluenotification)

### Methods

* [accept](_rxjs_src_internal_notification_.notification.md#accept)
* [do](_rxjs_src_internal_notification_.notification.md#do)
* [observe](_rxjs_src_internal_notification_.notification.md#observe)
* [toObservable](_rxjs_src_internal_notification_.notification.md#toobservable)
* [createComplete](_rxjs_src_internal_notification_.notification.md#createcomplete)
* [createError](_rxjs_src_internal_notification_.notification.md#createerror)
* [createNext](_rxjs_src_internal_notification_.notification.md#createnext)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Notification**(kind: *`string`*, value?: *`T`*, error?: *`any`*): [Notification](_rxjs_src_internal_notification_.notification.md)

*Defined in rxjs/src/internal/Notification.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| kind | `string` |
| `Optional` value | `T` |
| `Optional` error | `any` |

**Returns:** [Notification](_rxjs_src_internal_notification_.notification.md)

___

## Properties

<a id="error"></a>

### `<Optional>` error

**● error**: *`any`*

*Defined in rxjs/src/internal/Notification.ts:24*

___
<a id="hasvalue"></a>

###  hasValue

**● hasValue**: *`boolean`*

*Defined in rxjs/src/internal/Notification.ts:22*

___
<a id="kind"></a>

###  kind

**● kind**: *`string`*

*Defined in rxjs/src/internal/Notification.ts:24*

___
<a id="value"></a>

### `<Optional>` value

**● value**: *`T`*

*Defined in rxjs/src/internal/Notification.ts:24*

___
<a id="completenotification"></a>

### `<Static>``<Private>` completeNotification

**● completeNotification**: *[Notification](_rxjs_src_internal_notification_.notification.md)<`any`>* =  new Notification('C')

*Defined in rxjs/src/internal/Notification.ts:99*

___
<a id="undefinedvaluenotification"></a>

### `<Static>``<Private>` undefinedValueNotification

**● undefinedValueNotification**: *[Notification](_rxjs_src_internal_notification_.notification.md)<`any`>* =  new Notification('N', undefined)

*Defined in rxjs/src/internal/Notification.ts:100*

___

## Methods

<a id="accept"></a>

###  accept

▸ **accept**(nextOrObserver: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> \| `function`*, error?: *`function`*, complete?: *`function`*): `any`

*Defined in rxjs/src/internal/Notification.ts:73*

Takes an Observer or its individual callback functions, and calls `observe` or `do` methods accordingly.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| nextOrObserver | [PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> \| `function` |  An Observer or the \`next\` callback. |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** `any`

___
<a id="do"></a>

###  do

▸ **do**(next: *`function`*, error?: *`function`*, complete?: *`function`*): `any`

*Defined in rxjs/src/internal/Notification.ts:52*

Given some [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) callbacks, deliver the value represented by the current Notification to the correctly corresponding callback.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| next | `function` |  An Observer \`next\` callback. |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** `any`

___
<a id="observe"></a>

###  observe

▸ **observe**(observer: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`>*): `any`

*Defined in rxjs/src/internal/Notification.ts:33*

Delivers to the given `observer` the value wrapped by this Notification.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | [PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> |  \- |

**Returns:** `any`

___
<a id="toobservable"></a>

###  toObservable

▸ **toObservable**(): [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/Notification.ts:86*

Returns a simple Observable that just delivers the notification represented by this Notification instance.

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>

___
<a id="createcomplete"></a>

### `<Static>` createComplete

▸ **createComplete**(): [Notification](_rxjs_src_internal_notification_.notification.md)<`any`>

*Defined in rxjs/src/internal/Notification.ts:134*

A shortcut to create a Notification instance of the type `complete`.

*__nocollapse__*: 

**Returns:** [Notification](_rxjs_src_internal_notification_.notification.md)<`any`>
The valueless "complete" Notification.

___
<a id="createerror"></a>

### `<Static>` createError

▸ **createError**<`T`>(err?: *`any`*): [Notification](_rxjs_src_internal_notification_.notification.md)<`T`>

*Defined in rxjs/src/internal/Notification.ts:125*

A shortcut to create a Notification instance of the type `error` from a given error.

*__nocollapse__*: 

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` err | `any` |

**Returns:** [Notification](_rxjs_src_internal_notification_.notification.md)<`T`>
The "error" Notification representing the
argument.

___
<a id="createnext"></a>

### `<Static>` createNext

▸ **createNext**<`T`>(value: *`T`*): [Notification](_rxjs_src_internal_notification_.notification.md)<`T`>

*Defined in rxjs/src/internal/Notification.ts:110*

A shortcut to create a Notification instance of the type `next` from a given value.

*__nocollapse__*: 

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  The \`next\` value. |

**Returns:** [Notification](_rxjs_src_internal_notification_.notification.md)<`T`>
The "next" Notification representing the
argument.

___

