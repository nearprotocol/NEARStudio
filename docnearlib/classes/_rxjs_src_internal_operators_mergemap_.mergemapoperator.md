[rxjs](../README.md) > ["rxjs/src/internal/operators/mergeMap"](../modules/_rxjs_src_internal_operators_mergemap_.md) > [MergeMapOperator](../classes/_rxjs_src_internal_operators_mergemap_.mergemapoperator.md)

# Class: MergeMapOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**MergeMapOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_mergemap_.mergemapoperator.md#constructor)

### Properties

* [concurrent](_rxjs_src_internal_operators_mergemap_.mergemapoperator.md#concurrent)
* [project](_rxjs_src_internal_operators_mergemap_.mergemapoperator.md#project)

### Methods

* [call](_rxjs_src_internal_operators_mergemap_.mergemapoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MergeMapOperator**(project: *`function`*, concurrent?: *`number`*): [MergeMapOperator](_rxjs_src_internal_operators_mergemap_.mergemapoperator.md)

*Defined in rxjs/src/internal/operators/mergeMap.ts:91*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| project | `function` | - |
| `Default value` concurrent | `number` |  Number.POSITIVE_INFINITY |

**Returns:** [MergeMapOperator](_rxjs_src_internal_operators_mergemap_.mergemapoperator.md)

___

## Properties

<a id="concurrent"></a>

### `<Private>` concurrent

**● concurrent**: *`number`*

*Defined in rxjs/src/internal/operators/mergeMap.ts:93*

___
<a id="project"></a>

### `<Private>` project

**● project**: *`function`*

*Defined in rxjs/src/internal/operators/mergeMap.ts:92*

#### Type declaration
▸(value: *`T`*, index: *`number`*): [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(observer: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/mergeMap.ts:96*

**Parameters:**

| Name | Type |
| ------ | ------ |
| observer | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

