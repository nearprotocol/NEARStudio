[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/AjaxObservable"](../modules/_rxjs_src_internal_observable_dom_ajaxobservable_.md) > [AjaxCreationMethod](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md)

# Interface: AjaxCreationMethod

## Hierarchy

**AjaxCreationMethod**

## Callable
▸ **__call**(urlOrRequest: *`string` \| [AjaxRequest](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:60*

**Parameters:**

| Name | Type |
| ------ | ------ |
| urlOrRequest | `string` \| [AjaxRequest](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxrequest.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

## Index

### Methods

* [delete](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md#delete)
* [get](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md#get)
* [getJSON](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md#getjson)
* [patch](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md#patch)
* [post](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md#post)
* [put](_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md#put)

---

## Methods

<a id="delete"></a>

###  delete

▸ **delete**(url: *`string`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:66*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="get"></a>

###  get

▸ **get**(url: *`string`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="getjson"></a>

###  getJSON

▸ **getJSON**<`T`>(url: *`string`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:67*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

___
<a id="patch"></a>

###  patch

▸ **patch**(url: *`string`*, body?: *`any`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:65*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` body | `any` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="post"></a>

###  post

▸ **post**(url: *`string`*, body?: *`any`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` body | `any` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___
<a id="put"></a>

###  put

▸ **put**(url: *`string`*, body?: *`any`*, headers?: *`Object`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

*Defined in rxjs/src/internal/observable/dom/AjaxObservable.ts:64*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` body | `any` |
| `Optional` headers | `Object` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[AjaxResponse](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxresponse.md)>

___

