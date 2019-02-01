[rxjs](../README.md) > ["rxjs/src/internal/observable/fromEvent"](../modules/_rxjs_src_internal_observable_fromevent_.md)

# External module: "rxjs/src/internal/observable/fromEvent"

## Index

### Interfaces

* [AddEventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.addeventlisteneroptions.md)
* [EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md)
* [HasEventTargetAddRemove](../interfaces/_rxjs_src_internal_observable_fromevent_.haseventtargetaddremove.md)
* [JQueryStyleEventEmitter](../interfaces/_rxjs_src_internal_observable_fromevent_.jquerystyleeventemitter.md)
* [NodeCompatibleEventEmitter](../interfaces/_rxjs_src_internal_observable_fromevent_.nodecompatibleeventemitter.md)
* [NodeStyleEventEmitter](../interfaces/_rxjs_src_internal_observable_fromevent_.nodestyleeventemitter.md)

### Type aliases

* [EventTargetLike](_rxjs_src_internal_observable_fromevent_.md#eventtargetlike)
* [FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)
* [NodeEventHandler](_rxjs_src_internal_observable_fromevent_.md#nodeeventhandler)

### Variables

* [toString](_rxjs_src_internal_observable_fromevent_.md#tostring)

### Functions

* [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent)
* [isEventTarget](_rxjs_src_internal_observable_fromevent_.md#iseventtarget)
* [isJQueryStyleEventEmitter](_rxjs_src_internal_observable_fromevent_.md#isjquerystyleeventemitter)
* [isNodeStyleEventEmitter](_rxjs_src_internal_observable_fromevent_.md#isnodestyleeventemitter)
* [setupSubscription](_rxjs_src_internal_observable_fromevent_.md#setupsubscription)

---

## Type aliases

<a id="eventtargetlike"></a>

###  EventTargetLike

**Ƭ EventTargetLike**: *[HasEventTargetAddRemove](../interfaces/_rxjs_src_internal_observable_fromevent_.haseventtargetaddremove.md)<`T`> \| [NodeStyleEventEmitter](../interfaces/_rxjs_src_internal_observable_fromevent_.nodestyleeventemitter.md) \| [NodeCompatibleEventEmitter](../interfaces/_rxjs_src_internal_observable_fromevent_.nodecompatibleeventemitter.md) \| [JQueryStyleEventEmitter](../interfaces/_rxjs_src_internal_observable_fromevent_.jquerystyleeventemitter.md)*

*Defined in rxjs/src/internal/observable/fromEvent.ts:34*

___
<a id="fromeventtarget"></a>

###  FromEventTarget

**Ƭ FromEventTarget**: *[EventTargetLike](_rxjs_src_internal_observable_fromevent_.md#eventtargetlike)<`T`> \| `ArrayLike`<[EventTargetLike](_rxjs_src_internal_observable_fromevent_.md#eventtargetlike)<`T`>>*

*Defined in rxjs/src/internal/observable/fromEvent.ts:36*

___
<a id="nodeeventhandler"></a>

###  NodeEventHandler

**Ƭ NodeEventHandler**: *`function`*

*Defined in rxjs/src/internal/observable/fromEvent.ts:14*

#### Type declaration
▸(...args: *`any`[]*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `void`

___

## Variables

<a id="tostring"></a>

### `<Const>` toString

**● toString**: *`Function`* =  Object.prototype.toString

*Defined in rxjs/src/internal/observable/fromEvent.ts:7*

___

## Functions

<a id="fromevent"></a>

###  fromEvent

▸ **fromEvent**<`T`>(target: *[FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`>*, eventName: *`string`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **fromEvent**<`T`>(target: *[FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`>*, eventName: *`string`*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **fromEvent**<`T`>(target: *[FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`>*, eventName: *`string`*, options: *[EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **fromEvent**<`T`>(target: *[FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`>*, eventName: *`string`*, options: *[EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md)*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/fromEvent.ts:50*

Creates an Observable that emits events of a specific type coming from the given event target.

Creates an Observable from DOM events, or Node.js EventEmitter events or others.

![](fromEvent.png)

`fromEvent` accepts as a first argument event target, which is an object with methods for registering event handler functions. As a second argument it takes string that indicates type of event we want to listen for. `fromEvent` supports selected types of event targets, which are described in detail below. If your event target does not match any of the ones listed, you should use [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern), which can be used on arbitrary APIs. When it comes to APIs supported by `fromEvent`, their methods for adding and removing event handler functions have different names, but they all accept a string describing event type and function itself, which will be called whenever said event happens.

Every time resulting Observable is subscribed, event handler function will be registered to event target on given event type. When that event fires, value passed as a first argument to registered function will be emitted by output Observable. When Observable is unsubscribed, function will be unregistered from event target.

Note that if event target calls registered function with more than one argument, second and following arguments will not appear in resulting stream. In order to get access to them, you can pass to `fromEvent` optional project function, which will be called with all arguments passed to event handler. Output Observable will then emit value returned by project function, instead of the usual value.

Remember that event targets listed below are checked via duck typing. It means that no matter what kind of object you have and no matter what environment you work in, you can safely use `fromEvent` on that object if it exposes described methods (provided of course they behave as was described above). So for example if Node.js library exposes event target which has the same method names as DOM EventTarget, `fromEvent` is still a good choice.

If the API you use is more callback then event handler oriented (subscribed callback function fires only once and thus there is no need to manually unregister it), you should use [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) or [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) instead.

`fromEvent` supports following types of event targets:

**DOM EventTarget**

This is an object with `addEventListener` and `removeEventListener` methods.

In the browser, `addEventListener` accepts - apart from event type string and event handler function arguments - optional third parameter, which is either an object or boolean, both used for additional configuration how and when passed function will be called. When `fromEvent` is used with event target of that type, you can provide this values as third parameter as well.

**Node.js EventEmitter**

An object with `addListener` and `removeListener` methods.

**JQuery-style event target**

An object with `on` and `off` methods

**DOM NodeList**

List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.

Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes it contains and install event handler function in every of them. When returned Observable is unsubscribed, function will be removed from all Nodes.

**DOM HtmlCollection**

Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is installed and removed in each of elements.

Examples
--------

### Emits clicks happening on the DOM document

```javascript
const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
```

### Use addEventListener with capture option

```javascript
const clicksInDocument = fromEvent(document, 'click', true); // note optional configuration parameter
                                                             // which will be passed to addEventListener
const clicksInDiv = fromEvent(someDivInDocument, 'click');

clicksInDocument.subscribe(() => console.log('document'));
clicksInDiv.subscribe(() => console.log('div'));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | [FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`> |  The DOM EventTarget, Node.js EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to. |
| eventName | `string` |  The event name of interest, being emitted by the \`target\`. |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/fromEvent.ts:52*

Creates an Observable that emits events of a specific type coming from the given event target.

Creates an Observable from DOM events, or Node.js EventEmitter events or others.

![](fromEvent.png)

`fromEvent` accepts as a first argument event target, which is an object with methods for registering event handler functions. As a second argument it takes string that indicates type of event we want to listen for. `fromEvent` supports selected types of event targets, which are described in detail below. If your event target does not match any of the ones listed, you should use [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern), which can be used on arbitrary APIs. When it comes to APIs supported by `fromEvent`, their methods for adding and removing event handler functions have different names, but they all accept a string describing event type and function itself, which will be called whenever said event happens.

Every time resulting Observable is subscribed, event handler function will be registered to event target on given event type. When that event fires, value passed as a first argument to registered function will be emitted by output Observable. When Observable is unsubscribed, function will be unregistered from event target.

Note that if event target calls registered function with more than one argument, second and following arguments will not appear in resulting stream. In order to get access to them, you can pass to `fromEvent` optional project function, which will be called with all arguments passed to event handler. Output Observable will then emit value returned by project function, instead of the usual value.

Remember that event targets listed below are checked via duck typing. It means that no matter what kind of object you have and no matter what environment you work in, you can safely use `fromEvent` on that object if it exposes described methods (provided of course they behave as was described above). So for example if Node.js library exposes event target which has the same method names as DOM EventTarget, `fromEvent` is still a good choice.

If the API you use is more callback then event handler oriented (subscribed callback function fires only once and thus there is no need to manually unregister it), you should use [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) or [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) instead.

`fromEvent` supports following types of event targets:

**DOM EventTarget**

This is an object with `addEventListener` and `removeEventListener` methods.

In the browser, `addEventListener` accepts - apart from event type string and event handler function arguments - optional third parameter, which is either an object or boolean, both used for additional configuration how and when passed function will be called. When `fromEvent` is used with event target of that type, you can provide this values as third parameter as well.

**Node.js EventEmitter**

An object with `addListener` and `removeListener` methods.

**JQuery-style event target**

An object with `on` and `off` methods

**DOM NodeList**

List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.

Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes it contains and install event handler function in every of them. When returned Observable is unsubscribed, function will be removed from all Nodes.

**DOM HtmlCollection**

Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is installed and removed in each of elements.

Examples
--------

### Emits clicks happening on the DOM document

```javascript
const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
```

### Use addEventListener with capture option

```javascript
const clicksInDocument = fromEvent(document, 'click', true); // note optional configuration parameter
                                                             // which will be passed to addEventListener
const clicksInDiv = fromEvent(someDivInDocument, 'click');

clicksInDocument.subscribe(() => console.log('document'));
clicksInDiv.subscribe(() => console.log('div'));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
```

*__deprecated__*:
 resultSelector no longer supported, pipe to map instead

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | [FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`> |  The DOM EventTarget, Node.js EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to. |
| eventName | `string` |  The event name of interest, being emitted by the \`target\`. |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/fromEvent.ts:53*

Creates an Observable that emits events of a specific type coming from the given event target.

Creates an Observable from DOM events, or Node.js EventEmitter events or others.

![](fromEvent.png)

`fromEvent` accepts as a first argument event target, which is an object with methods for registering event handler functions. As a second argument it takes string that indicates type of event we want to listen for. `fromEvent` supports selected types of event targets, which are described in detail below. If your event target does not match any of the ones listed, you should use [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern), which can be used on arbitrary APIs. When it comes to APIs supported by `fromEvent`, their methods for adding and removing event handler functions have different names, but they all accept a string describing event type and function itself, which will be called whenever said event happens.

Every time resulting Observable is subscribed, event handler function will be registered to event target on given event type. When that event fires, value passed as a first argument to registered function will be emitted by output Observable. When Observable is unsubscribed, function will be unregistered from event target.

Note that if event target calls registered function with more than one argument, second and following arguments will not appear in resulting stream. In order to get access to them, you can pass to `fromEvent` optional project function, which will be called with all arguments passed to event handler. Output Observable will then emit value returned by project function, instead of the usual value.

Remember that event targets listed below are checked via duck typing. It means that no matter what kind of object you have and no matter what environment you work in, you can safely use `fromEvent` on that object if it exposes described methods (provided of course they behave as was described above). So for example if Node.js library exposes event target which has the same method names as DOM EventTarget, `fromEvent` is still a good choice.

If the API you use is more callback then event handler oriented (subscribed callback function fires only once and thus there is no need to manually unregister it), you should use [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) or [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) instead.

`fromEvent` supports following types of event targets:

**DOM EventTarget**

This is an object with `addEventListener` and `removeEventListener` methods.

In the browser, `addEventListener` accepts - apart from event type string and event handler function arguments - optional third parameter, which is either an object or boolean, both used for additional configuration how and when passed function will be called. When `fromEvent` is used with event target of that type, you can provide this values as third parameter as well.

**Node.js EventEmitter**

An object with `addListener` and `removeListener` methods.

**JQuery-style event target**

An object with `on` and `off` methods

**DOM NodeList**

List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.

Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes it contains and install event handler function in every of them. When returned Observable is unsubscribed, function will be removed from all Nodes.

**DOM HtmlCollection**

Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is installed and removed in each of elements.

Examples
--------

### Emits clicks happening on the DOM document

```javascript
const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
```

### Use addEventListener with capture option

```javascript
const clicksInDocument = fromEvent(document, 'click', true); // note optional configuration parameter
                                                             // which will be passed to addEventListener
const clicksInDiv = fromEvent(someDivInDocument, 'click');

clicksInDocument.subscribe(() => console.log('document'));
clicksInDiv.subscribe(() => console.log('div'));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | [FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`> |  The DOM EventTarget, Node.js EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to. |
| eventName | `string` |  The event name of interest, being emitted by the \`target\`. |
| options | [EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/fromEvent.ts:55*

Creates an Observable that emits events of a specific type coming from the given event target.

Creates an Observable from DOM events, or Node.js EventEmitter events or others.

![](fromEvent.png)

`fromEvent` accepts as a first argument event target, which is an object with methods for registering event handler functions. As a second argument it takes string that indicates type of event we want to listen for. `fromEvent` supports selected types of event targets, which are described in detail below. If your event target does not match any of the ones listed, you should use [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern), which can be used on arbitrary APIs. When it comes to APIs supported by `fromEvent`, their methods for adding and removing event handler functions have different names, but they all accept a string describing event type and function itself, which will be called whenever said event happens.

Every time resulting Observable is subscribed, event handler function will be registered to event target on given event type. When that event fires, value passed as a first argument to registered function will be emitted by output Observable. When Observable is unsubscribed, function will be unregistered from event target.

Note that if event target calls registered function with more than one argument, second and following arguments will not appear in resulting stream. In order to get access to them, you can pass to `fromEvent` optional project function, which will be called with all arguments passed to event handler. Output Observable will then emit value returned by project function, instead of the usual value.

Remember that event targets listed below are checked via duck typing. It means that no matter what kind of object you have and no matter what environment you work in, you can safely use `fromEvent` on that object if it exposes described methods (provided of course they behave as was described above). So for example if Node.js library exposes event target which has the same method names as DOM EventTarget, `fromEvent` is still a good choice.

If the API you use is more callback then event handler oriented (subscribed callback function fires only once and thus there is no need to manually unregister it), you should use [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) or [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) instead.

`fromEvent` supports following types of event targets:

**DOM EventTarget**

This is an object with `addEventListener` and `removeEventListener` methods.

In the browser, `addEventListener` accepts - apart from event type string and event handler function arguments - optional third parameter, which is either an object or boolean, both used for additional configuration how and when passed function will be called. When `fromEvent` is used with event target of that type, you can provide this values as third parameter as well.

**Node.js EventEmitter**

An object with `addListener` and `removeListener` methods.

**JQuery-style event target**

An object with `on` and `off` methods

**DOM NodeList**

List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.

Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes it contains and install event handler function in every of them. When returned Observable is unsubscribed, function will be removed from all Nodes.

**DOM HtmlCollection**

Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is installed and removed in each of elements.

Examples
--------

### Emits clicks happening on the DOM document

```javascript
const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));

// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.
```

### Use addEventListener with capture option

```javascript
const clicksInDocument = fromEvent(document, 'click', true); // note optional configuration parameter
                                                             // which will be passed to addEventListener
const clicksInDiv = fromEvent(someDivInDocument, 'click');

clicksInDocument.subscribe(() => console.log('document'));
clicksInDiv.subscribe(() => console.log('div'));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
```

*__deprecated__*:
 resultSelector no longer supported, pipe to map instead

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | [FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`> |  The DOM EventTarget, Node.js EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to. |
| eventName | `string` |  The event name of interest, being emitted by the \`target\`. |
| options | [EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md) |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

___
<a id="iseventtarget"></a>

###  isEventTarget

▸ **isEventTarget**(sourceObj: *`any`*): `boolean`

*Defined in rxjs/src/internal/observable/fromEvent.ts:239*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceObj | `any` |

**Returns:** `boolean`

___
<a id="isjquerystyleeventemitter"></a>

###  isJQueryStyleEventEmitter

▸ **isJQueryStyleEventEmitter**(sourceObj: *`any`*): `boolean`

*Defined in rxjs/src/internal/observable/fromEvent.ts:235*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceObj | `any` |

**Returns:** `boolean`

___
<a id="isnodestyleeventemitter"></a>

###  isNodeStyleEventEmitter

▸ **isNodeStyleEventEmitter**(sourceObj: *`any`*): `boolean`

*Defined in rxjs/src/internal/observable/fromEvent.ts:231*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceObj | `any` |

**Returns:** `boolean`

___
<a id="setupsubscription"></a>

###  setupSubscription

▸ **setupSubscription**<`T`>(sourceObj: *[FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`>*, eventName: *`string`*, handler: *`function`*, subscriber: *[Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, options?: *[EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md)*): `void`

*Defined in rxjs/src/internal/observable/fromEvent.ts:204*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceObj | [FromEventTarget](_rxjs_src_internal_observable_fromevent_.md#fromeventtarget)<`T`> |
| eventName | `string` |
| handler | `function` |
| subscriber | [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| `Optional` options | [EventListenerOptions](../interfaces/_rxjs_src_internal_observable_fromevent_.eventlisteneroptions.md) |

**Returns:** `void`

___

