[rxjs](../README.md) > ["uri-js/src/schemes/mailto"](../modules/_uri_js_src_schemes_mailto_.md)

# External module: "uri-js/src/schemes/mailto"

## Index

### Interfaces

* [MailtoComponents](../interfaces/_uri_js_src_schemes_mailto_.mailtocomponents.md)
* [MailtoHeaders](../interfaces/_uri_js_src_schemes_mailto_.mailtoheaders.md)

### Variables

* [ADDR_SPEC$](_uri_js_src_schemes_mailto_.md#addr_spec_)
* [ATEXT$$](_uri_js_src_schemes_mailto_.md#atext__)
* [DOMAIN$](_uri_js_src_schemes_mailto_.md#domain_)
* [DOT_ATOM_TEXT$](_uri_js_src_schemes_mailto_.md#dot_atom_text_)
* [DTEXT_NO_OBS$$](_uri_js_src_schemes_mailto_.md#dtext_no_obs__)
* [HEXDIG$$](_uri_js_src_schemes_mailto_.md#hexdig__)
* [HFIELD$](_uri_js_src_schemes_mailto_.md#hfield_)
* [HFIELDS](_uri_js_src_schemes_mailto_.md#hfields)
* [HFIELDS$](_uri_js_src_schemes_mailto_.md#hfields_)
* [HFIELDS2$](_uri_js_src_schemes_mailto_.md#hfields2_)
* [HFNAME$](_uri_js_src_schemes_mailto_.md#hfname_)
* [HFVALUE$](_uri_js_src_schemes_mailto_.md#hfvalue_)
* [LOCAL_PART$](_uri_js_src_schemes_mailto_.md#local_part_)
* [MAILTO_URI](_uri_js_src_schemes_mailto_.md#mailto_uri)
* [NOT_DOMAIN](_uri_js_src_schemes_mailto_.md#not_domain)
* [NOT_HFNAME](_uri_js_src_schemes_mailto_.md#not_hfname)
* [NOT_HFVALUE](_uri_js_src_schemes_mailto_.md#not_hfvalue)
* [NOT_LOCAL_PART](_uri_js_src_schemes_mailto_.md#not_local_part)
* [O](_uri_js_src_schemes_mailto_.md#o)
* [PCT_ENCODED](_uri_js_src_schemes_mailto_.md#pct_encoded)
* [PCT_ENCODED$](_uri_js_src_schemes_mailto_.md#pct_encoded_)
* [QCHAR$](_uri_js_src_schemes_mailto_.md#qchar_)
* [QCONTENT$](_uri_js_src_schemes_mailto_.md#qcontent_)
* [QTEXT$$](_uri_js_src_schemes_mailto_.md#qtext__)
* [QUOTED_PAIR$](_uri_js_src_schemes_mailto_.md#quoted_pair_)
* [QUOTED_STRING$](_uri_js_src_schemes_mailto_.md#quoted_string_)
* [SOME_DELIMS$$](_uri_js_src_schemes_mailto_.md#some_delims__)
* [TO](_uri_js_src_schemes_mailto_.md#to)
* [TO$](_uri_js_src_schemes_mailto_.md#to_)
* [UNRESERVED](_uri_js_src_schemes_mailto_.md#unreserved)
* [UNRESERVED$$](_uri_js_src_schemes_mailto_.md#unreserved__)
* [VCHAR$$](_uri_js_src_schemes_mailto_.md#vchar__)
* [isIRI](_uri_js_src_schemes_mailto_.md#isiri)

### Functions

* [decodeUnreserved](_uri_js_src_schemes_mailto_.md#decodeunreserved)

### Object literals

* [handler](_uri_js_src_schemes_mailto_.md#handler)

---

## Variables

<a id="addr_spec_"></a>

### `<Const>` ADDR_SPEC$

**● ADDR_SPEC$**: *`string`* =  subexp(LOCAL_PART$ + "\\@" + DOMAIN$)

*Defined in uri-js/src/schemes/mailto.ts:50*

___
<a id="atext__"></a>

### `<Const>` ATEXT$$

**● ATEXT$$**: *"[A-Za-z0-9\!\$\%\&#x27;\*\+\-\^\_\&#x60;\{\|\}\~]"* = "[A-Za-z0-9\!\$\%\'\*\+\-\^\_\`\{\|\}\~]"

*Defined in uri-js/src/schemes/mailto.ts:36*

___
<a id="domain_"></a>

### `<Const>` DOMAIN$

**● DOMAIN$**: *`string`* =  subexp(DOT_ATOM_TEXT$ + "|" + "\\[" + DTEXT_NO_OBS$$ + "*" + "\\]")

*Defined in uri-js/src/schemes/mailto.ts:48*

___
<a id="dot_atom_text_"></a>

### `<Const>` DOT_ATOM_TEXT$

**● DOT_ATOM_TEXT$**: *`string`* =  subexp(ATEXT$$ + "+" + subexp("\\." + ATEXT$$ + "+") + "*")

*Defined in uri-js/src/schemes/mailto.ts:39*

___
<a id="dtext_no_obs__"></a>

### `<Const>` DTEXT_NO_OBS$$

**● DTEXT_NO_OBS$$**: *"[\x21-\x5A\x5E-\x7E]"* = "[\x21-\x5A\x5E-\x7E]"

*Defined in uri-js/src/schemes/mailto.ts:45*

___
<a id="hexdig__"></a>

### `<Const>` HEXDIG$$

**● HEXDIG$$**: *"[0-9A-Fa-f]"* = "[0-9A-Fa-f]"

*Defined in uri-js/src/schemes/mailto.ts:22*

___
<a id="hfield_"></a>

### `<Const>` HFIELD$

**● HFIELD$**: *`string`* =  subexp(HFNAME$ + "\\=" + HFVALUE$)

*Defined in uri-js/src/schemes/mailto.ts:54*

___
<a id="hfields"></a>

### `<Const>` HFIELDS

**● HFIELDS**: *`RegExp`* =  new RegExp("^" + HFIELDS2$ + "$")

*Defined in uri-js/src/schemes/mailto.ts:66*

___
<a id="hfields_"></a>

### `<Const>` HFIELDS$

**● HFIELDS$**: *`string`* =  subexp("\\?" + HFIELDS2$)

*Defined in uri-js/src/schemes/mailto.ts:56*

___
<a id="hfields2_"></a>

### `<Const>` HFIELDS2$

**● HFIELDS2$**: *`string`* =  subexp(HFIELD$ + subexp("\\&" + HFIELD$) + "*")

*Defined in uri-js/src/schemes/mailto.ts:55*

___
<a id="hfname_"></a>

### `<Const>` HFNAME$

**● HFNAME$**: *`string`* =  subexp(QCHAR$ + "*")

*Defined in uri-js/src/schemes/mailto.ts:52*

___
<a id="hfvalue_"></a>

### `<Const>` HFVALUE$

**● HFVALUE$**: *`string`* =  HFNAME$

*Defined in uri-js/src/schemes/mailto.ts:53*

___
<a id="local_part_"></a>

### `<Const>` LOCAL_PART$

**● LOCAL_PART$**: *`string`* =  subexp(DOT_ATOM_TEXT$ + "|" + QUOTED_STRING$)

*Defined in uri-js/src/schemes/mailto.ts:49*

___
<a id="mailto_uri"></a>

### `<Const>` MAILTO_URI

**● MAILTO_URI**: *`RegExp`* =  new RegExp("^mailto\\:" + TO$ + "?" + HFIELDS$ + "?$")

*Defined in uri-js/src/schemes/mailto.ts:57*

___
<a id="not_domain"></a>

### `<Const>` NOT_DOMAIN

**● NOT_DOMAIN**: *`RegExp`* =  new RegExp(merge("[^]", ATEXT$$, "[\\.]", "[\\[]", DTEXT_NO_OBS$$, "[\\]]"), "g")

*Defined in uri-js/src/schemes/mailto.ts:62*

___
<a id="not_hfname"></a>

### `<Const>` NOT_HFNAME

**● NOT_HFNAME**: *`RegExp`* =  new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g")

*Defined in uri-js/src/schemes/mailto.ts:63*

___
<a id="not_hfvalue"></a>

### `<Const>` NOT_HFVALUE

**● NOT_HFVALUE**: *`RegExp`* =  NOT_HFNAME

*Defined in uri-js/src/schemes/mailto.ts:64*

___
<a id="not_local_part"></a>

### `<Const>` NOT_LOCAL_PART

**● NOT_LOCAL_PART**: *`RegExp`* =  new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g")

*Defined in uri-js/src/schemes/mailto.ts:61*

___
<a id="o"></a>

### `<Const>` O

**● O**: *[MailtoHeaders](../interfaces/_uri_js_src_schemes_mailto_.mailtoheaders.md)*

*Defined in uri-js/src/schemes/mailto.ts:17*

___
<a id="pct_encoded"></a>

### `<Const>` PCT_ENCODED

**● PCT_ENCODED**: *`RegExp`* =  new RegExp(PCT_ENCODED$, "g")

*Defined in uri-js/src/schemes/mailto.ts:60*

___
<a id="pct_encoded_"></a>

### `<Const>` PCT_ENCODED$

**● PCT_ENCODED$**: *`string`* =  subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$))

*Defined in uri-js/src/schemes/mailto.ts:23*

___
<a id="qchar_"></a>

### `<Const>` QCHAR$

**● QCHAR$**: *`string`* =  subexp(UNRESERVED$$ + "|" + PCT_ENCODED$ + "|" + SOME_DELIMS$$)

*Defined in uri-js/src/schemes/mailto.ts:47*

___
<a id="qcontent_"></a>

### `<Const>` QCONTENT$

**● QCONTENT$**: *`string`* =  subexp(QTEXT$$ + "|" + QUOTED_PAIR$)

*Defined in uri-js/src/schemes/mailto.ts:41*

___
<a id="qtext__"></a>

### `<Const>` QTEXT$$

**● QTEXT$$**: *"[\!\$\%\&#x27;\(\)\*\+\,\-\.0-9\&lt;\&gt;A-Z\x5E-\x7E]"* = "[\!\$\%\'\(\)\*\+\,\-\.0-9\<\>A-Z\x5E-\x7E]"

*Defined in uri-js/src/schemes/mailto.ts:37*

___
<a id="quoted_pair_"></a>

### `<Const>` QUOTED_PAIR$

**● QUOTED_PAIR$**: *`string`* =  subexp("\\\\" + VCHAR$$)

*Defined in uri-js/src/schemes/mailto.ts:40*

___
<a id="quoted_string_"></a>

### `<Const>` QUOTED_STRING$

**● QUOTED_STRING$**: *`string`* =  subexp('\\"' + QCONTENT$ + "*" + '\\"')

*Defined in uri-js/src/schemes/mailto.ts:42*

___
<a id="some_delims__"></a>

### `<Const>` SOME_DELIMS$$

**● SOME_DELIMS$$**: *"[\!\$\&#x27;\(\)\*\+\,\;\:\@]"* = "[\!\$\'\(\)\*\+\,\;\:\@]"

*Defined in uri-js/src/schemes/mailto.ts:46*

___
<a id="to"></a>

### `<Const>` TO

**● TO**: *`RegExp`* =  new RegExp("^" + TO$ + "$")

*Defined in uri-js/src/schemes/mailto.ts:65*

___
<a id="to_"></a>

### `<Const>` TO$

**● TO$**: *`string`* =  subexp(ADDR_SPEC$ + subexp("\\," + ADDR_SPEC$) + "*")

*Defined in uri-js/src/schemes/mailto.ts:51*

___
<a id="unreserved"></a>

### `<Const>` UNRESERVED

**● UNRESERVED**: *`RegExp`* =  new RegExp(UNRESERVED$$, "g")

*Defined in uri-js/src/schemes/mailto.ts:59*

___
<a id="unreserved__"></a>

### `<Const>` UNRESERVED$$

**● UNRESERVED$$**: *`string`* =  "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]"

*Defined in uri-js/src/schemes/mailto.ts:21*

___
<a id="vchar__"></a>

### `<Const>` VCHAR$$

**● VCHAR$$**: *`string`* =  merge(QTEXT$$, "[\\\"\\\\]")

*Defined in uri-js/src/schemes/mailto.ts:38*

___
<a id="isiri"></a>

### `<Const>` isIRI

**● isIRI**: *`true`* = true

*Defined in uri-js/src/schemes/mailto.ts:18*

___

## Functions

<a id="decodeunreserved"></a>

###  decodeUnreserved

▸ **decodeUnreserved**(str: *`string`*): `string`

*Defined in uri-js/src/schemes/mailto.ts:68*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `string`

___

## Object literals

<a id="handler"></a>

### `<Const>` handler

**handler**: *`object`*

*Defined in uri-js/src/schemes/mailto.ts:73*

<a id="handler.scheme"></a>

####  scheme

**● scheme**: *`string`* = "mailto"

*Defined in uri-js/src/schemes/mailto.ts:74*

___
<a id="handler.parse"></a>

####  parse

▸ **parse**(components: *[URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)*, options: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): [MailtoComponents](../interfaces/_uri_js_src_schemes_mailto_.mailtocomponents.md)

*Defined in uri-js/src/schemes/mailto.ts:76*

**Parameters:**

| Name | Type |
| ------ | ------ |
| components | [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md) |
| options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** [MailtoComponents](../interfaces/_uri_js_src_schemes_mailto_.mailtocomponents.md)

___
<a id="handler.serialize"></a>

####  serialize

▸ **serialize**(mailtoComponents: *[MailtoComponents](../interfaces/_uri_js_src_schemes_mailto_.mailtocomponents.md)*, options: *[URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md)*): [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

*Defined in uri-js/src/schemes/mailto.ts:136*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mailtoComponents | [MailtoComponents](../interfaces/_uri_js_src_schemes_mailto_.mailtocomponents.md) |
| options | [URIOptions](../interfaces/_uri_js_src_uri_.urioptions.md) |

**Returns:** [URIComponents](../interfaces/_uri_js_src_uri_.uricomponents.md)

___

___

