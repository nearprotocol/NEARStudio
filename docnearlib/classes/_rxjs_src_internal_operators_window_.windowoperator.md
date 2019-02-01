[rxjs](../README.md) > ["rxjs/src/internal/operators/window"](../modules/_rxjs_src_internal_operators_window_.md) > [WindowOperator](../classes/_rxjs_src_internal_operators_window_.windowoperator.md)

# Class: WindowOperator

## Type parameters
#### T 
## Hierarchy

**WindowOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_window_.windowoperator.md#constructor)

### Properties

* [windowBoundaries](_rxjs_src_internal_operators_window_.windowoperator.md#windowboundaries)

### Methods

* [call](_rxjs_src_internal_operators_window_.windowoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WindowOperator**(windowBoundaries: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [WindowOperator](_rxjs_src_internal_operators_window_.windowoperator.md)

*Defined in rxjs/src/internal/operators/window.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| windowBoundaries | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [WindowOperator](_rxjs_src_internal_operators_window_.windowoperator.md)

___

## Properties

<a id="windowboundaries"></a>

### `<Private>` windowBoundaries

**● windowBoundaries**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*

*Defined in rxjs/src/internal/operators/window.ts:58*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/window.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>> |
| source | `any` |

**Returns:** `any`

___

