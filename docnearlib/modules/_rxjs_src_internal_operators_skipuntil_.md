[rxjs](../README.md) > ["rxjs/src/internal/operators/skipUntil"](../modules/_rxjs_src_internal_operators_skipuntil_.md)

# External module: "rxjs/src/internal/operators/skipUntil"

## Index

### Classes

* [SkipUntilOperator](../classes/_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md)

### Functions

* [skipUntil](_rxjs_src_internal_operators_skipuntil_.md#skipuntil)

---

## Functions

<a id="skipuntil"></a>

###  skipUntil

▸ **skipUntil**<`T`>(notifier: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/skipUntil.ts:22*

Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.

![](skipUntil.png)

*__method__*: skipUntil

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notifier | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  The second Observable that has to emit an item before the source Observable's elements begin to be mirrored by the resulting Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that skips items from the source Observable until the second Observable emits
an item, then emits the remaining items.

___

