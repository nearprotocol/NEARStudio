[rxjs](../README.md) > ["rxjs/src/internal/observable/timer"](../modules/_rxjs_src_internal_observable_timer_.md)

# External module: "rxjs/src/internal/observable/timer"

## Index

### Interfaces

* [TimerState](../interfaces/_rxjs_src_internal_observable_timer_.timerstate.md)

### Functions

* [dispatch](_rxjs_src_internal_observable_timer_.md#dispatch)
* [timer](_rxjs_src_internal_observable_timer_.md#timer)

---

## Functions

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[TimerState](../interfaces/_rxjs_src_internal_observable_timer_.timerstate.md)>*, state: *[TimerState](../interfaces/_rxjs_src_internal_observable_timer_.timerstate.md)*): `void`

*Defined in rxjs/src/internal/observable/timer.ts:85*

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[TimerState](../interfaces/_rxjs_src_internal_observable_timer_.timerstate.md)> |
| state | [TimerState](../interfaces/_rxjs_src_internal_observable_timer_.timerstate.md) |

**Returns:** `void`

___
<a id="timer"></a>

###  timer

▸ **timer**(dueTime?: *`number` \| `Date`*, periodOrScheduler?: *`number` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`number`>

*Defined in rxjs/src/internal/observable/timer.ts:54*

Creates an Observable that starts emitting after an `dueTime` and emits ever increasing numbers after each `period` of time thereafter.

Its like {@link index/interval}, but you can specify when should the emissions start.

![](timer.png)

`timer` returns an Observable that emits an infinite sequence of ascending integers, with a constant interval of time, `period` of your choosing between those emissions. The first emission happens after the specified `dueTime`. The initial delay may be a `Date`. By default, this operator uses the {@link asyncScheduler} [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) to provide a notion of time, but you may pass any [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) to it. If `period` is not specified, the output Observable emits only one value, `0`. Otherwise, it emits an infinite sequence.

Examples
--------

### Emits ascending numbers, one every second (1000ms), starting after 3 seconds

```javascript
const numbers = timer(3000, 1000);
numbers.subscribe(x => console.log(x));
```

### Emits one number after five seconds

```javascript
const numbers = timer(5000);
numbers.subscribe(x => console.log(x));
```

*__see__*: {@link index/interval}

*__see__*: {@link delay}

*__static__*: true

*__name__*: timer

*__owner__*: Observable

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` dueTime | `number` \| `Date` | 0 |
| `Optional` periodOrScheduler | `number` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`number`>
An Observable that emits a `0` after the
`dueTime` and ever increasing numbers after each `period` of time
thereafter.

___

