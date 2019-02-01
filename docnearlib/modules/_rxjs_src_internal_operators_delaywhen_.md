[rxjs](../README.md) > ["rxjs/src/internal/operators/delayWhen"](../modules/_rxjs_src_internal_operators_delaywhen_.md)

# External module: "rxjs/src/internal/operators/delayWhen"

## Index

### Classes

* [DelayWhenOperator](../classes/_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md)

### Functions

* [delayWhen](_rxjs_src_internal_operators_delaywhen_.md#delaywhen)

---

## Functions

<a id="delaywhen"></a>

###  delayWhen

▸ **delayWhen**<`T`>(delayDurationSelector: *`function`*, subscriptionDelay?: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **delayWhen**<`T`>(delayDurationSelector: *`function`*, subscriptionDelay?: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/delayWhen.ts:12*

Delays the emission of items from the source Observable by a given time span determined by the emissions of another Observable.

It's like {@link delay}, but the time span of the delay duration is determined by a second Observable.

![](delayWhen.png)

`delayWhen` time shifts each emitted value from the source Observable by a time span determined by another Observable. When the source emits a value, the `delayDurationSelector` function is called with the source value as argument, and should return an Observable, called the "duration" Observable. The source value is emitted on the output Observable only when the duration Observable emits a value or completes. The completion of the notifier triggering the emission of the source value is deprecated behavior and will be removed in future versions.

Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which is an Observable. When `subscriptionDelay` emits its first value or completes, the source Observable is subscribed to and starts behaving like described in the previous paragraph. If `subscriptionDelay` is not provided, `delayWhen` will subscribe to the source Observable as soon as the output Observable is subscribed.

Example
-------

Delay each click by a random amount of time, between 0 and 5 seconds

```javascript
const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(
  delayWhen(event => interval(Math.random() * 5000)),
);
delayedClicks.subscribe(x => console.log(x));
```

*__deprecated__*:
 In future versions, empty notifiers will no longer re-emit the source value on the output observable.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| delayDurationSelector | `function` |  A function that returns an Observable for each value emitted by the source Observable, which is then used to delay the emission of that item on the output Observable until the Observable returned from this function emits a value. |
| `Optional` subscriptionDelay | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  An Observable that triggers the subscription to the source Observable once it emits any value. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that delays the emissions of the source
Observable by an amount of time specified by the Observable returned by
`delayDurationSelector`.

*Defined in rxjs/src/internal/operators/delayWhen.ts:13*

Delays the emission of items from the source Observable by a given time span determined by the emissions of another Observable.

It's like {@link delay}, but the time span of the delay duration is determined by a second Observable.

![](delayWhen.png)

`delayWhen` time shifts each emitted value from the source Observable by a time span determined by another Observable. When the source emits a value, the `delayDurationSelector` function is called with the source value as argument, and should return an Observable, called the "duration" Observable. The source value is emitted on the output Observable only when the duration Observable emits a value or completes. The completion of the notifier triggering the emission of the source value is deprecated behavior and will be removed in future versions.

Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which is an Observable. When `subscriptionDelay` emits its first value or completes, the source Observable is subscribed to and starts behaving like described in the previous paragraph. If `subscriptionDelay` is not provided, `delayWhen` will subscribe to the source Observable as soon as the output Observable is subscribed.

Example
-------

Delay each click by a random amount of time, between 0 and 5 seconds

```javascript
const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(
  delayWhen(event => interval(Math.random() * 5000)),
);
delayedClicks.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| delayDurationSelector | `function` |  A function that returns an Observable for each value emitted by the source Observable, which is then used to delay the emission of that item on the output Observable until the Observable returned from this function emits a value. |
| `Optional` subscriptionDelay | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  An Observable that triggers the subscription to the source Observable once it emits any value. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that delays the emissions of the source
Observable by an amount of time specified by the Observable returned by
`delayDurationSelector`.

___

