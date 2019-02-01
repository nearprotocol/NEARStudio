[rxjs](../README.md) > ["rxjs/src/internal/operators/buffer"](../modules/_rxjs_src_internal_operators_buffer_.md)

# External module: "rxjs/src/internal/operators/buffer"

## Index

### Classes

* [BufferOperator](../classes/_rxjs_src_internal_operators_buffer_.bufferoperator.md)

### Functions

* [buffer](_rxjs_src_internal_operators_buffer_.md#buffer)

---

## Functions

<a id="buffer"></a>

###  buffer

▸ **buffer**<`T`>(closingNotifier: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

*Defined in rxjs/src/internal/operators/buffer.ts:46*

Buffers the source Observable values until `closingNotifier` emits.

Collects values from the past as an array, and emits that array only when another Observable emits.

![](buffer.png)

Buffers the incoming Observable values until the given `closingNotifier` Observable emits a value, at which point it emits the buffer on the output Observable and starts a new buffer internally, awaiting the next time `closingNotifier` emits.

Example
-------

On every click, emit array of most recent interval events

```javascript
const clicks = fromEvent(document, 'click');
const interval = interval(1000);
const buffered = interval.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));
```

*__see__*: [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount)

*__see__*: [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime)

*__see__*: [bufferToggle](_rxjs_src_internal_operators_buffertoggle_.md#buffertoggle)

*__see__*: [bufferWhen](_rxjs_src_internal_operators_bufferwhen_.md#bufferwhen)

*__see__*: [window](_rxjs_src_internal_operators_window_.md#window)

*__method__*: buffer

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| closingNotifier | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  An Observable that signals the buffer to be emitted on the output Observable. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An Observable of buffers, which are arrays of
values.

___

