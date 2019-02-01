[rxjs](../README.md) > ["rxjs/src/internal/operators/expand"](../modules/_rxjs_src_internal_operators_expand_.md)

# External module: "rxjs/src/internal/operators/expand"

## Index

### Classes

* [ExpandOperator](../classes/_rxjs_src_internal_operators_expand_.expandoperator.md)

### Interfaces

* [DispatchArg](../interfaces/_rxjs_src_internal_operators_expand_.dispatcharg.md)

### Functions

* [expand](_rxjs_src_internal_operators_expand_.md#expand)

---

## Functions

<a id="expand"></a>

###  expand

▸ **expand**<`T`,`R`>(project: *`function`*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **expand**<`T`>(project: *`function`*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/expand.ts:13*

Recursively projects each source value to an Observable which is merged in the output Observable.

It's similar to [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap), but applies the projection function to every source value as well as every output value. It's recursive.

![](expand.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an Observable, and then merging those resulting Observables and emitting the results of this merger. _Expand_ will re-emit on the output Observable every source value. Then, each output value is given to the `project` function which returns an inner Observable to be merged on the output Observable. Those output values resulting from the projection are also given to the `project` function to produce new output values. This is how _expand_ behaves recursively.

Example
-------

Start emitting the powers of two on every click, at most 10 of them

```javascript
const clicks = fromEvent(document, 'click');
const powersOfTwo = clicks.pipe(
  mapTo(1),
  expand(x => of(2 * x).pipe(delay(1000))),
  take(10),
);
powersOfTwo.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source or the output Observable, returns an Observable. |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the source values and also
result of applying the projection function to each value emitted on the
output Observable and and merging the results of the Observables obtained
from this transformation.

*Defined in rxjs/src/internal/operators/expand.ts:14*

Recursively projects each source value to an Observable which is merged in the output Observable.

It's similar to [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap), but applies the projection function to every source value as well as every output value. It's recursive.

![](expand.png)

Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source Observable, where that function returns an Observable, and then merging those resulting Observables and emitting the results of this merger. _Expand_ will re-emit on the output Observable every source value. Then, each output value is given to the `project` function which returns an inner Observable to be merged on the output Observable. Those output values resulting from the projection are also given to the `project` function to produce new output values. This is how _expand_ behaves recursively.

Example
-------

Start emitting the powers of two on every click, at most 10 of them

```javascript
const clicks = fromEvent(document, 'click');
const powersOfTwo = clicks.pipe(
  mapTo(1),
  expand(x => of(2 * x).pipe(delay(1000))),
  take(10),
);
powersOfTwo.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  A function that, when applied to an item emitted by the source or the output Observable, returns an Observable. |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the source values and also
result of applying the projection function to each value emitted on the
output Observable and and merging the results of the Observables obtained
from this transformation.

___

