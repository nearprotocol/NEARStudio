[rxjs](../README.md) > ["rxjs/src/internal/operators/publish"](../modules/_rxjs_src_internal_operators_publish_.md)

# External module: "rxjs/src/internal/operators/publish"

## Index

### Functions

* [publish](_rxjs_src_internal_operators_publish_.md#publish)

---

## Functions

<a id="publish"></a>

###  publish

▸ **publish**<`T`>(): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>

▸ **publish**<`T`,`R`>(selector: *[OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **publish**<`T`>(selector: *[MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/publish.ts:8*

Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called before it begins emitting items to those Observers that have subscribed to it.

![](publish.png)

**Type parameters:**

#### T 

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>
A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.

*Defined in rxjs/src/internal/operators/publish.ts:9*

Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called before it begins emitting items to those Observers that have subscribed to it.

![](publish.png)

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| selector | [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.

*Defined in rxjs/src/internal/operators/publish.ts:10*

Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called before it begins emitting items to those Observers that have subscribed to it.

![](publish.png)

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| selector | [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.

___

