[rxjs](../README.md) > ["rxjs/src/internal/operators/publishLast"](../modules/_rxjs_src_internal_operators_publishlast_.md)

# External module: "rxjs/src/internal/operators/publishLast"

## Index

### Functions

* [publishLast](_rxjs_src_internal_operators_publishlast_.md#publishlast)

---

## Functions

<a id="publishlast"></a>

###  publishLast

▸ **publishLast**<`T`>(): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>

*Defined in rxjs/src/internal/operators/publishLast.ts:62*

Returns a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.

![](publishLast.png)

Similar to [publish](_rxjs_src_internal_operators_publish_.md#publish), but it waits until the source observable completes and stores the last emitted value. Similarly to [publishReplay](_rxjs_src_internal_operators_publishreplay_.md#publishreplay) and [publishBehavior](_rxjs_src_internal_operators_publishbehavior_.md#publishbehavior), this keeps storing the last value even if it has no more subscribers. If subsequent subscriptions happen, they will immediately get that last stored value and complete.

Example
-------

```js
const connectable =
  interval(1000)
    .pipe(
      tap(x => console.log("side effect", x)),
      take(3),
      publishLast());

connectable.subscribe(
  x => console.log(  "Sub. A", x),
  err => console.log("Sub. A Error", err),
  () => console.log( "Sub. A Complete"));

connectable.subscribe(
  x => console.log(  "Sub. B", x),
  err => console.log("Sub. B Error", err),
  () => console.log( "Sub. B Complete"));

connectable.connect();

// Results:
//    "side effect 0"
//    "side effect 1"
//    "side effect 2"
//    "Sub. A 2"
//    "Sub. B 2"
//    "Sub. A Complete"
//    "Sub. B Complete"
```

*__see__*: [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)

*__see__*: [publish](_rxjs_src_internal_operators_publish_.md#publish)

*__see__*: [publishReplay](_rxjs_src_internal_operators_publishreplay_.md#publishreplay)

*__see__*: [publishBehavior](_rxjs_src_internal_operators_publishbehavior_.md#publishbehavior)

*__method__*: publishLast

*__owner__*: Observable

**Type parameters:**

#### T 

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)<`T`>>
An observable sequence that contains the elements of a
sequence produced by multicasting the source sequence.

___

