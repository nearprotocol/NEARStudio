[rxjs](../README.md) > ["rxjs/src/internal/operators/exhaustMap"](../modules/_rxjs_src_internal_operators_exhaustmap_.md) > [ExhauseMapOperator](../classes/_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md)

# Class: ExhauseMapOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**ExhauseMapOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md#constructor)

### Properties

* [project](_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md#project)

### Methods

* [call](_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExhauseMapOperator**(project: *`function`*): [ExhauseMapOperator](_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md)

*Defined in rxjs/src/internal/operators/exhaustMap.ts:78*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `function` |

**Returns:** [ExhauseMapOperator](_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md)

___

## Properties

<a id="project"></a>

### `<Private>` project

**● project**: *`function`*

*Defined in rxjs/src/internal/operators/exhaustMap.ts:79*

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

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/exhaustMap.ts:82*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

