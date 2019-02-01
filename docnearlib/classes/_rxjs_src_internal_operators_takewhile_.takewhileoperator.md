[rxjs](../README.md) > ["rxjs/src/internal/operators/takeWhile"](../modules/_rxjs_src_internal_operators_takewhile_.md) > [TakeWhileOperator](../classes/_rxjs_src_internal_operators_takewhile_.takewhileoperator.md)

# Class: TakeWhileOperator

## Type parameters
#### T 
## Hierarchy

**TakeWhileOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_takewhile_.takewhileoperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_takewhile_.takewhileoperator.md#predicate)

### Methods

* [call](_rxjs_src_internal_operators_takewhile_.takewhileoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TakeWhileOperator**(predicate: *`function`*): [TakeWhileOperator](_rxjs_src_internal_operators_takewhile_.takewhileoperator.md)

*Defined in rxjs/src/internal/operators/takeWhile.ts:52*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |

**Returns:** [TakeWhileOperator](_rxjs_src_internal_operators_takewhile_.takewhileoperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/takeWhile.ts:53*

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

*Defined in rxjs/src/internal/operators/takeWhile.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

