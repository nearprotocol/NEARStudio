[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [NextObserver](../interfaces/_rxjs_src_internal_types_.nextobserver.md)

# Interface: NextObserver

OBSERVER INTERFACES

## Type parameters
#### T 
## Hierarchy

**NextObserver**

## Index

### Properties

* [closed](_rxjs_src_internal_types_.nextobserver.md#closed)
* [complete](_rxjs_src_internal_types_.nextobserver.md#complete)
* [error](_rxjs_src_internal_types_.nextobserver.md#error)
* [next](_rxjs_src_internal_types_.nextobserver.md#next)

---

## Properties

<a id="closed"></a>

### `<Optional>` closed

**● closed**: *`boolean`*

*Defined in rxjs/src/internal/types.ts:56*

___
<a id="complete"></a>

### `<Optional>` complete

**● complete**: *`function`*

*Defined in rxjs/src/internal/types.ts:59*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="error"></a>

### `<Optional>` error

**● error**: *`function`*

*Defined in rxjs/src/internal/types.ts:58*

#### Type declaration
▸(err: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| err | `any` |

**Returns:** `void`

___
<a id="next"></a>

###  next

**● next**: *`function`*

*Defined in rxjs/src/internal/types.ts:57*

#### Type declaration
▸(value: *`T`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `void`

___

