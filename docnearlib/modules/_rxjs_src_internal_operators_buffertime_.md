[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferTime"](../modules/_rxjs_src_internal_operators_buffertime_.md)

# External module: "rxjs/src/internal/operators/bufferTime"

## Index

### Classes

* [BufferTimeOperator](../classes/_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md)
* [Context](../classes/_rxjs_src_internal_operators_buffertime_.context.md)

### Interfaces

* [DispatchCloseArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchclosearg.md)
* [DispatchCreateArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchcreatearg.md)

### Functions

* [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime)
* [dispatchBufferClose](_rxjs_src_internal_operators_buffertime_.md#dispatchbufferclose)
* [dispatchBufferCreation](_rxjs_src_internal_operators_buffertime_.md#dispatchbuffercreation)
* [dispatchBufferTimeSpanOnly](_rxjs_src_internal_operators_buffertime_.md#dispatchbuffertimespanonly)

---

## Functions

<a id="buffertime"></a>

###  bufferTime

▸ **bufferTime**<`T`>(bufferTimeSpan: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

▸ **bufferTime**<`T`>(bufferTimeSpan: *`number`*, bufferCreationInterval: *`number` \| `null` \| `undefined`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

▸ **bufferTime**<`T`>(bufferTimeSpan: *`number`*, bufferCreationInterval: *`number` \| `null` \| `undefined`*, maxBufferSize: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>

*Defined in rxjs/src/internal/operators/bufferTime.ts:10*

Buffers the source Observable values for a specific time period.

Collects values from the past as an array, and emits those arrays periodically in time.

![](bufferTime.png)

Buffers values from the source for a specific time duration `bufferTimeSpan`. Unless the optional argument `bufferCreationInterval` is given, it emits and resets the buffer every `bufferTimeSpan` milliseconds. If `bufferCreationInterval` is given, this operator opens the buffer every `bufferCreationInterval` milliseconds and closes (emits and resets) the buffer every `bufferTimeSpan` milliseconds. When the optional argument `maxBufferSize` is specified, the buffer will be closed either after `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.

Examples
--------

Every second, emit an array of the recent click events

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(1000));
buffered.subscribe(x => console.log(x));
```

Every 5 seconds, emit the click events from the next 2 seconds

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(2000, 5000));
buffered.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bufferTimeSpan | `number` |  The amount of time to fill each buffer array. |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An observable of arrays of buffered values.

*Defined in rxjs/src/internal/operators/bufferTime.ts:11*

Buffers the source Observable values for a specific time period.

Collects values from the past as an array, and emits those arrays periodically in time.

![](bufferTime.png)

Buffers values from the source for a specific time duration `bufferTimeSpan`. Unless the optional argument `bufferCreationInterval` is given, it emits and resets the buffer every `bufferTimeSpan` milliseconds. If `bufferCreationInterval` is given, this operator opens the buffer every `bufferCreationInterval` milliseconds and closes (emits and resets) the buffer every `bufferTimeSpan` milliseconds. When the optional argument `maxBufferSize` is specified, the buffer will be closed either after `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.

Examples
--------

Every second, emit an array of the recent click events

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(1000));
buffered.subscribe(x => console.log(x));
```

Every 5 seconds, emit the click events from the next 2 seconds

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(2000, 5000));
buffered.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bufferTimeSpan | `number` |  The amount of time to fill each buffer array. |
| bufferCreationInterval | `number` \| `null` \| `undefined` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An observable of arrays of buffered values.

*Defined in rxjs/src/internal/operators/bufferTime.ts:12*

Buffers the source Observable values for a specific time period.

Collects values from the past as an array, and emits those arrays periodically in time.

![](bufferTime.png)

Buffers values from the source for a specific time duration `bufferTimeSpan`. Unless the optional argument `bufferCreationInterval` is given, it emits and resets the buffer every `bufferTimeSpan` milliseconds. If `bufferCreationInterval` is given, this operator opens the buffer every `bufferCreationInterval` milliseconds and closes (emits and resets) the buffer every `bufferTimeSpan` milliseconds. When the optional argument `maxBufferSize` is specified, the buffer will be closed either after `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.

Examples
--------

Every second, emit an array of the recent click events

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(1000));
buffered.subscribe(x => console.log(x));
```

Every 5 seconds, emit the click events from the next 2 seconds

```javascript
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(bufferTime(2000, 5000));
buffered.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bufferTimeSpan | `number` |  The amount of time to fill each buffer array. |
| bufferCreationInterval | `number` \| `null` \| `undefined` |
| maxBufferSize | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T`[]>
An observable of arrays of buffered values.

___
<a id="dispatchbufferclose"></a>

###  dispatchBufferClose

▸ **dispatchBufferClose**<`T`>(arg: *[DispatchCloseArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchclosearg.md)<`T`>*): `void`

*Defined in rxjs/src/internal/operators/bufferTime.ts:241*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | [DispatchCloseArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchclosearg.md)<`T`> |

**Returns:** `void`

___
<a id="dispatchbuffercreation"></a>

###  dispatchBufferCreation

▸ **dispatchBufferCreation**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[DispatchCreateArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchcreatearg.md)<`T`>>*, state: *[DispatchCreateArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchcreatearg.md)<`T`>*): `void`

*Defined in rxjs/src/internal/operators/bufferTime.ts:231*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[DispatchCreateArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchcreatearg.md)<`T`>> |
| state | [DispatchCreateArg](../interfaces/_rxjs_src_internal_operators_buffertime_.dispatchcreatearg.md)<`T`> |

**Returns:** `void`

___
<a id="dispatchbuffertimespanonly"></a>

###  dispatchBufferTimeSpanOnly

▸ **dispatchBufferTimeSpanOnly**(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`>*, state: *`any`*): `void`

*Defined in rxjs/src/internal/operators/bufferTime.ts:217*

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`> |
| state | `any` |

**Returns:** `void`

___

