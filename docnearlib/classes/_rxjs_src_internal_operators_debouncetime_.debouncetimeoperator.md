[rxjs](../README.md) > ["rxjs/src/internal/operators/debounceTime"](../modules/_rxjs_src_internal_operators_debouncetime_.md) > [DebounceTimeOperator](../classes/_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md)

# Class: DebounceTimeOperator

## Type parameters
#### T 
## Hierarchy

**DebounceTimeOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md#constructor)

### Properties

* [dueTime](_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md#duetime)
* [scheduler](_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DebounceTimeOperator**(dueTime: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [DebounceTimeOperator](_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md)

*Defined in rxjs/src/internal/operators/debounceTime.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dueTime | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [DebounceTimeOperator](_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md)

___

## Properties

<a id="duetime"></a>

### `<Private>` dueTime

**● dueTime**: *`number`*

*Defined in rxjs/src/internal/operators/debounceTime.ts:62*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/debounceTime.ts:62*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/debounceTime.ts:65*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

