[rxjs](../README.md) > ["uri-js/src/schemes/urn-uuid"](../modules/_uri_js_src_schemes_urn_uuid_.md)

# External module: "uri-js/src/schemes/urn-uuid"

## Index

### Interfaces

* [UUIDComponents](../interfaces/_uri_js_src_schemes_urn_uuid_.uuidcomponents.md)

### Variables

* [UUID](_uri_js_src_schemes_urn_uuid_.md#uuid)
* [UUID_PARSE](_uri_js_src_schemes_urn_uuid_.md#uuid_parse)

### Object literals

* [handler](_uri_js_src_schemes_urn_uuid_.md#handler)

---

## Variables

<a id="uuid"></a>

### `<Const>` UUID

**● UUID**: *`RegExp`* =  /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/

*Defined in uri-js/src/schemes/urn-uuid.ts:9*

___
<a id="uuid_parse"></a>

### `<Const>` UUID_PARSE

**● UUID_PARSE**: *`RegExp`* =  /^[0-9A-Fa-f\-]{36}/

*Defined in uri-js/src/schemes/urn-uuid.ts:10*

___

## Object literals

<a id="handler"></a>

### `<Const>` handler

**handler**: *`object`*

*Defined in uri-js/src/schemes/urn-uuid.ts:13*

<a id="handler.scheme"></a>

####  scheme

**● scheme**: *`string`* = "urn:uuid"

*Defined in uri-js/src/schemes/urn-uuid.ts:14*

___
<a id="handler.parse"></a>

####  parse

▸ **parse**(urnComponents: *[URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)*, options: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): [UUIDComponents](../interfaces/_uri_js_src_schemes_urn_uuid_.uuidcomponents.md)

*Defined in uri-js/src/schemes/urn-uuid.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| urnComponents | [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md) |
| options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** [UUIDComponents](../interfaces/_uri_js_src_schemes_urn_uuid_.uuidcomponents.md)

___
<a id="handler.serialize"></a>

####  serialize

▸ **serialize**(uuidComponents: *[UUIDComponents](../interfaces/_uri_js_src_schemes_urn_uuid_.uuidcomponents.md)*, options: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)

*Defined in uri-js/src/schemes/urn-uuid.ts:28*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uuidComponents | [UUIDComponents](../interfaces/_uri_js_src_schemes_urn_uuid_.uuidcomponents.md) |
| options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)

___

___

