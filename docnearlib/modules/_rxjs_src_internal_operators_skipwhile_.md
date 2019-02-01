[rxjs](../README.md) > ["rxjs/src/internal/operators/skipWhile"](../modules/_rxjs_src_internal_operators_skipwhile_.md)

# External module: "rxjs/src/internal/operators/skipWhile"

## Index

### Classes

* [SkipWhileOperator](../classes/_rxjs_src_internal_operators_skipwhile_.skipwhileoperator.md)

### Functions

* [skipWhile](_rxjs_src_internal_operators_skipwhile_.md#skipwhile)

---

## Functions

<a id="skipwhile"></a>

###  skipWhile

▸ **skipWhile**<`T`>(predicate: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/skipWhile.ts:18*

Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds true, but emits all further source items as soon as the condition becomes false.

![](skipWhile.png)

*__method__*: skipWhile

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function to test each item emitted from the source Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that begins emitting items emitted by the source Observable when the
specified predicate becomes false.

___

