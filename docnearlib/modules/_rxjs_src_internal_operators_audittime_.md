[rxjs](../README.md) > ["rxjs/src/internal/operators/auditTime"](../modules/_rxjs_src_internal_operators_audittime_.md)

# External module: "rxjs/src/internal/operators/auditTime"

## Index

### Functions

* [auditTime](_rxjs_src_internal_operators_audittime_.md#audittime)

---

## Functions

<a id="audittime"></a>

###  auditTime

▸ **auditTime**<`T`>(duration: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/auditTime.ts:52*

Ignores source values for `duration` milliseconds, then emits the most recent value from the source Observable, then repeats this process.

When it sees a source values, it ignores that plus the next ones for `duration` milliseconds, and then it emits the most recent value from the source.

![](auditTime.png)

`auditTime` is similar to `throttleTime`, but emits the last value from the silenced time window, instead of the first value. `auditTime` emits the most recent value from the source Observable on the output Observable as soon as its internal timer becomes disabled, and ignores source values while the timer is enabled. Initially, the timer is disabled. As soon as the first source value arrives, the timer is enabled. After `duration` milliseconds (or the time unit determined internally by the optional `scheduler`) has passed, the timer is disabled, then the most recent source value is emitted on the output Observable, and this process repeats for the next source value. Optionally takes a [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) for managing timers.

Example
-------

Emit clicks at a rate of at most one click per second

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(auditTime(1000));
result.subscribe(x => console.log(x));
```

*__see__*: [audit](_rxjs_src_internal_operators_audit_.md#audit)

*__see__*: [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime)

*__see__*: {@link delay}

*__see__*: [sampleTime](_rxjs_src_internal_operators_sampletime_.md#sampletime)

*__see__*: [throttleTime](_rxjs_src_internal_operators_throttletime_.md#throttletime)

*__method__*: auditTime

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| duration | `number` | - |  Time to wait before emitting the most recent source value, measured in milliseconds or the time unit determined internally by the optional \`scheduler\`. |
| `Default value` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |  async |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that performs rate-limiting of
emissions from the source Observable.

___

