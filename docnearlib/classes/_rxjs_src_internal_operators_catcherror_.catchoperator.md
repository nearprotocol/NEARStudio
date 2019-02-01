[rxjs](../README.md) > ["rxjs/src/internal/operators/catchError"](../modules/_rxjs_src_internal_operators_catcherror_.md) > [CatchOperator](../classes/_rxjs_src_internal_operators_catcherror_.catchoperator.md)

# Class: CatchOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**CatchOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T` \| `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_catcherror_.catchoperator.md#constructor)

### Properties

* [caught](_rxjs_src_internal_operators_catcherror_.catchoperator.md#caught)
* [selector](_rxjs_src_internal_operators_catcherror_.catchoperator.md#selector)

### Methods

* [call](_rxjs_src_internal_operators_catcherror_.catchoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CatchOperator**(selector: *`function`*): [CatchOperator](_rxjs_src_internal_operators_catcherror_.catchoperator.md)

*Defined in rxjs/src/internal/operators/catchError.ts:88*

**Parameters:**

| Name | Type |
| ------ | ------ |
| selector | `function` |

**Returns:** [CatchOperator](_rxjs_src_internal_operators_catcherror_.catchoperator.md)

___

## Properties

<a id="caught"></a>

###  caught

**● caught**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/catchError.ts:88*

___
<a id="selector"></a>

### `<Private>` selector

**● selector**: *`function`*

*Defined in rxjs/src/internal/operators/catchError.ts:90*

#### Type declaration
▸(err: *`any`*, caught: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`T` \| `R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |
| caught | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`T` \| `R`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/catchError.ts:93*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

