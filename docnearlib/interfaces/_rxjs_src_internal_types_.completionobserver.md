[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [CompletionObserver](../interfaces/_rxjs_src_internal_types_.completionobserver.md)

# Interface: CompletionObserver

## Type parameters
#### T 
## Hierarchy

**CompletionObserver**

## Index

### Properties

* [closed](_rxjs_src_internal_types_.completionobserver.md#closed)
* [complete](_rxjs_src_internal_types_.completionobserver.md#complete)
* [error](_rxjs_src_internal_types_.completionobserver.md#error)
* [next](_rxjs_src_internal_types_.completionobserver.md#next)

---

## Properties

<a id="closed"></a>

### `<Optional>` closed

**● closed**: *`boolean`*

*Defined in rxjs/src/internal/types.ts:70*

___
<a id="complete"></a>

###  complete

**● complete**: *`function`*

*Defined in rxjs/src/internal/types.ts:73*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="error"></a>

### `<Optional>` error

**● error**: *`function`*

*Defined in rxjs/src/internal/types.ts:72*

#### Type declaration
▸(err: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |

**Returns:** `void`

___
<a id="next"></a>

### `<Optional>` next

**● next**: *`function`*

*Defined in rxjs/src/internal/types.ts:71*

#### Type declaration
▸(value: *`T`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `void`

___

