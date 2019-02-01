[rxjs](../README.md) > ["rxjs/src/internal/operators/debounceTime"](../modules/_rxjs_src_internal_operators_debouncetime_.md)

# External module: "rxjs/src/internal/operators/debounceTime"

## Index

### Classes

* [DebounceTimeOperator](../classes/_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md)

### Functions

* [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime)
* [dispatchNext](_rxjs_src_internal_operators_debouncetime_.md#dispatchnext)

---

## Functions

<a id="debouncetime"></a>

###  debounceTime

▸ **debounceTime**<`T`>(dueTime: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/debounceTime.ts:57*

Emits a value from the source Observable only after a particular time span has passed without another source emission.

It's like {@link delay}, but passes only the most recent value from each burst of emissions.

![](debounceTime.png)

`debounceTime` delays values emitted by the source Observable, but drops previous pending delayed emissions if a new value arrives on the source Observable. This operator keeps track of the most recent value from the source Observable, and emits that only when `dueTime` enough time has passed without any other value appearing on the source Observable. If a new value appears before `dueTime` silence occurs, the previous value will be dropped and will not be emitted on the output Observable.

This is a rate-limiting operator, because it is impossible for more than one value to be emitted in any time window of duration `dueTime`, but it is also a delay-like operator since output emissions do not occur at the same time as they did on the source Observable. Optionally takes a [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) for managing timers.

Example
-------

Emit the most recent click after a burst of clicks

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(debounceTime(1000));
result.subscribe(x => console.log(x));
```

*__see__*: [auditTime](_rxjs_src_internal_operators_audittime_.md#audittime)

*__see__*: [debounce](_rxjs_src_internal_operators_debounce_.md#debounce)

*__see__*: {@link delay}

*__see__*: [sampleTime](_rxjs_src_internal_operators_sampletime_.md#sampletime)

*__see__*: [throttleTime](_rxjs_src_internal_operators_throttletime_.md#throttletime)

*__method__*: debounceTime

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| dueTime | `number` | - |  The timeout duration in milliseconds (or the time unit determined internally by the optional \`scheduler\`) for the window of time required to wait for emission silence before emitting the most recent source value. |
| `Default value` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |  async |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that delays the emissions of the source
Observable by the specified `dueTime`, and may drop some values if they occur
too frequently.

___
<a id="dispatchnext"></a>

###  dispatchNext

▸ **dispatchNext**(subscriber: *`DebounceTimeSubscriber`<`any`>*): `void`

*Defined in rxjs/src/internal/operators/debounceTime.ts:125*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | `DebounceTimeSubscriber`<`any`> |

**Returns:** `void`

___

