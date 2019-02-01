[rxjs](../README.md) > ["rxjs/src/internal/operators/every"](../modules/_rxjs_src_internal_operators_every_.md) > [EveryOperator](../classes/_rxjs_src_internal_operators_every_.everyoperator.md)

# Class: EveryOperator

## Type parameters
#### T 
## Hierarchy

**EveryOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `boolean`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_every_.everyoperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_every_.everyoperator.md#predicate)
* [source](_rxjs_src_internal_operators_every_.everyoperator.md#source)
* [thisArg](_rxjs_src_internal_operators_every_.everyoperator.md#thisarg)

### Methods

* [call](_rxjs_src_internal_operators_every_.everyoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EveryOperator**(predicate: *`function`*, thisArg?: *`any`*, source?: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [EveryOperator](_rxjs_src_internal_operators_every_.everyoperator.md)

*Defined in rxjs/src/internal/operators/every.ts:29*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` thisArg | `any` |
| `Optional` source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [EveryOperator](_rxjs_src_internal_operators_every_.everyoperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/every.ts:30*

#### Type declaration
▸(value: *`T`*, index: *`number`*, source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** `boolean`

___
<a id="source"></a>

### `<Private>``<Optional>` source

**● source**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/every.ts:32*

___
<a id="thisarg"></a>

### `<Private>``<Optional>` thisArg

**● thisArg**: *`any`*

*Defined in rxjs/src/internal/operators/every.ts:31*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(observer: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`boolean`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/every.ts:35*

**Parameters:**

| Name | Type |
| ------ | ------ |
| observer | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`boolean`> |
| source | `any` |

**Returns:** `any`

___

