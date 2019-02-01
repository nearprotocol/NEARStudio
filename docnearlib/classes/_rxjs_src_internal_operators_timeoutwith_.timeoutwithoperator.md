[rxjs](../README.md) > ["rxjs/src/internal/operators/timeoutWith"](../modules/_rxjs_src_internal_operators_timeoutwith_.md) > [TimeoutWithOperator](../classes/_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md)

# Class: TimeoutWithOperator

## Type parameters
#### T 
## Hierarchy

**TimeoutWithOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md#constructor)

### Properties

* [absoluteTimeout](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md#absolutetimeout)
* [scheduler](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md#scheduler)
* [waitFor](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md#waitfor)
* [withObservable](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md#withobservable)

### Methods

* [call](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TimeoutWithOperator**(waitFor: *`number`*, absoluteTimeout: *`boolean`*, withObservable: *[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [TimeoutWithOperator](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md)

*Defined in rxjs/src/internal/operators/timeoutWith.ts:74*

**Parameters:**

| Name | Type |
| ------ | ------ |
| waitFor | `number` |
| absoluteTimeout | `boolean` |
| withObservable | [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`> |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [TimeoutWithOperator](_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md)

___

## Properties

<a id="absolutetimeout"></a>

### `<Private>` absoluteTimeout

**● absoluteTimeout**: *`boolean`*

*Defined in rxjs/src/internal/operators/timeoutWith.ts:76*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/timeoutWith.ts:78*

___
<a id="waitfor"></a>

### `<Private>` waitFor

**● waitFor**: *`number`*

*Defined in rxjs/src/internal/operators/timeoutWith.ts:75*

___
<a id="withobservable"></a>

### `<Private>` withObservable

**● withObservable**: *[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>*

*Defined in rxjs/src/internal/operators/timeoutWith.ts:77*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/timeoutWith.ts:81*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

