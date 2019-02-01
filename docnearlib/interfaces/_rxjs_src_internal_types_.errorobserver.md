[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [ErrorObserver](../interfaces/_rxjs_src_internal_types_.errorobserver.md)

# Interface: ErrorObserver

## Type parameters
#### T 
## Hierarchy

**ErrorObserver**

## Index

### Properties

* [closed](_rxjs_src_internal_types_.errorobserver.md#closed)
* [complete](_rxjs_src_internal_types_.errorobserver.md#complete)
* [error](_rxjs_src_internal_types_.errorobserver.md#error)
* [next](_rxjs_src_internal_types_.errorobserver.md#next)

---

## Properties

<a id="closed"></a>

### `<Optional>` closed

**● closed**: *`boolean`*

*Defined in rxjs/src/internal/types.ts:63*

___
<a id="complete"></a>

### `<Optional>` complete

**● complete**: *`function`*

*Defined in rxjs/src/internal/types.ts:66*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="error"></a>

###  error

**● error**: *`function`*

*Defined in rxjs/src/internal/types.ts:65*

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

*Defined in rxjs/src/internal/types.ts:64*

#### Type declaration
▸(value: *`T`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `void`

___

