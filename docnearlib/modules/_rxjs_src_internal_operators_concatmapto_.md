[rxjs](../README.md) > ["rxjs/src/internal/operators/concatMapTo"](../modules/_rxjs_src_internal_operators_concatmapto_.md)

# External module: "rxjs/src/internal/operators/concatMapTo"

## Index

### Functions

* [concatMapTo](_rxjs_src_internal_operators_concatmapto_.md#concatmapto)

---

## Functions

<a id="concatmapto"></a>

###  concatMapTo

▸ **concatMapTo**<`T`>(observable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`>

▸ **concatMapTo**<`T`>(observable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, resultSelector: *`undefined`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`>

▸ **concatMapTo**<`T`,`I`,`R`>(observable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`I`>*, resultSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/concatMapTo.ts:5*

Projects each source value to the same Observable which is merged multiple times in a serialized fashion on the output Observable.

It's like [concatMap](_rxjs_src_internal_operators_concatmap_.md#concatmap), but maps each value always to the same inner Observable.

![](concatMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then flattens those resulting Observables into one single Observable, which is the output Observable. Each new `innerObservable` instance emitted on the output Observable is concatenated with the previous `innerObservable` instance.

**Warning:** if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.

Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMapTo(interval(1000).pipe(take(4))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`>
An observable of values merged together by joining the
passed observable with itself, one after the other, for each value emitted
from the source.

*Defined in rxjs/src/internal/operators/concatMapTo.ts:7*

Projects each source value to the same Observable which is merged multiple times in a serialized fashion on the output Observable.

It's like [concatMap](_rxjs_src_internal_operators_concatmap_.md#concatmap), but maps each value always to the same inner Observable.

![](concatMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then flattens those resulting Observables into one single Observable, which is the output Observable. Each new `innerObservable` instance emitted on the output Observable is concatenated with the previous `innerObservable` instance.

**Warning:** if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.

Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMapTo(interval(1000).pipe(take(4))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

*__deprecated__*:
 

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| resultSelector | `undefined` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`>
An observable of values merged together by joining the
passed observable with itself, one after the other, for each value emitted
from the source.

*Defined in rxjs/src/internal/operators/concatMapTo.ts:9*

Projects each source value to the same Observable which is merged multiple times in a serialized fashion on the output Observable.

It's like [concatMap](_rxjs_src_internal_operators_concatmap_.md#concatmap), but maps each value always to the same inner Observable.

![](concatMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then flattens those resulting Observables into one single Observable, which is the output Observable. Each new `innerObservable` instance emitted on the output Observable is concatenated with the previous `innerObservable` instance.

**Warning:** if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.

Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMapTo(interval(1000).pipe(take(4))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

*__deprecated__*:
 

**Type parameters:**

#### T 
#### I 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`I`> |
| resultSelector | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An observable of values merged together by joining the
passed observable with itself, one after the other, for each value emitted
from the source.

___

