[rxjs](../README.md) > ["rxjs/src/internal/operators/finalize"](../modules/_rxjs_src_internal_operators_finalize_.md)

# External module: "rxjs/src/internal/operators/finalize"

## Index

### Classes

* [FinallyOperator](../classes/_rxjs_src_internal_operators_finalize_.finallyoperator.md)

### Functions

* [finalize](_rxjs_src_internal_operators_finalize_.md#finalize)

---

## Functions

<a id="finalize"></a>

###  finalize

▸ **finalize**<`T`>(callback: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/finalize.ts:15*

Returns an Observable that mirrors the source Observable, but will call a specified function when the source terminates on complete or error.

*__method__*: finally

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  Function to be called when source terminates. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that mirrors the source, but will call the specified function on termination.

___

