[rxjs](../README.md) > ["rxjs/src/internal/observable/defer"](../modules/_rxjs_src_internal_observable_defer_.md)

# External module: "rxjs/src/internal/observable/defer"

## Index

### Functions

* [defer](_rxjs_src_internal_observable_defer_.md#defer)

---

## Functions

<a id="defer"></a>

###  defer

▸ **defer**<`T`>(observableFactory: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/defer.ts:53*

Creates an Observable that, on subscribe, calls an Observable factory to make an Observable for each new Observer.

Creates the Observable lazily, that is, only when it is subscribed.

![](defer.png)

`defer` allows you to create the Observable only when the Observer subscribes, and create a fresh Observable for each Observer. It waits until an Observer subscribes to it, and then it generates an Observable, typically with an Observable factory function. It does this afresh for each subscriber, so although each subscriber may think it is subscribing to the same Observable, in fact each subscriber gets its own individual Observable.

Example
-------

### Subscribe to either an Observable of clicks or an Observable of interval, at random

```javascript
const clicksOrInterval = defer(function () {
  return Math.random() > 0.5
    ? fromEvent(document, 'click')
    : interval(1000);
});
clicksOrInterval.subscribe(x => console.log(x));

// Results in the following behavior:
// If the result of Math.random() is greater than 0.5 it will listen
// for clicks anywhere on the "document"; when document is clicked it
// will log a MouseEvent object to the console. If the result is less
// than 0.5 it will emit ascending numbers, one every second(1000ms).
```

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

*__static__*: true

*__name__*: defer

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observableFactory | `function` |  The Observable factory function to invoke for each Observer that subscribes to the output Observable. May also return a Promise, which will be converted on the fly to an Observable. |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
An Observable whose Observers' subscriptions trigger
an invocation of the given Observable factory function.

___

