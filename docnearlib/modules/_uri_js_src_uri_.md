[rxjs](../README.md) > ["uri-js/src/uri"](../modules/_uri_js_src_uri_.md)

# External module: "uri-js/src/uri"

URI.js

*__fileoverview__*: An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.

*__author__*: [Gary Court](mailto:gary.court@gmail.com)

*__see__*: [http://github.com/garycourt/uri-js](http://github.com/garycourt/uri-js)

## Index

### Interfaces

* [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)
* [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)
* [URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md)
* [URISchemeHandler](../interfaces/_uri_js_src_uri_.urischemehandler.md)

### Variables

* [NO_MATCH_IS_UNDEFINED](_uri_js_src_uri_.md#no_match_is_undefined)
* [RDS1](_uri_js_src_uri_.md#rds1)
* [RDS2](_uri_js_src_uri_.md#rds2)
* [RDS3](_uri_js_src_uri_.md#rds3)
* [RDS4](_uri_js_src_uri_.md#rds4)
* [RDS5](_uri_js_src_uri_.md#rds5)
* [SCHEMES](_uri_js_src_uri_.md#schemes)
* [URI_PARSE](_uri_js_src_uri_.md#uri_parse)

### Functions

* [_normalizeComponentEncoding](_uri_js_src_uri_.md#_normalizecomponentencoding)
* [_normalizeIPv4](_uri_js_src_uri_.md#_normalizeipv4)
* [_normalizeIPv6](_uri_js_src_uri_.md#_normalizeipv6)
* [_recomposeAuthority](_uri_js_src_uri_.md#_recomposeauthority)
* [_stripLeadingZeros](_uri_js_src_uri_.md#_stripleadingzeros)
* [equal](_uri_js_src_uri_.md#equal)
* [escapeComponent](_uri_js_src_uri_.md#escapecomponent)
* [normalize](_uri_js_src_uri_.md#normalize)
* [parse](_uri_js_src_uri_.md#parse)
* [pctDecChars](_uri_js_src_uri_.md#pctdecchars)
* [pctEncChar](_uri_js_src_uri_.md#pctencchar)
* [removeDotSegments](_uri_js_src_uri_.md#removedotsegments)
* [resolve](_uri_js_src_uri_.md#resolve)
* [resolveComponents](_uri_js_src_uri_.md#resolvecomponents)
* [serialize](_uri_js_src_uri_.md#serialize)
* [unescapeComponent](_uri_js_src_uri_.md#unescapecomponent)

---

## Variables

<a id="no_match_is_undefined"></a>

### `<Const>` NO_MATCH_IS_UNDEFINED

**● NO_MATCH_IS_UNDEFINED**: *`boolean`* =  (<RegExpMatchArray>("").match(/(){0}/))[1] === undefined

*Defined in uri-js/src/uri.ts:229*

___
<a id="rds1"></a>

### `<Const>` RDS1

**● RDS1**: *`RegExp`* =  /^\.\.?\//

*Defined in uri-js/src/uri.ts:345*

___
<a id="rds2"></a>

### `<Const>` RDS2

**● RDS2**: *`RegExp`* =  /^\/\.(\/|$)/

*Defined in uri-js/src/uri.ts:346*

___
<a id="rds3"></a>

### `<Const>` RDS3

**● RDS3**: *`RegExp`* =  /^\/\.\.(\/|$)/

*Defined in uri-js/src/uri.ts:347*

___
<a id="rds4"></a>

### `<Const>` RDS4

**● RDS4**: *`RegExp`* =  /^\.\.?$/

*Defined in uri-js/src/uri.ts:348*

___
<a id="rds5"></a>

### `<Const>` RDS5

**● RDS5**: *`RegExp`* =  /^\/?(?:.|\n)*?(?=\/|$)/

*Defined in uri-js/src/uri.ts:349*

___
<a id="schemes"></a>

### `<Const>` SCHEMES

**● SCHEMES**: *`object`*

*Defined in uri-js/src/uri.ts:89*

#### Type declaration

[scheme: `string`]: [URISchemeHandler](../interfaces/_uri_js_src_uri_.urischemehandler.md)

___
<a id="uri_parse"></a>

### `<Const>` URI_PARSE

**● URI_PARSE**: *`RegExp`* =  /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i

*Defined in uri-js/src/uri.ts:228*

___

## Functions

<a id="_normalizecomponentencoding"></a>

###  _normalizeComponentEncoding

▸ **_normalizeComponentEncoding**(components: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, protocol: *[URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md)*): [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

*Defined in uri-js/src/uri.ts:143*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| protocol | [URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md) |

**Returns:** [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

___
<a id="_normalizeipv4"></a>

###  _normalizeIPv4

▸ **_normalizeIPv4**(host: *`string`*, protocol: *[URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md)*): `string`

*Defined in uri-js/src/uri.ts:163*

**Parameters:**

| Name | Type |
| ------ | ------ |
| host | `string` |
| protocol | [URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md) |

**Returns:** `string`

___
<a id="_normalizeipv6"></a>

###  _normalizeIPv6

▸ **_normalizeIPv6**(host: *`string`*, protocol: *[URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md)*): `string`

*Defined in uri-js/src/uri.ts:174*

**Parameters:**

| Name | Type |
| ------ | ------ |
| host | `string` |
| protocol | [URIRegExps](../interfaces/_uri_js_src_uri_.uriregexps.md) |

**Returns:** `string`

___
<a id="_recomposeauthority"></a>

###  _recomposeAuthority

▸ **_recomposeAuthority**(components: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `string` \| `undefined`

*Defined in uri-js/src/uri.ts:323*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `string` \| `undefined`

___
<a id="_stripleadingzeros"></a>

###  _stripLeadingZeros

▸ **_stripLeadingZeros**(str: *`string`*): `string`

*Defined in uri-js/src/uri.ts:159*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `string`

___
<a id="equal"></a>

###  equal

▸ **equal**(uriA: *`string`*, uriB: *`string`*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `boolean`

▸ **equal**(uriA: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, uriB: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `boolean`

*Defined in uri-js/src/uri.ts:532*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uriA | `string` |
| uriB | `string` |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `boolean`

*Defined in uri-js/src/uri.ts:533*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uriA | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| uriB | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `boolean`

___
<a id="escapecomponent"></a>

###  escapeComponent

▸ **escapeComponent**(str: *`string`*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `string`

*Defined in uri-js/src/uri.ts:550*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `string`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(uri: *`string`*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `string`

▸ **normalize**(uri: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

*Defined in uri-js/src/uri.ts:520*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uri | `string` |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `string`

*Defined in uri-js/src/uri.ts:521*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uri | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

___
<a id="parse"></a>

###  parse

▸ **parse**(uriString: *`string`*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

*Defined in uri-js/src/uri.ts:231*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| uriString | `string` | - |
| `Default value` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |  {} |

**Returns:** [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

___
<a id="pctdecchars"></a>

###  pctDecChars

▸ **pctDecChars**(str: *`string`*): `string`

*Defined in uri-js/src/uri.ts:103*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `string`

___
<a id="pctencchar"></a>

###  pctEncChar

▸ **pctEncChar**(chr: *`string`*): `string`

*Defined in uri-js/src/uri.ts:91*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chr | `string` |

**Returns:** `string`

___
<a id="removedotsegments"></a>

###  removeDotSegments

▸ **removeDotSegments**(input: *`string`*): `string`

*Defined in uri-js/src/uri.ts:351*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `string` |

**Returns:** `string`

___
<a id="resolve"></a>

###  resolve

▸ **resolve**(baseURI: *`string`*, relativeURI: *`string`*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `string`

*Defined in uri-js/src/uri.ts:515*

**Parameters:**

| Name | Type |
| ------ | ------ |
| baseURI | `string` |
| relativeURI | `string` |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `string`

___
<a id="resolvecomponents"></a>

###  resolveComponents

▸ **resolveComponents**(base: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, relative: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*, skipNormalization?: *`boolean`*): [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

*Defined in uri-js/src/uri.ts:454*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| base | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) | - |
| relative | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) | - |
| `Default value` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |  {} |
| `Optional` skipNormalization | `boolean` | - |

**Returns:** [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(components: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `string`

*Defined in uri-js/src/uri.ts:379*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| components | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) | - |
| `Default value` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |  {} |

**Returns:** `string`

___
<a id="unescapecomponent"></a>

###  unescapeComponent

▸ **unescapeComponent**(str: *`string`*, options?: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): `string`

*Defined in uri-js/src/uri.ts:554*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** `string`

___

