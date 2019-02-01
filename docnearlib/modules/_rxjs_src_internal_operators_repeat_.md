[rxjs](../README.md) > ["rxjs/src/internal/operators/repeat"](../modules/_rxjs_src_internal_operators_repeat_.md)

# External module: "rxjs/src/internal/operators/repeat"

## Index

### Classes

* [RepeatOperator](../classes/_rxjs_src_internal_operators_repeat_.repeatoperator.md)

### Functions

* [repeat](_rxjs_src_internal_operators_repeat_.md#repeat)

---

## Functions

<a id="repeat"></a>

###  repeat

▸ **repeat**<`T`>(count?: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/repeat.ts:19*

Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.

![](repeat.png)

*__method__*: repeat

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` count | `number` |  -1 |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that repeats the stream of items emitted by the source Observable at most
count times.

___

