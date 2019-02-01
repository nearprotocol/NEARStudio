[rxjs](../README.md) > ["rxjs/src/internal/operators/refCount"](../modules/_rxjs_src_internal_operators_refcount_.md) > [RefCountOperator](../classes/_rxjs_src_internal_operators_refcount_.refcountoperator.md)

# Class: RefCountOperator

## Type parameters
#### T 
## Hierarchy

**RefCountOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_refcount_.refcountoperator.md#constructor)

### Properties

* [connectable](_rxjs_src_internal_operators_refcount_.refcountoperator.md#connectable)

### Methods

* [call](_rxjs_src_internal_operators_refcount_.refcountoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RefCountOperator**(connectable: *[ConnectableObservable](_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>*): [RefCountOperator](_rxjs_src_internal_operators_refcount_.refcountoperator.md)

*Defined in rxjs/src/internal/operators/refCount.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| connectable | [ConnectableObservable](_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`> |

**Returns:** [RefCountOperator](_rxjs_src_internal_operators_refcount_.refcountoperator.md)

___

## Properties

<a id="connectable"></a>

### `<Private>` connectable

**● connectable**: *[ConnectableObservable](_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>*

*Defined in rxjs/src/internal/operators/refCount.ts:15*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/refCount.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

