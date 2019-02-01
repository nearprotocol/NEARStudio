[rxjs](../README.md) > ["rxjs/src/internal/Scheduler"](../modules/_rxjs_src_internal_scheduler_.md) > [Scheduler](../classes/_rxjs_src_internal_scheduler_.scheduler.md)

# Class: Scheduler

An execution context and a data structure to order tasks and schedule their execution. Provides a notion of (potentially virtual) time, through the `now()` getter method.

Each unit of work in a Scheduler is called an `Action`.

```ts
class Scheduler {
  now(): number;
  schedule(work, delay?, state?): Subscription;
}
```

*__class__*: Scheduler

*__deprecated__*:
 Scheduler is an internal implementation detail of RxJS, and should not be used directly. Rather, create your own class and implement [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

## Hierarchy

**Scheduler**

↳  [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)

## Implements

* [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_scheduler_.scheduler.md#constructor)

### Properties

* [SchedulerAction](_rxjs_src_internal_scheduler_.scheduler.md#scheduleraction)
* [now](_rxjs_src_internal_scheduler_.scheduler.md#now)

### Methods

* [schedule](_rxjs_src_internal_scheduler_.scheduler.md#schedule)
* [now](_rxjs_src_internal_scheduler_.scheduler.md#now-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Scheduler**(SchedulerAction: *[Action](_rxjs_src_internal_scheduler_action_.action.md)*, now?: *`function`*): [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)

*Defined in rxjs/src/internal/Scheduler.ts:31*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| SchedulerAction | [Action](_rxjs_src_internal_scheduler_action_.action.md) | - |
| `Default value` now | `function` |  Scheduler.now |

**Returns:** [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)

___

## Properties

<a id="scheduleraction"></a>

### `<Private>` SchedulerAction

**● SchedulerAction**: *[Action](_rxjs_src_internal_scheduler_action_.action.md)*

*Defined in rxjs/src/internal/Scheduler.ts:33*

___
<a id="now"></a>

###  now

**● now**: *`function`*

*Implementation of [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md).[now](../interfaces/_rxjs_src_internal_types_.schedulerlike.md#now)*

*Defined in rxjs/src/internal/Scheduler.ts:46*

A getter method that returns a number representing the current time (at the time this function was called) according to the scheduler's own internal clock.

*__returns__*: A number that represents the current time. May or may not have a relation to wall-clock time. May or may not refer to a time unit (e.g. milliseconds).

#### Type declaration
▸(): `number`

**Returns:** `number`

___

## Methods

<a id="schedule"></a>

###  schedule

▸ **schedule**<`T`>(work: *`function`*, delay?: *`number`*, state?: *`T`*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Defined in rxjs/src/internal/Scheduler.ts:65*

Schedules a function, `work`, for execution. May happen at some point in the future, according to the `delay` parameter, if specified. May be passed some context object, `state`, which will be passed to the `work` function.

The given arguments will be processed an stored as an Action object in a queue of actions.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| work | `function` | - |  A function representing a task, or some unit of work to be executed by the Scheduler. |
| `Default value` delay | `number` | 0 |
| `Optional` state | `T` | - |

**Returns:** [Subscription](_rxjs_src_internal_subscription_.subscription.md)
A subscription in order to be able to unsubscribe
the scheduled work.

___
<a id="now-1"></a>

### `<Static>` now

▸ **now**(): `number`

*Defined in rxjs/src/internal/Scheduler.ts:31*

Note: the extra arrow function wrapper is to make testing by overriding Date.now easier.

**Returns:** `number`

___

