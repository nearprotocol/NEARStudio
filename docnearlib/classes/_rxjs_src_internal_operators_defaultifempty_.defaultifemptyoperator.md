[rxjs](../README.md) > ["rxjs/src/internal/operators/defaultIfEmpty"](../modules/_rxjs_src_internal_operators_defaultifempty_.md) > [DefaultIfEmptyOperator](../classes/_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md)

# Class: DefaultIfEmptyOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**DefaultIfEmptyOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T` \| `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md#constructor)

### Properties

* [defaultValue](_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md#defaultvalue)

### Methods

* [call](_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultIfEmptyOperator**(defaultValue: *`R`*): [DefaultIfEmptyOperator](_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md)

*Defined in rxjs/src/internal/operators/defaultIfEmpty.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| defaultValue | `R` |

**Returns:** [DefaultIfEmptyOperator](_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md)

___

## Properties

<a id="defaultvalue"></a>

### `<Private>` defaultValue

**● defaultValue**: *`R`*

*Defined in rxjs/src/internal/operators/defaultIfEmpty.ts:50*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T` \| `R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/defaultIfEmpty.ts:53*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T` \| `R`> |
| source | `any` |

**Returns:** `any`

___

