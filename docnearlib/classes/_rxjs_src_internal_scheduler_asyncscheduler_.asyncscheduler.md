[rxjs](../README.md) > ["rxjs/src/internal/scheduler/AsyncScheduler"](../modules/_rxjs_src_internal_scheduler_asyncscheduler_.md) > [AsyncScheduler](../classes/_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)

# Class: AsyncScheduler

## Hierarchy

 [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)

**↳ AsyncScheduler**

↳  [QueueScheduler](_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)

↳  [AsapScheduler](_rxjs_src_internal_scheduler_asapscheduler_.asapscheduler.md)

↳  [AnimationFrameScheduler](_rxjs_src_internal_scheduler_animationframescheduler_.animationframescheduler.md)

↳  [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)

## Implements

* [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#constructor)

### Properties

* [actions](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#actions)
* [active](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#active)
* [now](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#now)
* [scheduled](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#scheduled)
* [delegate](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#delegate)

### Methods

* [flush](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#flush)
* [schedule](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#schedule)
* [now](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#now-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AsyncScheduler**(SchedulerAction: *[Action](_rxjs_src_internal_scheduler_action_.action.md)*, now?: *`function`*): [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)

*Overrides [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[constructor](_rxjs_src_internal_scheduler_.scheduler.md#constructor)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:24*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| SchedulerAction | [Action](_rxjs_src_internal_scheduler_action_.action.md) | - |
| `Default value` now | `function` |  Scheduler.now |

**Returns:** [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)

___

## Properties

<a id="actions"></a>

###  actions

**● actions**: *`Array`<`AsyncAction`<`any`>>* =  []

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:9*

___
<a id="active"></a>

###  active

**● active**: *`boolean`* = false

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

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:24*

An internal ID used to track the latest asynchronous task such as those coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and others.

*__type__*: {any}

*__deprecated__*:
 internal use only

___
<a id="delegate"></a>

### `<Static>``<Optional>` delegate

**● delegate**: *[Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:8*

___

## Methods

<a id="flush"></a>

###  flush

▸ **flush**(action: *`AsyncAction`<`any`>*): `void`

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

