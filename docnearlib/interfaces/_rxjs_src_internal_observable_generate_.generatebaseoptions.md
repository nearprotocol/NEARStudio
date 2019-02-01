[rxjs](../README.md) > ["rxjs/src/internal/observable/generate"](../modules/_rxjs_src_internal_observable_generate_.md) > [GenerateBaseOptions](../interfaces/_rxjs_src_internal_observable_generate_.generatebaseoptions.md)

# Interface: GenerateBaseOptions

## Type parameters
#### S 
## Hierarchy

**GenerateBaseOptions**

↳  [GenerateOptions](_rxjs_src_internal_observable_generate_.generateoptions.md)

## Index

### Properties

* [condition](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#condition)
* [initialState](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#initialstate)
* [iterate](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#iterate)
* [scheduler](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#scheduler)

---

## Properties

<a id="condition"></a>

### `<Optional>` condition

**● condition**: *[ConditionFunc](../modules/_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`>*

*Defined in rxjs/src/internal/observable/generate.ts:30*

Condition function that accepts state and returns boolean. When it returns false, the generator stops. If not specified, a generator never stops.

___
<a id="initialstate"></a>

###  initialState

**● initialState**: *`S`*

*Defined in rxjs/src/internal/observable/generate.ts:24*

Initial state.

___
<a id="iterate"></a>

###  iterate

**● iterate**: *[IterateFunc](../modules/_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`>*

*Defined in rxjs/src/internal/observable/generate.ts:34*

Iterate function that accepts state and returns new state.

___
<a id="scheduler"></a>

### `<Optional>` scheduler

**● scheduler**: *[SchedulerLike](_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/observable/generate.ts:39*

SchedulerLike to use for generation process. By default, a generator starts immediately.

___

