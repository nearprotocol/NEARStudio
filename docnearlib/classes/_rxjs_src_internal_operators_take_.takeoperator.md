[rxjs](../README.md) > ["rxjs/src/internal/operators/take"](../modules/_rxjs_src_internal_operators_take_.md) > [TakeOperator](../classes/_rxjs_src_internal_operators_take_.takeoperator.md)

# Class: TakeOperator

## Type parameters
#### T 
## Hierarchy

**TakeOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_take_.takeoperator.md#constructor)

### Properties

* [total](_rxjs_src_internal_operators_take_.takeoperator.md#total)

### Methods

* [call](_rxjs_src_internal_operators_take_.takeoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TakeOperator**(total: *`number`*): [TakeOperator](_rxjs_src_internal_operators_take_.takeoperator.md)

*Defined in rxjs/src/internal/operators/take.ts:64*

**Parameters:**

| Name | Type |
| ------ | ------ |
| total | `number` |

**Returns:** [TakeOperator](_rxjs_src_internal_operators_take_.takeoperator.md)

___

## Properties

<a id="total"></a>

### `<Private>` total

**● total**: *`number`*

*Defined in rxjs/src/internal/operators/take.ts:65*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/take.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

