[rxjs](../README.md) > ["rxjs/src/internal/observable/generate"](../modules/_rxjs_src_internal_observable_generate_.md) > [GenerateOptions](../interfaces/_rxjs_src_internal_observable_generate_.generateoptions.md)

# Interface: GenerateOptions

## Type parameters
#### T 
#### S 
## Hierarchy

 [GenerateBaseOptions](_rxjs_src_internal_observable_generate_.generatebaseoptions.md)<`S`>

**↳ GenerateOptions**

## Index

### Properties

* [condition](_rxjs_src_internal_observable_generate_.generateoptions.md#condition)
* [initialState](_rxjs_src_internal_observable_generate_.generateoptions.md#initialstate)
* [iterate](_rxjs_src_internal_observable_generate_.generateoptions.md#iterate)
* [resultSelector](_rxjs_src_internal_observable_generate_.generateoptions.md#resultselector)
* [scheduler](_rxjs_src_internal_observable_generate_.generateoptions.md#scheduler)

---

## Properties

<a id="condition"></a>

### `<Optional>` condition

**● condition**: *[ConditionFunc](../modules/_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`>*

*Inherited from [GenerateBaseOptions](_rxjs_src_internal_observable_generate_.generatebaseoptions.md).[condition](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#condition)*

*Defined in rxjs/src/internal/observable/generate.ts:30*

Condition function that accepts state and returns boolean. When it returns false, the generator stops. If not specified, a generator never stops.

___
<a id="initialstate"></a>

###  initialState

**● initialState**: *`S`*

*Inherited from [GenerateBaseOptions](_rxjs_src_internal_observable_generate_.generatebaseoptions.md).[initialState](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#initialstate)*

*Defined in rxjs/src/internal/observable/generate.ts:24*

Initial state.

___
<a id="iterate"></a>

###  iterate

**● iterate**: *[IterateFunc](../modules/_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`>*

*Inherited from [GenerateBaseOptions](_rxjs_src_internal_observable_generate_.generatebaseoptions.md).[iterate](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#iterate)*

*Defined in rxjs/src/internal/observable/generate.ts:34*

Iterate function that accepts state and returns new state.

___
<a id="resultselector"></a>

###  resultSelector

**● resultSelector**: *[ResultFunc](../modules/_rxjs_src_internal_observable_generate_.md#resultfunc)<`S`, `T`>*

*Defined in rxjs/src/internal/observable/generate.ts:46*

Result selection function that accepts state and returns a value to emit.

___
<a id="scheduler"></a>

### `<Optional>` scheduler

**● scheduler**: *[SchedulerLike](_rxjs_src_internal_types_.schedulerlike.md)*

*Inherited from [GenerateBaseOptions](_rxjs_src_internal_observable_generate_.generatebaseoptions.md).[scheduler](_rxjs_src_internal_observable_generate_.generatebaseoptions.md#scheduler)*

*Defined in rxjs/src/internal/observable/generate.ts:39*

SchedulerLike to use for generation process. By default, a generator starts immediately.

___

