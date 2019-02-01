[rxjs](../README.md) > ["rxjs/src/internal/operators/take"](../modules/_rxjs_src_internal_operators_take_.md)

# External module: "rxjs/src/internal/operators/take"

## Index

### Classes

* [TakeOperator](../classes/_rxjs_src_internal_operators_take_.takeoperator.md)

### Functions

* [take](_rxjs_src_internal_operators_take_.md#take)

---

## Functions

<a id="take"></a>

###  take

▸ **take**<`T`>(count: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/take.ts:54*

Emits only the first `count` values emitted by the source Observable.

Takes the first `count` values from the source, then completes.

![](take.png)

`take` returns an Observable that emits only the first `count` values emitted by the source Observable. If the source emits fewer than `count` values then all of its values are emitted. After that, it completes, regardless if the source completes.

Example
-------

Take the first 5 seconds of an infinite 1-second interval Observable

```javascript
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4
```

*__see__*: [takeLast](_rxjs_src_internal_operators_takelast_.md#takelast)

*__see__*: [takeUntil](_rxjs_src_internal_operators_takeuntil_.md#takeuntil)

*__see__*: [takeWhile](_rxjs_src_internal_operators_takewhile_.md#takewhile)

*__see__*: [skip](_rxjs_src_internal_operators_skip_.md#skip)

*__throws__*: {ArgumentOutOfRangeError} When using `take(i)`, it delivers an ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.

*__method__*: take

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  The maximum number of \`next\` values to emit. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits only the first `count`
values emitted by the source Observable, or all of the values from the source
if the source emits fewer than `count` values.

___

