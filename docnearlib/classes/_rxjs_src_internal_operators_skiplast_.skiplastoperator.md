[rxjs](../README.md) > ["rxjs/src/internal/operators/skipLast"](../modules/_rxjs_src_internal_operators_skiplast_.md) > [SkipLastOperator](../classes/_rxjs_src_internal_operators_skiplast_.skiplastoperator.md)

# Class: SkipLastOperator

## Type parameters
#### T 
## Hierarchy

**SkipLastOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_skiplast_.skiplastoperator.md#constructor)

### Properties

* [_skipCount](_rxjs_src_internal_operators_skiplast_.skiplastoperator.md#_skipcount)

### Methods

* [call](_rxjs_src_internal_operators_skiplast_.skiplastoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SkipLastOperator**(_skipCount: *`number`*): [SkipLastOperator](_rxjs_src_internal_operators_skiplast_.skiplastoperator.md)

*Defined in rxjs/src/internal/operators/skipLast.ts:46*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _skipCount | `number` |

**Returns:** [SkipLastOperator](_rxjs_src_internal_operators_skiplast_.skiplastoperator.md)

___

## Properties

<a id="_skipcount"></a>

### `<Private>` _skipCount

**● _skipCount**: *`number`*

*Defined in rxjs/src/internal/operators/skipLast.ts:47*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/skipLast.ts:53*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

