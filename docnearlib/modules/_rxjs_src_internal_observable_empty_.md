[rxjs](../README.md) > ["rxjs/src/internal/observable/empty"](../modules/_rxjs_src_internal_observable_empty_.md)

# External module: "rxjs/src/internal/observable/empty"

## Index

### Variables

* [EMPTY](_rxjs_src_internal_observable_empty_.md#empty)

### Functions

* [empty](_rxjs_src_internal_observable_empty_.md#empty-1)
* [emptyScheduled](_rxjs_src_internal_observable_empty_.md#emptyscheduled)

---

## Variables

<a id="empty"></a>

### `<Const>` EMPTY

**● EMPTY**: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>* =  new Observable<never>(subscriber => subscriber.complete())

*Defined in rxjs/src/internal/observable/empty.ts:8*

The same Observable instance returned by any call to [empty](_rxjs_src_internal_observable_empty_.md#empty-1) without a `scheduler`. It is preferrable to use this over `empty()`.

___

## Functions

<a id="empty-1"></a>

###  empty

▸ **empty**(scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>

*Defined in rxjs/src/internal/observable/empty.ts:59*

Creates an Observable that emits no items to the Observer and immediately emits a complete notification.

Just emits 'complete', and nothing else.

![](empty.png)

This static operator is useful for creating a simple Observable that only emits the complete notification. It can be used for composing with other Observables, such as in a [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap).

Examples
--------

### Emit the number 7, then complete

```javascript
const result = empty().pipe(startWith(7));
result.subscribe(x => console.log(x));
```

### Map and flatten only odd numbers to the sequence 'a', 'b', 'c'

```javascript
const interval$ = interval(1000);
result = interval$.pipe(
  mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : empty()),
);
result.subscribe(x => console.log(x));

// Results in the following to the console:
// x is equal to the count on the interval eg(0,1,2,3,...)
// x will occur every 1000ms
// if x % 2 is equal to 1 print abc
// if x % 2 is not equal to 1 nothing will be output
```

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

*__see__*: [never](_rxjs_src_internal_observable_never_.md#never-1)

*__see__*: [of](_rxjs_src_internal_observable_of_.md#of)

*__see__*: [throwError](_rxjs_src_internal_observable_throwerror_.md#throwerror)

*__static__*: true

*__name__*: empty

*__owner__*: Observable

*__deprecated__*:
 Deprecated in favor of using {@link index/EMPTY} constant.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>
An "empty" Observable: emits only the complete
notification.

___
<a id="emptyscheduled"></a>

###  emptyScheduled

▸ **emptyScheduled**(scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>

*Defined in rxjs/src/internal/observable/empty.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>

___

