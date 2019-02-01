[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)

# Interface: Subscribable

OBSERVABLE INTERFACES

## Type parameters
#### T 
## Hierarchy

**Subscribable**

## Implemented by

* [AjaxObservable](../classes/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxobservable.md)
* [AnonymousSubject](../classes/_rxjs_src_internal_subject_.anonymoussubject.md)
* [AsyncSubject](../classes/_rxjs_src_internal_asyncsubject_.asyncsubject.md)
* [BehaviorSubject](../classes/_rxjs_src_internal_behaviorsubject_.behaviorsubject.md)
* [ConnectableObservable](../classes/_rxjs_src_internal_observable_connectableobservable_.connectableobservable.md)
* [CountedSubject](../classes/_rxjs_src_internal_operators_windowtime_.countedsubject.md)
* [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)
* [Observable](../classes/_rxjs_src_internal_observable_.observable.md)
* [ReplaySubject](../classes/_rxjs_src_internal_replaysubject_.replaysubject.md)
* [Subject](../classes/_rxjs_src_internal_subject_.subject.md)
* [SubscribeOnObservable](../classes/_rxjs_src_internal_observable_subscribeonobservable_.subscribeonobservable.md)
* [WebSocketSubject](../classes/_rxjs_src_internal_observable_dom_websocketsubject_.websocketsubject.md)

## Index

### Methods

* [subscribe](_rxjs_src_internal_types_.subscribable.md#subscribe)

---

## Methods

<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(observer?: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`>*): [Unsubscribable](_rxjs_src_internal_types_.unsubscribable.md)

▸ **subscribe**(next?: *`function`*, error?: *`function`*, complete?: *`function`*): [Unsubscribable](_rxjs_src_internal_types_.unsubscribable.md)

*Defined in rxjs/src/internal/types.ts:42*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` observer | [PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> |

**Returns:** [Unsubscribable](_rxjs_src_internal_types_.unsubscribable.md)

*Defined in rxjs/src/internal/types.ts:43*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` next | `function` |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** [Unsubscribable](_rxjs_src_internal_types_.unsubscribable.md)

___

