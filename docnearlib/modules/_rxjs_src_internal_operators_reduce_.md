[rxjs](../README.md) > ["rxjs/src/internal/operators/reduce"](../modules/_rxjs_src_internal_operators_reduce_.md)

# External module: "rxjs/src/internal/operators/reduce"

## Index

### Functions

* [reduce](_rxjs_src_internal_operators_reduce_.md#reduce)

---

## Functions

<a id="reduce"></a>

###  reduce

▸ **reduce**<`T`>(accumulator: *`function`*, seed?: *`T`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **reduce**<`T`>(accumulator: *`function`*, seed: *`T`[]*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

▸ **reduce**<`T`,`R`>(accumulator: *`function`*, seed?: *`R`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/reduce.ts:9*

Applies an accumulator function over the source Observable, and returns the accumulated result when the source completes, given an optional seed value.

Combines together all values emitted on the source, using an accumulator function that knows how to join a new source value into the accumulation from the past.

![](reduce.png)

Like [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), `reduce` applies an `accumulator` function against an accumulation and each value of the source Observable (from the past) to reduce it to a single value, emitted on the output Observable. Note that `reduce` will only emit one value, only when the source Observable completes. It is equivalent to applying operator [scan](_rxjs_src_internal_operators_scan_.md#scan) followed by operator [last](_rxjs_src_internal_operators_last_.md#last).

Returns an Observable that applies a specified `accumulator` function to each item emitted by the source Observable. If a `seed` value is specified, then that value will be used as the initial value for the accumulator. If no seed value is specified, the first item of the source is used as the seed.

Example
-------

Count the number of click events that happened in 5 seconds

```javascript
const clicksInFiveSeconds = fromEvent(document, 'click').pipe(
  takeUntil(interval(5000)),
);
const ones = clicksInFiveSeconds.pipe(mapTo(1));
const seed = 0;
const count = ones.reduce((acc, one) => acc + one, seed);
count.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accumulator | `function` |  The accumulator function called on each source value. |
| `Optional` seed | `T` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits a single value that is the
result of accumulating the values emitted by the source Observable.

*Defined in rxjs/src/internal/operators/reduce.ts:10*

Applies an accumulator function over the source Observable, and returns the accumulated result when the source completes, given an optional seed value.

Combines together all values emitted on the source, using an accumulator function that knows how to join a new source value into the accumulation from the past.

![](reduce.png)

Like [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), `reduce` applies an `accumulator` function against an accumulation and each value of the source Observable (from the past) to reduce it to a single value, emitted on the output Observable. Note that `reduce` will only emit one value, only when the source Observable completes. It is equivalent to applying operator [scan](_rxjs_src_internal_operators_scan_.md#scan) followed by operator [last](_rxjs_src_internal_operators_last_.md#last).

Returns an Observable that applies a specified `accumulator` function to each item emitted by the source Observable. If a `seed` value is specified, then that value will be used as the initial value for the accumulator. If no seed value is specified, the first item of the source is used as the seed.

Example
-------

Count the number of click events that happened in 5 seconds

```javascript
const clicksInFiveSeconds = fromEvent(document, 'click').pipe(
  takeUntil(interval(5000)),
);
const ones = clicksInFiveSeconds.pipe(mapTo(1));
const seed = 0;
const count = ones.reduce((acc, one) => acc + one, seed);
count.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accumulator | `function` |  The accumulator function called on each source value. |
| seed | `T`[] |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An Observable that emits a single value that is the
result of accumulating the values emitted by the source Observable.

*Defined in rxjs/src/internal/operators/reduce.ts:11*

Applies an accumulator function over the source Observable, and returns the accumulated result when the source completes, given an optional seed value.

Combines together all values emitted on the source, using an accumulator function that knows how to join a new source value into the accumulation from the past.

![](reduce.png)

Like [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), `reduce` applies an `accumulator` function against an accumulation and each value of the source Observable (from the past) to reduce it to a single value, emitted on the output Observable. Note that `reduce` will only emit one value, only when the source Observable completes. It is equivalent to applying operator [scan](_rxjs_src_internal_operators_scan_.md#scan) followed by operator [last](_rxjs_src_internal_operators_last_.md#last).

Returns an Observable that applies a specified `accumulator` function to each item emitted by the source Observable. If a `seed` value is specified, then that value will be used as the initial value for the accumulator. If no seed value is specified, the first item of the source is used as the seed.

Example
-------

Count the number of click events that happened in 5 seconds

```javascript
const clicksInFiveSeconds = fromEvent(document, 'click').pipe(
  takeUntil(interval(5000)),
);
const ones = clicksInFiveSeconds.pipe(mapTo(1));
const seed = 0;
const count = ones.reduce((acc, one) => acc + one, seed);
count.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accumulator | `function` |  The accumulator function called on each source value. |
| `Optional` seed | `R` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits a single value that is the
result of accumulating the values emitted by the source Observable.

___

