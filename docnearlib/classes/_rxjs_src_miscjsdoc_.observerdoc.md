[rxjs](../README.md) > ["rxjs/src/MiscJSDoc"](../modules/_rxjs_src_miscjsdoc_.md) > [ObserverDoc](../classes/_rxjs_src_miscjsdoc_.observerdoc.md)

# Class: ObserverDoc

An interface for a consumer of push-based notifications delivered by an [Observable](_rxjs_src_internal_observable_.observable.md).

```ts
interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```

An object conforming to the Observer interface is usually given to the `observable.subscribe(observer)` method, and the Observable will call the Observer's `next(value)` method to provide notifications. A well-behaved Observable will call an Observer's `complete()` method exactly once or the Observer's `error(err)` method exactly once, as the last notification delivered.

*__interface__*: 

*__name__*: Observer

*__noimport__*: true

## Type parameters
#### T 
## Hierarchy

**ObserverDoc**

## Index

### Properties

* [closed](_rxjs_src_miscjsdoc_.observerdoc.md#closed)

### Methods

* [complete](_rxjs_src_miscjsdoc_.observerdoc.md#complete)
* [error](_rxjs_src_miscjsdoc_.observerdoc.md#error)
* [next](_rxjs_src_miscjsdoc_.observerdoc.md#next)

---

## Properties

<a id="closed"></a>

###  closed

**● closed**: *`boolean`* = false

*Defined in rxjs/src/MiscJSDoc.ts:173*

An optional flag to indicate whether this Observer, when used as a subscriber, has already been unsubscribed from its Observable.

*__type__*: {boolean}

___

## Methods

<a id="complete"></a>

###  complete

▸ **complete**(): `void`

*Defined in rxjs/src/MiscJSDoc.ts:199*

The callback to receive a valueless notification of type `complete` from the Observable. Notifies the Observer that the Observable has finished sending push-based notifications.

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(err: *`any`*): `void`

*Defined in rxjs/src/MiscJSDoc.ts:190*

The callback to receive notifications of type `error` from the Observable, with an attached [Error](../interfaces/_rxjs_src_internal_util_unsubscriptionerror_.unsubscriptionerror.md#error). Notifies the Observer that the Observable has experienced an error condition.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| err | `any` |  The \`error\` exception. |

**Returns:** `void`

___
<a id="next"></a>

###  next

▸ **next**(value: *`T`*): `void`

*Defined in rxjs/src/MiscJSDoc.ts:180*

The callback to receive notifications of type `next` from the Observable, with a value. The Observable may call this method 0 or more times.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  The \`next\` value. |

**Returns:** `void`

___

