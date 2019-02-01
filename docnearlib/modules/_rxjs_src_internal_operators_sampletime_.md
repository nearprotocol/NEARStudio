[rxjs](../README.md) > ["rxjs/src/internal/operators/sampleTime"](../modules/_rxjs_src_internal_operators_sampletime_.md)

# External module: "rxjs/src/internal/operators/sampleTime"

## Index

### Classes

* [SampleTimeOperator](../classes/_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md)

### Functions

* [dispatchNotification](_rxjs_src_internal_operators_sampletime_.md#dispatchnotification)
* [sampleTime](_rxjs_src_internal_operators_sampletime_.md#sampletime)

---

## Functions

<a id="dispatchnotification"></a>

###  dispatchNotification

▸ **dispatchNotification**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`>*, state: *`any`*): `void`

*Defined in rxjs/src/internal/operators/sampleTime.ts:89*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`> |
| state | `any` |

**Returns:** `void`

___
<a id="sampletime"></a>

###  sampleTime

▸ **sampleTime**<`T`>(period: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/sampleTime.ts:46*

Emits the most recently emitted value from the source Observable within periodic time intervals.

Samples the source Observable at periodic time intervals, emitting what it samples.

![](sampleTime.png)

`sampleTime` periodically looks at the source Observable and emits whichever value it has most recently emitted since the previous sampling, unless the source has not emitted anything since the previous sampling. The sampling happens periodically in time every `period` milliseconds (or the time unit defined by the optional `scheduler` argument). The sampling starts as soon as the output Observable is subscribed.

Example
-------

Every second, emit the most recent click at most once

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(sampleTime(1000));
result.subscribe(x => console.log(x));
```

*__see__*: [auditTime](_rxjs_src_internal_operators_audittime_.md#audittime)

*__see__*: [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime)

*__see__*: {@link delay}

*__see__*: [sample](_rxjs_src_internal_operators_sample_.md#sample)

*__see__*: [throttleTime](_rxjs_src_internal_operators_throttletime_.md#throttletime)

*__method__*: sampleTime

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| period | `number` | - |  The sampling period expressed in milliseconds or the time unit determined internally by the optional \`scheduler\`. |
| `Default value` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |  async |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the results of sampling the
values emitted by the source Observable at the specified time interval.

___

