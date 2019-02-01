[rxjs](../README.md) > ["rxjs/src/internal/operators/sequenceEqual"](../modules/_rxjs_src_internal_operators_sequenceequal_.md) > [SequenceEqualOperator](../classes/_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md)

# Class: SequenceEqualOperator

## Type parameters
#### T 
## Hierarchy

**SequenceEqualOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `boolean`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md#constructor)

### Properties

* [compareTo](_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md#compareto)
* [comparor](_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md#comparor)

### Methods

* [call](_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SequenceEqualOperator**(compareTo: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*, comparor: *`function`*): [SequenceEqualOperator](_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md)

*Defined in rxjs/src/internal/operators/sequenceEqual.ts:69*

**Parameters:**

| Name | Type |
| ------ | ------ |
| compareTo | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |
| comparor | `function` |

**Returns:** [SequenceEqualOperator](_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md)

___

## Properties

<a id="compareto"></a>

### `<Private>` compareTo

**● compareTo**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/sequenceEqual.ts:70*

___
<a id="comparor"></a>

### `<Private>` comparor

**● comparor**: *`function`*

*Defined in rxjs/src/internal/operators/sequenceEqual.ts:71*

#### Type declaration
▸(a: *`T`*, b: *`T`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T` |

**Returns:** `boolean`

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`boolean`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/sequenceEqual.ts:74*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`boolean`> |
| source | `any` |

**Returns:** `any`

___

