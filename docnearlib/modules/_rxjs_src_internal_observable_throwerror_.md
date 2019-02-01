[rxjs](../README.md) > ["rxjs/src/internal/observable/throwError"](../modules/_rxjs_src_internal_observable_throwerror_.md)

# External module: "rxjs/src/internal/observable/throwError"

## Index

### Interfaces

* [DispatchArg](../interfaces/_rxjs_src_internal_observable_throwerror_.dispatcharg.md)

### Functions

* [dispatch](_rxjs_src_internal_observable_throwerror_.md#dispatch)
* [throwError](_rxjs_src_internal_observable_throwerror_.md#throwerror)

---

## Functions

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**(__namedParameters: *`object`*): `void`

*Defined in rxjs/src/internal/observable/throwError.ts:82*

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| error | `any` |
| subscriber | [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`any`> |

**Returns:** `void`

___
<a id="throwerror"></a>

###  throwError

▸ **throwError**(error: *`any`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>

*Defined in rxjs/src/internal/observable/throwError.ts:69*

Creates an Observable that emits no items to the Observer and immediately emits an error notification.

Just emits 'error', and nothing else.

![](throw.png)

This static operator is useful for creating a simple Observable that only emits the error notification. It can be used for composing with other Observables, such as in a [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap).

Examples
--------

### Emit the number 7, then emit an error

```javascript
import { throwError, concat, of } from 'rxjs';

const result = concat(of(7), throwError(new Error('oops!')));
result.subscribe(x => console.log(x), e => console.error(e));

// Logs:
// 7
// Error: oops!
```

* * *

### Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13

```javascript
import { throwError, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

interval(1000).pipe(
  mergeMap(x => x === 2
    ? throwError('Twos are bad')
    : of('a', 'b', 'c')
  ),
).subscribe(x => console.log(x), e => console.error(e));

// Logs:
// a
// b
// c
// a
// b
// c
// Twos are bad
```

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

*__see__*: [empty](_rxjs_src_internal_observer_.md#empty)

*__see__*: [never](_rxjs_src_internal_observable_never_.md#never-1)

*__see__*: [of](_rxjs_src_internal_observable_of_.md#of)

*__static__*: true

*__name__*: throwError

*__owner__*: Observable

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| error | `any` |  The particular Error to pass to the error notification. |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>
An error Observable: emits only the error notification
using the given error argument.

___

