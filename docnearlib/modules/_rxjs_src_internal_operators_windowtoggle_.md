[rxjs](../README.md) > ["rxjs/src/internal/operators/windowToggle"](../modules/_rxjs_src_internal_operators_windowtoggle_.md)

# External module: "rxjs/src/internal/operators/windowToggle"

## Index

### Classes

* [WindowToggleOperator](../classes/_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md)

### Interfaces

* [WindowContext](../interfaces/_rxjs_src_internal_operators_windowtoggle_.windowcontext.md)

### Functions

* [windowToggle](_rxjs_src_internal_operators_windowtoggle_.md#windowtoggle)

---

## Functions

<a id="windowtoggle"></a>

###  windowToggle

▸ **windowToggle**<`T`,`O`>(openings: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`O`>*, closingSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/operators/windowToggle.ts:58*

Branch out the source Observable values as a nested Observable starting from an emission from `openings` and ending when the output of `closingSelector` emits.

It's like [bufferToggle](_rxjs_src_internal_operators_buffertoggle_.md#buffertoggle), but emits a nested Observable instead of an array.

![](windowToggle.png)

Returns an Observable that emits windows of items it collects from the source Observable. The output Observable emits windows that contain those items emitted by the source Observable between the time when the `openings` Observable emits an item and when the Observable returned by `closingSelector` emits an item.

Example
-------

Every other second, emit the click events from the next 500ms

```javascript
const clicks = fromEvent(document, 'click');
const openings = interval(1000);
const result = clicks.pipe(
  windowToggle(openings, i => i % 2 ? interval(500) : empty()),
  mergeAll(),
);
result.subscribe(x => console.log(x));
```

*__see__*: [window](_rxjs_src_internal_operators_window_.md#window)

*__see__*: [windowCount](_rxjs_src_internal_operators_windowcount_.md#windowcount)

*__see__*: {@link windowTime}

*__see__*: [windowWhen](_rxjs_src_internal_operators_windowwhen_.md#windowwhen)

*__see__*: [bufferToggle](_rxjs_src_internal_operators_buffertoggle_.md#buffertoggle)

*__method__*: windowToggle

*__owner__*: Observable

**Type parameters:**

#### T 
#### O 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| openings | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`O`> |  An observable of notifications to start new windows. |
| closingSelector | `function` |  A function that takes the value emitted by the \`openings\` observable and returns an Observable, which, when it emits (either \`next\` or \`complete\`), signals that the associated window should complete. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>
An observable of windows, which in turn
are Observables.

___

