[rxjs](../README.md) > ["rxjs/src/internal/scheduler/VirtualTimeScheduler"](../modules/_rxjs_src_internal_scheduler_virtualtimescheduler_.md) > [VirtualTimeScheduler](../classes/_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)

# Class: VirtualTimeScheduler

## Hierarchy

↳  [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)

**↳ VirtualTimeScheduler**

↳  [TestScheduler](_rxjs_src_internal_testing_testscheduler_.testscheduler.md)

## Implements

* [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#constructor)

### Properties

* [actions](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#actions)
* [active](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#active)
* [frame](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#frame)
* [index](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#index)
* [maxFrames](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#maxframes)
* [now](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#now)
* [scheduled](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#scheduled)
* [delegate](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#delegate)
* [frameTimeFactor](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#frametimefactor)

### Methods

* [flush](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#flush)
* [schedule](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#schedule)
* [now](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#now-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new VirtualTimeScheduler**(SchedulerAction?: *`AsyncAction`*, maxFrames?: *`number`*): [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)

*Overrides [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[constructor](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#constructor)*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:11*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` SchedulerAction | `AsyncAction` |  VirtualAction as any |
| `Default value` maxFrames | `number` |  Number.POSITIVE_INFINITY |

**Returns:** [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)

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
<a id="frame"></a>

###  frame

**● frame**: *`number`* = 0

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:10*

___
<a id="index"></a>

###  index

**● index**: *`number`* =  -1

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:11*

___
<a id="maxframes"></a>

###  maxFrames

**● maxFrames**: *`number`*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:14*

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
<a id="frametimefactor"></a>

### `<Static>``<Protected>` frameTimeFactor

**● frameTimeFactor**: *`number`* = 10

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:8*

___

## Methods

<a id="flush"></a>

###  flush

▸ **flush**(): `void`

*Overrides [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[flush](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#flush)*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:23*

Prompt the Scheduler to execute all of its queued actions, therefore clearing its queue.

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

