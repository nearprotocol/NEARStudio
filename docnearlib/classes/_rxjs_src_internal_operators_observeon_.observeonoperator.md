[rxjs](../README.md) > ["rxjs/src/internal/operators/observeOn"](../modules/_rxjs_src_internal_operators_observeon_.md) > [ObserveOnOperator](../classes/_rxjs_src_internal_operators_observeon_.observeonoperator.md)

# Class: ObserveOnOperator

## Type parameters
#### T 
## Hierarchy

**ObserveOnOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_observeon_.observeonoperator.md#constructor)

### Properties

* [delay](_rxjs_src_internal_operators_observeon_.observeonoperator.md#delay)
* [scheduler](_rxjs_src_internal_operators_observeon_.observeonoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_observeon_.observeonoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ObserveOnOperator**(scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, delay?: *`number`*): [ObserveOnOperator](_rxjs_src_internal_operators_observeon_.observeonoperator.md)

*Defined in rxjs/src/internal/operators/observeOn.ts:63*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |
| `Default value` delay | `number` | 0 |

**Returns:** [ObserveOnOperator](_rxjs_src_internal_operators_observeon_.observeonoperator.md)

___

## Properties

<a id="delay"></a>

### `<Private>` delay

**● delay**: *`number`*

*Defined in rxjs/src/internal/operators/observeOn.ts:64*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/observeOn.ts:64*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/observeOn.ts:67*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

