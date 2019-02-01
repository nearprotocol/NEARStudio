[rxjs](../README.md) > ["rxjs/src/internal/Subscription"](../modules/_rxjs_src_internal_subscription_.md) > [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

# Class: Subscription

Represents a disposable resource, such as the execution of an Observable. A Subscription has one important method, `unsubscribe`, that takes no argument and just disposes the resource held by the subscription.

Additionally, subscriptions may be grouped together through the `add()` method, which will attach a child Subscription to the current Subscription. When a Subscription is unsubscribed, all its children (and its grandchildren) will be unsubscribed as well.

*__class__*: Subscription

## Hierarchy

**Subscription**

↳  [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)

↳  [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)

↳  [Action](_rxjs_src_internal_scheduler_action_.action.md)

## Implements

* [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_subscription_.subscription.md#constructor)

### Properties

* [_parent](_rxjs_src_internal_subscription_.subscription.md#_parent)
* [_parents](_rxjs_src_internal_subscription_.subscription.md#_parents)
* [_subscriptions](_rxjs_src_internal_subscription_.subscription.md#_subscriptions)
* [closed](_rxjs_src_internal_subscription_.subscription.md#closed)
* [EMPTY](_rxjs_src_internal_subscription_.subscription.md#empty)

### Methods

* [_addParent](_rxjs_src_internal_subscription_.subscription.md#_addparent)
* [add](_rxjs_src_internal_subscription_.subscription.md#add)
* [remove](_rxjs_src_internal_subscription_.subscription.md#remove)
* [unsubscribe](_rxjs_src_internal_subscription_.subscription.md#unsubscribe)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Subscription**(unsubscribe?: *`function`*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Defined in rxjs/src/internal/Subscription.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` unsubscribe | `function` |

**Returns:** [Subscription](_rxjs_src_internal_subscription_.subscription.md)

___

## Properties

<a id="_parent"></a>

### `<Protected>` _parent

**● _parent**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)* =  null

*Defined in rxjs/src/internal/Subscription.ts:35*

*__internal__*: 

___
<a id="_parents"></a>

### `<Protected>` _parents

**● _parents**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)[]* =  null

*Defined in rxjs/src/internal/Subscription.ts:37*

*__internal__*: 

___
<a id="_subscriptions"></a>

### `<Private>` _subscriptions

**● _subscriptions**: *[SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)[]* =  null

*Defined in rxjs/src/internal/Subscription.ts:39*

*__internal__*: 

___
<a id="closed"></a>

###  closed

**● closed**: *`boolean`* = false

*Implementation of [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md).[closed](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md#closed)*

*Defined in rxjs/src/internal/Subscription.ts:32*

A flag to indicate whether this Subscription has already been unsubscribed.

*__type__*: {boolean}

___
<a id="empty"></a>

### `<Static>` EMPTY

**● EMPTY**: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)* =  (function(empty: any) {
    empty.closed = true;
    return empty;
  }(new Subscription()))

*Defined in rxjs/src/internal/Subscription.ts:23*

*__nocollapse__*: 

___

## Methods

<a id="_addparent"></a>

### `<Private>` _addParent

▸ **_addParent**(parent: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)*): `void`

*Defined in rxjs/src/internal/Subscription.ts:198*

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| parent | [Subscription](_rxjs_src_internal_subscription_.subscription.md) |

**Returns:** `void`

___
<a id="add"></a>

###  add

▸ **add**(teardown: *[TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

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
<a id="remove"></a>

###  remove

▸ **remove**(subscription: *[Subscription](_rxjs_src_internal_subscription_.subscription.md)*): `void`

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

*Defined in rxjs/src/internal/Subscription.ts:57*

Disposes the resources held by the subscription. May, for instance, cancel an ongoing Observable execution or cancel any other type of work that started when the Subscription was created.

**Returns:** `void`

___

