[rxjs](../README.md) > ["rxjs/src/internal/operators/windowToggle"](../modules/_rxjs_src_internal_operators_windowtoggle_.md) > [WindowToggleOperator](../classes/_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md)

# Class: WindowToggleOperator

## Type parameters
#### T 
#### O 
## Hierarchy

**WindowToggleOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, [Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md#constructor)

### Properties

* [closingSelector](_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md#closingselector)
* [openings](_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md#openings)

### Methods

* [call](_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WindowToggleOperator**(openings: *[Observable](_rxjs_src_internal_observable_.observable.md)<`O`>*, closingSelector: *`function`*): [WindowToggleOperator](_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md)

*Defined in rxjs/src/internal/operators/windowToggle.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| openings | [Observable](_rxjs_src_internal_observable_.observable.md)<`O`> |
| closingSelector | `function` |

**Returns:** [WindowToggleOperator](_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md)

___

## Properties

<a id="closingselector"></a>

### `<Private>` closingSelector

**● closingSelector**: *`function`*

*Defined in rxjs/src/internal/operators/windowToggle.ts:66*

#### Type declaration
▸(openValue: *`O`*): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| openValue | `O` |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___
<a id="openings"></a>

### `<Private>` openings

**● openings**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`O`>*

*Defined in rxjs/src/internal/operators/windowToggle.ts:65*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/windowToggle.ts:69*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>> |
| source | `any` |

**Returns:** `any`

___

