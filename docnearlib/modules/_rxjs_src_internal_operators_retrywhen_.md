[rxjs](../README.md) > ["rxjs/src/internal/operators/retryWhen"](../modules/_rxjs_src_internal_operators_retrywhen_.md)

# External module: "rxjs/src/internal/operators/retryWhen"

## Index

### Classes

* [RetryWhenOperator](../classes/_rxjs_src_internal_operators_retrywhen_.retrywhenoperator.md)

### Functions

* [retryWhen](_rxjs_src_internal_operators_retrywhen_.md#retrywhen)

---

## Functions

<a id="retrywhen"></a>

###  retryWhen

▸ **retryWhen**<`T`>(notifier: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/retryWhen.ts:29*

Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`. If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child subscription. Otherwise this method will resubscribe to the source Observable.

![](retryWhen.png)

*__method__*: retryWhen

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notifier | `function` |  Receives an Observable of notifications with which a user can \`complete\` or \`error\`, aborting the retry. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
The source Observable modified with retry logic.

___

