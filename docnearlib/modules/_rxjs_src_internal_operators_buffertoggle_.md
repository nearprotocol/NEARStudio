[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferToggle"](../modules/_rxjs_src_internal_operators_buffertoggle_.md)

# External module: "rxjs/src/internal/operators/bufferToggle"

## Index

### Classes

* [BufferToggleOperator](../classes/_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md)

### Interfaces

* [BufferContext](../interfaces/_rxjs_src_internal_operators_buffertoggle_.buffercontext.md)

### Functions

* [bufferToggle](_rxjs_src_internal_operators_buffertoggle_.md#buffertoggle)

---

## Functions

<a id="buffertoggle"></a>

###  bufferToggle

▸ **bufferToggle**<`T`,`O`>(openings: *[SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`O`>*, closingSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

*Defined in rxjs/src/internal/operators/bufferToggle.ts:53*

Buffers the source Observable values starting from an emission from `openings` and ending when the output of `closingSelector` emits.

Collects values from the past as an array. Starts collecting only when `opening` emits, and calls the `closingSelector` function to get an Observable that tells when to close the buffer.

![](bufferToggle.png)

Buffers values from the source by opening the buffer via signals from an Observable provided to `openings`, and closing and sending the buffers when a Subscribable or Promise returned by the `closingSelector` function emits.

Example
-------

Every other second, emit the click events from the next 500ms

```javascript
const clicks = fromEvent(document, 'click');
const openings = interval(1000);
const buffered = clicks.pipe(bufferToggle(openings, i =>
  i % 2 ? interval(500) : empty()
));
buffered.subscribe(x => console.log(x));
```

*__see__*: [buffer](_rxjs_src_internal_operators_buffer_.md#buffer)

*__see__*: [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount)

*__see__*: [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime)

*__see__*: [bufferWhen](_rxjs_src_internal_operators_bufferwhen_.md#bufferwhen)

*__see__*: [windowToggle](_rxjs_src_internal_operators_windowtoggle_.md#windowtoggle)

*__method__*: bufferToggle

*__owner__*: Observable

**Type parameters:**

#### T 
#### O 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| openings | [SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`O`> |  A Subscribable or Promise of notifications to start new buffers. |
| closingSelector | `function` |  A function that takes the value emitted by the \`openings\` observable and returns a Subscribable or Promise, which, when it emits, signals that the associated buffer should be emitted and cleared. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An observable of arrays of buffered values.

___

