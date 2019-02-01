[rxjs](../README.md) > ["rxjs/src/internal/operators/takeLast"](../modules/_rxjs_src_internal_operators_takelast_.md) > [TakeLastOperator](../classes/_rxjs_src_internal_operators_takelast_.takelastoperator.md)

# Class: TakeLastOperator

## Type parameters
#### T 
## Hierarchy

**TakeLastOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_takelast_.takelastoperator.md#constructor)

### Properties

* [total](_rxjs_src_internal_operators_takelast_.takelastoperator.md#total)

### Methods

* [call](_rxjs_src_internal_operators_takelast_.takelastoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TakeLastOperator**(total: *`number`*): [TakeLastOperator](_rxjs_src_internal_operators_takelast_.takelastoperator.md)

*Defined in rxjs/src/internal/operators/takeLast.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| total | `number` |

**Returns:** [TakeLastOperator](_rxjs_src_internal_operators_takelast_.takelastoperator.md)

___

## Properties

<a id="total"></a>

### `<Private>` total

**● total**: *`number`*

*Defined in rxjs/src/internal/operators/takeLast.ts:58*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/takeLast.ts:64*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

