[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/AjaxObservable"](../modules/_rxjs_src_internal_observable_dom_ajaxobservable_.md) > [AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)

# Class: AjaxResponse

A normalized AJAX response.

*__see__*: [ajax](../modules/_rxjs_src_internal_observable_dom_ajax_.md#ajax)

*__class__*: AjaxResponse

## Hierarchy

**AjaxResponse**

## Index

### Constructors

* [constructor](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#constructor)

### Properties

* [originalEvent](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#originalevent)
* [request](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#request)
* [response](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#response)
* [responseText](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#responsetext)
* [responseType](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#responsetype)
* [status](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#status)
* [xhr](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md#xhr)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AjaxResponse**(originalEvent: *`Event`*, xhr: *`XMLHttpRequest`*, request: *[AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)*): [AjaxResponse](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:446*

**Parameters:**

| Name | Type |
| ------ | ------ |
| originalEvent | `Event` |
| xhr | `XMLHttpRequest` |
| request | [AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md) |

**Returns:** [AjaxResponse](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)

___

## Properties

<a id="originalevent"></a>

###  originalEvent

**● originalEvent**: *`Event`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:448*

___
<a id="request"></a>

###  request

**● request**: *[AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:448*

___
<a id="response"></a>

###  response

**● response**: *`any`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:440*

*__type__*: {string\|ArrayBuffer\|Document\|object\|any} The response data

___
<a id="responsetext"></a>

###  responseText

**● responseText**: *`string`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:443*

*__type__*: {string} The raw responseText

___
<a id="responsetype"></a>

###  responseType

**● responseType**: *`string`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:446*

*__type__*: {string} The responseType (e.g. 'json', 'arraybuffer', or 'xml')

___
<a id="status"></a>

###  status

**● status**: *`number`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:437*

*__type__*: {number} The HTTP status code

___
<a id="xhr"></a>

###  xhr

**● xhr**: *`XMLHttpRequest`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:448*

___

