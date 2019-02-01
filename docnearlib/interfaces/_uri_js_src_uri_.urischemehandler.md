[rxjs](../README.md) > ["uri-js/src/uri"](../modules/_uri_js_src_uri_.md) > [URISchemeHandler](../interfaces/_uri_js_src_uri_.urischemehandler.md)

# Interface: URISchemeHandler

## Type parameters
#### Components :  [URIComponents](_uri_js_src_uri_.uricomponents.md)
#### Options :  [URIOptions](_uri_js_src_uri_.urioptions.md)
#### ParentComponents :  [URIComponents](_uri_js_src_uri_.uricomponents.md)
## Hierarchy

**URISchemeHandler**

## Index

### Properties

* [absolutePath](_uri_js_src_uri_.urischemehandler.md#absolutepath)
* [domainHost](_uri_js_src_uri_.urischemehandler.md#domainhost)
* [scheme](_uri_js_src_uri_.urischemehandler.md#scheme)
* [unicodeSupport](_uri_js_src_uri_.urischemehandler.md#unicodesupport)

### Methods

* [parse](_uri_js_src_uri_.urischemehandler.md#parse)
* [serialize](_uri_js_src_uri_.urischemehandler.md#serialize)

---

## Properties

<a id="absolutepath"></a>

### `<Optional>` absolutePath

**● absolutePath**: *`boolean`*

*Defined in uri-js/src/uri.ts:70*

___
<a id="domainhost"></a>

### `<Optional>` domainHost

**● domainHost**: *`boolean`*

*Defined in uri-js/src/uri.ts:69*

___
<a id="scheme"></a>

###  scheme

**● scheme**: *`string`*

*Defined in uri-js/src/uri.ts:65*

___
<a id="unicodesupport"></a>

### `<Optional>` unicodeSupport

**● unicodeSupport**: *`boolean`*

*Defined in uri-js/src/uri.ts:68*

___

## Methods

<a id="parse"></a>

###  parse

▸ **parse**(components: *`ParentComponents`*, options: *`Options`*): `Components`

*Defined in uri-js/src/uri.ts:66*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | `ParentComponents` |
| options | `Options` |

**Returns:** `Components`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(components: *`Components`*, options: *`Options`*): `ParentComponents`

*Defined in uri-js/src/uri.ts:67*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | `Components` |
| options | `Options` |

**Returns:** `ParentComponents`

___

