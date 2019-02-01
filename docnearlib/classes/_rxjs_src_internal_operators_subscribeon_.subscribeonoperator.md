[rxjs](../README.md) > ["rxjs/src/internal/operators/subscribeOn"](../modules/_rxjs_src_internal_operators_subscribeon_.md) > [SubscribeOnOperator](../classes/_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md)

# Class: SubscribeOnOperator

## Type parameters
#### T 
## Hierarchy

**SubscribeOnOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md#constructor)

### Properties

* [delay](_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md#delay)
* [scheduler](_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SubscribeOnOperator**(scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, delay: *`number`*): [SubscribeOnOperator](_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md)

*Defined in rxjs/src/internal/operators/subscribeOn.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |
| delay | `number` |

**Returns:** [SubscribeOnOperator](_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md)

___

## Properties

<a id="delay"></a>

### `<Private>` delay

**● delay**: *`number`*

*Defined in rxjs/src/internal/operators/subscribeOn.ts:26*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/subscribeOn.ts:25*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/subscribeOn.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

