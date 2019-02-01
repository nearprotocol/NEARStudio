[rxjs](../README.md) > ["rxjs/src/internal/operators/skip"](../modules/_rxjs_src_internal_operators_skip_.md) > [SkipOperator](../classes/_rxjs_src_internal_operators_skip_.skipoperator.md)

# Class: SkipOperator

## Type parameters
#### T 
## Hierarchy

**SkipOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_skip_.skipoperator.md#constructor)

### Properties

* [total](_rxjs_src_internal_operators_skip_.skipoperator.md#total)

### Methods

* [call](_rxjs_src_internal_operators_skip_.skipoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SkipOperator**(total: *`number`*): [SkipOperator](_rxjs_src_internal_operators_skip_.skipoperator.md)

*Defined in rxjs/src/internal/operators/skip.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| total | `number` |

**Returns:** [SkipOperator](_rxjs_src_internal_operators_skip_.skipoperator.md)

___

## Properties

<a id="total"></a>

### `<Private>` total

**● total**: *`number`*

*Defined in rxjs/src/internal/operators/skip.ts:22*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/skip.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

