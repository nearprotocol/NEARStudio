[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/AjaxObservable"](../modules/_rxjs_src_internal_observable_dom_ajaxobservable_.md) > [AjaxTimeoutError](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md)

# Interface: AjaxTimeoutError

*__see__*: [ajax](../modules/_rxjs_src_internal_observable_dom_ajax_.md#ajax)

*__class__*: AjaxTimeoutError

## Hierarchy

↳  [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md)

**↳ AjaxTimeoutError**

## Index

### Properties

* [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#ajaxerror)
* [message](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#message)
* [name](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#name)
* [request](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#request)
* [response](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#response)
* [responseType](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#responsetype)
* [stack](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#stack)
* [status](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#status)
* [xhr](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md#xhr)

---

## Properties

<a id="ajaxerror"></a>

###  AjaxError

**● AjaxError**: *[AjaxErrorCtor](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerrorctor.md)* =  AjaxErrorImpl as any

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:499*

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

*Inherited from [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md).[request](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#request)*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:469*

*__type__*: {AjaxRequest} The AjaxRequest associated with the error

___
<a id="response"></a>

###  response

**● response**: *`any`*

*Inherited from [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md).[response](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#response)*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:478*

*__type__*: {string\|ArrayBuffer\|Document\|object\|any} The response data

___
<a id="responsetype"></a>

###  responseType

**● responseType**: *`string`*

*Inherited from [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md).[responseType](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#responsetype)*

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

*Inherited from [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md).[status](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#status)*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:472*

*__type__*: {number} The HTTP status code

___
<a id="xhr"></a>

###  xhr

**● xhr**: *`XMLHttpRequest`*

*Inherited from [AjaxError](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md).[xhr](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md#xhr)*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:466*

*__type__*: {XMLHttpRequest} The XHR instance associated with the error

___

