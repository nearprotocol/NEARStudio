[rxjs](../README.md) > ["rxjs/src/MiscJSDoc"](../modules/_rxjs_src_miscjsdoc_.md) > [TeardownLogicDoc](../classes/_rxjs_src_miscjsdoc_.teardownlogicdoc.md)

# Class: TeardownLogicDoc

This interface describes what should be returned by function passed to Observable constructor or static [create](_rxjs_src_internal_subscriber_.subscriber.md#create) function. Value of that interface will be used to cancel subscription for given Observable.

`TeardownLogic` can be:

Function
--------

Function that takes no parameters. When consumer of created Observable calls `unsubscribe`, that function will be called

AnonymousSubscription
---------------------

`AnonymousSubscription` is simply an object with `unsubscribe` method on it. That method will work the same as function

void
----

If created Observable does not have any resources to clean up, function does not have to return anything.

*__interface__*: 

*__name__*: TeardownLogic

*__noimport__*: true

## Hierarchy

**TeardownLogicDoc**

## Index

---

