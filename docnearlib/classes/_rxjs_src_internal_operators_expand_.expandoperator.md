[rxjs](../README.md) > ["rxjs/src/internal/operators/expand"](../modules/_rxjs_src_internal_operators_expand_.md) > [ExpandOperator](../classes/_rxjs_src_internal_operators_expand_.expandoperator.md)

# Class: ExpandOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**ExpandOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_expand_.expandoperator.md#constructor)

### Properties

* [concurrent](_rxjs_src_internal_operators_expand_.expandoperator.md#concurrent)
* [project](_rxjs_src_internal_operators_expand_.expandoperator.md#project)
* [scheduler](_rxjs_src_internal_operators_expand_.expandoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_expand_.expandoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExpandOperator**(project: *`function`*, concurrent: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [ExpandOperator](_rxjs_src_internal_operators_expand_.expandoperator.md)

*Defined in rxjs/src/internal/operators/expand.ts:74*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `function` |
| concurrent | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [ExpandOperator](_rxjs_src_internal_operators_expand_.expandoperator.md)

___

## Properties

<a id="concurrent"></a>

### `<Private>` concurrent

**● concurrent**: *`number`*

*Defined in rxjs/src/internal/operators/expand.ts:76*

___
<a id="project"></a>

### `<Private>` project

**● project**: *`function`*

*Defined in rxjs/src/internal/operators/expand.ts:75*

#### Type declaration
▸(value: *`T`*, index: *`number`*): [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/expand.ts:77*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/expand.ts:80*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

