[rxjs](../README.md) > ["rxjs/src/internal/operators/exhaustMap"](../modules/_rxjs_src_internal_operators_exhaustmap_.md)

# External module: "rxjs/src/internal/operators/exhaustMap"

## Index

### Classes

* [ExhauseMapOperator](../classes/_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md)

### Functions

* [exhaustMap](_rxjs_src_internal_operators_exhaustmap_.md#exhaustmap)

---

## Functions

<a id="exhaustmap"></a>

###  exhaustMap

▸ **exhaustMap**<`T`,`R`>(project: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **exhaustMap**<`T`,`R`>(project: *`function`*, resultSelector: *`undefined`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **exhaustMap**<`T`,`I`,`R`>(project: *`function`*, resultSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/exhaustMap.ts:13*

Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.

Maps each value to an Observable, then flattens all of these inner Observables using [exhaust](_rxjs_src_internal_operators_exhaust_.md#exhaust).

![](exhaustMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. When it projects a source value to an Observable, the output Observable begins emitting the items emitted by that projected Observable. However, `exhaustMap` ignores every new projected Observable if the previous projected Observable has not yet completed. Once that one completes, it will accept and flatten the next projected Observable and repeat this process.

Example
-------

Run a finite timer for each click, only if there is no currently active timer

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap((ev) => interval(1000).pipe(take(5))),
);
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
An Observable containing projected Observables
of each item of the source, ignoring projected Observables that start before
their preceding Observable has completed.

*Defined in rxjs/src/internal/operators/exhaustMap.ts:15*

Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.

Maps each value to an Observable, then flattens all of these inner Observables using [exhaust](_rxjs_src_internal_operators_exhaust_.md#exhaust).

![](exhaustMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. When it projects a source value to an Observable, the output Observable begins emitting the items emitted by that projected Observable. However, `exhaustMap` ignores every new projected Observable if the previous projected Observable has not yet completed. Once that one completes, it will accept and flatten the next projected Observable and repeat this process.

Example
-------

Run a finite timer for each click, only if there is no currently active timer

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap((ev) => interval(1000).pipe(take(5))),
);
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 resultSelector is no longer supported. Use inner map instead.

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source Observable, returns an Observable. |
| resultSelector | `undefined` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable containing projected Observables
of each item of the source, ignoring projected Observables that start before
their preceding Observable has completed.

*Defined in rxjs/src/internal/operators/exhaustMap.ts:17*

Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.

Maps each value to an Observable, then flattens all of these inner Observables using [exhaust](_rxjs_src_internal_operators_exhaust_.md#exhaust).

![](exhaustMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an (so-called "inner") Observable. When it projects a source value to an Observable, the output Observable begins emitting the items emitted by that projected Observable. However, `exhaustMap` ignores every new projected Observable if the previous projected Observable has not yet completed. Once that one completes, it will accept and flatten the next projected Observable and repeat this process.

Example
-------

Run a finite timer for each click, only if there is no currently active timer

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap((ev) => interval(1000).pipe(take(5))),
);
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 resultSelector is no longer supported. Use inner map instead.

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
An Observable containing projected Observables
of each item of the source, ignoring projected Observables that start before
their preceding Observable has completed.

___

