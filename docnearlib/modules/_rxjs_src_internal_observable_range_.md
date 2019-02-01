[rxjs](../README.md) > ["rxjs/src/internal/observable/range"](../modules/_rxjs_src_internal_observable_range_.md)

# External module: "rxjs/src/internal/observable/range"

## Index

### Functions

* [dispatch](_rxjs_src_internal_observable_range_.md#dispatch)
* [range](_rxjs_src_internal_observable_range_.md#range)

---

## Functions

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`>*, state: *`any`*): `void`

*Defined in rxjs/src/internal/observable/range.ts:65*

*__internal__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`> |
| state | `any` |

**Returns:** `void`

___
<a id="range"></a>

###  range

▸ **range**(start?: *`number`*, count?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`number`>

*Defined in rxjs/src/internal/observable/range.ts:36*

Creates an Observable that emits a sequence of numbers within a specified range.

Emits a sequence of numbers in a range.

![](range.png)

`range` operator emits a range of sequential integers, in order, where you select the `start` of the range and its `length`. By default, uses no [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) and just delivers the notifications synchronously, but may use an optional [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) to regulate those deliveries.

Example
-------

Emits the numbers 1 to 10

```javascript
const numbers = range(1, 10);
numbers.subscribe(x => console.log(x));
```

*__see__*: [timer](_rxjs_src_internal_observable_timer_.md#timer)

*__see__*: {@link index/interval}

*__static__*: true

*__name__*: range

*__owner__*: Observable

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` start | `number` | 0 |
| `Default value` count | `number` | 0 |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`number`>
An Observable of numbers that emits a finite range of
sequential integers.

___

