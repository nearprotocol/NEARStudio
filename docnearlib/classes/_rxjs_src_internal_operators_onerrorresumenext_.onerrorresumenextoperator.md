[rxjs](../README.md) > ["rxjs/src/internal/operators/onErrorResumeNext"](../modules/_rxjs_src_internal_operators_onerrorresumenext_.md) > [OnErrorResumeNextOperator](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md)

# Class: OnErrorResumeNextOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**OnErrorResumeNextOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md#constructor)

### Properties

* [nextSources](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md#nextsources)

### Methods

* [call](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new OnErrorResumeNextOperator**(nextSources: *`Array`<[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>>*): [OnErrorResumeNextOperator](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md)

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:122*

**Parameters:**

| Name | Type |
| ------ | ------ |
| nextSources | `Array`<[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>> |

**Returns:** [OnErrorResumeNextOperator](_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md)

___

## Properties

<a id="nextsources"></a>

### `<Private>` nextSources

**● nextSources**: *`Array`<[ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`any`>>*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:123*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:126*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

