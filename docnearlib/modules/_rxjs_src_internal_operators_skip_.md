[rxjs](../README.md) > ["rxjs/src/internal/operators/skip"](../modules/_rxjs_src_internal_operators_skip_.md)

# External module: "rxjs/src/internal/operators/skip"

## Index

### Classes

* [SkipOperator](../classes/_rxjs_src_internal_operators_skip_.skipoperator.md)

### Functions

* [skip](_rxjs_src_internal_operators_skip_.md#skip)

---

## Functions

<a id="skip"></a>

###  skip

▸ **skip**<`T`>(count: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/skip.ts:17*

Returns an Observable that skips the first `count` items emitted by the source Observable.

![](skip.png)

*__method__*: skip

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  The number of times, items emitted by source Observable should be skipped. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that skips values emitted by the source Observable.

___

