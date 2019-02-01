[rxjs](../README.md) > ["rxjs/src/internal/operators/shareReplay"](../modules/_rxjs_src_internal_operators_sharereplay_.md)

# External module: "rxjs/src/internal/operators/shareReplay"

## Index

### Functions

* [shareReplay](_rxjs_src_internal_operators_sharereplay_.md#sharereplay)
* [shareReplayOperator](_rxjs_src_internal_operators_sharereplay_.md#sharereplayoperator)

---

## Functions

<a id="sharereplay"></a>

###  shareReplay

▸ **shareReplay**<`T`>(bufferSize?: *`number`*, windowTime?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/shareReplay.ts:49*

Share source and replay specified number of emissions on subscription.

This operator is a specialization of `replay` that connects to a source observable and multicasts through a `ReplaySubject` constructed with the specified arguments. A successfully completed source will stay cached in the `shareReplayed observable` forever, but an errored source can be retried.

Why use shareReplay?
--------------------

You generally want to use `shareReplay` when you have side-effects or taxing computations that you do not wish to be executed amongst multiple subscribers. It may also be valuable in situations where you know you will have late subscribers to a stream that need access to previously emitted values. This ability to replay values on subscription is what differentiates [share](_rxjs_src_internal_operators_share_.md#share) and `shareReplay`.

![](shareReplay.png)

Example
-------

```javascript
const obs$ = interval(1000);
const subscription = obs$.pipe(
  take(4),
  shareReplay(3)
);
subscription.subscribe(x => console.log('source A: ', x));
subscription.subscribe(y => console.log('source B: ', y));

```

*__see__*: [publish](_rxjs_src_internal_operators_publish_.md#publish)

*__see__*: [share](_rxjs_src_internal_operators_share_.md#share)

*__see__*: [publishReplay](_rxjs_src_internal_operators_publishreplay_.md#publishreplay)

*__method__*: shareReplay

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` bufferSize | `number` |  Number.POSITIVE_INFINITY |
| `Default value` windowTime | `number` |  Number.POSITIVE_INFINITY |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An observable sequence that contains the elements of a sequence produced
by multicasting the source sequence within a selector function.

___
<a id="sharereplayoperator"></a>

###  shareReplayOperator

▸ **shareReplayOperator**<`T`>(bufferSize?: *`number`*, windowTime?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `shareReplayOperation`

*Defined in rxjs/src/internal/operators/shareReplay.ts:57*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` bufferSize | `number` |
| `Optional` windowTime | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `shareReplayOperation`

___

