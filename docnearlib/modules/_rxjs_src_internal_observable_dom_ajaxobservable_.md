[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/AjaxObservable"](../modules/_rxjs_src_internal_observable_dom_ajaxobservable_.md)

# External module: "rxjs/src/internal/observable/dom/AjaxObservable"

## Index

### Classes

* [AjaxObservable](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxobservable.md)
* [AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)

### Interfaces

* [AjaxCreationMethod](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md)
* [AjaxError](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md)
* [AjaxErrorCtor](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerrorctor.md)
* [AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)
* [AjaxTimeoutError](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterror.md)
* [AjaxTimeoutErrorCtor](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxtimeouterrorctor.md)

### Type aliases

* [AjaxErrorNames](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxerrornames)

### Variables

* [mapResponse](_rxjs_src_internal_observable_dom_ajaxobservable_.md#mapresponse)

### Functions

* [AjaxErrorImpl](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxerrorimpl)
* [AjaxTimeoutErrorImpl](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxtimeouterrorimpl)
* [ajaxDelete](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxdelete)
* [ajaxGet](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxget)
* [ajaxGetJSON](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxgetjson)
* [ajaxPatch](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxpatch)
* [ajaxPost](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxpost)
* [ajaxPut](_rxjs_src_internal_observable_dom_ajaxobservable_.md#ajaxput)
* [getCORSRequest](_rxjs_src_internal_observable_dom_ajaxobservable_.md#getcorsrequest)
* [getXMLHttpRequest](_rxjs_src_internal_observable_dom_ajaxobservable_.md#getxmlhttprequest)
* [parseJson](_rxjs_src_internal_observable_dom_ajaxobservable_.md#parsejson)
* [parseXhrResponse](_rxjs_src_internal_observable_dom_ajaxobservable_.md#parsexhrresponse)

---

## Type aliases

<a id="ajaxerrornames"></a>

###  AjaxErrorNames

**Ƭ AjaxErrorNames**: *"AjaxError" \| "AjaxTimeoutError"*

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:455*

___

## Variables

<a id="mapresponse"></a>

### `<Const>` mapResponse

**● mapResponse**: *[OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md), `any`>* =  map((x: AjaxResponse, index: number) => x.response)

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:90*

___

## Functions

<a id="ajaxerrorimpl"></a>

###  AjaxErrorImpl

▸ **AjaxErrorImpl**(this: *`any`*, message: *`string`*, xhr: *`XMLHttpRequest`*, request: *[AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)*): [AjaxError](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md)

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:485*

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `any` |
| message | `string` |
| xhr | `XMLHttpRequest` |
| request | [AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md) |

**Returns:** [AjaxError](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxerror.md)

___
<a id="ajaxtimeouterrorimpl"></a>

###  AjaxTimeoutErrorImpl

▸ **AjaxTimeoutErrorImpl**(this: *`any`*, xhr: *`XMLHttpRequest`*, request: *[AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)*): `any`

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:533*

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `any` |
| xhr | `XMLHttpRequest` |
| request | [AjaxRequest](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md) |

**Returns:** `any`

___
<a id="ajaxdelete"></a>

###  ajaxDelete

▸ **ajaxDelete**(url: *`string`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:78*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="ajaxget"></a>

###  ajaxGet

▸ **ajaxGet**(url: *`string`*, headers?: *`Object`*): [AjaxObservable](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxobservable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:70*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| url | `string` | - |
| `Default value` headers | `Object` |  null |

**Returns:** [AjaxObservable](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxobservable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="ajaxgetjson"></a>

###  ajaxGetJSON

▸ **ajaxGetJSON**<`T`>(url: *`string`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:92*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

___
<a id="ajaxpatch"></a>

###  ajaxPatch

▸ **ajaxPatch**(url: *`string`*, body?: *`any`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:86*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` body | `any` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="ajaxpost"></a>

###  ajaxPost

▸ **ajaxPost**(url: *`string`*, body?: *`any`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:74*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` body | `any` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="ajaxput"></a>

###  ajaxPut

▸ **ajaxPut**(url: *`string`*, body?: *`any`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:82*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` body | `any` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="getcorsrequest"></a>

###  getCORSRequest

▸ **getCORSRequest**(): `XMLHttpRequest`

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:26*

**Returns:** `XMLHttpRequest`

___
<a id="getxmlhttprequest"></a>

###  getXMLHttpRequest

▸ **getXMLHttpRequest**(): `XMLHttpRequest`

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:36*

**Returns:** `XMLHttpRequest`

___
<a id="parsejson"></a>

###  parseJson

▸ **parseJson**(xhr: *`XMLHttpRequest`*): `any`

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:501*

**Parameters:**

| Name | Type |
| ------ | ------ |
| xhr | `XMLHttpRequest` |

**Returns:** `any`

___
<a id="parsexhrresponse"></a>

###  parseXhrResponse

▸ **parseXhrResponse**(responseType: *`string`*, xhr: *`XMLHttpRequest`*): `any`

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:512*

**Parameters:**

| Name | Type |
| ------ | ------ |
| responseType | `string` |
| xhr | `XMLHttpRequest` |

**Returns:** `any`

___

