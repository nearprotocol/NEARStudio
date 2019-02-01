[rxjs](../README.md) > ["rxjs/src/internal/scheduler/Action"](../modules/_rxjs_src_internal_scheduler_action_.md) > [Action](../classes/_rxjs_src_internal_scheduler_action_.action.md)

# Class: Action

A unit of work to be executed in a `scheduler`. An action is typically created from within a [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) and an RxJS user does not need to concern themselves about creating and manipulating an Action.

```ts
class Action<T> extends Subscription {
  new (scheduler: Scheduler, work: (state?: T) => void);
  schedule(state?: T, delay: number = 0): Subscription;
}
```

*__class__*: Action

## Type parameters
#### T 
## Hierarchy

 [Subscription](_rxjs_src_internal_subscription_.subscription.md)

**↳ Action**

## Implements

* [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_scheduler_action_.action.md#constructor)

### Properties

* [_parent](_rxjs_src_internal_scheduler_action_.action.md#_parent)
* [_parents](_rxjs_src_internal_scheduler_action_.action.md#_parents)
* [closed](_rxjs_src_internal_scheduler_action_.action.md#closed)
* [EMPTY](_rxjs_src_internal_scheduler_action_.action.md#empty)

### Methods

* [add](_rxjs_src_internal_scheduler_action_.action.md#add)
* [remove](_rxjs_src_internal_scheduler_action_.action.md#remove)
* [schedule](_rxjs_src_internal_scheduler_action_.action.md#schedule)
* [unsubscribe](_rxjs_src_internal_scheduler_action_.action.md#unsubscribe)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Action**(scheduler: *[Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)*, work: *`function`*): [Action](_rxjs_src_internal_scheduler_action_.action.md)

*Overrides [Subscription](_rxjs_src_internal_subscription_.subscription.md).[constructor](_rxjs_src_internal_subscription_.subscription.md#constructor)*

*Defined in rxjs/src/internal/scheduler/Action.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scheduler | [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md) |
| work | `function` |

**Returns:** [Action](_rxjs_src_internal_scheduler_action_.action.md)

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

*Implementation of [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md).[closed](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md#closed)*

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[closed](_rxjs_src_internal_subscription_.subscription.md#closed)*

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

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[EMPTY](_rxjs_src_internal_subscription_.subscription.md#empty)*

*Defined in rxjs/src/internal/Subscription.ts:23*

*__nocollapse__*: 

___

## Methods

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
<a id="schedule"></a>

###  schedule

▸ **schedule**(state?: *`T`*, delay?: *`number`*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Defined in rxjs/src/internal/scheduler/Action.ts:33*

Schedules this action on its parent [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) for execution. May be passed some context object, `state`. May happen at some point in the future, according to the `delay` parameter, if specified.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` state | `T` | - |
| `Default value` delay | `number` | 0 |

**Returns:** [Subscription](_rxjs_src_internal_subscription_.subscription.md)

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Implementation of [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md).[unsubscribe](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md#unsubscribe)*

*Inherited from [Subscription](_rxjs_src_internal_subscription_.subscription.md).[unsubscribe](_rxjs_src_internal_subscription_.subscription.md#unsubscribe)*

*Defined in rxjs/src/internal/Subscription.ts:57*

Disposes the resources held by the subscription. May, for instance, cancel an ongoing Observable execution or cancel any other type of work that started when the Subscription was created.

**Returns:** `void`

___

