[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/MiscJSDoc"](../modules/_rxjs_src_internal_observable_dom_miscjsdoc_.md) > [AjaxRequestDoc](../classes/_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md)

# Class: AjaxRequestDoc

*__see__*: [ajax](../modules/_rxjs_src_internal_observable_dom_ajax_.md#ajax)

*__interface__*: 

*__name__*: AjaxRequest

*__noimport__*: true

## Hierarchy

**AjaxRequestDoc**

## Index

### Properties

* [async](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#async)
* [body](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#body)
* [crossDomain](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#crossdomain)
* [hasContent](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#hascontent)
* [headers](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#headers)
* [method](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#method)
* [password](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#password)
* [progressSubscriber](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#progresssubscriber)
* [responseType](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#responsetype)
* [timeout](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#timeout)
* [url](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#url)
* [user](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#user)
* [withCredentials](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#withcredentials)

### Methods

* [createXHR](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#createxhr)
* [resultSelector](_rxjs_src_internal_observable_dom_miscjsdoc_.ajaxrequestdoc.md#resultselector)

---

## Properties

<a id="async"></a>

###  async

**● async**: *`boolean`* = false

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:27*

*__type__*: {boolean}

___
<a id="body"></a>

###  body

**● body**: *`any`* = 0

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:19*

*__type__*: {number}

___
<a id="crossdomain"></a>

###  crossDomain

**● crossDomain**: *`boolean`* = false

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:51*

*__type__*: {boolean}

___
<a id="hascontent"></a>

###  hasContent

**● hasContent**: *`boolean`* = false

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:47*

*__type__*: {boolean}

___
<a id="headers"></a>

###  headers

**● headers**: *`Object`* =  null

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:35*

*__type__*: {Object}

___
<a id="method"></a>

###  method

**● method**: *`string`* = ""

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:31*

*__type__*: {string}

___
<a id="password"></a>

###  password

**● password**: *`string`* = ""

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:43*

*__type__*: {string}

___
<a id="progresssubscriber"></a>

###  progressSubscriber

**● progressSubscriber**: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`any`>* =  null

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:65*

*__type__*: {Subscriber}

___
<a id="responsetype"></a>

###  responseType

**● responseType**: *`string`* = ""

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:76*

*__type__*: {string}

___
<a id="timeout"></a>

###  timeout

**● timeout**: *`number`* = 0

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:39*

*__type__*: {number}

___
<a id="url"></a>

###  url

**● url**: *`string`* = ""

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:15*

*__type__*: {string}

___
<a id="user"></a>

###  user

**● user**: *`string`* = ""

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:23*

*__type__*: {string}

___
<a id="withcredentials"></a>

###  withCredentials

**● withCredentials**: *`boolean`* = false

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:55*

*__type__*: {boolean}

___

## Methods

<a id="createxhr"></a>

###  createXHR

▸ **createXHR**(): `XMLHttpRequest`

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:59*

**Returns:** `XMLHttpRequest`

___
<a id="resultselector"></a>

###  resultSelector

▸ **resultSelector**<`T`>(response: *[AjaxResponse](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)*): `T`

*Defined in rxjs/src/internal/observable/dom/MiscJSDoc.ts:70*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| response | [AjaxResponse](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md) |  \- |

**Returns:** `T`

___

