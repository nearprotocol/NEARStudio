[rxjs](../README.md) > ["rxjs/src/internal/Operator"](../modules/_rxjs_src_internal_operator_.md) > [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)

# Interface: Operator

## Type parameters
#### T 
#### R 
## Hierarchy

**Operator**

## Implemented by

* [AuditOperator](../classes/_rxjs_src_internal_operators_audit_.auditoperator.md)
* [BufferCountOperator](../classes/_rxjs_src_internal_operators_buffercount_.buffercountoperator.md)
* [BufferOperator](../classes/_rxjs_src_internal_operators_buffer_.bufferoperator.md)
* [BufferTimeOperator](../classes/_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md)
* [BufferToggleOperator](../classes/_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md)
* [BufferWhenOperator](../classes/_rxjs_src_internal_operators_bufferwhen_.bufferwhenoperator.md)
* [CatchOperator](../classes/_rxjs_src_internal_operators_catcherror_.catchoperator.md)
* [CombineLatestOperator](../classes/_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md)
* [CountOperator](../classes/_rxjs_src_internal_operators_count_.countoperator.md)
* [DeMaterializeOperator](../classes/_rxjs_src_internal_operators_dematerialize_.dematerializeoperator.md)
* [DebounceOperator](../classes/_rxjs_src_internal_operators_debounce_.debounceoperator.md)
* [DebounceTimeOperator](../classes/_rxjs_src_internal_operators_debouncetime_.debouncetimeoperator.md)
* [DefaultIfEmptyOperator](../classes/_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md)
* [DelayOperator](../classes/_rxjs_src_internal_operators_delay_.delayoperator.md)
* [DelayWhenOperator](../classes/_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md)
* [DistinctOperator](../classes/_rxjs_src_internal_operators_distinct_.distinctoperator.md)
* [DistinctUntilChangedOperator](../classes/_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md)
* [DoOperator](../classes/_rxjs_src_internal_operators_tap_.dooperator.md)
* [EveryOperator](../classes/_rxjs_src_internal_operators_every_.everyoperator.md)
* [ExhauseMapOperator](../classes/_rxjs_src_internal_operators_exhaustmap_.exhausemapoperator.md)
* [ExpandOperator](../classes/_rxjs_src_internal_operators_expand_.expandoperator.md)
* [FilterOperator](../classes/_rxjs_src_internal_operators_filter_.filteroperator.md)
* [FinallyOperator](../classes/_rxjs_src_internal_operators_finalize_.finallyoperator.md)
* [FindValueOperator](../classes/_rxjs_src_internal_operators_find_.findvalueoperator.md)
* [GroupByOperator](../classes/_rxjs_src_internal_operators_groupby_.groupbyoperator.md)
* [IgnoreElementsOperator](../classes/_rxjs_src_internal_operators_ignoreelements_.ignoreelementsoperator.md)
* [IsEmptyOperator](../classes/_rxjs_src_internal_operators_isempty_.isemptyoperator.md)
* [MapOperator](../classes/_rxjs_src_internal_operators_map_.mapoperator.md)
* [MapToOperator](../classes/_rxjs_src_internal_operators_mapto_.maptooperator.md)
* [MaterializeOperator](../classes/_rxjs_src_internal_operators_materialize_.materializeoperator.md)
* [MergeMapOperator](../classes/_rxjs_src_internal_operators_mergemap_.mergemapoperator.md)
* [MergeScanOperator](../classes/_rxjs_src_internal_operators_mergescan_.mergescanoperator.md)
* [MulticastOperator](../classes/_rxjs_src_internal_operators_multicast_.multicastoperator.md)
* [ObserveOnOperator](../classes/_rxjs_src_internal_operators_observeon_.observeonoperator.md)
* [OnErrorResumeNextOperator](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md)
* [PairwiseOperator](../classes/_rxjs_src_internal_operators_pairwise_.pairwiseoperator.md)
* [RaceOperator](../classes/_rxjs_src_internal_observable_race_.raceoperator.md)
* [RefCountOperator](../classes/_rxjs_src_internal_operators_refcount_.refcountoperator.md)
* [RefCountOperator](../classes/_rxjs_src_internal_observable_connectableobservable_.refcountoperator.md)
* [RepeatOperator](../classes/_rxjs_src_internal_operators_repeat_.repeatoperator.md)
* [RepeatWhenOperator](../classes/_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md)
* [RetryOperator](../classes/_rxjs_src_internal_operators_retry_.retryoperator.md)
* [RetryWhenOperator](../classes/_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md)
* [SampleOperator](../classes/_rxjs_src_internal_operators_sample_.sampleoperator.md)
* [SampleTimeOperator](../classes/_rxjs_src_internal_operators_sampletime_.sampletimeoperator.md)
* [ScanOperator](../classes/_rxjs_src_internal_operators_scan_.scanoperator.md)
* [SequenceEqualOperator](../classes/_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md)
* [SingleOperator](../classes/_rxjs_src_internal_operators_single_.singleoperator.md)
* [SkipLastOperator](../classes/_rxjs_src_internal_operators_skiplast_.skiplastoperator.md)
* [SkipOperator](../classes/_rxjs_src_internal_operators_skip_.skipoperator.md)
* [SkipUntilOperator](../classes/_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md)
* [SkipWhileOperator](../classes/_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md)
* [SubscribeOnOperator](../classes/_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md)
* [SwitchFirstOperator](../classes/_rxjs_src_internal_operators_exhaust_.switchfirstoperator.md)
* [SwitchMapOperator](../classes/_rxjs_src_internal_operators_switchmap_.switchmapoperator.md)
* [TakeLastOperator](../classes/_rxjs_src_internal_operators_takelast_.takelastoperator.md)
* [TakeOperator](../classes/_rxjs_src_internal_operators_take_.takeoperator.md)
* [TakeUntilOperator](../classes/_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md)
* [TakeWhileOperator](../classes/_rxjs_src_internal_operators_takewhile_.takewhileoperator.md)
* [ThrottleOperator](../classes/_rxjs_src_internal_operators_throttle_.throttleoperator.md)
* [ThrottleTimeOperator](../classes/_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md)
* [TimeoutWithOperator](../classes/_rxjs_src_internal_operators_timeoutwith_.timeoutwithoperator.md)
* [WindowCountOperator](../classes/_rxjs_src_internal_operators_windowcount_.windowcountoperator.md)
* [WindowOperator](../classes/_rxjs_src_internal_operators_window_.windowoperator.md)
* [WindowOperator](../classes/_rxjs_src_internal_operators_windowwhen_.windowoperator.md)
* [WindowTimeOperator](../classes/_rxjs_src_internal_operators_windowtime_.windowtimeoperator.md)
* [WindowToggleOperator](../classes/_rxjs_src_internal_operators_windowtoggle_.windowtoggleoperator.md)
* [WithLatestFromOperator](../classes/_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md)
* [ZipOperator](../classes/_rxjs_src_internal_observable_zip_.zipoperator.md)

## Index

### Methods

* [call](_rxjs_src_internal_operator_.operator.md#call)

---

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Defined in rxjs/src/internal/Operator.ts:5*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

