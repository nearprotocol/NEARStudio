[rxjs](../README.md) > ["rxjs/src/internal/operators/mergeScan"](../modules/_rxjs_src_internal_operators_mergescan_.md)

# External module: "rxjs/src/internal/operators/mergeScan"

## Index

### Classes

* [MergeScanOperator](../classes/_rxjs_src_internal_operators_mergescan_.mergescanoperator.md)

### Functions

* [mergeScan](_rxjs_src_internal_operators_mergescan_.md#mergescan)

---

## Functions

<a id="mergescan"></a>

###  mergeScan

▸ **mergeScan**<`T`,`R`>(accumulator: *`function`*, seed: *`R`*, concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/mergeScan.ts:48*

Applies an accumulator function over the source Observable where the accumulator function itself returns an Observable, then each intermediate Observable returned is merged into the output Observable.

It's like [scan](_rxjs_src_internal_operators_scan_.md#scan), but the Observables returned by the accumulator are merged into the outer Observable.

Example
-------

Count the number of click events

```javascript
const click$ = fromEvent(document, 'click');
const one$ = click$.pipe(mapTo(1));
const seed = 0;
const count$ = one$.pipe(
  mergeScan((acc, one) => of(acc + one), seed),
);
count$.subscribe(x => console.log(x));

// Results:
1
2
3
4
// ...and so on for each click
```

*__method__*: mergeScan

*__owner__*: Observable

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| accumulator | `function` | - |  The accumulator function called on each source value. |
| seed | `R` | - |  The initial accumulation value. |
| `Default value` concurrent | `number` |  Number.POSITIVE_INFINITY |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An observable of the accumulated values.

___

