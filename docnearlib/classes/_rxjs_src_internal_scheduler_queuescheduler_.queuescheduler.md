[rxjs](../README.md) > ["rxjs/src/internal/scheduler/QueueScheduler"](../modules/_rxjs_src_internal_scheduler_queuescheduler_.md) > [QueueScheduler](../classes/_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)

# Class: QueueScheduler

## Hierarchy

↳  [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)

**↳ QueueScheduler**

## Implements

* [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#constructor)

### Properties

* [actions](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#actions)
* [active](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#active)
* [now](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#now)
* [scheduled](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#scheduled)
* [delegate](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#delegate)

### Methods

* [flush](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#flush)
* [schedule](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#schedule)
* [now](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md#now-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QueueScheduler**(SchedulerAction: *[Action](_rxjs_src_internal_scheduler_action_.action.md)*, now?: *`function`*): [QueueScheduler](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[constructor](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#constructor)*

*Overrides [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[constructor](_rxjs_src_internal_scheduler_.scheduler.md#constructor)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:24*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| SchedulerAction | [Action](_rxjs_src_internal_scheduler_action_.action.md) | - |
| `Default value` now | `function` |  Scheduler.now |

**Returns:** [QueueScheduler](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)

___

## Properties

<a id="actions"></a>

###  actions

**● actions**: *`Array`<`AsyncAction`<`any`>>* =  []

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[actions](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#actions)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:9*

___
<a id="active"></a>

###  active

**● active**: *`boolean`* = false

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[active](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#active)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:16*

A flag to indicate whether the Scheduler is currently executing a batch of queued actions.

*__type__*: {boolean}

*__deprecated__*:
 internal use only

___
<a id="now"></a>

###  now

**● now**: *`function`*

*Implementation of [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md).[now](../interfaces/_rxjs_src_internal_types_.schedulerlike.md#now)*

*Inherited from [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[now](_rxjs_src_internal_scheduler_.scheduler.md#now)*

*Defined in rxjs/src/internal/Scheduler.ts:46*

A getter method that returns a number representing the current time (at the time this function was called) according to the scheduler's own internal clock.

*__returns__*: A number that represents the current time. May or may not have a relation to wall-clock time. May or may not refer to a time unit (e.g. milliseconds).

#### Type declaration
▸(): `number`

**Returns:** `number`

___
<a id="scheduled"></a>

###  scheduled

**● scheduled**: *`any`* =  undefined

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[scheduled](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#scheduled)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:24*

An internal ID used to track the latest asynchronous task such as those coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and others.

*__type__*: {any}

*__deprecated__*:
 internal use only

___
<a id="delegate"></a>

### `<Static>``<Optional>` delegate

**● delegate**: *[Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)*

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[delegate](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#delegate)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:8*

___

## Methods

<a id="flush"></a>

###  flush

▸ **flush**(action: *`AsyncAction`<`any`>*): `void`

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[flush](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#flush)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:45*

**Parameters:**

| Name | Type |
| ------ | ------ |
| action | `AsyncAction`<`any`> |

**Returns:** `void`

___
<a id="schedule"></a>

###  schedule

▸ **schedule**<`T`>(work: *`function`*, delay?: *`number`*, state?: *`T`*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[schedule](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#schedule)*

*Overrides [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[schedule](_rxjs_src_internal_scheduler_.scheduler.md#schedule)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:37*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| work | `function` | - |
| `Default value` delay | `number` | 0 |
| `Optional` state | `T` | - |

**Returns:** [Subscription](_rxjs_src_internal_subscription_.subscription.md)

___
<a id="now-1"></a>

### `<Static>` now

▸ **now**(): `number`

*Inherited from [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[now](_rxjs_src_internal_scheduler_.scheduler.md#now-1)*

*Defined in rxjs/src/internal/Scheduler.ts:31*

Note: the extra arrow function wrapper is to make testing by overriding Date.now easier.

**Returns:** `number`

___

