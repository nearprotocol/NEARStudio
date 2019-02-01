[rxjs](../README.md) > ["rxjs/src/internal/operators/windowTime"](../modules/_rxjs_src_internal_operators_windowtime_.md) > [WindowTimeOperator](../classes/_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md)

# Class: WindowTimeOperator

## Type parameters
#### T 
## Hierarchy

**WindowTimeOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md#constructor)

### Properties

* [maxWindowSize](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md#maxwindowsize)
* [scheduler](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md#scheduler)
* [windowCreationInterval](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md#windowcreationinterval)
* [windowTimeSpan](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md#windowtimespan)

### Methods

* [call](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WindowTimeOperator**(windowTimeSpan: *`number`*, windowCreationInterval: *`number` \| `null`*, maxWindowSize: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [WindowTimeOperator](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md)

*Defined in rxjs/src/internal/operators/windowTime.ts:120*

**Parameters:**

| Name | Type |
| ------ | ------ |
| windowTimeSpan | `number` |
| windowCreationInterval | `number` \| `null` |
| maxWindowSize | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [WindowTimeOperator](_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md)

___

## Properties

<a id="maxwindowsize"></a>

### `<Private>` maxWindowSize

**● maxWindowSize**: *`number`*

*Defined in rxjs/src/internal/operators/windowTime.ts:124*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/windowTime.ts:125*

___
<a id="windowcreationinterval"></a>

### `<Private>` windowCreationInterval

**● windowCreationInterval**: *`number` \| `null`*

*Defined in rxjs/src/internal/operators/windowTime.ts:123*

___
<a id="windowtimespan"></a>

### `<Private>` windowTimeSpan

**● windowTimeSpan**: *`number`*

*Defined in rxjs/src/internal/operators/windowTime.ts:122*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/windowTime.ts:128*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>> |
| source | `any` |

**Returns:** `any`

___

