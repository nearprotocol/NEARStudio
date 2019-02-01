[rxjs](../README.md) > ["rxjs/src/internal/operators/repeat"](../modules/_rxjs_src_internal_operators_repeat_.md) > [RepeatOperator](../classes/_rxjs_src_internal_operators_repeat_.repeatoperator.md)

# Class: RepeatOperator

## Type parameters
#### T 
## Hierarchy

**RepeatOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_repeat_.repeatoperator.md#constructor)

### Properties

* [count](_rxjs_src_internal_operators_repeat_.repeatoperator.md#count)
* [source](_rxjs_src_internal_operators_repeat_.repeatoperator.md#source)

### Methods

* [call](_rxjs_src_internal_operators_repeat_.repeatoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RepeatOperator**(count: *`number`*, source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [RepeatOperator](_rxjs_src_internal_operators_repeat_.repeatoperator.md)

*Defined in rxjs/src/internal/operators/repeat.ts:31*

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [RepeatOperator](_rxjs_src_internal_operators_repeat_.repeatoperator.md)

___

## Properties

<a id="count"></a>

### `<Private>` count

**● count**: *`number`*

*Defined in rxjs/src/internal/operators/repeat.ts:32*

___
<a id="source"></a>

### `<Private>` source

**● source**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/repeat.ts:33*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/repeat.ts:35*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

