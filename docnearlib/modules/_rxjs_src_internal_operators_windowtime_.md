[rxjs](../README.md) > ["rxjs/src/internal/operators/windowTime"](../modules/_rxjs_src_internal_operators_windowtime_.md)

# External module: "rxjs/src/internal/operators/windowTime"

## Index

### Classes

* [CountedSubject](../classes/_rxjs_src_internal_operators_windowtime_.countedsubject.md)
* [WindowTimeOperator](../classes/_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md)

### Interfaces

* [CloseState](../interfaces/_rxjs_src_internal_operators_windowtime_.closestate.md)
* [CloseWindowContext](../interfaces/_rxjs_src_internal_operators_windowtime_.closewindowcontext.md)
* [CreationState](../interfaces/_rxjs_src_internal_operators_windowtime_.creationstate.md)
* [TimeSpanOnlyState](../interfaces/_rxjs_src_internal_operators_windowtime_.timespanonlystate.md)

### Functions

* [dispatchWindowClose](_rxjs_src_internal_operators_windowtime_.md#dispatchwindowclose)
* [dispatchWindowCreation](_rxjs_src_internal_operators_windowtime_.md#dispatchwindowcreation)
* [dispatchWindowTimeSpanOnly](_rxjs_src_internal_operators_windowtime_.md#dispatchwindowtimespanonly)
* [windowTime](_rxjs_src_internal_operators_windowtime_.md#windowtime)

---

## Functions

<a id="dispatchwindowclose"></a>

###  dispatchWindowClose

▸ **dispatchWindowClose**<`T`>(state: *[CloseState](../interfaces/_rxjs_src_internal_operators_windowtime_.closestate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/operators/windowTime.ts:267*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| state | [CloseState](../interfaces/_rxjs_src_internal_operators_windowtime_.closestate.md)<`T`> |

**Returns:** `void`

___
<a id="dispatchwindowcreation"></a>

###  dispatchWindowCreation

▸ **dispatchWindowCreation**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[CreationState](../interfaces/_rxjs_src_internal_operators_windowtime_.creationstate.md)<`T`>>*, state: *[CreationState](../interfaces/_rxjs_src_internal_operators_windowtime_.creationstate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/operators/windowTime.ts:256*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[CreationState](../interfaces/_rxjs_src_internal_operators_windowtime_.creationstate.md)<`T`>> |
| state | [CreationState](../interfaces/_rxjs_src_internal_operators_windowtime_.creationstate.md)<`T`> |

**Returns:** `void`

___
<a id="dispatchwindowtimespanonly"></a>

###  dispatchWindowTimeSpanOnly

▸ **dispatchWindowTimeSpanOnly**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[TimeSpanOnlyState](../interfaces/_rxjs_src_internal_operators_windowtime_.timespanonlystate.md)<`T`>>*, state: *[TimeSpanOnlyState](../interfaces/_rxjs_src_internal_operators_windowtime_.timespanonlystate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/operators/windowTime.ts:247*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[TimeSpanOnlyState](../interfaces/_rxjs_src_internal_operators_windowtime_.timespanonlystate.md)<`T`>> |
| state | [TimeSpanOnlyState](../interfaces/_rxjs_src_internal_operators_windowtime_.timespanonlystate.md)<`T`> |

**Returns:** `void`

___
<a id="windowtime"></a>

###  windowTime

▸ **windowTime**<`T`>(windowTimeSpan: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

▸ **windowTime**<`T`>(windowTimeSpan: *`number`*, windowCreationInterval: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

▸ **windowTime**<`T`>(windowTimeSpan: *`number`*, windowCreationInterval: *`number`*, maxWindowSize: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/operators/windowTime.ts:84*

Branch out the source Observable values as a nested Observable periodically in time.

It's like [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime), but emits a nested Observable instead of an array.

![](windowTime.png)

Returns an Observable that emits windows of items it collects from the source Observable. The output Observable starts a new window periodically, as determined by the `windowCreationInterval` argument. It emits each window after a fixed timespan, specified by the `windowTimeSpan` argument. When the source Observable completes or encounters an error, the output Observable emits the current window and propagates the notification from the source Observable. If `windowCreationInterval` is not provided, the output Observable starts a new window when the previous window of duration `windowTimeSpan` completes. If `maxWindowCount` is provided, each window will emit at most fixed number of values. Window will complete immediately after emitting last value and next one still will open as specified by `windowTimeSpan` and `windowCreationInterval` arguments.

Examples
--------

In every window of 1 second each, emit at most 2 click events

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowTime(1000),
  map(win => win.take(2)),   // each window has at most 2 emissions
  mergeAll(),                // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

Every 5 seconds start a window 1 second long, and emit at most 2 click events per window

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowTime(1000, 5000),
  map(win => win.take(2)),   // each window has at most 2 emissions
  mergeAll(),                // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

Same as example above but with maxWindowCount instead of take

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  windowTime(1000, 5000, 2), // each window has still at most 2 emissions
  mergeAll(),                // flatten the Observable-of-Observables
);
result.subscribe(x => console.log(x));
```

*__see__*: [window](_rxjs_src_internal_operators_window_.md#window)

*__see__*: [windowCount](_rxjs_src_internal_operators_windowcount_.md#windowcount)

*__see__*: [windowToggle](_rxjs_src_internal_operators_windowtoggle_.md#windowtoggle)

*__see__*: [windowWhen](_rxjs_src_internal_operators_windowwhen_.md#windowwhen)

*__see__*: [bufferTime](_rxjs_src_internal_operators_buffertime_.md#buffertime)

*__method__*: windowTime

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| windowTimeSpan | `number` |  The amount of time to fill each window. |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>
An observable of windows, which in turn
are Observables.

*Defined in rxjs/src/internal/operators/windowTime.ts:86*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| windowTimeSpan | `number` |
| windowCreationInterval | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/operators/windowTime.ts:89*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| windowTimeSpan | `number` |
| windowCreationInterval | `number` |
| maxWindowSize | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

___

