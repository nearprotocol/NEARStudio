[rxjs](../README.md) > ["rxjs/src/internal/observable/never"](../modules/_rxjs_src_internal_observable_never_.md)

# External module: "rxjs/src/internal/observable/never"

## Index

### Variables

* [NEVER](_rxjs_src_internal_observable_never_.md#never)

### Functions

* [never](_rxjs_src_internal_observable_never_.md#never-1)

---

## Variables

<a id="never"></a>

### `<Const>` NEVER

**● NEVER**: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>* =  new Observable<never>(noop)

*Defined in rxjs/src/internal/observable/never.ts:31*

An Observable that emits no items to the Observer and never completes.

![](never.png)

A simple Observable that emits neither values nor errors nor the completion notification. It can be used for testing purposes or for composing with other Observables. Please note that by never emitting a complete notification, this Observable keeps the subscription from being disposed automatically. Subscriptions need to be manually disposed.

Example
-------

### Emit the number 7, then never emit anything else (not even complete)

```javascript
function info() {
  console.log('Will not be called');
}
const result = NEVER.pipe(startWith(7));
result.subscribe(x => console.log(x), info, info);

```

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

*__see__*: {@link index/EMPTY}

*__see__*: [of](_rxjs_src_internal_observable_of_.md#of)

*__see__*: [throwError](_rxjs_src_internal_observable_throwerror_.md#throwerror)

___

## Functions

<a id="never-1"></a>

###  never

▸ **never**(): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>

*Defined in rxjs/src/internal/observable/never.ts:36*

*__deprecated__*:
 Deprecated in favor of using [NEVER](_rxjs_src_internal_observable_never_.md#never) constant.

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`never`>

___

