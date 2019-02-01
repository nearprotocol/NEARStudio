[rxjs](../README.md) > ["rxjs/src/internal/observable/iif"](../modules/_rxjs_src_internal_observable_iif_.md)

# External module: "rxjs/src/internal/observable/iif"

## Index

### Functions

* [iif](_rxjs_src_internal_observable_iif_.md#iif)

---

## Functions

<a id="iif"></a>

###  iif

▸ **iif**<`T`,`F`>(condition: *`function`*, trueResult?: *[SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`T`>*, falseResult?: *[SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`F`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `F`>

*Defined in rxjs/src/internal/observable/iif.ts:92*

Decides at subscription time which Observable will actually be subscribed.

`If` statement for Observables.

`iif` accepts a condition function and two Observables. When an Observable returned by the operator is subscribed, condition function will be called. Based on what boolean it returns at that moment, consumer will subscribe either to the first Observable (if condition was true) or to the second (if condition was false). Condition function may also not return anything - in that case condition will be evaluated as false and second Observable will be subscribed.

Note that Observables for both cases (true and false) are optional. If condition points to an Observable that was left undefined, resulting stream will simply complete immediately. That allows you to, rather then controlling which Observable will be subscribed, decide at runtime if consumer should have access to given Observable or not.

If you have more complex logic that requires decision between more than two Observables, [defer](_rxjs_src_internal_observable_defer_.md#defer) will probably be a better choice. Actually `iif` can be easily implemented with [defer](_rxjs_src_internal_observable_defer_.md#defer) and exists only for convenience and readability reasons.

Examples
--------

### Change at runtime which Observable will be subscribed

```javascript
let subscribeToFirst;
const firstOrSecond = iif(
  () => subscribeToFirst,
  of('first'),
  of('second'),
);

subscribeToFirst = true;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// "first"

subscribeToFirst = false;
firstOrSecond.subscribe(value => console.log(value));

// Logs:
// "second"

```

### Control an access to an Observable

```javascript
let accessGranted;
const observableIfYouHaveAccess = iif(
  () => accessGranted,
  of('It seems you have an access...'), // Note that only one Observable is passed to the operator.
);

accessGranted = true;
observableIfYouHaveAccess.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('The end'),
);

// Logs:
// "It seems you have an access..."
// "The end"

accessGranted = false;
observableIfYouHaveAccess.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('The end'),
);

// Logs:
// "The end"
```

*__see__*: [defer](_rxjs_src_internal_observable_defer_.md#defer)

*__static__*: true

*__name__*: iif

*__owner__*: Observable

**Type parameters:**

#### T 
#### F 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| condition | `function` | - |  Condition which Observable should be chosen. |
| `Default value` trueResult | [SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`T`> |  EMPTY |
| `Default value` falseResult | [SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`F`> |  EMPTY |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `F`>
Either first or second Observable, depending on condition.

___

