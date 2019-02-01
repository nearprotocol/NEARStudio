[rxjs](../README.md) > ["rxjs/src/internal/operators/switchMapTo"](../modules/_rxjs_src_internal_operators_switchmapto_.md)

# External module: "rxjs/src/internal/operators/switchMapTo"

## Index

### Functions

* [switchMapTo](_rxjs_src_internal_operators_switchmapto_.md#switchmapto)

---

## Functions

<a id="switchmapto"></a>

###  switchMapTo

▸ **switchMapTo**<`R`>(observable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>

▸ **switchMapTo**<`T`,`R`>(observable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`>*, resultSelector: *`undefined`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **switchMapTo**<`T`,`I`,`R`>(observable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`I`>*, resultSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/switchMapTo.ts:12*

Projects each source value to the same Observable which is flattened multiple times with [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap) in the output Observable.

It's like [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap), but maps each value always to the same inner Observable.

![](switchMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then flattens those resulting Observables into one single Observable, which is the output Observable. The output Observables emits values only from the most recently emitted instance of `innerObservable`.

Example
-------

Rerun an interval Observable on every click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>
An Observable that emits items from the given
`innerObservable` (and optionally transformed through the deprecated `resultSelector`)
every time a value is emitted on the source Observable, and taking only the values
from the most recently projected inner Observable.

*Defined in rxjs/src/internal/operators/switchMapTo.ts:14*

Projects each source value to the same Observable which is flattened multiple times with [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap) in the output Observable.

It's like [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap), but maps each value always to the same inner Observable.

![](switchMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then flattens those resulting Observables into one single Observable, which is the output Observable. The output Observables emits values only from the most recently emitted instance of `innerObservable`.

Example
-------

Rerun an interval Observable on every click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 resultSelector is no longer supported. Switch to using switchMap with an inner map

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`> |
| resultSelector | `undefined` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits items from the given
`innerObservable` (and optionally transformed through the deprecated `resultSelector`)
every time a value is emitted on the source Observable, and taking only the values
from the most recently projected inner Observable.

*Defined in rxjs/src/internal/operators/switchMapTo.ts:16*

Projects each source value to the same Observable which is flattened multiple times with [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap) in the output Observable.

It's like [switchMap](_rxjs_src_internal_operators_switchmap_.md#switchmap), but maps each value always to the same inner Observable.

![](switchMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then flattens those resulting Observables into one single Observable, which is the output Observable. The output Observables emits values only from the most recently emitted instance of `innerObservable`.

Example
-------

Rerun an interval Observable on every click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 resultSelector is no longer supported. Switch to using switchMap with an inner map

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
An Observable that emits items from the given
`innerObservable` (and optionally transformed through the deprecated `resultSelector`)
every time a value is emitted on the source Observable, and taking only the values
from the most recently projected inner Observable.

___

