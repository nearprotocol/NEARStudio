[rxjs](../README.md) > ["rxjs/src/internal/Observable"](../modules/_rxjs_src_internal_observable_.md)

# External module: "rxjs/src/internal/Observable"

## Index

### Classes

* [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

### Functions

* [getPromiseCtor](_rxjs_src_internal_observable_.md#getpromisector)

---

## Functions

<a id="getpromisector"></a>

###  getPromiseCtor

▸ **getPromiseCtor**(promiseCtor: *`PromiseConstructorLike` \| `undefined`*): `object`

*Defined in rxjs/src/internal/Observable.ts:357*

Decides between a passed promise constructor from consuming code, A default configured promise constructor, and the native promise constructor and returns it. If nothing can be found, it will throw an error.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| promiseCtor | `PromiseConstructorLike` \| `undefined` |  The optional promise constructor to passed by consuming code |

**Returns:** `object`

___

