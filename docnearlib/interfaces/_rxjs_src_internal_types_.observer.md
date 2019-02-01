[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [Observer](../interfaces/_rxjs_src_internal_types_.observer.md)

# Interface: Observer

## Type parameters
#### T 
## Hierarchy

**Observer**

## Implemented by

* [ConnectableSubscriber](../classes/_rxjs_src_internal_observable_connectableobservable_.connectablesubscriber.md)
* [OnErrorResumeNextSubscriber](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md)
* [RefCountSubscriber](../classes/_rxjs_src_internal_operators_refcount_.refcountsubscriber.md)
* [RefCountSubscriber](../classes/_rxjs_src_internal_observable_connectableobservable_.refcountsubscriber.md)
* [SequenceEqualCompareToSubscriber](../classes/_rxjs_src_internal_operators_sequenceequal_.sequenceequalcomparetosubscriber.md)
* [SubjectSubscriber](../classes/_rxjs_src_internal_subject_.subjectsubscriber.md)
* [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)

## Index

### Properties

* [closed](_rxjs_src_internal_types_.observer.md#closed)
* [complete](_rxjs_src_internal_types_.observer.md#complete)
* [error](_rxjs_src_internal_types_.observer.md#error)
* [next](_rxjs_src_internal_types_.observer.md#next)

---

## Properties

<a id="closed"></a>

### `<Optional>` closed

**● closed**: *`boolean`*

*Defined in rxjs/src/internal/types.ts:79*

___
<a id="complete"></a>

###  complete

**● complete**: *`function`*

*Defined in rxjs/src/internal/types.ts:82*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="error"></a>

###  error

**● error**: *`function`*

*Defined in rxjs/src/internal/types.ts:81*

#### Type declaration
▸(err: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |

**Returns:** `void`

___
<a id="next"></a>

###  next

**● next**: *`function`*

*Defined in rxjs/src/internal/types.ts:80*

#### Type declaration
▸(value: *`T`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `void`

___

