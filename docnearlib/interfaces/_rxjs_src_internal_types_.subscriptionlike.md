[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [SubscriptionLike](../interfaces/_rxjs_src_internal_types_.subscriptionlike.md)

# Interface: SubscriptionLike

## Hierarchy

 [Unsubscribable](_rxjs_src_internal_types_.unsubscribable.md)

**↳ SubscriptionLike**

## Implemented by

* [Action](../classes/_rxjs_src_internal_scheduler_action_.action.md)
* [AnonymousSubject](../classes/_rxjs_src_internal_subject_.anonymoussubject.md)
* [AsyncSubject](../classes/_rxjs_src_internal_asyncsubject_.asyncsubject.md)
* [BehaviorSubject](../classes/_rxjs_src_internal_behaviorsubject_.behaviorsubject.md)
* [ConnectableSubscriber](../classes/_rxjs_src_internal_observable_connectableobservable_.connectablesubscriber.md)
* [CountedSubject](../classes/_rxjs_src_internal_operators_windowtime_.countedsubject.md)
* [OnErrorResumeNextSubscriber](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md)
* [RefCountSubscriber](../classes/_rxjs_src_internal_operators_refcount_.refcountsubscriber.md)
* [RefCountSubscriber](../classes/_rxjs_src_internal_observable_connectableobservable_.refcountsubscriber.md)
* [ReplaySubject](../classes/_rxjs_src_internal_replaysubject_.replaysubject.md)
* [SchedulerAction](_rxjs_src_internal_types_.scheduleraction.md)
* [SequenceEqualCompareToSubscriber](../classes/_rxjs_src_internal_operators_sequenceequal_.sequenceequalcomparetosubscriber.md)
* [Subject](../classes/_rxjs_src_internal_subject_.subject.md)
* [SubjectSubscriber](../classes/_rxjs_src_internal_subject_.subjectsubscriber.md)
* [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)
* [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)
* [VirtualAction](../classes/_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualaction.md)
* [WebSocketSubject](../classes/_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubject.md)

## Index

### Properties

* [closed](_rxjs_src_internal_types_.subscriptionlike.md#closed)

### Methods

* [unsubscribe](_rxjs_src_internal_types_.subscriptionlike.md#unsubscribe)

---

## Properties

<a id="closed"></a>

###  closed

**● closed**: *`boolean`*

*Defined in rxjs/src/internal/types.ts:34*

___

## Methods

<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Overrides [Unsubscribable](_rxjs_src_internal_types_.unsubscribable.md).[unsubscribe](_rxjs_src_internal_types_.unsubscribable.md#unsubscribe)*

*Defined in rxjs/src/internal/types.ts:33*

**Returns:** `void`

___

