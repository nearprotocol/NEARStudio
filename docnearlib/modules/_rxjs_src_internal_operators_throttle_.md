[rxjs](../README.md) > ["rxjs/src/internal/operators/throttle"](../modules/_rxjs_src_internal_operators_throttle_.md)

# External module: "rxjs/src/internal/operators/throttle"

## Index

### Classes

* [ThrottleOperator](../classes/_rxjs_src_internal_operators_throttle_.throttleoperator.md)

### Interfaces

* [ThrottleConfig](../interfaces/_rxjs_src_internal_operators_throttle_.throttleconfig.md)

### Functions

* [throttle](_rxjs_src_internal_operators_throttle_.md#throttle)

### Object literals

* [defaultThrottleConfig](_rxjs_src_internal_operators_throttle_.md#defaultthrottleconfig)

---

## Functions

<a id="throttle"></a>

###  throttle

▸ **throttle**<`T`>(durationSelector: *`function`*, config?: *[ThrottleConfig](../interfaces/_rxjs_src_internal_operators_throttle_.throttleconfig.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/throttle.ts:65*

Emits a value from the source Observable, then ignores subsequent source values for a duration determined by another Observable, then repeats this process.

It's like [throttleTime](_rxjs_src_internal_operators_throttletime_.md#throttletime), but the silencing duration is determined by a second Observable.

![](throttle.png)

`throttle` emits the source Observable values on the output Observable when its internal timer is disabled, and ignores source values when the timer is enabled. Initially, the timer is disabled. As soon as the first source value arrives, it is forwarded to the output Observable, and then the timer is enabled by calling the `durationSelector` function with the source value, which returns the "duration" Observable. When the duration Observable emits a value or completes, the timer is disabled, and this process repeats for the next source value.

Example
-------

Emit clicks at a rate of at most one click per second

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttle(ev => interval(1000)));
result.subscribe(x => console.log(x));
```

*__see__*: [audit](_rxjs_src_internal_operators_audit_.md#audit)

*__see__*: [debounce](_rxjs_src_internal_operators_debounce_.md#debounce)

*__see__*: [delayWhen](_rxjs_src_internal_operators_delaywhen_.md#delaywhen)

*__see__*: [sample](_rxjs_src_internal_operators_sample_.md#sample)

*__see__*: [throttleTime](_rxjs_src_internal_operators_throttletime_.md#throttletime)

*__method__*: throttle

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| durationSelector | `function` | - |  A function that receives a value from the source Observable, for computing the silencing duration for each source value, returned as an Observable or a Promise. |
| `Default value` config | [ThrottleConfig](../interfaces/_rxjs_src_internal_operators_throttle_.throttleconfig.md) |  defaultThrottleConfig |  a configuration object to define \`leading\` and \`trailing\` behavior. Defaults to \`{ leading: true, trailing: false }\`. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that performs the throttle operation to
limit the rate of emissions from the source.

___

## Object literals

<a id="defaultthrottleconfig"></a>

### `<Const>` defaultThrottleConfig

**defaultThrottleConfig**: *`object`*

*Defined in rxjs/src/internal/operators/throttle.ts:17*

<a id="defaultthrottleconfig.leading"></a>

####  leading

**● leading**: *`true`* = true

*Defined in rxjs/src/internal/operators/throttle.ts:18*

___
<a id="defaultthrottleconfig.trailing"></a>

####  trailing

**● trailing**: *`false`* = false

*Defined in rxjs/src/internal/operators/throttle.ts:19*

___

___

