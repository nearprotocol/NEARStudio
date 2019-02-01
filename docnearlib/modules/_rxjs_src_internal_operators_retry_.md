[rxjs](../README.md) > ["rxjs/src/internal/operators/retry"](../modules/_rxjs_src_internal_operators_retry_.md)

# External module: "rxjs/src/internal/operators/retry"

## Index

### Classes

* [RetryOperator](../classes/_rxjs_src_internal_operators_retry_.retryoperator.md)

### Functions

* [retry](_rxjs_src_internal_operators_retry_.md#retry)

---

## Functions

<a id="retry"></a>

###  retry

▸ **retry**<`T`>(count?: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/retry.ts:23*

Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given as a number parameter) rather than propagating the `error` call.

![](retry.png)

Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted during failed subscriptions. For example, if an Observable fails at first but emits \[1, 2\] then succeeds the second time and emits: \[1, 2, 3, 4, 5\] then the complete stream of emissions and notifications would be: \[1, 2, 1, 2, 3, 4, 5, `complete`\].

*__method__*: retry

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` count | `number` |  -1 |  Number of retry attempts before failing. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
The source Observable modified with the retry logic.

___

