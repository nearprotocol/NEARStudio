[@wasm/todomvc](../README.md) > ["near"](../modules/_near_.md) > [GlobalStorage](../classes/_near_.globalstorage.md)

# Class: GlobalStorage

## Hierarchy

**GlobalStorage**

## Index

### Methods

* [getBytes](_near_.globalstorage.md#getbytes)
* [getItem](_near_.globalstorage.md#getitem)
* [getU64](_near_.globalstorage.md#getu64)
* [keys](_near_.globalstorage.md#keys)
* [removeItem](_near_.globalstorage.md#removeitem)
* [setBytes](_near_.globalstorage.md#setbytes)
* [setItem](_near_.globalstorage.md#setitem)
* [setU64](_near_.globalstorage.md#setu64)

---

## Methods

<a id="getbytes"></a>

###  getBytes

▸ **getBytes**(key: *`string`*): `Uint8Array`

*Defined in [near.ts:56](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Uint8Array`

___
<a id="getitem"></a>

###  getItem

▸ **getItem**(key: *`string`*): `string`

*Defined in [near.ts:42](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `string`

___
<a id="getu64"></a>

###  getU64

▸ **getU64**(key: *`string`*): `u64`

*Defined in [near.ts:72](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `u64`

___
<a id="keys"></a>

###  keys

▸ **keys**(prefix: *`string`*): `string`[]

*Defined in [near.ts:25](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `string` |

**Returns:** `string`[]

___
<a id="removeitem"></a>

###  removeItem

▸ **removeItem**(key: *`string`*): `void`

*Defined in [near.ts:66](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `void`

___
<a id="setbytes"></a>

###  setBytes

▸ **setBytes**(key: *`string`*, value: *`Uint8Array`*): `void`

*Defined in [near.ts:53](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `Uint8Array` |

**Returns:** `void`

___
<a id="setitem"></a>

###  setItem

▸ **setItem**(key: *`string`*, value: *`string`*): `void`

*Defined in [near.ts:39](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `string` |

**Returns:** `void`

___
<a id="setu64"></a>

###  setU64

▸ **setU64**(key: *`string`*, value: *`u64`*): `void`

*Defined in [near.ts:69](https://github.com/nearprotocol/NEARStudio/blob/734e829/templates/todomvc/assembly/near.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `u64` |

**Returns:** `void`

___

