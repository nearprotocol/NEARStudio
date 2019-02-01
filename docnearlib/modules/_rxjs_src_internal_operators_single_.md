[rxjs](../README.md) > ["rxjs/src/internal/operators/single"](../modules/_rxjs_src_internal_operators_single_.md)

# External module: "rxjs/src/internal/operators/single"

## Index

### Classes

* [SingleOperator](../classes/_rxjs_src_internal_operators_single_.singleoperator.md)

### Functions

* [single](_rxjs_src_internal_operators_single_.md#single)

---

## Functions

<a id="single"></a>

###  single

▸ **single**<`T`>(predicate?: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/single.ts:25*

Returns an Observable that emits the single item emitted by the source Observable that matches a specified predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no items, notify of an IllegalArgumentException or NoSuchElementException respectively. If the source Observable emits items but none match the specified predicate then `undefined` is emiited.

![](single.png)

*__throws__*: {EmptyError} Delivers an EmptyError to the Observer's `error` callback if the Observable completes before any `next` notification was sent.

*__method__*: single

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` predicate | `function` |  A predicate function to evaluate items emitted by the source Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the single item emitted by the source Observable that matches
the predicate or `undefined` when no items match.

___

