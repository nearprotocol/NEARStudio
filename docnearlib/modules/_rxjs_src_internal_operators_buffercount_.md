[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferCount"](../modules/_rxjs_src_internal_operators_buffercount_.md)

# External module: "rxjs/src/internal/operators/bufferCount"

## Index

### Classes

* [BufferCountOperator](../classes/_rxjs_src_internal_operators_buffercount_.buffercountoperator.md)

### Functions

* [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount)

---

## Functions

<a id="buffercount"></a>

###  bufferCount

▸ **bufferCount**<`T`>(bufferSize: *`number`*, startBufferEvery?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

*Defined in rxjs/src/internal/operators/bufferCount.ts:55*

Buffers the source Observable values until the size hits the maximum `bufferSize` given.

Collects values from the past as an array, and emits that array only when its size reaches `bufferSize`.

![](bufferCount.png)

Buffers a number of values from the source Observable by `bufferSize` then emits the buffer and clears it, and starts a new buffer each `startBufferEvery` values. If `startBufferEvery` is not provided or is `null`, then new buffers are started immediately at the start of the source and when each buffer closes and is emitted.

Examples
--------

Emit the last two click events as an array

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferCount(2));
buffered.subscribe(x => console.log(x));
```

On every click, emit the last two click events as an array

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferCount(2, 1));
buffered.subscribe(x => console.log(x));
```

*__see__*: [buffer](_rxjs_src_internal_operators_buffer_.md#buffer)

*__see__*: [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime)

*__see__*: [bufferToggle](_rxjs_src_internal_operators_buffertoggle_.md#buffertoggle)

*__see__*: [bufferWhen](_rxjs_src_internal_operators_bufferwhen_.md#bufferwhen)

*__see__*: [pairwise](_rxjs_src_internal_operators_pairwise_.md#pairwise)

*__see__*: [windowCount](_rxjs_src_internal_operators_windowcount_.md#windowcount)

*__method__*: bufferCount

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| bufferSize | `number` | - |  The maximum size of the buffer emitted. |
| `Default value` startBufferEvery | `number` |  null |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An Observable of arrays of buffered values.

___

