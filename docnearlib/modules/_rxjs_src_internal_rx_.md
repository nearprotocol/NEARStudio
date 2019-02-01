[rxjs](../README.md) > ["rxjs/src/internal/Rx"](../modules/_rxjs_src_internal_rx_.md)

# External module: "rxjs/src/internal/Rx"

## Index

### Variables

* [operators](_rxjs_src_internal_rx_.md#operators)

### Object literals

* [Scheduler](_rxjs_src_internal_rx_.md#scheduler)
* [Symbol](_rxjs_src_internal_rx_.md#symbol)

---

## Variables

<a id="operators"></a>

### `<Const>` operators

**● operators**: *[&quot;rxjs/src/internal/operators/index&quot;](_rxjs_src_internal_operators_index_.md)* =  _operators

*Defined in rxjs/src/internal/Rx.ts:183*

___

## Object literals

<a id="scheduler"></a>

### `<Let>` Scheduler

**Scheduler**: *`object`*

*Defined in rxjs/src/internal/Rx.ts:199*

*__typedef__*: {Object} Rx.Scheduler

*__property__*: {SchedulerLike} asap Schedules on the micro task queue, which is the same queue used for promises. Basically after the current job, but before the next job. Use this for asynchronous conversions.

*__property__*: {SchedulerLike} queue Schedules on a queue in the current event frame (trampoline scheduler). Use this for iteration operations.

*__property__*: {SchedulerLike} animationFrame Schedules work with `requestAnimationFrame`. Use this for synchronizing with the platform's painting.

*__property__*: {SchedulerLike} async Schedules work with `setInterval`. Use this for time-based operations.

<a id="scheduler.animationframe"></a>

####  animationFrame

**● animationFrame**: *[AnimationFrameScheduler](../classes/_rxjs_src_internal_scheduler_animationframescheduler_.animationframescheduler.md)*

*Defined in rxjs/src/internal/Rx.ts:202*

___
<a id="scheduler.asap"></a>

####  asap

**● asap**: *[AsapScheduler](../classes/_rxjs_src_internal_scheduler_asapscheduler_.asapscheduler.md)*

*Defined in rxjs/src/internal/Rx.ts:200*

___
<a id="scheduler.async"></a>

####  async

**● async**: *[AsyncScheduler](../classes/_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)*

*Defined in rxjs/src/internal/Rx.ts:203*

___
<a id="scheduler.queue"></a>

####  queue

**● queue**: *[QueueScheduler](../classes/_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)*

*Defined in rxjs/src/internal/Rx.ts:201*

___

___
<a id="symbol"></a>

### `<Let>` Symbol

**Symbol**: *`object`*

*Defined in rxjs/src/internal/Rx.ts:219*

*__typedef__*: {Object} Rx.Symbol

*__property__*: {Symbol\|string} rxSubscriber A symbol to use as a property name to retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as an object that has all of the traits of an Rx Subscriber, including the ability to add and remove subscriptions to the subscription chain and guarantees involving event triggering (can't "next" after unsubscription, etc).

*__property__*: {Symbol\|string} observable A symbol to use as a property name to retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).

*__property__*: {Symbol\|string} iterator The ES6 symbol to use as a property name to retrieve an iterator from an object.

<a id="symbol.iterator"></a>

####  iterator

**● iterator**: *`symbol`*

*Defined in rxjs/src/internal/Rx.ts:222*

___
<a id="symbol.observable"></a>

####  observable

**● observable**: *`string` \| `symbol`*

*Defined in rxjs/src/internal/Rx.ts:221*

___
<a id="symbol.rxsubscriber"></a>

####  rxSubscriber

**● rxSubscriber**: *`string` \| `symbol`*

*Defined in rxjs/src/internal/Rx.ts:220*

___

___

