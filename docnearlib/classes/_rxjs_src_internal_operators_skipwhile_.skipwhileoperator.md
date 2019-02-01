[rxjs](../README.md) > ["rxjs/src/internal/operators/skipWhile"](../modules/_rxjs_src_internal_operators_skipwhile_.md) > [SkipWhileOperator](../classes/_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md)

# Class: SkipWhileOperator

## Type parameters
#### T 
## Hierarchy

**SkipWhileOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md#predicate)

### Methods

* [call](_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SkipWhileOperator**(predicate: *`function`*): [SkipWhileOperator](_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md)

*Defined in rxjs/src/internal/operators/skipWhile.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |

**Returns:** [SkipWhileOperator](_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/skipWhile.ts:23*

#### Type declaration
▸(value: *`T`*, index: *`number`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** `boolean`

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/skipWhile.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

