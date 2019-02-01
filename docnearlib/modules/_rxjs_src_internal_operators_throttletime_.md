[rxjs](../README.md) > ["rxjs/src/internal/operators/throttleTime"](../modules/_rxjs_src_internal_operators_throttletime_.md)

# External module: "rxjs/src/internal/operators/throttleTime"

## Index

### Classes

* [ThrottleTimeOperator](../classes/_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md)

### Interfaces

* [DispatchArg](../interfaces/_rxjs_src_internal_operators_throttletime_.dispatcharg.md)

### Functions

* [dispatchNext](_rxjs_src_internal_operators_throttletime_.md#dispatchnext)
* [throttleTime](_rxjs_src_internal_operators_throttletime_.md#throttletime)

---

## Functions

<a id="dispatchnext"></a>

###  dispatchNext

▸ **dispatchNext**<`T`>(arg: *[DispatchArg](../interfaces/_rxjs_src_internal_operators_throttletime_.dispatcharg.md)<`T`>*): `void`

*Defined in rxjs/src/internal/operators/throttleTime.ts:133*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | [DispatchArg](../interfaces/_rxjs_src_internal_operators_throttletime_.dispatcharg.md)<`T`> |

**Returns:** `void`

___
<a id="throttletime"></a>

###  throttleTime

▸ **throttleTime**<`T`>(duration: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, config?: *[ThrottleConfig](../interfaces/_rxjs_src_internal_operators_throttle_.throttleconfig.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/throttleTime.ts:53*

Emits a value from the source Observable, then ignores subsequent source values for `duration` milliseconds, then repeats this process.

Lets a value pass, then ignores source values for the next `duration` milliseconds.

![](throttleTime.png)

`throttleTime` emits the source Observable values on the output Observable when its internal timer is disabled, and ignores source values when the timer is enabled. Initially, the timer is disabled. As soon as the first source value arrives, it is forwarded to the output Observable, and then the timer is enabled. After `duration` milliseconds (or the time unit determined internally by the optional `scheduler`) has passed, the timer is disabled, and this process repeats for the next source value. Optionally takes a [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) for managing timers.

Example
-------

Emit clicks at a rate of at most one click per second

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttleTime(1000));
result.subscribe(x => console.log(x));
```

*__see__*: [auditTime](_rxjs_src_internal_operators_audittime_.md#audittime)

*__see__*: [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime)

*__see__*: {@link delay}

*__see__*: [sampleTime](_rxjs_src_internal_operators_sampletime_.md#sampletime)

*__see__*: [throttle](_rxjs_src_internal_operators_throttle_.md#throttle)

*__method__*: throttleTime

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| duration | `number` | - |  Time to wait before emitting another value after emitting the last value, measured in milliseconds or the time unit determined internally by the optional \`scheduler\`. |
| `Default value` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |  async |
| `Default value` config | [ThrottleConfig](../interfaces/_rxjs_src_internal_operators_throttle_.throttleconfig.md) |  defaultThrottleConfig |  a configuration object to define \`leading\` and \`trailing\` behavior. Defaults to \`{ leading: true, trailing: false }\`. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that performs the throttle operation to
limit the rate of emissions from the source.

___

