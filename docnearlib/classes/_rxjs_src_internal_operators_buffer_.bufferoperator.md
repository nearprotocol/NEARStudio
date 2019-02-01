[rxjs](../README.md) > ["rxjs/src/internal/operators/buffer"](../modules/_rxjs_src_internal_operators_buffer_.md) > [BufferOperator](../classes/_rxjs_src_internal_operators_buffer_.bufferoperator.md)

# Class: BufferOperator

## Type parameters
#### T 
## Hierarchy

**BufferOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`[]>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_buffer_.bufferoperator.md#constructor)

### Properties

* [closingNotifier](_rxjs_src_internal_operators_buffer_.bufferoperator.md#closingnotifier)

### Methods

* [call](_rxjs_src_internal_operators_buffer_.bufferoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BufferOperator**(closingNotifier: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [BufferOperator](_rxjs_src_internal_operators_buffer_.bufferoperator.md)

*Defined in rxjs/src/internal/operators/buffer.ts:52*

**Parameters:**

| Name | Type |
| ------ | ------ |
| closingNotifier | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [BufferOperator](_rxjs_src_internal_operators_buffer_.bufferoperator.md)

___

## Properties

<a id="closingnotifier"></a>

### `<Private>` closingNotifier

**● closingNotifier**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*

*Defined in rxjs/src/internal/operators/buffer.ts:54*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/buffer.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]> |
| source | `any` |

**Returns:** `any`

___

