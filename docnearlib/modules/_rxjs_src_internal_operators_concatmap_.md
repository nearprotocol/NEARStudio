[rxjs](../README.md) > ["rxjs/src/internal/operators/concatMap"](../modules/_rxjs_src_internal_operators_concatmap_.md)

# External module: "rxjs/src/internal/operators/concatMap"

## Index

### Functions

* [concatMap](_rxjs_src_internal_operators_concatmap_.md#concatmap)

---

## Functions

<a id="concatmap"></a>

###  concatMap

▸ **concatMap**<`T`,`R`>(project: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **concatMap**<`T`,`R`>(project: *`function`*, resultSelector: *`undefined`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **concatMap**<`T`,`I`,`R`>(project: *`function`*, resultSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/concatMap.ts:5*

Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.

Maps each value to an Observable, then flattens all of these inner Observables using [concatAll](_rxjs_src_internal_operators_concatall_.md#concatall).

![](concatMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. Each new inner Observable is concatenated with the previous inner Observable.

**Warning:** if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.

Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)),
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
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source Observable, returns an Observable. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item emitted
by the source Observable and taking values from each projected inner
Observable sequentially.

*Defined in rxjs/src/internal/operators/concatMap.ts:7*

Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.

Maps each value to an Observable, then flattens all of these inner Observables using [concatAll](_rxjs_src_internal_operators_concatall_.md#concatall).

![](concatMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. Each new inner Observable is concatenated with the previous inner Observable.

**Warning:** if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.

Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)),
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

*__deprecated__*:
 resultSelector no longer supported, use inner map instead

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source Observable, returns an Observable. |
| resultSelector | `undefined` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item emitted
by the source Observable and taking values from each projected inner
Observable sequentially.

*Defined in rxjs/src/internal/operators/concatMap.ts:9*

Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.

Maps each value to an Observable, then flattens all of these inner Observables using [concatAll](_rxjs_src_internal_operators_concatall_.md#concatall).

![](concatMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. Each new inner Observable is concatenated with the previous inner Observable.

**Warning:** if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.

Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set to `1`.

Example
-------

For each click event, tick every second from 0 to 3, with no concurrency

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)),
);
result.subscribe(x => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

*__deprecated__*:
 resultSelector no longer supported, use inner map instead

**Type parameters:**

#### T 
#### I 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source Observable, returns an Observable. |
| resultSelector | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item emitted
by the source Observable and taking values from each projected inner
Observable sequentially.

___

