[rxjs](../README.md) > ["rxjs/src/internal/operators/multicast"](../modules/_rxjs_src_internal_operators_multicast_.md)

# External module: "rxjs/src/internal/operators/multicast"

## Index

### Classes

* [MulticastOperator](../classes/_rxjs_src_internal_operators_multicast_.multicastoperator.md)

### Functions

* [multicast](_rxjs_src_internal_operators_multicast_.md#multicast)

---

## Functions

<a id="multicast"></a>

###  multicast

▸ **multicast**<`T`>(subjectOrSubjectFactory: *[FactoryOrValue](_rxjs_src_internal_types_.md#factoryorvalue)<[Subject](../classes/_rxjs_src_internal_subject_.subject.md)<`T`>>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>

▸ **multicast**<`T`>(SubjectFactory: *`function`*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>

▸ **multicast**<`T`>(SubjectFactory: *`function`*, selector?: *[MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **multicast**<`T`,`R`>(SubjectFactory: *`function`*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`R`>>

▸ **multicast**<`T`,`R`>(SubjectFactory: *`function`*, selector?: *[OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/multicast.ts:9*

Returns an Observable that emits the results of invoking a specified selector on items emitted by a ConnectableObservable that shares a single subscription to the underlying stream.

![](multicast.png)

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| subjectOrSubjectFactory | [FactoryOrValue](_rxjs_src_internal_types_.md#factoryorvalue)<[Subject](../classes/_rxjs_src_internal_subject_.subject.md)<`T`>> |  Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function or Subject to push source elements into. |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>
An Observable that emits the results of invoking the selector
on the items emitted by a `ConnectableObservable` that shares a single subscription to
the underlying stream.

*Defined in rxjs/src/internal/operators/multicast.ts:10*

Returns an Observable that emits the results of invoking a specified selector on items emitted by a ConnectableObservable that shares a single subscription to the underlying stream.

![](multicast.png)

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| SubjectFactory | `function` |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>
An Observable that emits the results of invoking the selector
on the items emitted by a `ConnectableObservable` that shares a single subscription to
the underlying stream.

*Defined in rxjs/src/internal/operators/multicast.ts:11*

Returns an Observable that emits the results of invoking a specified selector on items emitted by a ConnectableObservable that shares a single subscription to the underlying stream.

![](multicast.png)

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| SubjectFactory | `function` |
| `Optional` selector | [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the results of invoking the selector
on the items emitted by a `ConnectableObservable` that shares a single subscription to
the underlying stream.

*Defined in rxjs/src/internal/operators/multicast.ts:12*

Returns an Observable that emits the results of invoking a specified selector on items emitted by a ConnectableObservable that shares a single subscription to the underlying stream.

![](multicast.png)

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| SubjectFactory | `function` |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`R`>>
An Observable that emits the results of invoking the selector
on the items emitted by a `ConnectableObservable` that shares a single subscription to
the underlying stream.

*Defined in rxjs/src/internal/operators/multicast.ts:13*

Returns an Observable that emits the results of invoking a specified selector on items emitted by a ConnectableObservable that shares a single subscription to the underlying stream.

![](multicast.png)

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| SubjectFactory | `function` |
| `Optional` selector | [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the results of invoking the selector
on the items emitted by a `ConnectableObservable` that shares a single subscription to
the underlying stream.

___

