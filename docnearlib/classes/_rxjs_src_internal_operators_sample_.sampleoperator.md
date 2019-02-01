[rxjs](../README.md) > ["rxjs/src/internal/operators/sample"](../modules/_rxjs_src_internal_operators_sample_.md) > [SampleOperator](../classes/_rxjs_src_internal_operators_sample_.sampleoperator.md)

# Class: SampleOperator

## Type parameters
#### T 
## Hierarchy

**SampleOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_sample_.sampleoperator.md#constructor)

### Properties

* [notifier](_rxjs_src_internal_operators_sample_.sampleoperator.md#notifier)

### Methods

* [call](_rxjs_src_internal_operators_sample_.sampleoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SampleOperator**(notifier: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [SampleOperator](_rxjs_src_internal_operators_sample_.sampleoperator.md)

*Defined in rxjs/src/internal/operators/sample.ts:51*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notifier | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [SampleOperator](_rxjs_src_internal_operators_sample_.sampleoperator.md)

___

## Properties

<a id="notifier"></a>

### `<Private>` notifier

**● notifier**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*

*Defined in rxjs/src/internal/operators/sample.ts:52*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/sample.ts:55*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

