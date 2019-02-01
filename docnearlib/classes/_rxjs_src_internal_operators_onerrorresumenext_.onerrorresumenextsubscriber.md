[rxjs](../README.md) > ["rxjs/src/internal/operators/onErrorResumeNext"](../modules/_rxjs_src_internal_operators_onerrorresumenext_.md) > [OnErrorResumeNextSubscriber](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md)

# Class: OnErrorResumeNextSubscriber

## Type parameters
#### T 
#### R 
## Hierarchy

 `OuterSubscriber`<`T`, `R`>

**↳ OnErrorResumeNextSubscriber**

## Implements

* [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)
* [Observer](../interfaces/_rxjs_src_internal_types_.observer.md)<`T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#constructor)

### Properties

* [_parent](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#_parent)
* [_parents](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#_parents)
* [closed](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#closed)
* [destination](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#destination)
* [isStopped](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#isstopped)
* [nextSources](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#nextsources)
* [syncErrorThrowable](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#syncerrorthrowable)
* [syncErrorThrown](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#syncerrorthrown)
* [syncErrorValue](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#syncerrorvalue)
* [EMPTY](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#empty)

### Methods

* [__computed](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#__computed)
* [_complete](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#_complete)
* [_error](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#_error)
* [_next](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#_next)
* [_unsubscribeAndRecycle](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#_unsubscribeandrecycle)
* [add](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#add)
* [complete](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#complete)
* [error](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#error)
* [next](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#next)
* [notifyComplete](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#notifycomplete)
* [notifyError](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#notifyerror)
* [notifyNext](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#notifynext)
* [remove](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#remove)
* [subscribeToNextSource](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#subscribetonextsource)
* [unsubscribe](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#unsubscribe)
* [create](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md#create)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OnErrorResumeNextSubscriber**(destination: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, nextSources: *`Array`<[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>>*): [OnErrorResumeNextSubscriber](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md)

*Overrides [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[constructor](_rxjs_src_internal_subscriber_.subscriber.md#constructor)*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:131*

**Parameters:**

| Name | Type |
| ------ | ------ |
| destination | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| nextSources | `Array`<[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>> |

**Returns:** [OnErrorResumeNextSubscriber](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md)

___

## Properties

<a id="_parent"></a>

### `<Protected>` _parent

**● _parent**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)* =  null

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[_parent](_rxjs_src_internal_subscription_.subscription.md#_parent)*

*Defined in rxjs/src/internal/Subscription.ts:35*

*__internal__*: 

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

**● destination**: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*

*Overrides [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[destination](_rxjs_src_internal_subscriber_.subscriber.md#destination)*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:132*

___
<a id="isstopped"></a>

### `<Protected>` isStopped

**● isStopped**: *`boolean`* = false

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[isStopped](_rxjs_src_internal_subscriber_.subscriber.md#isstopped)*

*Defined in rxjs/src/internal/Subscriber.ts:47*

___
<a id="nextsources"></a>

### `<Private>` nextSources

**● nextSources**: *`Array`<[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>>*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:133*

___
<a id="syncerrorthrowable"></a>

###  syncErrorThrowable

**● syncErrorThrowable**: *`boolean`* = false

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[syncErrorThrowable](_rxjs_src_internal_subscriber_.subscriber.md#syncerrorthrowable)*

*Defined in rxjs/src/internal/Subscriber.ts:45*

*__internal__*: 

___
<a id="syncerrorthrown"></a>

###  syncErrorThrown

**● syncErrorThrown**: *`boolean`* = false

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[syncErrorThrown](_rxjs_src_internal_subscriber_.subscriber.md#syncerrorthrown)*

*Defined in rxjs/src/internal/Subscriber.ts:44*

*__internal__*: 

___
<a id="syncerrorvalue"></a>

###  syncErrorValue

**● syncErrorValue**: *`any`* =  null

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[syncErrorValue](_rxjs_src_internal_subscriber_.subscriber.md#syncerrorvalue)*

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

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[__computed](_rxjs_src_internal_subscriber_.subscriber.md#__computed)*

*Defined in rxjs/src/internal/Subscriber.ts:21*

**Returns:** `this`

___
<a id="_complete"></a>

### `<Protected>` _complete

▸ **_complete**(): `void`

*Overrides [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[_complete](_rxjs_src_internal_subscriber_.subscriber.md#_complete)*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:150*

**Returns:** `void`

___
<a id="_error"></a>

### `<Protected>` _error

▸ **_error**(err: *`any`*): `void`

*Overrides [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[_error](_rxjs_src_internal_subscriber_.subscriber.md#_error)*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:145*

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |

**Returns:** `void`

___
<a id="_next"></a>

### `<Protected>` _next

▸ **_next**(value: *`T`*): `void`

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[_next](_rxjs_src_internal_subscriber_.subscriber.md#_next)*

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

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[_unsubscribeAndRecycle](_rxjs_src_internal_subscriber_.subscriber.md#_unsubscribeandrecycle)*

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

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[complete](_rxjs_src_internal_subscriber_.subscriber.md#complete)*

*Defined in rxjs/src/internal/Subscriber.ts:125*

The [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) callback to receive a valueless notification of type `complete` from the Observable. Notifies the Observer that the Observable has finished sending push-based notifications.

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(err?: *`any`*): `void`

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[error](_rxjs_src_internal_subscriber_.subscriber.md#error)*

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

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[next](_rxjs_src_internal_subscriber_.subscriber.md#next)*

*Defined in rxjs/src/internal/Subscriber.ts:99*

The [Observer](../interfaces/_rxjs_src_internal_types_.observer.md) callback to receive notifications of type `next` from the Observable, with a value. The Observable may call this method 0 or more times.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `T` |

**Returns:** `void`

___
<a id="notifycomplete"></a>

###  notifyComplete

▸ **notifyComplete**(innerSub: *`InnerSubscriber`<`T`, `any`>*): `void`

*Overrides OuterSubscriber.notifyComplete*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:141*

**Parameters:**

| Name | Type |
| ------ | ------ |
| innerSub | `InnerSubscriber`<`T`, `any`> |

**Returns:** `void`

___
<a id="notifyerror"></a>

###  notifyError

▸ **notifyError**(error: *`any`*, innerSub: *`InnerSubscriber`<`T`, `any`>*): `void`

*Overrides OuterSubscriber.notifyError*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:137*

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `any` |
| innerSub | `InnerSubscriber`<`T`, `any`> |

**Returns:** `void`

___
<a id="notifynext"></a>

###  notifyNext

▸ **notifyNext**(outerValue: *`T`*, innerValue: *`R`*, outerIndex: *`number`*, innerIndex: *`number`*, innerSub: *`InnerSubscriber`<`T`, `R`>*): `void`

*Inherited from OuterSubscriber.notifyNext*

*Defined in rxjs/src/internal/OuterSubscriber.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| outerValue | `T` |
| innerValue | `R` |
| outerIndex | `number` |
| innerIndex | `number` |
| innerSub | `InnerSubscriber`<`T`, `R`> |

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
<a id="subscribetonextsource"></a>

### `<Private>` subscribeToNextSource

▸ **subscribeToNextSource**(): `void`

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:155*

**Returns:** `void`

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Implementation of [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md).[unsubscribe](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md#unsubscribe)*

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[unsubscribe](_rxjs_src_internal_subscriber_.subscriber.md#unsubscribe)*

*Overrides [Subscription](_rxjs_src_internal_subscription_.subscription.md).[unsubscribe](_rxjs_src_internal_subscription_.subscription.md#unsubscribe)*

*Defined in rxjs/src/internal/Subscriber.ts:132*

**Returns:** `void`

___
<a id="create"></a>

### `<Static>` create

▸ **create**<`T`>(next?: *`function`*, error?: *`function`*, complete?: *`function`*): [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>

*Inherited from [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md).[create](_rxjs_src_internal_subscriber_.subscriber.md#create)*

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

