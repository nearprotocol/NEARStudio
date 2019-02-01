[rxjs](../README.md) > ["rxjs/src/internal/observable/interval"](../modules/_rxjs_src_internal_observable_interval_.md)

# External module: "rxjs/src/internal/observable/interval"

## Index

### Interfaces

* [IntervalState](../interfaces/_rxjs_src_internal_observable_interval_.intervalstate.md)

### Functions

* [dispatch](_rxjs_src_internal_observable_interval_.md#dispatch)
* [interval](_rxjs_src_internal_observable_interval_.md#interval)

---

## Functions

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[IntervalState](../interfaces/_rxjs_src_internal_observable_interval_.intervalstate.md)>*, state: *[IntervalState](../interfaces/_rxjs_src_internal_observable_interval_.intervalstate.md)*): `void`

*Defined in rxjs/src/internal/observable/interval.ts:73*

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[IntervalState](../interfaces/_rxjs_src_internal_observable_interval_.intervalstate.md)> |
| state | [IntervalState](../interfaces/_rxjs_src_internal_observable_interval_.intervalstate.md) |

**Returns:** `void`

___
<a id="interval"></a>

###  interval

▸ **interval**(period?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`number`>

*Defined in rxjs/src/internal/observable/interval.ts:55*

Creates an Observable that emits sequential numbers every specified interval of time, on a specified [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md).

Emits incremental numbers periodically in time.

![](interval.png)

`interval` returns an Observable that emits an infinite sequence of ascending integers, with a constant interval of time of your choosing between those emissions. The first emission is not sent immediately, but only after the first period has passed. By default, this operator uses the `async` [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) to provide a notion of time, but you may pass any [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) to it.

Example
-------

Emits ascending numbers, one every second (1000ms) up to the number 3

```javascript
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3
```

*__see__*: [timer](_rxjs_src_internal_observable_timer_.md#timer)

*__see__*: {@link delay}

*__static__*: true

*__name__*: interval

*__owner__*: Observable

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` period | `number` | 0 |
| `Default value` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |  async |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`number`>
An Observable that emits a sequential number each time
interval.

___

