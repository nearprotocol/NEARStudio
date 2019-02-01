[rxjs](../README.md) > ["rxjs/src/internal/observable/zip"](../modules/_rxjs_src_internal_observable_zip_.md) > [StaticIterator](../classes/_rxjs_src_internal_observable_zip_.staticiterator.md)

# Class: StaticIterator

## Type parameters
#### T 
## Hierarchy

**StaticIterator**

## Implements

* [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md)<`T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_observable_zip_.staticiterator.md#constructor)

### Properties

* [iterator](_rxjs_src_internal_observable_zip_.staticiterator.md#iterator)
* [nextResult](_rxjs_src_internal_observable_zip_.staticiterator.md#nextresult)

### Methods

* [hasCompleted](_rxjs_src_internal_observable_zip_.staticiterator.md#hascompleted)
* [hasValue](_rxjs_src_internal_observable_zip_.staticiterator.md#hasvalue)
* [next](_rxjs_src_internal_observable_zip_.staticiterator.md#next)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StaticIterator**(iterator: *`Iterator`<`T`>*): [StaticIterator](_rxjs_src_internal_observable_zip_.staticiterator.md)

*Defined in rxjs/src/internal/observable/zip.ts:218*

**Parameters:**

| Name | Type |
| ------ | ------ |
| iterator | `Iterator`<`T`> |

**Returns:** [StaticIterator](_rxjs_src_internal_observable_zip_.staticiterator.md)

___

## Properties

<a id="iterator"></a>

### `<Private>` iterator

**● iterator**: *`Iterator`<`T`>*

*Defined in rxjs/src/internal/observable/zip.ts:220*

___
<a id="nextresult"></a>

### `<Private>` nextResult

**● nextResult**: *`IteratorResult`<`T`>*

*Defined in rxjs/src/internal/observable/zip.ts:218*

___

## Methods

<a id="hascompleted"></a>

###  hasCompleted

▸ **hasCompleted**(): `boolean`

*Implementation of [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md).[hasCompleted](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md#hascompleted)*

*Defined in rxjs/src/internal/observable/zip.ts:234*

**Returns:** `boolean`

___
<a id="hasvalue"></a>

###  hasValue

▸ **hasValue**(): `boolean`

*Implementation of [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md).[hasValue](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md#hasvalue)*

*Defined in rxjs/src/internal/observable/zip.ts:224*

**Returns:** `boolean`

___
<a id="next"></a>

###  next

▸ **next**(): `IteratorResult`<`T`>

*Defined in rxjs/src/internal/observable/zip.ts:228*

**Returns:** `IteratorResult`<`T`>

___

