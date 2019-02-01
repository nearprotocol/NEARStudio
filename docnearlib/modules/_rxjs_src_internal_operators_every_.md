[rxjs](../README.md) > ["rxjs/src/internal/operators/every"](../modules/_rxjs_src_internal_operators_every_.md)

# External module: "rxjs/src/internal/operators/every"

## Index

### Classes

* [EveryOperator](../classes/_rxjs_src_internal_operators_every_.everyoperator.md)

### Functions

* [every](_rxjs_src_internal_operators_every_.md#every)

---

## Functions

<a id="every"></a>

###  every

▸ **every**<`T`>(predicate: *`function`*, thisArg?: *`any`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `boolean`>

*Defined in rxjs/src/internal/operators/every.ts:24*

Returns an Observable that emits whether or not every item of the source satisfies the condition specified.

Example
-------

A simple example emitting true if all elements are less than 5, false otherwise

```javascript
 of(1, 2, 3, 4, 5, 6).pipe(
    every(x => x < 5),
)
.subscribe(x => console.log(x)); // -> false
```

*__method__*: every

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function for determining if an item meets a specified condition. |
| `Optional` thisArg | `any` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `boolean`>
An Observable of booleans that determines if all items of the source Observable meet the condition specified.

___

