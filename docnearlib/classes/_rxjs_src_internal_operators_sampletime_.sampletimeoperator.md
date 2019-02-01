[rxjs](../README.md) > ["rxjs/src/internal/operators/sampleTime"](../modules/_rxjs_src_internal_operators_sampletime_.md) > [SampleTimeOperator](../classes/_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md)

# Class: SampleTimeOperator

## Type parameters
#### T 
## Hierarchy

**SampleTimeOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md#constructor)

### Properties

* [period](_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md#period)
* [scheduler](_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SampleTimeOperator**(period: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [SampleTimeOperator](_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md)

*Defined in rxjs/src/internal/operators/sampleTime.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| period | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [SampleTimeOperator](_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md)

___

## Properties

<a id="period"></a>

### `<Private>` period

**● period**: *`number`*

*Defined in rxjs/src/internal/operators/sampleTime.ts:51*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/sampleTime.ts:52*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/sampleTime.ts:55*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

