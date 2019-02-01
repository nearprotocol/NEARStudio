[rxjs](../README.md) > ["rxjs/src/internal/operators/debounce"](../modules/_rxjs_src_internal_operators_debounce_.md)

# External module: "rxjs/src/internal/operators/debounce"

## Index

### Classes

* [DebounceOperator](../classes/_rxjs_src_internal_operators_debounce_.debounceoperator.md)

### Functions

* [debounce](_rxjs_src_internal_operators_debounce_.md#debounce)

---

## Functions

<a id="debounce"></a>

###  debounce

▸ **debounce**<`T`>(durationSelector: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/debounce.ts:56*

Emits a value from the source Observable only after a particular time span determined by another Observable has passed without another source emission.

It's like [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime), but the time span of emission silence is determined by a second Observable.

![](debounce.png)

`debounce` delays values emitted by the source Observable, but drops previous pending delayed emissions if a new value arrives on the source Observable. This operator keeps track of the most recent value from the source Observable, and spawns a duration Observable by calling the `durationSelector` function. The value is emitted only when the duration Observable emits a value or completes, and if no other value was emitted on the source Observable since the duration Observable was spawned. If a new value appears before the duration Observable emits, the previous value will be dropped and will not be emitted on the output Observable.

Like [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime), this is a rate-limiting operator, and also a delay-like operator since output emissions do not necessarily occur at the same time as they did on the source Observable.

Example
-------

Emit the most recent click after a burst of clicks

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(debounce(() => interval(1000)));
result.subscribe(x => console.log(x));
```

*__see__*: [audit](_rxjs_src_internal_operators_audit_.md#audit)

*__see__*: [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime)

*__see__*: [delayWhen](_rxjs_src_internal_operators_delaywhen_.md#delaywhen)

*__see__*: [throttle](_rxjs_src_internal_operators_throttle_.md#throttle)

*__method__*: debounce

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| durationSelector | `function` |  A function that receives a value from the source Observable, for computing the timeout duration for each source value, returned as an Observable or a Promise. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that delays the emissions of the source
Observable by the specified duration Observable returned by
`durationSelector`, and may drop some values if they occur too frequently.

___

