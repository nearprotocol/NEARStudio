[rxjs](../README.md) > ["rxjs/src/internal/operators/windowWhen"](../modules/_rxjs_src_internal_operators_windowwhen_.md)

# External module: "rxjs/src/internal/operators/windowWhen"

## Index

### Classes

* [WindowOperator](../classes/_rxjs_src_internal_operators_windowwhen_.windowoperator.md)

### Functions

* [windowWhen](_rxjs_src_internal_operators_windowwhen_.md#windowwhen)

---

## Functions

<a id="windowwhen"></a>

###  windowWhen

▸ **windowWhen**<`T`>(closingSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/operators/windowWhen.ts:55*

Branch out the source Observable values as a nested Observable using a factory function of closing Observables to determine when to start a new window.

It's like [bufferWhen](_rxjs_src_internal_operators_bufferwhen_.md#bufferwhen), but emits a nested Observable instead of an array.

![](windowWhen.png)

Returns an Observable that emits windows of items it collects from the source Observable. The output Observable emits connected, non-overlapping windows. It emits the current window and opens a new one whenever the Observable produced by the specified `closingSelector` function emits an item. The first window is opened immediately when subscribing to the output Observable.

Example
-------

Emit only the first two clicks events in every window of \[1-5\] random seconds

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowWhen(() => interval(1000 + Math.random() * 4000)),
  map(win => win.pipe(take(2))),     // each window has at most 2 emissions
  mergeAll(),                        // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

*__see__*: [window](_rxjs_src_internal_operators_window_.md#window)

*__see__*: [windowCount](_rxjs_src_internal_operators_windowcount_.md#windowcount)

*__see__*: {@link windowTime}

*__see__*: [windowToggle](_rxjs_src_internal_operators_windowtoggle_.md#windowtoggle)

*__see__*: [bufferWhen](_rxjs_src_internal_operators_bufferwhen_.md#bufferwhen)

*__method__*: windowWhen

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| closingSelector | `function` |  A function that takes no arguments and returns an Observable that signals (on either \`next\` or \`complete\`) when to close the previous window and start a new one. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>
An observable of windows, which in turn
are Observables.

___

