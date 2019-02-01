[rxjs](../README.md) > ["uri-js/src/schemes/urn"](../modules/_uri_js_src_schemes_urn_.md)

# External module: "uri-js/src/schemes/urn"

## Index

### Interfaces

* [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)
* [URNOptions](../interfaces/_uri_js_src_schemes_urn_.urnoptions.md)

### Variables

* [NID$](_uri_js_src_schemes_urn_.md#nid_)
* [NSS$](_uri_js_src_schemes_urn_.md#nss_)
* [PCT_ENCODED$](_uri_js_src_schemes_urn_.md#pct_encoded_)
* [TRANS$$](_uri_js_src_schemes_urn_.md#trans__)
* [URN_EXCLUDED](_uri_js_src_schemes_urn_.md#urn_excluded)
* [URN_PARSE](_uri_js_src_schemes_urn_.md#urn_parse)
* [URN_PATH](_uri_js_src_schemes_urn_.md#urn_path)
* [URN_SCHEME](_uri_js_src_schemes_urn_.md#urn_scheme)

### Object literals

* [handler](_uri_js_src_schemes_urn_.md#handler)

---

## Variables

<a id="nid_"></a>

### `<Const>` NID$

**● NID$**: *"(?:[0-9A-Za-z][0-9A-Za-z\-]{1,31})"* = "(?:[0-9A-Za-z][0-9A-Za-z\-]{1,31})"

*Defined in uri-js/src/schemes/urn.ts:13*

___
<a id="nss_"></a>

### `<Const>` NSS$

**● NSS$**: *`string`* =  "(?:(?:" + PCT_ENCODED$ + "|" + TRANS$$ + ")+)"

*Defined in uri-js/src/schemes/urn.ts:16*

___
<a id="pct_encoded_"></a>

### `<Const>` PCT_ENCODED$

**● PCT_ENCODED$**: *"(?:\%[0-9A-Fa-f]{2})"* = "(?:\%[0-9A-Fa-f]{2})"

*Defined in uri-js/src/schemes/urn.ts:14*

___
<a id="trans__"></a>

### `<Const>` TRANS$$

**● TRANS$$**: *"[0-9A-Za-z\(\)\+\,\-\.\:\&#x3D;\@\;\$\_\!\*\&#x27;\/\?\#]"* = "[0-9A-Za-z\(\)\+\,\-\.\:\=\@\;\$\_\!\*\'\/\?\#]"

*Defined in uri-js/src/schemes/urn.ts:15*

___
<a id="urn_excluded"></a>

### `<Const>` URN_EXCLUDED

**● URN_EXCLUDED**: *`RegExp`* =  /[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g

*Defined in uri-js/src/schemes/urn.ts:20*

___
<a id="urn_parse"></a>

### `<Const>` URN_PARSE

**● URN_PARSE**: *`RegExp`* =  /^([^\:]+)\:(.*)/

*Defined in uri-js/src/schemes/urn.ts:19*

___
<a id="urn_path"></a>

### `<Const>` URN_PATH

**● URN_PATH**: *`RegExp`* =  new RegExp("^(" + NID$ + ")\\:(" + NSS$ + ")$")

*Defined in uri-js/src/schemes/urn.ts:18*

___
<a id="urn_scheme"></a>

### `<Const>` URN_SCHEME

**● URN_SCHEME**: *`RegExp`* =  new RegExp("^urn\\:(" + NID$ + ")$")

*Defined in uri-js/src/schemes/urn.ts:17*

___

## Object literals

<a id="handler"></a>

### `<Const>` handler

**handler**: *`object`*

*Defined in uri-js/src/schemes/urn.ts:23*

<a id="handler.scheme"></a>

####  scheme

**● scheme**: *`string`* = "urn"

*Defined in uri-js/src/schemes/urn.ts:24*

___
<a id="handler.parse"></a>

####  parse

▸ **parse**(components: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options: *[URNOptions](../interfaces/_uri_js_src_schemes_urn_.urnoptions.md)*): [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)

*Defined in uri-js/src/schemes/urn.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| options | [URNOptions](../interfaces/_uri_js_src_schemes_urn_.urnoptions.md) |

**Returns:** [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)

___
<a id="handler.serialize"></a>

####  serialize

▸ **serialize**(urnComponents: *[URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md)*, options: *[URNOptions](../interfaces/_uri_js_src_schemes_urn_.urnoptions.md)*): [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

*Defined in uri-js/src/schemes/urn.ts:51*

**Parameters:**

| Name | Type |
| ------ | ------ |
| urnComponents | [URNComponents](../interfaces/_uri_js_src_schemes_urn_.urncomponents.md) |
| options | [URNOptions](../interfaces/_uri_js_src_schemes_urn_.urnoptions.md) |

**Returns:** [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

___

___

