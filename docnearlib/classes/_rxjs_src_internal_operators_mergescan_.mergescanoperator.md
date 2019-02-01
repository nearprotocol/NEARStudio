[rxjs](../README.md) > ["rxjs/src/internal/operators/mergeScan"](../modules/_rxjs_src_internal_operators_mergescan_.md) > [MergeScanOperator](../classes/_rxjs_src_internal_operators_mergescan_.mergescanoperator.md)

# Class: MergeScanOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**MergeScanOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md#constructor)

### Properties

* [accumulator](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md#accumulator)
* [concurrent](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md#concurrent)
* [seed](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md#seed)

### Methods

* [call](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MergeScanOperator**(accumulator: *`function`*, seed: *`R`*, concurrent: *`number`*): [MergeScanOperator](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md)

*Defined in rxjs/src/internal/operators/mergeScan.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| accumulator | `function` |
| seed | `R` |
| concurrent | `number` |

**Returns:** [MergeScanOperator](_rxjs_src_internal_operators_mergescan_.mergescanoperator.md)

___

## Properties

<a id="accumulator"></a>

### `<Private>` accumulator

**● accumulator**: *`function`*

*Defined in rxjs/src/internal/operators/mergeScan.ts:55*

#### Type declaration
▸(acc: *`R`*, value: *`T`*): [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| acc | `R` |
| value | `T` |

**Returns:** [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

___
<a id="concurrent"></a>

### `<Private>` concurrent

**● concurrent**: *`number`*

*Defined in rxjs/src/internal/operators/mergeScan.ts:57*

___
<a id="seed"></a>

### `<Private>` seed

**● seed**: *`R`*

*Defined in rxjs/src/internal/operators/mergeScan.ts:56*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/mergeScan.ts:60*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

