[rxjs](../README.md) > ["rxjs/src/internal/operators/skipLast"](../modules/_rxjs_src_internal_operators_skiplast_.md)

# External module: "rxjs/src/internal/operators/skipLast"

## Index

### Classes

* [SkipLastOperator](../classes/_rxjs_src_internal_operators_skiplast_.skiplastoperator.md)

### Functions

* [skipLast](_rxjs_src_internal_operators_skiplast_.md#skiplast)

---

## Functions

<a id="skiplast"></a>

###  skipLast

▸ **skipLast**<`T`>(count: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/skipLast.ts:42*

Skip the last `count` values emitted by the source Observable.

![](skipLast.png)

`skipLast` returns an Observable that accumulates a queue with a length enough to store the first `count` values. As more values are received, values are taken from the front of the queue and produced on the result sequence. This causes values to be delayed.

Example
-------

Skip the last 2 values of an Observable with many values

```javascript
const many = range(1, 5);
const skipLastTwo = many.pipe(skipLast(2));
skipLastTwo.subscribe(x => console.log(x));

// Results in:
// 1 2 3
```

*__see__*: [skip](_rxjs_src_internal_operators_skip_.md#skip)

*__see__*: [skipUntil](_rxjs_src_internal_operators_skipuntil_.md#skipuntil)

*__see__*: [skipWhile](_rxjs_src_internal_operators_skipwhile_.md#skipwhile)

*__see__*: [take](_rxjs_src_internal_operators_take_.md#take)

*__throws__*: {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws ArgumentOutOrRangeError if `i < 0`.

*__method__*: skipLast

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  Number of elements to skip from the end of the source Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that skips the last count values
emitted by the source Observable.

___

