[rxjs](../README.md) > ["rxjs/src/internal/operators/scan"](../modules/_rxjs_src_internal_operators_scan_.md)

# External module: "rxjs/src/internal/operators/scan"

## Index

### Classes

* [ScanOperator](../classes/_rxjs_src_internal_operators_scan_.scanoperator.md)

### Functions

* [scan](_rxjs_src_internal_operators_scan_.md#scan)

---

## Functions

<a id="scan"></a>

###  scan

▸ **scan**<`T`>(accumulator: *`function`*, seed?: *`T`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **scan**<`T`>(accumulator: *`function`*, seed?: *`T`[]*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

▸ **scan**<`T`,`R`>(accumulator: *`function`*, seed?: *`R`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/scan.ts:7*

Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.

It's like [reduce](_rxjs_src_internal_operators_reduce_.md#reduce), but emits the current accumulation whenever the source emits a value.

![](scan.png)

Combines together all values emitted on the source, using an accumulator function that knows how to join a new source value into the accumulation from the past. Is similar to [reduce](_rxjs_src_internal_operators_reduce_.md#reduce), but emits the intermediate accumulations.

Returns an Observable that applies a specified `accumulator` function to each item emitted by the source Observable. If a `seed` value is specified, then that value will be used as the initial value for the accumulator. If no seed value is specified, the first item of the source is used as the seed.

Example
-------

Count the number of click events

```javascript
const clicks = fromEvent(document, 'click');
const ones = clicks.pipe(mapTo(1));
const seed = 0;
const count = ones.pipe(scan((acc, one) => acc + one, seed));
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
An observable of the accumulated values.

*Defined in rxjs/src/internal/operators/scan.ts:8*

Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.

It's like [reduce](_rxjs_src_internal_operators_reduce_.md#reduce), but emits the current accumulation whenever the source emits a value.

![](scan.png)

Combines together all values emitted on the source, using an accumulator function that knows how to join a new source value into the accumulation from the past. Is similar to [reduce](_rxjs_src_internal_operators_reduce_.md#reduce), but emits the intermediate accumulations.

Returns an Observable that applies a specified `accumulator` function to each item emitted by the source Observable. If a `seed` value is specified, then that value will be used as the initial value for the accumulator. If no seed value is specified, the first item of the source is used as the seed.

Example
-------

Count the number of click events

```javascript
const clicks = fromEvent(document, 'click');
const ones = clicks.pipe(mapTo(1));
const seed = 0;
const count = ones.pipe(scan((acc, one) => acc + one, seed));
count.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| accumulator | `function` |  The accumulator function called on each source value. |
| `Optional` seed | `T`[] |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An observable of the accumulated values.

*Defined in rxjs/src/internal/operators/scan.ts:9*

Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.

It's like [reduce](_rxjs_src_internal_operators_reduce_.md#reduce), but emits the current accumulation whenever the source emits a value.

![](scan.png)

Combines together all values emitted on the source, using an accumulator function that knows how to join a new source value into the accumulation from the past. Is similar to [reduce](_rxjs_src_internal_operators_reduce_.md#reduce), but emits the intermediate accumulations.

Returns an Observable that applies a specified `accumulator` function to each item emitted by the source Observable. If a `seed` value is specified, then that value will be used as the initial value for the accumulator. If no seed value is specified, the first item of the source is used as the seed.

Example
-------

Count the number of click events

```javascript
const clicks = fromEvent(document, 'click');
const ones = clicks.pipe(mapTo(1));
const seed = 0;
const count = ones.pipe(scan((acc, one) => acc + one, seed));
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
An observable of the accumulated values.

___

