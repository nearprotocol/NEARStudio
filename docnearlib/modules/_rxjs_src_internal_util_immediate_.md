[rxjs](../README.md) > ["rxjs/src/internal/util/Immediate"](../modules/_rxjs_src_internal_util_immediate_.md)

# External module: "rxjs/src/internal/util/Immediate"

## Index

### Variables

* [nextHandle](_rxjs_src_internal_util_immediate_.md#nexthandle)
* [tasksByHandle](_rxjs_src_internal_util_immediate_.md#tasksbyhandle)

### Functions

* [runIfPresent](_rxjs_src_internal_util_immediate_.md#runifpresent)

### Object literals

* [Immediate](_rxjs_src_internal_util_immediate_.md#immediate)

---

## Variables

<a id="nexthandle"></a>

### `<Let>` nextHandle

**● nextHandle**: *`number`* = 1

*Defined in rxjs/src/internal/util/Immediate.ts:1*

___
<a id="tasksbyhandle"></a>

### `<Const>` tasksByHandle

**● tasksByHandle**: *`object`*

*Defined in rxjs/src/internal/util/Immediate.ts:3*

#### Type declaration

[handle: `string`]: `function`

▸(): `void`

**Returns:** `void`

___

## Functions

<a id="runifpresent"></a>

###  runIfPresent

▸ **runIfPresent**(handle: *`number`*): `void`

*Defined in rxjs/src/internal/util/Immediate.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___

## Object literals

<a id="immediate"></a>

### `<Const>` Immediate

**Immediate**: *`object`*

*Defined in rxjs/src/internal/util/Immediate.ts:12*

<a id="immediate.clearimmediate"></a>

####  clearImmediate

▸ **clearImmediate**(handle: *`number`*): `void`

*Defined in rxjs/src/internal/util/Immediate.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="immediate.setimmediate"></a>

####  setImmediate

▸ **setImmediate**(cb: *`function`*): `number`

*Defined in rxjs/src/internal/util/Immediate.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** `number`

___

___

