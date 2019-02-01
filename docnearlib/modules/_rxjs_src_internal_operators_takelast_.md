[rxjs](../README.md) > ["rxjs/src/internal/operators/takeLast"](../modules/_rxjs_src_internal_operators_takelast_.md)

# External module: "rxjs/src/internal/operators/takeLast"

## Index

### Classes

* [TakeLastOperator](../classes/_rxjs_src_internal_operators_takelast_.takelastoperator.md)

### Functions

* [takeLast](_rxjs_src_internal_operators_takelast_.md#takelast)

---

## Functions

<a id="takelast"></a>

###  takeLast

▸ **takeLast**<`T`>(count: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/takeLast.ts:47*

Emits only the last `count` values emitted by the source Observable.

Remembers the latest `count` values, then emits those only when the source completes.

![](takeLast.png)

`takeLast` returns an Observable that emits at most the last `count` values emitted by the source Observable. If the source emits fewer than `count` values then all of its values are emitted. This operator must wait until the `complete` notification emission from the source in order to emit the `next` values on the output Observable, because otherwise it is impossible to know whether or not more values will be emitted on the source. For this reason, all values are emitted synchronously, followed by the complete notification.

Example
-------

Take the last 3 values of an Observable with many values

```javascript
const many = range(1, 100);
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe(x => console.log(x));
```

*__see__*: [take](_rxjs_src_internal_operators_take_.md#take)

*__see__*: [takeUntil](_rxjs_src_internal_operators_takeuntil_.md#takeuntil)

*__see__*: [takeWhile](_rxjs_src_internal_operators_takewhile_.md#takewhile)

*__see__*: [skip](_rxjs_src_internal_operators_skip_.md#skip)

*__throws__*: {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.

*__method__*: takeLast

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  The maximum number of values to emit from the end of the sequence of values emitted by the source Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits at most the last count
values emitted by the source Observable.

___

