[rxjs](../README.md) > ["rxjs/src/internal/operators/observeOn"](../modules/_rxjs_src_internal_operators_observeon_.md)

# External module: "rxjs/src/internal/operators/observeOn"

## Index

### Classes

* [ObserveOnMessage](../classes/_rxjs_src_internal_operators_observeon_.observeonmessage.md)
* [ObserveOnOperator](../classes/_rxjs_src_internal_operators_observeon_.observeonoperator.md)

### Functions

* [observeOn](_rxjs_src_internal_operators_observeon_.md#observeon)

---

## Functions

<a id="observeon"></a>

###  observeOn

▸ **observeOn**<`T`>(scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, delay?: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/observeOn.ts:57*

Re-emits all notifications from source Observable with specified scheduler.

Ensure a specific scheduler is used, from outside of an Observable.

`observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule notifications emitted by the source Observable. It might be useful, if you do not have control over internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.

Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable, but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`. An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a little bit more, to ensure that they are emitted at expected moments.

As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn` will delay all notifications - including error notifications - while `delay` will pass through error from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used for notification emissions in general.

Example
-------

Ensure values in subscribe are called just before browser repaint.

```javascript
const intervals = interval(10);                // Intervals are scheduled
                                               // with async scheduler by default...
intervals.pipe(
  observeOn(animationFrameScheduler),          // ...but we will observe on animationFrame
)                                              // scheduler to ensure smooth animation.
.subscribe(val => {
  someDiv.style.height = val + 'px';
});
```

*__see__*: {@link delay}

*__method__*: observeOn

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |  Scheduler that will be used to reschedule notifications from source Observable. |
| `Default value` delay | `number` | 0 |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
Observable that emits the same notifications as the source Observable,
but with provided scheduler.

___

