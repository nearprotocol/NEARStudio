[rxjs](../README.md) > ["rxjs/src/internal/operators/map"](../modules/_rxjs_src_internal_operators_map_.md) > [MapOperator](../classes/_rxjs_src_internal_operators_map_.mapoperator.md)

# Class: MapOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**MapOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_map_.mapoperator.md#constructor)

### Properties

* [project](_rxjs_src_internal_operators_map_.mapoperator.md#project)
* [thisArg](_rxjs_src_internal_operators_map_.mapoperator.md#thisarg)

### Methods

* [call](_rxjs_src_internal_operators_map_.mapoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MapOperator**(project: *`function`*, thisArg: *`any`*): [MapOperator](_rxjs_src_internal_operators_map_.mapoperator.md)

*Defined in rxjs/src/internal/operators/map.ts:51*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `function` |
| thisArg | `any` |

**Returns:** [MapOperator](_rxjs_src_internal_operators_map_.mapoperator.md)

___

## Properties

<a id="project"></a>

### `<Private>` project

**● project**: *`function`*

*Defined in rxjs/src/internal/operators/map.ts:52*

#### Type declaration
▸(value: *`T`*, index: *`number`*): `R`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** `R`

___
<a id="thisarg"></a>

### `<Private>` thisArg

**● thisArg**: *`any`*

*Defined in rxjs/src/internal/operators/map.ts:52*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/map.ts:55*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

