[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/AjaxObservable"](../modules/_rxjs_src_internal_observable_dom_ajaxobservable_.md) > [AjaxError](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md)

# Interface: AjaxError

A normalized AJAX error.

*__see__*: [ajax](../modules/_rxjs_src_internal_observable_dom_ajax_.md#ajax)

*__class__*: AjaxError

## Hierarchy

 `Error`

**↳ AjaxError**

↳  [AjaxTimeoutError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md)

## Index

### Properties

* [Error](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#error)
* [message](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#message)
* [name](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#name)
* [request](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#request)
* [response](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#response)
* [responseType](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#responsetype)
* [stack](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#stack)
* [status](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#status)
* [xhr](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#xhr)

---

## Properties

<a id="error"></a>

###  Error

**● Error**: *`ErrorConstructor`*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from Error.message*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:964*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:963*

___
<a id="request"></a>

###  request

**● request**: *[AjaxRequest](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:469*

*__type__*: {AjaxRequest} The AjaxRequest associated with the error

___
<a id="response"></a>

###  response

**● response**: *`any`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:478*

*__type__*: {string\|ArrayBuffer\|Document\|object\|any} The response data

___
<a id="responsetype"></a>

###  responseType

**● responseType**: *`string`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:475*

*__type__*: {string} The responseType (e.g. 'json', 'arraybuffer', or 'xml')

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /Users/evgueniadegtiareva/near/NEARStudio/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965*

___
<a id="status"></a>

###  status

**● status**: *`number`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:472*

*__type__*: {number} The HTTP status code

___
<a id="xhr"></a>

###  xhr

**● xhr**: *`XMLHttpRequest`*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:466*

*__type__*: {XMLHttpRequest} The XHR instance associated with the error

___

