[rxjs](../README.md) > ["rxjs/src/internal/operators/delay"](../modules/_rxjs_src_internal_operators_delay_.md) > [DelayOperator](../classes/_rxjs_src_internal_operators_delay_.delayoperator.md)

# Class: DelayOperator

## Type parameters
#### T 
## Hierarchy

**DelayOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_delay_.delayoperator.md#constructor)

### Properties

* [delay](_rxjs_src_internal_operators_delay_.delayoperator.md#delay)
* [scheduler](_rxjs_src_internal_operators_delay_.delayoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_delay_.delayoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DelayOperator**(delay: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [DelayOperator](_rxjs_src_internal_operators_delay_.delayoperator.md)

*Defined in rxjs/src/internal/operators/delay.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| delay | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [DelayOperator](_rxjs_src_internal_operators_delay_.delayoperator.md)

___

## Properties

<a id="delay"></a>

### `<Private>` delay

**● delay**: *`number`*

*Defined in rxjs/src/internal/operators/delay.ts:62*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/delay.ts:63*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/delay.ts:66*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

