[rxjs](../README.md) > ["rxjs/src/internal/operators/switchMap"](../modules/_rxjs_src_internal_operators_switchmap_.md)

# External module: "rxjs/src/internal/operators/switchMap"

## Index

### Classes

* [SwitchMapOperator](../classes/_rxjs_src_internal_operators_switchmap_.switchmapoperator.md)

### Functions

* [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap)

---

## Functions

<a id="switchmap"></a>

###  switchMap

▸ **switchMap**<`T`,`R`>(project: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **switchMap**<`T`,`R`>(project: *`function`*, resultSelector: *`undefined`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **switchMap**<`T`,`I`,`R`>(project: *`function`*, resultSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/switchMap.ts:13*

Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.

Maps each value to an Observable, then flattens all of these inner Observables.

![](switchMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. Each time it observes one of these inner Observables, the output Observable begins emitting the items emitted by that inner Observable. When a new inner Observable is emitted, `switchMap` stops emitting items from the earlier-emitted inner Observable and begins emitting items from the new one. It continues to behave like this for subsequent inner Observables.

Example
-------

Rerun an interval Observable on every click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMap((ev) => interval(1000)));
result.subscribe(x => console.log(x));
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
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and taking only the values from the most recently
projected inner Observable.

*Defined in rxjs/src/internal/operators/switchMap.ts:15*

Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.

Maps each value to an Observable, then flattens all of these inner Observables.

![](switchMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. Each time it observes one of these inner Observables, the output Observable begins emitting the items emitted by that inner Observable. When a new inner Observable is emitted, `switchMap` stops emitting items from the earlier-emitted inner Observable and begins emitting items from the new one. It continues to behave like this for subsequent inner Observables.

Example
-------

Rerun an interval Observable on every click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMap((ev) => interval(1000)));
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 resultSelector is no longer supported, use inner map instead

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
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and taking only the values from the most recently
projected inner Observable.

*Defined in rxjs/src/internal/operators/switchMap.ts:17*

Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.

Maps each value to an Observable, then flattens all of these inner Observables.

![](switchMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. Each time it observes one of these inner Observables, the output Observable begins emitting the items emitted by that inner Observable. When a new inner Observable is emitted, `switchMap` stops emitting items from the earlier-emitted inner Observable and begins emitting items from the new one. It continues to behave like this for subsequent inner Observables.

Example
-------

Rerun an interval Observable on every click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMap((ev) => interval(1000)));
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 resultSelector is no longer supported, use inner map instead

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
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and taking only the values from the most recently
projected inner Observable.

___

