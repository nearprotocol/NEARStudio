[rxjs](../README.md) > ["rxjs/src/internal/operators/mapTo"](../modules/_rxjs_src_internal_operators_mapto_.md) > [MapToOperator](../classes/_rxjs_src_internal_operators_mapto_.maptooperator.md)

# Class: MapToOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**MapToOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_mapto_.maptooperator.md#constructor)

### Properties

* [value](_rxjs_src_internal_operators_mapto_.maptooperator.md#value)

### Methods

* [call](_rxjs_src_internal_operators_mapto_.maptooperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MapToOperator**(value: *`R`*): [MapToOperator](_rxjs_src_internal_operators_mapto_.maptooperator.md)

*Defined in rxjs/src/internal/operators/mapTo.ts:41*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `R` |

**Returns:** [MapToOperator](_rxjs_src_internal_operators_mapto_.maptooperator.md)

___

## Properties

<a id="value"></a>

###  value

**● value**: *`R`*

*Defined in rxjs/src/internal/operators/mapTo.ts:41*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/mapTo.ts:47*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

