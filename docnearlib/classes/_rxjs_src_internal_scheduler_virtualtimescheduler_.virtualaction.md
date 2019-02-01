[rxjs](../README.md) > ["rxjs/src/internal/scheduler/VirtualTimeScheduler"](../modules/_rxjs_src_internal_scheduler_virtualtimescheduler_.md) > [VirtualAction](../classes/_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)

# Class: VirtualAction

We need this JSDoc comment for affecting ESDoc.

*__nodoc__*: 

## Type parameters
#### T 
## Hierarchy

 `AsyncAction`<`T`>

**↳ VirtualAction**

## Implements

* [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#constructor)

### Properties

* [_parent](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#_parent)
* [_parents](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#_parents)
* [active](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#active)
* [closed](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#closed)
* [delay](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#delay)
* [id](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#id)
* [index](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#index)
* [pending](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#pending)
* [scheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#scheduler)
* [state](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#state)
* [work](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#work)
* [EMPTY](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#empty)

### Methods

* [_execute](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#_execute)
* [_unsubscribe](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#_unsubscribe)
* [add](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#add)
* [execute](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#execute)
* [recycleAsyncId](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#recycleasyncid)
* [remove](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#remove)
* [requestAsyncId](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#requestasyncid)
* [schedule](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#schedule)
* [unsubscribe](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#unsubscribe)
* [sortActions](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md#sortactions)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new VirtualAction**(scheduler: *[VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)*, work: *`function`*, index?: *`number`*): [VirtualAction](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)

*Overrides AsyncAction.__constructor*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:49*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scheduler | [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md) | - |
| work | `function` | - |
| `Default value` index | `number` |  scheduler.index +&#x3D; 1 |

**Returns:** [VirtualAction](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)

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
<a id="active"></a>

### `<Protected>` active

**● active**: *`boolean`* = true

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:49*

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
<a id="delay"></a>

###  delay

**● delay**: *`number`*

*Inherited from AsyncAction.delay*

*Defined in rxjs/src/internal/scheduler/AsyncAction.ts:15*

___
<a id="id"></a>

###  id

**● id**: *`any`*

*Inherited from AsyncAction.id*

*Defined in rxjs/src/internal/scheduler/AsyncAction.ts:13*

___
<a id="index"></a>

### `<Protected>` index

**● index**: *`number`*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:53*

___
<a id="pending"></a>

### `<Protected>` pending

**● pending**: *`boolean`* = false

*Inherited from AsyncAction.pending*

*Defined in rxjs/src/internal/scheduler/AsyncAction.ts:16*

___
<a id="scheduler"></a>

### `<Protected>` scheduler

**● scheduler**: *[VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)*

*Overrides AsyncAction.scheduler*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:51*

___
<a id="state"></a>

###  state

**● state**: *`T`*

*Inherited from AsyncAction.state*

*Defined in rxjs/src/internal/scheduler/AsyncAction.ts:14*

___
<a id="work"></a>

### `<Protected>` work

**● work**: *`function`*

*Overrides AsyncAction.work*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:52*

#### Type declaration
▸(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`T`>*, state?: *`T`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`T`> |
| `Optional` state | `T` |

**Returns:** `void`

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

<a id="_execute"></a>

### `<Protected>` _execute

▸ **_execute**(state: *`T`*, delay: *`number`*): `any`

*Overrides AsyncAction._execute*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:84*

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `T` |
| delay | `number` |

**Returns:** `any`

___
<a id="_unsubscribe"></a>

###  _unsubscribe

▸ **_unsubscribe**(): `void`

*Inherited from AsyncAction._unsubscribe*

*Defined in rxjs/src/internal/scheduler/AsyncAction.ts:133*

*__deprecated__*:
 This is an internal implementation detail, do not use.

**Returns:** `void`

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
<a id="execute"></a>

###  execute

▸ **execute**(state: *`T`*, delay: *`number`*): `any`

*Inherited from AsyncAction.execute*

*Defined in rxjs/src/internal/scheduler/AsyncAction.ts:89*

Immediately executes this action and the `work` it contains.

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `T` |
| delay | `number` |

**Returns:** `any`

___
<a id="recycleasyncid"></a>

### `<Protected>` recycleAsyncId

▸ **recycleAsyncId**(scheduler: *[VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)*, id?: *`any`*, delay?: *`number`*): `any`

*Overrides AsyncAction.recycleAsyncId*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:80*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scheduler | [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md) | - |
| `Optional` id | `any` | - |
| `Default value` delay | `number` | 0 |

**Returns:** `any`

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
<a id="requestasyncid"></a>

### `<Protected>` requestAsyncId

▸ **requestAsyncId**(scheduler: *[VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)*, id?: *`any`*, delay?: *`number`*): `any`

*Overrides AsyncAction.requestAsyncId*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:72*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scheduler | [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md) | - |
| `Optional` id | `any` | - |
| `Default value` delay | `number` | 0 |

**Returns:** `any`

___
<a id="schedule"></a>

###  schedule

▸ **schedule**(state?: *`T`*, delay?: *`number`*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Overrides AsyncAction.schedule*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:58*

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
<a id="sortactions"></a>

### `<Static>` sortActions

▸ **sortActions**<`T`>(a: *[VirtualAction](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)<`T`>*, b: *[VirtualAction](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)<`T`>*): `0` \| `1` \| `-1`

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:90*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [VirtualAction](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)<`T`> |
| b | [VirtualAction](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)<`T`> |

**Returns:** `0` \| `1` \| `-1`

___

