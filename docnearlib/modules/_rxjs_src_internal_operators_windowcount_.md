[rxjs](../README.md) > ["rxjs/src/internal/operators/windowCount"](../modules/_rxjs_src_internal_operators_windowcount_.md)

# External module: "rxjs/src/internal/operators/windowCount"

## Index

### Classes

* [WindowCountOperator](../classes/_rxjs_src_internal_operators_windowcount_.windowcountoperator.md)

### Functions

* [windowCount](_rxjs_src_internal_operators_windowcount_.md#windowcount)

---

## Functions

<a id="windowcount"></a>

###  windowCount

▸ **windowCount**<`T`>(windowSize: *`number`*, startWindowEvery?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/operators/windowCount.ts:64*

Branch out the source Observable values as a nested Observable with each nested Observable emitting at most `windowSize` values.

It's like [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount), but emits a nested Observable instead of an array.

![](windowCount.png)

Returns an Observable that emits windows of items it collects from the source Observable. The output Observable emits windows every `startWindowEvery` items, each containing no more than `windowSize` items. When the source Observable completes or encounters an error, the output Observable emits the current window and propagates the notification from the source Observable. If `startWindowEvery` is not provided, then new windows are started immediately at the start of the source and when each window completes with size `windowSize`.

Examples
--------

Ignore every 3rd click event, starting from the first one

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowCount(3)),
  map(win => win.skip(1)), // skip first of every 3 clicks
  mergeAll(),              // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

Ignore every 3rd click event, starting from the third one

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowCount(2, 3),
  mergeAll(),              // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

*__see__*: [window](_rxjs_src_internal_operators_window_.md#window)

*__see__*: {@link windowTime}

*__see__*: [windowToggle](_rxjs_src_internal_operators_windowtoggle_.md#windowtoggle)

*__see__*: [windowWhen](_rxjs_src_internal_operators_windowwhen_.md#windowwhen)

*__see__*: [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount)

*__method__*: windowCount

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| windowSize | `number` | - |  The maximum number of values emitted by each window. |
| `Default value` startWindowEvery | `number` | 0 |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>
An Observable of windows, which in turn
are Observable of values.

___

