[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferWhen"](../modules/_rxjs_src_internal_operators_bufferwhen_.md) > [BufferWhenOperator](../classes/_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md)

# Class: BufferWhenOperator

## Type parameters
#### T 
## Hierarchy

**BufferWhenOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`[]>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md#constructor)

### Properties

* [closingSelector](_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md#closingselector)

### Methods

* [call](_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BufferWhenOperator**(closingSelector: *`function`*): [BufferWhenOperator](_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md)

*Defined in rxjs/src/internal/operators/bufferWhen.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| closingSelector | `function` |

**Returns:** [BufferWhenOperator](_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md)

___

## Properties

<a id="closingselector"></a>

### `<Private>` closingSelector

**● closingSelector**: *`function`*

*Defined in rxjs/src/internal/operators/bufferWhen.ts:59*

#### Type declaration
▸(): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/bufferWhen.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]> |
| source | `any` |

**Returns:** `any`

___

