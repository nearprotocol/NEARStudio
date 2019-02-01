[rxjs](../README.md) > ["rxjs/src/internal/operators/retryWhen"](../modules/_rxjs_src_internal_operators_retrywhen_.md) > [RetryWhenOperator](../classes/_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md)

# Class: RetryWhenOperator

## Type parameters
#### T 
## Hierarchy

**RetryWhenOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md#constructor)

### Properties

* [notifier](_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md#notifier)
* [source](_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md#source)

### Methods

* [call](_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RetryWhenOperator**(notifier: *`function`*, source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [RetryWhenOperator](_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md)

*Defined in rxjs/src/internal/operators/retryWhen.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notifier | `function` |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [RetryWhenOperator](_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md)

___

## Properties

<a id="notifier"></a>

### `<Protected>` notifier

**● notifier**: *`function`*

*Defined in rxjs/src/internal/operators/retryWhen.ts:34*

#### Type declaration
▸(errors: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| errors | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___
<a id="source"></a>

### `<Protected>` source

**● source**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/retryWhen.ts:35*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/retryWhen.ts:38*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

