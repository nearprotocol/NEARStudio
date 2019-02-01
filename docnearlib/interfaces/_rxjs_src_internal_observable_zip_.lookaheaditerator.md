[rxjs](../README.md) > ["rxjs/src/internal/observable/zip"](../modules/_rxjs_src_internal_observable_zip_.md) > [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md)

# Interface: LookAheadIterator

## Type parameters
#### T 
## Hierarchy

 `Iterator`<`T`>

**↳ LookAheadIterator**

## Implemented by

* [StaticArrayIterator](../classes/_rxjs_src_internal_observable_zip_.staticarrayiterator.md)
* [StaticIterator](../classes/_rxjs_src_internal_observable_zip_.staticiterator.md)

## Index

### Methods

* [hasCompleted](_rxjs_src_internal_observable_zip_.lookaheaditerator.md#hascompleted)
* [hasValue](_rxjs_src_internal_observable_zip_.lookaheaditerator.md#hasvalue)
* [next](_rxjs_src_internal_observable_zip_.lookaheaditerator.md#next)
* [return](_rxjs_src_internal_observable_zip_.lookaheaditerator.md#return)
* [throw](_rxjs_src_internal_observable_zip_.lookaheaditerator.md#throw)

---

## Methods

<a id="hascompleted"></a>

###  hasCompleted

▸ **hasCompleted**(): `boolean`

*Defined in rxjs/src/internal/observable/zip.ts:214*

**Returns:** `boolean`

___
<a id="hasvalue"></a>

###  hasValue

▸ **hasValue**(): `boolean`

*Defined in rxjs/src/internal/observable/zip.ts:213*

**Returns:** `boolean`

___
<a id="next"></a>

###  next

▸ **next**(value?: *`any`*): `IteratorResult`<`T`>

*Inherited from Iterator.next*

*Overrides Iterator.next*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:37*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `IteratorResult`<`T`>

___
<a id="return"></a>

### `<Optional>` return

▸ **return**(value?: *`any`*): `IteratorResult`<`T`>

*Inherited from Iterator.return*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:38*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `IteratorResult`<`T`>

___
<a id="throw"></a>

### `<Optional>` throw

▸ **throw**(e?: *`any`*): `IteratorResult`<`T`>

*Inherited from Iterator.throw*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:39*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` e | `any` |

**Returns:** `IteratorResult`<`T`>

___

