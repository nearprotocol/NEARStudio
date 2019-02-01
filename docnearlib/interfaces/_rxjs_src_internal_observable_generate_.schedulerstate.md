[rxjs](../README.md) > ["rxjs/src/internal/observable/generate"](../modules/_rxjs_src_internal_observable_generate_.md) > [SchedulerState](../interfaces/_rxjs_src_internal_observable_generate_.schedulerstate.md)

# Interface: SchedulerState

## Type parameters
#### T 
#### S 
## Hierarchy

**SchedulerState**

## Index

### Properties

* [condition](_rxjs_src_internal_observable_generate_.schedulerstate.md#condition)
* [iterate](_rxjs_src_internal_observable_generate_.schedulerstate.md#iterate)
* [needIterate](_rxjs_src_internal_observable_generate_.schedulerstate.md#neediterate)
* [resultSelector](_rxjs_src_internal_observable_generate_.schedulerstate.md#resultselector)
* [state](_rxjs_src_internal_observable_generate_.schedulerstate.md#state)
* [subscriber](_rxjs_src_internal_observable_generate_.schedulerstate.md#subscriber)

---

## Properties

<a id="condition"></a>

### `<Optional>` condition

**● condition**: *[ConditionFunc](../modules/_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`>*

*Defined in rxjs/src/internal/observable/generate.ts:15*

___
<a id="iterate"></a>

###  iterate

**● iterate**: *[IterateFunc](../modules/_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`>*

*Defined in rxjs/src/internal/observable/generate.ts:16*

___
<a id="neediterate"></a>

### `<Optional>` needIterate

**● needIterate**: *`boolean`*

*Defined in rxjs/src/internal/observable/generate.ts:12*

___
<a id="resultselector"></a>

###  resultSelector

**● resultSelector**: *[ResultFunc](../modules/_rxjs_src_internal_observable_generate_.md#resultfunc)<`S`, `T`>*

*Defined in rxjs/src/internal/observable/generate.ts:17*

___
<a id="state"></a>

###  state

**● state**: *`S`*

*Defined in rxjs/src/internal/observable/generate.ts:13*

___
<a id="subscriber"></a>

###  subscriber

**● subscriber**: *[Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*

*Defined in rxjs/src/internal/observable/generate.ts:14*

___

