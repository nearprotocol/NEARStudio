[rxjs](../README.md) > ["rxjs/src/internal/operators/mergeMapTo"](../modules/_rxjs_src_internal_operators_mergemapto_.md)

# External module: "rxjs/src/internal/operators/mergeMapTo"

## Index

### Functions

* [mergeMapTo](_rxjs_src_internal_operators_mergemapto_.md#mergemapto)

---

## Functions

<a id="mergemapto"></a>

###  mergeMapTo

▸ **mergeMapTo**<`T`>(innerObservable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`>

▸ **mergeMapTo**<`T`,`I`,`R`>(innerObservable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`I`>*, resultSelector: *`function`*, concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/mergeMapTo.ts:7*

Projects each source value to the same Observable which is merged multiple times in the output Observable.

It's like [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap), but maps each value always to the same inner Observable.

![](mergeMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then merges those resulting Observables into one single Observable, which is the output Observable.

Example
-------

For each click event, start an interval Observable ticking every 1 second

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(mergeMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| innerObservable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |  An Observable to replace each value from the source Observable. |
| `Optional` concurrent | `number` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`>
An Observable that emits items from the given
`innerObservable`

*Defined in rxjs/src/internal/operators/mergeMapTo.ts:9*

Projects each source value to the same Observable which is merged multiple times in the output Observable.

It's like [mergeMap](_rxjs_src_internal_operators_mergemap_.md#mergemap), but maps each value always to the same inner Observable.

![](mergeMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless of the source value, and then merges those resulting Observables into one single Observable, which is the output Observable.

Example
-------

For each click event, start an interval Observable ticking every 1 second

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(mergeMapTo(interval(1000)));
result.subscribe(x => console.log(x));
```

*__deprecated__*:
 

**Type parameters:**

#### T 
#### I 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| innerObservable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`I`> |  An Observable to replace each value from the source Observable. |
| resultSelector | `function` |
| `Optional` concurrent | `number` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits items from the given
`innerObservable`

___

