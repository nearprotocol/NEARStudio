[rxjs](../README.md) > ["rxjs/src/internal/operators/windowWhen"](../modules/_rxjs_src_internal_operators_windowwhen_.md) > [WindowOperator](../classes/_rxjs_src_internal_operators_windowwhen_.windowoperator.md)

# Class: WindowOperator

## Type parameters
#### T 
## Hierarchy

**WindowOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_windowwhen_.windowoperator.md#constructor)

### Properties

* [closingSelector](_rxjs_src_internal_operators_windowwhen_.windowoperator.md#closingselector)

### Methods

* [call](_rxjs_src_internal_operators_windowwhen_.windowoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WindowOperator**(closingSelector: *`function`*): [WindowOperator](_rxjs_src_internal_operators_windowwhen_.windowoperator.md)

*Defined in rxjs/src/internal/operators/windowWhen.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| closingSelector | `function` |

**Returns:** [WindowOperator](_rxjs_src_internal_operators_windowwhen_.windowoperator.md)

___

## Properties

<a id="closingselector"></a>

### `<Private>` closingSelector

**● closingSelector**: *`function`*

*Defined in rxjs/src/internal/operators/windowWhen.ts:62*

#### Type declaration
▸(): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/windowWhen.ts:65*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>> |
| source | `any` |

**Returns:** `any`

___

