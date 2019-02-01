[rxjs](../README.md) > ["rxjs/src/internal/operators/mergeMap"](../modules/_rxjs_src_internal_operators_mergemap_.md)

# External module: "rxjs/src/internal/operators/mergeMap"

## Index

### Classes

* [MergeMapOperator](../classes/_rxjs_src_internal_operators_mergemap_.mergemapoperator.md)

### Functions

* [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap)

---

## Functions

<a id="mergemap"></a>

###  mergeMap

▸ **mergeMap**<`T`,`R`>(project: *`function`*, concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **mergeMap**<`T`,`R`>(project: *`function`*, resultSelector: *`undefined`*, concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **mergeMap**<`T`,`I`,`R`>(project: *`function`*, resultSelector: *`function`*, concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/mergeMap.ts:13*

Projects each source value to an Observable which is merged in the output Observable.

Maps each value to an Observable, then flattens all of these inner Observables using [mergeAll](_rxjs_src_internal_operators_mergeall_.md#mergeall).

![](mergeMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an Observable, and then merging those resulting Observables and emitting the results of this merger.

Example
-------

Map and flatten each letter to an Observable ticking every 1 second

```javascript
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source Observable, returns an Observable. |
| `Optional` concurrent | `number` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and merging the results of the Observables
obtained from this transformation.

*Defined in rxjs/src/internal/operators/mergeMap.ts:15*

Projects each source value to an Observable which is merged in the output Observable.

Maps each value to an Observable, then flattens all of these inner Observables using [mergeAll](_rxjs_src_internal_operators_mergeall_.md#mergeall).

![](mergeMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an Observable, and then merging those resulting Observables and emitting the results of this merger.

Example
-------

Map and flatten each letter to an Observable ticking every 1 second

```javascript
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
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
| `Optional` concurrent | `number` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and merging the results of the Observables
obtained from this transformation.

*Defined in rxjs/src/internal/operators/mergeMap.ts:17*

Projects each source value to an Observable which is merged in the output Observable.

Maps each value to an Observable, then flattens all of these inner Observables using [mergeAll](_rxjs_src_internal_operators_mergeall_.md#mergeall).

![](mergeMap.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an Observable, and then merging those resulting Observables and emitting the results of this merger.

Example
-------

Map and flatten each letter to an Observable ticking every 1 second

```javascript
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
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
| `Optional` concurrent | `number` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and merging the results of the Observables
obtained from this transformation.

___

