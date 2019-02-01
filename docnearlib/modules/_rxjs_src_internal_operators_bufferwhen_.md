[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferWhen"](../modules/_rxjs_src_internal_operators_bufferwhen_.md)

# External module: "rxjs/src/internal/operators/bufferWhen"

## Index

### Classes

* [BufferWhenOperator](../classes/_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md)

### Functions

* [bufferWhen](_rxjs_src_internal_operators_bufferwhen_.md#bufferwhen)

---

## Functions

<a id="bufferwhen"></a>

###  bufferWhen

▸ **bufferWhen**<`T`>(closingSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

*Defined in rxjs/src/internal/operators/bufferWhen.ts:51*

Buffers the source Observable values, using a factory function of closing Observables to determine when to close, emit, and reset the buffer.

Collects values from the past as an array. When it starts collecting values, it calls a function that returns an Observable that tells when to close the buffer and restart collecting.

![](bufferWhen.png)

Opens a buffer immediately, then closes the buffer when the observable returned by calling `closingSelector` function emits a value. When it closes the buffer, it immediately opens a new buffer and repeats the process.

Example
-------

Emit an array of the last clicks every \[1-5\] random seconds

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferWhen(() =>
  interval(1000 + Math.random() * 4000)
));
buffered.subscribe(x => console.log(x));
```

*__see__*: [buffer](_rxjs_src_internal_operators_buffer_.md#buffer)

*__see__*: [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount)

*__see__*: [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime)

*__see__*: [bufferToggle](_rxjs_src_internal_operators_buffertoggle_.md#buffertoggle)

*__see__*: [windowWhen](_rxjs_src_internal_operators_windowwhen_.md#windowwhen)

*__method__*: bufferWhen

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| closingSelector | `function` |  A function that takes no arguments and returns an Observable that signals buffer closure. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An observable of arrays of buffered values.

___

