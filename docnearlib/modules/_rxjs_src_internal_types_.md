[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md)

# External module: "rxjs/src/internal/types"

## Index

### Interfaces

* [CompletionObserver](../interfaces/_rxjs_src_internal_types_.completionobserver.md)
* [ErrorObserver](../interfaces/_rxjs_src_internal_types_.errorobserver.md)
* [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)
* [NextObserver](../interfaces/_rxjs_src_internal_types_.nextobserver.md)
* [Observer](../interfaces/_rxjs_src_internal_types_.observer.md)
* [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)
* [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)
* [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)
* [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)
* [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)
* [TimeInterval](../interfaces/_rxjs_src_internal_types_.timeinterval.md)
* [Timestamp](../interfaces/_rxjs_src_internal_types_.timestamp.md)
* [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)
* [Unsubscribable](../interfaces/_rxjs_src_internal_types_.unsubscribable.md)

### Type aliases

* [FactoryOrValue](_rxjs_src_internal_types_.md#factoryorvalue)
* [InteropObservable](_rxjs_src_internal_types_.md#interopobservable)
* [ObservableInput](_rxjs_src_internal_types_.md#observableinput)
* [ObservableLike](_rxjs_src_internal_types_.md#observablelike)
* [PartialObserver](_rxjs_src_internal_types_.md#partialobserver)
* [SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)
* [TeardownLogic](_rxjs_src_internal_types_.md#teardownlogic)

---

## Type aliases

<a id="factoryorvalue"></a>

###  FactoryOrValue

**Ƭ FactoryOrValue**: *`T` \| `function`*

*Defined in rxjs/src/internal/types.ts:10*

___
<a id="interopobservable"></a>

###  InteropObservable

**Ƭ InteropObservable**: *`object`*

*Defined in rxjs/src/internal/types.ts:51*

#### Type declaration

 __@observable: `function`

▸(): [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`>

**Returns:** [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`>

___
<a id="observableinput"></a>

###  ObservableInput

**Ƭ ObservableInput**: *[SubscribableOrPromise](_rxjs_src_internal_types_.md#subscribableorpromise)<`T`> \| `ArrayLike`<`T`> \| `Iterable`<`T`>*

*Defined in rxjs/src/internal/types.ts:46*

___
<a id="observablelike"></a>

###  ObservableLike

**Ƭ ObservableLike**: *[InteropObservable](_rxjs_src_internal_types_.md#interopobservable)<`T`>*

*Defined in rxjs/src/internal/types.ts:49*

*__deprecated__*:
 use[](_rxjs_src_internal_types_.md#interopobservable)

___
<a id="partialobserver"></a>

###  PartialObserver

**Ƭ PartialObserver**: *[NextObserver](../interfaces/_rxjs_src_internal_types_.nextobserver.md)<`T`> \| [ErrorObserver](../interfaces/_rxjs_src_internal_types_.errorobserver.md)<`T`> \| [CompletionObserver](../interfaces/_rxjs_src_internal_types_.completionobserver.md)<`T`>*

*Defined in rxjs/src/internal/types.ts:76*

___
<a id="subscribableorpromise"></a>

###  SubscribableOrPromise

**Ƭ SubscribableOrPromise**: *[Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| `PromiseLike`<`T`> \| [InteropObservable](_rxjs_src_internal_types_.md#interopobservable)<`T`>*

*Defined in rxjs/src/internal/types.ts:37*

___
<a id="teardownlogic"></a>

###  TeardownLogic

**Ƭ TeardownLogic**: *[Unsubscribable](../interfaces/_rxjs_src_internal_types_.unsubscribable.md) \| `Function` \| `void`*

*Defined in rxjs/src/internal/types.ts:30*

___

