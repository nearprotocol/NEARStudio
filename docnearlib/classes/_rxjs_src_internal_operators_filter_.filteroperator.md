[rxjs](../README.md) > ["rxjs/src/internal/operators/filter"](../modules/_rxjs_src_internal_operators_filter_.md) > [FilterOperator](../classes/_rxjs_src_internal_operators_filter_.filteroperator.md)

# Class: FilterOperator

## Type parameters
#### T 
## Hierarchy

**FilterOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_filter_.filteroperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_filter_.filteroperator.md#predicate)
* [thisArg](_rxjs_src_internal_operators_filter_.filteroperator.md#thisarg)

### Methods

* [call](_rxjs_src_internal_operators_filter_.filteroperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FilterOperator**(predicate: *`function`*, thisArg?: *`any`*): [FilterOperator](_rxjs_src_internal_operators_filter_.filteroperator.md)

*Defined in rxjs/src/internal/operators/filter.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` thisArg | `any` |

**Returns:** [FilterOperator](_rxjs_src_internal_operators_filter_.filteroperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/filter.ts:63*

#### Type declaration
▸(value: *`T`*, index: *`number`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** `boolean`

___
<a id="thisarg"></a>

### `<Private>``<Optional>` thisArg

**● thisArg**: *`any`*

*Defined in rxjs/src/internal/operators/filter.ts:64*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/filter.ts:67*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

