[rxjs](../README.md) > ["rxjs/src/internal/operators/retry"](../modules/_rxjs_src_internal_operators_retry_.md) > [RetryOperator](../classes/_rxjs_src_internal_operators_retry_.retryoperator.md)

# Class: RetryOperator

## Type parameters
#### T 
## Hierarchy

**RetryOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_retry_.retryoperator.md#constructor)

### Properties

* [count](_rxjs_src_internal_operators_retry_.retryoperator.md#count)
* [source](_rxjs_src_internal_operators_retry_.retryoperator.md#source)

### Methods

* [call](_rxjs_src_internal_operators_retry_.retryoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RetryOperator**(count: *`number`*, source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [RetryOperator](_rxjs_src_internal_operators_retry_.retryoperator.md)

*Defined in rxjs/src/internal/operators/retry.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [RetryOperator](_rxjs_src_internal_operators_retry_.retryoperator.md)

___

## Properties

<a id="count"></a>

### `<Private>` count

**● count**: *`number`*

*Defined in rxjs/src/internal/operators/retry.ts:28*

___
<a id="source"></a>

### `<Private>` source

**● source**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/retry.ts:29*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/retry.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

