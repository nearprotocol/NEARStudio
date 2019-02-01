[rxjs](../README.md) > ["rxjs/src/MiscJSDoc"](../modules/_rxjs_src_miscjsdoc_.md) > [SubscribableOrPromiseDoc](../classes/_rxjs_src_miscjsdoc_.subscribableorpromisedoc.md)

# Class: SubscribableOrPromiseDoc

`SubscribableOrPromise` interface describes values that behave like either Observables or Promises. Every operator that accepts arguments annotated with this interface, can be also used with parameters that are not necessarily RxJS Observables.

Following types of values might be passed to operators expecting this interface:

Observable
----------

RxJS [Observable](_rxjs_src_internal_observable_.observable.md) instance.

Observable-like (Subscribable)
------------------------------

This might be any object that has `Symbol.observable` method. This method, when called, should return object with `subscribe` method on it, which should behave the same as RxJS `Observable.subscribe`.

`Symbol.observable` is part of [https://github.com/tc39/proposal-observable](https://github.com/tc39/proposal-observable) proposal. Since currently it is not supported natively, and every symbol is equal only to itself, you should use [https://github.com/blesh/symbol-observable](https://github.com/blesh/symbol-observable) polyfill, when implementing custom Observable-likes.

**TypeScript Subscribable interface issue**

Although TypeScript interface claims that Subscribable is an object that has `subscribe` method declared directly on it, passing custom objects that have `subscribe` method but not `Symbol.observable` method will fail at runtime. Conversely, passing objects with `Symbol.observable` but without `subscribe` will fail at compile time (if you use TypeScript).

TypeScript has problem supporting interfaces with methods defined as symbol properties. To get around that, you should implement `subscribe` directly on passed object, and make `Symbol.observable` method simply return `this`. That way everything will work as expected, and compiler will not complain. If you really do not want to put `subscribe` directly on your object, you will have to type cast it to `any`, before passing it to an operator.

When this issue is resolved, Subscribable interface will only permit Observable-like objects with `Symbol.observable` defined, no matter if they themselves implement `subscribe` method or not.

ES6 Promise
-----------

Promise can be interpreted as Observable that emits value and completes when it is resolved or errors when it is rejected.

Promise-like (Thenable)
-----------------------

Promises passed to operators do not have to be native ES6 Promises. They can be implementations from popular Promise libraries, polyfills or even custom ones. They just need to have `then` method that works as the same as ES6 Promise `then`.

*__example__*: Use merge and then map with non-RxJS observable const nonRxJSObservable = { subscribe(observer) { observer.next(1000); observer.complete(); }, \[Symbol.observable\]() { return this; } };

Rx.Observable.merge(nonRxJSObservable) .map(value => "This value is " + value) .subscribe(result => console.log(result)); // Logs "This value is 1000"

*__example__*: Use combineLatest with ES6 Promise Rx.Observable.combineLatest(Promise.resolve(5), Promise.resolve(10), Promise.resolve(15)) .subscribe( value => console.log(value), err => {}, () => console.log('the end!') ); // Logs // \[5, 10, 15\] // "the end!"

*__interface__*: 

*__name__*: SubscribableOrPromise

*__noimport__*: true

## Type parameters
#### T 
## Hierarchy

**SubscribableOrPromiseDoc**

## Index

---

