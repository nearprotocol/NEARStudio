[rxjs](../README.md) > ["rxjs/src/internal/operators/concatAll"](../modules/_rxjs_src_internal_operators_concatall_.md)

# External module: "rxjs/src/internal/operators/concatAll"

## Index

### Functions

* [concatAll](_rxjs_src_internal_operators_concatall_.md#concatall)

---

## Functions

<a id="concatall"></a>

###  concatAll

▸ **concatAll**<`T`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`>

▸ **concatAll**<`R`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>

*Defined in rxjs/src/internal/operators/concatAll.ts:5*

Converts a higher-order Observable into a first-order Observable by concatenating the inner Observables in order.

Flattens an Observable-of-Observables by putting one inner Observable after the other.

![](concatAll.png)

Joins every Observable emitted by the source (a higher-order Observable), in a serial fashion. It subscribes to each inner Observable only after the previous inner Observable has completed, and merges all of their values into the returned observable.

**Warning:** If the source Observable emits Observables quickly and endlessly, and the inner Observables it emits generally complete slower than the source emits, you can run into memory issues as the incoming Observables collect in an unbounded buffer.

Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev => interval(1000).pipe(take(4))),
);
const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

**Type parameters:**

#### T 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`>
An Observable emitting values from all the inner
Observables concatenated.

*Defined in rxjs/src/internal/operators/concatAll.ts:6*

Converts a higher-order Observable into a first-order Observable by concatenating the inner Observables in order.

Flattens an Observable-of-Observables by putting one inner Observable after the other.

![](concatAll.png)

Joins every Observable emitted by the source (a higher-order Observable), in a serial fashion. It subscribes to each inner Observable only after the previous inner Observable has completed, and merges all of their values into the returned observable.

**Warning:** If the source Observable emits Observables quickly and endlessly, and the inner Observables it emits generally complete slower than the source emits, you can run into memory issues as the incoming Observables collect in an unbounded buffer.

Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev => interval(1000).pipe(take(4))),
);
const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

**Type parameters:**

#### R 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>
An Observable emitting values from all the inner
Observables concatenated.

___

