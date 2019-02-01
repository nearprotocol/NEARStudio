[rxjs](../README.md) > ["rxjs/src/internal/operators/share"](../modules/_rxjs_src_internal_operators_share_.md)

# External module: "rxjs/src/internal/operators/share"

## Index

### Functions

* [share](_rxjs_src_internal_operators_share_.md#share)
* [shareSubjectFactory](_rxjs_src_internal_operators_share_.md#sharesubjectfactory)

---

## Functions

<a id="share"></a>

###  share

▸ **share**<`T`>(): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/share.ts:24*

Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`. This is an alias for `multicast(() => new Subject()), refCount()`.

![](share.png)

*__method__*: share

*__owner__*: Observable

**Type parameters:**

#### T 

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that upon connection causes the source Observable to emit items to its Observers.

___
<a id="sharesubjectfactory"></a>

###  shareSubjectFactory

▸ **shareSubjectFactory**(): [Subject](../classes/_rxjs_src_internal_subject_.subject.md)<`Object`>

*Defined in rxjs/src/internal/operators/share.ts:8*

**Returns:** [Subject](../classes/_rxjs_src_internal_subject_.subject.md)<`Object`>

___

