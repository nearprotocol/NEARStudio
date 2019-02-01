[rxjs](../README.md) > ["rxjs/src/internal/observable/zip"](../modules/_rxjs_src_internal_observable_zip_.md) > [StaticArrayIterator](../classes/_rxjs_src_internal_observable_zip_.staticarrayiterator.md)

# Class: StaticArrayIterator

## Type parameters
#### T 
## Hierarchy

**StaticArrayIterator**

## Implements

* [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md)<`T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#constructor)

### Properties

* [array](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#array)
* [index](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#index)
* [length](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#length)

### Methods

* [__computed](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#__computed)
* [hasCompleted](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#hascompleted)
* [hasValue](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#hasvalue)
* [next](_rxjs_src_internal_observable_zip_.staticarrayiterator.md#next)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StaticArrayIterator**(array: *`T`[]*): [StaticArrayIterator](_rxjs_src_internal_observable_zip_.staticarrayiterator.md)

*Defined in rxjs/src/internal/observable/zip.ts:242*

**Parameters:**

| Name | Type |
| ------ | ------ |
| array | `T`[] |

**Returns:** [StaticArrayIterator](_rxjs_src_internal_observable_zip_.staticarrayiterator.md)

___

## Properties

<a id="array"></a>

### `<Private>` array

**● array**: *`T`[]*

*Defined in rxjs/src/internal/observable/zip.ts:244*

___
<a id="index"></a>

### `<Private>` index

**● index**: *`number`* = 0

*Defined in rxjs/src/internal/observable/zip.ts:241*

___
<a id="length"></a>

### `<Private>` length

**● length**: *`number`* = 0

*Defined in rxjs/src/internal/observable/zip.ts:242*

___

## Methods

<a id="__computed"></a>

###  __computed

▸ **__computed**(): `this`

*Defined in rxjs/src/internal/observable/zip.ts:248*

**Returns:** `this`

___
<a id="hascompleted"></a>

###  hasCompleted

▸ **hasCompleted**(): `boolean`

*Implementation of [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md).[hasCompleted](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md#hascompleted)*

*Defined in rxjs/src/internal/observable/zip.ts:262*

**Returns:** `boolean`

___
<a id="hasvalue"></a>

###  hasValue

▸ **hasValue**(): `boolean`

*Implementation of [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md).[hasValue](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md#hasvalue)*

*Defined in rxjs/src/internal/observable/zip.ts:258*

**Returns:** `boolean`

___
<a id="next"></a>

###  next

▸ **next**(value?: *`any`*): `IteratorResult`<`T`>

*Implementation of [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md).[next](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md#next)*

*Defined in rxjs/src/internal/observable/zip.ts:252*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `IteratorResult`<`T`>

___

