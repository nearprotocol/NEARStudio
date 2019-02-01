[rxjs](../README.md) > ["rxjs/src/internal/operators/windowCount"](../modules/_rxjs_src_internal_operators_windowcount_.md) > [WindowCountOperator](../classes/_rxjs_src_internal_operators_windowcount_.windowcountoperator.md)

# Class: WindowCountOperator

## Type parameters
#### T 
## Hierarchy

**WindowCountOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_windowcount_.windowcountoperator.md#constructor)

### Properties

* [startWindowEvery](_rxjs_src_internal_operators_windowcount_.windowcountoperator.md#startwindowevery)
* [windowSize](_rxjs_src_internal_operators_windowcount_.windowcountoperator.md#windowsize)

### Methods

* [call](_rxjs_src_internal_operators_windowcount_.windowcountoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WindowCountOperator**(windowSize: *`number`*, startWindowEvery: *`number`*): [WindowCountOperator](_rxjs_src_internal_operators_windowcount_.windowcountoperator.md)

*Defined in rxjs/src/internal/operators/windowCount.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| windowSize | `number` |
| startWindowEvery | `number` |

**Returns:** [WindowCountOperator](_rxjs_src_internal_operators_windowcount_.windowcountoperator.md)

___

## Properties

<a id="startwindowevery"></a>

### `<Private>` startWindowEvery

**● startWindowEvery**: *`number`*

*Defined in rxjs/src/internal/operators/windowCount.ts:74*

___
<a id="windowsize"></a>

### `<Private>` windowSize

**● windowSize**: *`number`*

*Defined in rxjs/src/internal/operators/windowCount.ts:73*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/windowCount.ts:77*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>> |
| source | `any` |

**Returns:** `any`

___

