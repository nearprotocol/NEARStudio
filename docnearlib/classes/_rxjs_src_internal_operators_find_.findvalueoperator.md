[rxjs](../README.md) > ["rxjs/src/internal/operators/find"](../modules/_rxjs_src_internal_operators_find_.md) > [FindValueOperator](../classes/_rxjs_src_internal_operators_find_.findvalueoperator.md)

# Class: FindValueOperator

## Type parameters
#### T 
## Hierarchy

**FindValueOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T` \| `number` \| `undefined`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_find_.findvalueoperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_find_.findvalueoperator.md#predicate)
* [source](_rxjs_src_internal_operators_find_.findvalueoperator.md#source)
* [thisArg](_rxjs_src_internal_operators_find_.findvalueoperator.md#thisarg)
* [yieldIndex](_rxjs_src_internal_operators_find_.findvalueoperator.md#yieldindex)

### Methods

* [call](_rxjs_src_internal_operators_find_.findvalueoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FindValueOperator**(predicate: *`function`*, source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*, yieldIndex: *`boolean`*, thisArg?: *`any`*): [FindValueOperator](_rxjs_src_internal_operators_find_.findvalueoperator.md)

*Defined in rxjs/src/internal/operators/find.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |
| yieldIndex | `boolean` |
| `Optional` thisArg | `any` |

**Returns:** [FindValueOperator](_rxjs_src_internal_operators_find_.findvalueoperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/find.ts:55*

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

### `<Private>` source

**● source**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/find.ts:56*

___
<a id="thisarg"></a>

### `<Private>``<Optional>` thisArg

**● thisArg**: *`any`*

*Defined in rxjs/src/internal/operators/find.ts:58*

___
<a id="yieldindex"></a>

### `<Private>` yieldIndex

**● yieldIndex**: *`boolean`*

*Defined in rxjs/src/internal/operators/find.ts:57*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(observer: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/find.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| observer | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** `any`

___

