[rxjs](../README.md) > ["rxjs/src/internal/Subscriber"](../modules/_rxjs_src_internal_subscriber_.md) > [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)

# Class: Subscriber

Implements the [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) interface and extends the [Subscription](_rxjs_src_internal_subscription_.subscription.md) class. While the [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) is the public API for consuming the values of an [Observable](_rxjs_src_internal_observable_.observable.md), all Observers get converted to a Subscriber, in order to provide Subscription-like capabilities such as `unsubscribe`. Subscriber is a common type in RxJS, and crucial for implementing operators, but it is rarely used as a public API.

*__class__*: Subscriber

## Type parameters
#### T 
## Hierarchy

 [Subscription](_rxjs_src_internal_subscription_.subscription.md)

**↳ Subscriber**

↳  [SubjectSubscriber](_rxjs_src_internal_subject_.subjectsubscriber.md)

↳  [RefCountSubscriber](_rxjs_src_internal_operators_refcount_.refcountsubscriber.md)

↳  [RefCountSubscriber](_rxjs_src_internal_observable_connectableobservable_.refcountsubscriber.md)

↳  [SequenceEqualCompareToSubscriber](_rxjs_src_internal_operators_sequenceequal_.sequenceequalcomparetosubscriber.md)

## Implements

* [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)
* [Observer](../interfaces/_rxjs_src_internal_types_.observer.md)<`T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_subscriber_.subscriber.md#constructor)

### Properties

* [_parent](_rxjs_src_internal_subscriber_.subscriber.md#_parent)
* [_parentSubscription](_rxjs_src_internal_subscriber_.subscriber.md#_parentsubscription)
* [_parents](_rxjs_src_internal_subscriber_.subscriber.md#_parents)
* [closed](_rxjs_src_internal_subscriber_.subscriber.md#closed)
* [destination](_rxjs_src_internal_subscriber_.subscriber.md#destination)
* [isStopped](_rxjs_src_internal_subscriber_.subscriber.md#isstopped)
* [syncErrorThrowable](_rxjs_src_internal_subscriber_.subscriber.md#syncerrorthrowable)
* [syncErrorThrown](_rxjs_src_internal_subscriber_.subscriber.md#syncerrorthrown)
* [syncErrorValue](_rxjs_src_internal_subscriber_.subscriber.md#syncerrorvalue)
* [EMPTY](_rxjs_src_internal_subscriber_.subscriber.md#empty)

### Methods

* [__computed](_rxjs_src_internal_subscriber_.subscriber.md#__computed)
* [_complete](_rxjs_src_internal_subscriber_.subscriber.md#_complete)
* [_error](_rxjs_src_internal_subscriber_.subscriber.md#_error)
* [_next](_rxjs_src_internal_subscriber_.subscriber.md#_next)
* [_unsubscribeAndRecycle](_rxjs_src_internal_subscriber_.subscriber.md#_unsubscribeandrecycle)
* [add](_rxjs_src_internal_subscriber_.subscriber.md#add)
* [complete](_rxjs_src_internal_subscriber_.subscriber.md#complete)
* [error](_rxjs_src_internal_subscriber_.subscriber.md#error)
* [next](_rxjs_src_internal_subscriber_.subscriber.md#next)
* [remove](_rxjs_src_internal_subscriber_.subscriber.md#remove)
* [unsubscribe](_rxjs_src_internal_subscriber_.subscriber.md#unsubscribe)
* [create](_rxjs_src_internal_subscriber_.subscriber.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Subscriber**(destinationOrNext?: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`any`> \| `function`*, error?: *`function`*, complete?: *`function`*): [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)

*Overrides [Subscription](_rxjs_src_internal_subscription_.subscription.md).[constructor](_rxjs_src_internal_subscription_.subscription.md#constructor)*

*Defined in rxjs/src/internal/Subscriber.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` destinationOrNext | [PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`any`> \| `function` |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)

___

## Properties

<a id="_parent"></a>

### `<Protected>` _parent

**● _parent**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)* =  null

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[_parent](_rxjs_src_internal_subscription_.subscription.md#_parent)*

*Defined in rxjs/src/internal/Subscription.ts:35*

*__internal__*: 

___
<a id="_parentsubscription"></a>

### `<Private>` _parentSubscription

**● _parentSubscription**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md) \| `null`* =  null

*Defined in rxjs/src/internal/Subscriber.ts:50*

___
<a id="_parents"></a>

### `<Protected>` _parents

**● _parents**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)[]* =  null

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[_parents](_rxjs_src_internal_subscription_.subscription.md#_parents)*

*Defined in rxjs/src/internal/Subscription.ts:37*

*__internal__*: 

___
<a id="closed"></a>

###  closed

**● closed**: *`boolean`* = false

*Implementation of [Observer](../interfaces/_rxjs_src_internal_types_.observer.md).[closed](../interfaces/_rxjs_src_internal_types_.observer.md#closed)*

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[closed](_rxjs_src_internal_subscription_.subscription.md#closed)*

*Defined in rxjs/src/internal/Subscription.ts:32*

A flag to indicate whether this Subscription has already been unsubscribed.

*__type__*: {boolean}

___
<a id="destination"></a>

### `<Protected>` destination

**● destination**: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`any`> \| [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`any`>*

*Defined in rxjs/src/internal/Subscriber.ts:48*

___
<a id="isstopped"></a>

### `<Protected>` isStopped

**● isStopped**: *`boolean`* = false

*Defined in rxjs/src/internal/Subscriber.ts:47*

___
<a id="syncerrorthrowable"></a>

###  syncErrorThrowable

**● syncErrorThrowable**: *`boolean`* = false

*Defined in rxjs/src/internal/Subscriber.ts:45*

*__internal__*: 

___
<a id="syncerrorthrown"></a>

###  syncErrorThrown

**● syncErrorThrown**: *`boolean`* = false

*Defined in rxjs/src/internal/Subscriber.ts:44*

*__internal__*: 

___
<a id="syncerrorvalue"></a>

###  syncErrorValue

**● syncErrorValue**: *`any`* =  null

*Defined in rxjs/src/internal/Subscriber.ts:43*

*__internal__*: 

___
<a id="empty"></a>

### `<Static>` EMPTY

**● EMPTY**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)* =  (function(empty: any) {
    empty.closed = true;
    return empty;
  }(new Subscription()))

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[EMPTY](_rxjs_src_internal_subscription_.subscription.md#empty)*

*Defined in rxjs/src/internal/Subscription.ts:23*

*__nocollapse__*: 

___

## Methods

<a id="__computed"></a>

###  __computed

▸ **__computed**(): `this`

*Defined in rxjs/src/internal/Subscriber.ts:21*

**Returns:** `this`

___
<a id="_complete"></a>

### `<Protected>` _complete

▸ **_complete**(): `void`

*Defined in rxjs/src/internal/Subscriber.ts:149*

**Returns:** `void`

___
<a id="_error"></a>

### `<Protected>` _error

▸ **_error**(err: *`any`*): `void`

*Defined in rxjs/src/internal/Subscriber.ts:144*

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |

**Returns:** `void`

___
<a id="_next"></a>

### `<Protected>` _next

▸ **_next**(value: *`T`*): `void`

*Defined in rxjs/src/internal/Subscriber.ts:140*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `void`

___
<a id="_unsubscribeandrecycle"></a>

###  _unsubscribeAndRecycle

▸ **_unsubscribeAndRecycle**(): [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>

*Defined in rxjs/src/internal/Subscriber.ts:155*

*__deprecated__*:
 This is an internal implementation detail, do not use.

**Returns:** [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>

___
<a id="add"></a>

###  add

▸ **add**(teardown: *[TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[add](_rxjs_src_internal_subscription_.subscription.md#add)*

*Defined in rxjs/src/internal/Subscription.ts:143*

Adds a tear down to be called during the unsubscribe() of this Subscription.

If the tear down being added is a subscription that is already unsubscribed, is the same reference `add` is being called on, or is `Subscription.EMPTY`, it will not be added.

If this subscription is already in an `closed` state, the passed tear down logic will be executed immediately.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| teardown | [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic) |  The additional logic to execute on teardown. |

**Returns:** [Subscription](_rxjs_src_internal_subscription_.subscription.md)
Returns the Subscription used or created to be
added to the inner subscriptions list. This Subscription can be used with
`remove()` to remove the passed teardown logic from the inner subscriptions
list.

___
<a id="complete"></a>

###  complete

▸ **complete**(): `void`

*Defined in rxjs/src/internal/Subscriber.ts:125*

The [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) callback to receive a valueless notification of type `complete` from the Observable. Notifies the Observer that the Observable has finished sending push-based notifications.

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(err?: *`any`*): `void`

*Defined in rxjs/src/internal/Subscriber.ts:112*

The [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) callback to receive notifications of type `error` from the Observable, with an attached `Error`. Notifies the Observer that the Observable has experienced an error condition.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` err | `any` |

**Returns:** `void`

___
<a id="next"></a>

###  next

▸ **next**(value?: *`T`*): `void`

*Defined in rxjs/src/internal/Subscriber.ts:99*

The [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) callback to receive notifications of type `next` from the Observable, with a value. The Observable may call this method 0 or more times.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `T` |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(subscription: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)*): `void`

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[remove](_rxjs_src_internal_subscription_.subscription.md#remove)*

*Defined in rxjs/src/internal/Subscription.ts:187*

Removes a Subscription from the internal list of subscriptions that will unsubscribe during the unsubscribe process of this Subscription.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| subscription | [Subscription](_rxjs_src_internal_subscription_.subscription.md) |  The subscription to remove. |

**Returns:** `void`

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Implementation of [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md).[unsubscribe](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md#unsubscribe)*

*Overrides [Subscription](_rxjs_src_internal_subscription_.subscription.md).[unsubscribe](_rxjs_src_internal_subscription_.subscription.md#unsubscribe)*

*Defined in rxjs/src/internal/Subscriber.ts:132*

**Returns:** `void`

___
<a id="create"></a>

### `<Static>` create

▸ **create**<`T`>(next?: *`function`*, error?: *`function`*, complete?: *`function`*): [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>

*Defined in rxjs/src/internal/Subscriber.ts:35*

A static factory for a Subscriber, given a (potentially partial) definition of an Observer.

*__nocollapse__*: 

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` next | `function` |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>
A Subscriber wrapping the (partially defined)
Observer represented by the given arguments.

___

