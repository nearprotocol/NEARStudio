[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)

# Interface: SchedulerAction

## Type parameters
#### T 
## Hierarchy

 [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

**↳ SchedulerAction**

## Implements

* [SubscriptionLike](_rxjs_src_internal_types_.subscriptionlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_types_.scheduleraction.md#constructor)

### Properties

* [_parent](_rxjs_src_internal_types_.scheduleraction.md#_parent)
* [_parents](_rxjs_src_internal_types_.scheduleraction.md#_parents)
* [closed](_rxjs_src_internal_types_.scheduleraction.md#closed)
* [EMPTY](_rxjs_src_internal_types_.scheduleraction.md#empty)

### Methods

* [add](_rxjs_src_internal_types_.scheduleraction.md#add)
* [remove](_rxjs_src_internal_types_.scheduleraction.md#remove)
* [schedule](_rxjs_src_internal_types_.scheduleraction.md#schedule)
* [unsubscribe](_rxjs_src_internal_types_.scheduleraction.md#unsubscribe)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SchedulerAction**(unsubscribe?: *`function`*): [SchedulerAction](_rxjs_src_internal_types_.scheduleraction.md)

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[constructor](../classes/_rxjs_src_internal_subscription_.subscription.md#constructor)*

*Defined in rxjs/src/internal/Subscription.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` unsubscribe | `function` |

**Returns:** [SchedulerAction](_rxjs_src_internal_types_.scheduleraction.md)

___

## Properties

<a id="_parent"></a>

### `<Protected>` _parent

**● _parent**: *[Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)* =  null

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[_parent](../classes/_rxjs_src_internal_subscription_.subscription.md#_parent)*

*Defined in rxjs/src/internal/Subscription.ts:35*

*__internal__*: 

___
<a id="_parents"></a>

### `<Protected>` _parents

**● _parents**: *[Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)[]* =  null

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[_parents](../classes/_rxjs_src_internal_subscription_.subscription.md#_parents)*

*Defined in rxjs/src/internal/Subscription.ts:37*

*__internal__*: 

___
<a id="closed"></a>

###  closed

**● closed**: *`boolean`* = false

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[closed](../classes/_rxjs_src_internal_subscription_.subscription.md#closed)*

*Defined in rxjs/src/internal/Subscription.ts:32*

A flag to indicate whether this Subscription has already been unsubscribed.

*__type__*: {boolean}

___
<a id="empty"></a>

### `<Static>` EMPTY

**● EMPTY**: *[Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)* =  (function(empty: any) {
    empty.closed = true;
    return empty;
  }(new Subscription()))

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[EMPTY](../classes/_rxjs_src_internal_subscription_.subscription.md#empty)*

*Defined in rxjs/src/internal/Subscription.ts:23*

*__nocollapse__*: 

___

## Methods

<a id="add"></a>

###  add

▸ **add**(teardown: *[TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)*): [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[add](../classes/_rxjs_src_internal_subscription_.subscription.md#add)*

*Defined in rxjs/src/internal/Subscription.ts:143*

Adds a tear down to be called during the unsubscribe() of this Subscription.

If the tear down being added is a subscription that is already unsubscribed, is the same reference `add` is being called on, or is `Subscription.EMPTY`, it will not be added.

If this subscription is already in an `closed` state, the passed tear down logic will be executed immediately.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| teardown | [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic) |  The additional logic to execute on teardown. |

**Returns:** [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)
Returns the Subscription used or created to be
added to the inner subscriptions list. This Subscription can be used with
`remove()` to remove the passed teardown logic from the inner subscriptions
list.

___
<a id="remove"></a>

###  remove

▸ **remove**(subscription: *[Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)*): `void`

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[remove](../classes/_rxjs_src_internal_subscription_.subscription.md#remove)*

*Defined in rxjs/src/internal/Subscription.ts:187*

Removes a Subscription from the internal list of subscriptions that will unsubscribe during the unsubscribe process of this Subscription.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| subscription | [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md) |  The subscription to remove. |

**Returns:** `void`

___
<a id="schedule"></a>

###  schedule

▸ **schedule**(state?: *`T`*, delay?: *`number`*): [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

*Defined in rxjs/src/internal/types.ts:93*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` state | `T` |
| `Optional` delay | `number` |

**Returns:** [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Inherited from [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md).[unsubscribe](../classes/_rxjs_src_internal_subscription_.subscription.md#unsubscribe)*

*Defined in rxjs/src/internal/Subscription.ts:57*

Disposes the resources held by the subscription. May, for instance, cancel an ongoing Observable execution or cancel any other type of work that started when the Subscription was created.

**Returns:** `void`

___

