[rxjs](../README.md) > ["rxjs/src/internal/operators/publishReplay"](../modules/_rxjs_src_internal_operators_publishreplay_.md)

# External module: "rxjs/src/internal/operators/publishReplay"

## Index

### Functions

* [publishReplay](_rxjs_src_internal_operators_publishreplay_.md#publishreplay)

---

## Functions

<a id="publishreplay"></a>

###  publishReplay

▸ **publishReplay**<`T`>(bufferSize?: *`number`*, windowTime?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **publishReplay**<`T`,`R`>(bufferSize?: *`number`*, windowTime?: *`number`*, selector?: *[OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **publishReplay**<`T`>(bufferSize?: *`number`*, windowTime?: *`number`*, selector?: *[MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/publishReplay.ts:8*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` bufferSize | `number` |
| `Optional` windowTime | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/publishReplay.ts:9*

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` bufferSize | `number` |
| `Optional` windowTime | `number` |
| `Optional` selector | [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/publishReplay.ts:10*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` bufferSize | `number` |
| `Optional` windowTime | `number` |
| `Optional` selector | [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

___

