[rxjs](../README.md) > ["rxjs/src/internal/operators/subscribeOn"](../modules/_rxjs_src_internal_operators_subscribeon_.md)

# External module: "rxjs/src/internal/operators/subscribeOn"

## Index

### Classes

* [SubscribeOnOperator](../classes/_rxjs_src_internal_operators_subscribeon_.subscribeonoperator.md)

### Functions

* [subscribeOn](_rxjs_src_internal_operators_subscribeon_.md#subscribeon)

---

## Functions

<a id="subscribeon"></a>

###  subscribeOn

▸ **subscribeOn**<`T`>(scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, delay?: *`number`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/subscribeOn.ts:18*

Asynchronously subscribes Observers to this Observable on the specified [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md).

![](subscribeOn.png)

*__method__*: subscribeOn

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) | - |  The [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) to perform subscription actions on. |
| `Default value` delay | `number` | 0 |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
The source Observable modified so that its subscriptions happen on the specified {@link SchedulerLike}.
.

___

