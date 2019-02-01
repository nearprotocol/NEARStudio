[rxjs](../README.md) > ["rxjs/src/internal/operators/window"](../modules/_rxjs_src_internal_operators_window_.md)

# External module: "rxjs/src/internal/operators/window"

## Index

### Classes

* [WindowOperator](../classes/_rxjs_src_internal_operators_window_.windowoperator.md)

### Functions

* [window](_rxjs_src_internal_operators_window_.md#window)

---

## Functions

<a id="window"></a>

###  window

▸ **window**<`T`>(windowBoundaries: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/operators/window.ts:50*

Branch out the source Observable values as a nested Observable whenever `windowBoundaries` emits.

It's like [buffer](_rxjs_src_internal_operators_buffer_.md#buffer), but emits a nested Observable instead of an array.

![](window.png)

Returns an Observable that emits windows of items it collects from the source Observable. The output Observable emits connected, non-overlapping windows. It emits the current window and opens a new one whenever the Observable `windowBoundaries` emits an item. Because each window is an Observable, the output is a higher-order Observable.

Example
-------

In every window of 1 second each, emit at most 2 click events

```javascript
const clicks = fromEvent(document, 'click');
const interval = interval(1000);
const result = clicks.pipe(
  window(interval),
  map(win => win.take(2)), // each window has at most 2 emissions
  mergeAll(),              // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

*__see__*: [windowCount](_rxjs_src_internal_operators_windowcount_.md#windowcount)

*__see__*: {@link windowTime}

*__see__*: [windowToggle](_rxjs_src_internal_operators_windowtoggle_.md#windowtoggle)

*__see__*: [windowWhen](_rxjs_src_internal_operators_windowwhen_.md#windowwhen)

*__see__*: [buffer](_rxjs_src_internal_operators_buffer_.md#buffer)

*__method__*: window

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| windowBoundaries | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  An Observable that completes the previous window and starts a new window. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>
An Observable of windows, which are
Observables emitting values of the source Observable.

___

