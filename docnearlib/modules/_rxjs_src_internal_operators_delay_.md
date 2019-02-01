[rxjs](../README.md) > ["rxjs/src/internal/operators/delay"](../modules/_rxjs_src_internal_operators_delay_.md)

# External module: "rxjs/src/internal/operators/delay"

## Index

### Classes

* [DelayMessage](../classes/_rxjs_src_internal_operators_delay_.delaymessage.md)
* [DelayOperator](../classes/_rxjs_src_internal_operators_delay_.delayoperator.md)

### Interfaces

* [DelayState](../interfaces/_rxjs_src_internal_operators_delay_.delaystate.md)

### Functions

* [delay](_rxjs_src_internal_operators_delay_.md#delay)

---

## Functions

<a id="delay"></a>

###  delay

▸ **delay**<`T`>(delay: *`number` \| `Date`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/delay.ts:54*

Delays the emission of items from the source Observable by a given timeout or until a given Date.

Time shifts each item by some specified amount of milliseconds.

![](delay.png)

If the delay argument is a Number, this operator time shifts the source Observable by that amount of time expressed in milliseconds. The relative time intervals between the values are preserved.

If the delay argument is a Date, this operator time shifts the start of the Observable execution until the given date occurs.

Examples
--------

Delay each click by one second

```javascript
const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));
```

Delay all clicks until a future date happens

```javascript
const clicks = fromEvent(document, 'click');
const date = new Date('March 15, 2050 12:00:00'); // in the future
const delayedClicks = clicks.pipe(delay(date)); // click emitted only after that date
delayedClicks.subscribe(x => console.log(x));
```

*__see__*: [debounceTime](_rxjs_src_internal_operators_debouncetime_.md#debouncetime)

*__see__*: [delayWhen](_rxjs_src_internal_operators_delaywhen_.md#delaywhen)

*__method__*: delay

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| delay | `number` \| `Date` | - |  The delay duration in milliseconds (a \`number\`) or a \`Date\` until which the emission of the source items is delayed. |
| `Default value` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |  async |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that delays the emissions of the source
Observable by the specified timeout or Date.

___

