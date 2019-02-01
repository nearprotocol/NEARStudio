[rxjs](../README.md) > ["rxjs/src/internal/operators/repeatWhen"](../modules/_rxjs_src_internal_operators_repeatwhen_.md)

# External module: "rxjs/src/internal/operators/repeatWhen"

## Index

### Classes

* [RepeatWhenOperator](../classes/_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md)

### Functions

* [repeatWhen](_rxjs_src_internal_operators_repeatwhen_.md#repeatwhen)

---

## Functions

<a id="repeatwhen"></a>

###  repeatWhen

▸ **repeatWhen**<`T`>(notifier: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/repeatWhen.ts:29*

Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise this method will resubscribe to the source Observable.

![](repeatWhen.png)

*__method__*: repeatWhen

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notifier | `function` |  Receives an Observable of notifications with which a user can \`complete\` or \`error\`, aborting the repetition. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
The source Observable modified with repeat logic.

___

