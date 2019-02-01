[rxjs](../README.md) > ["rxjs/src/internal/operators/timeoutWith"](../modules/_rxjs_src_internal_operators_timeoutwith_.md)

# External module: "rxjs/src/internal/operators/timeoutWith"

## Index

### Classes

* [TimeoutWithOperator](../classes/_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md)

### Functions

* [timeoutWith](_rxjs_src_internal_operators_timeoutwith_.md#timeoutwith)

---

## Functions

<a id="timeoutwith"></a>

###  timeoutWith

▸ **timeoutWith**<`T`,`R`>(due: *`number` \| `Date`*, withObservable: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `R`>

*Defined in rxjs/src/internal/operators/timeoutWith.ts:11*

Errors if Observable does not emit a value in given time span, in case of which subscribes to the second Observable.

It's a version of `timeout` operator that let's you specify fallback Observable.

![](timeoutWith.png)

`timeoutWith` is a variation of `timeout` operator. It behaves exactly the same, still accepting as a first argument either a number or a Date, which control - respectively - when values of source Observable should be emitted or when it should complete.

The only difference is that it accepts a second, required parameter. This parameter should be an Observable which will be subscribed when source Observable fails any timeout check. So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting values from second Observable. Note that this fallback Observable is not checked for timeouts itself, so it can emit values and complete at arbitrary points in time. From the moment of a second subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that stream completes, it completes as well.

Scheduler, which in case of `timeout` is provided as as second argument, can be still provided here - as a third, optional parameter. It still is used to schedule timeout checks and - as a consequence - when second Observable will be subscribed, since subscription happens immediately after failing check.

Example
-------

Add fallback observable

```javascript
const seconds = interval(1000);
const minutes = interval(60 * 1000);

seconds.pipe(timeoutWith(900, minutes))
  .subscribe(
    value => console.log(value), // After 900ms, will start emitting `minutes`,
                                 // since first value of `seconds` will not arrive fast enough.
    err => console.log(err),     // Would be called after 900ms in case of `timeout`,
                                 // but here will never be called.
  );
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| due | `number` \| `Date` |  Number specifying period within which Observable must emit values or Date specifying before when Observable should complete |
| withObservable | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`> |  Observable which will be subscribed if source fails timeout check. |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `R`>
Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
                         passed as a second parameter.

___

