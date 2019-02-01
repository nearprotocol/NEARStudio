[rxjs](../README.md) > ["rxjs/src/internal/operators/merge"](../modules/_rxjs_src_internal_operators_merge_.md)

# External module: "rxjs/src/internal/operators/merge"

## Index

### Functions

* [merge](_rxjs_src_internal_operators_merge_.md#merge)

---

## Functions

<a id="merge"></a>

###  merge

▸ **merge**<`T`>(scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **merge**<`T`>(concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **merge**<`T`,`T2`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2`>

▸ **merge**<`T`,`T2`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2`>

▸ **merge**<`T`,`T2`,`T3`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3`>

▸ **merge**<`T`,`T2`,`T3`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3`>

▸ **merge**<`T`,`T2`,`T3`,`T4`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4`>

▸ **merge**<`T`,`T2`,`T3`,`T4`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

▸ **merge**<`T`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| `number`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **merge**<`T`,`R`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| `number`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/merge.ts:7*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/merge.ts:9*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/merge.ts:11*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2`>

*Defined in rxjs/src/internal/operators/merge.ts:13*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2`>

*Defined in rxjs/src/internal/operators/merge.ts:15*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3`>

*Defined in rxjs/src/internal/operators/merge.ts:17*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3`>

*Defined in rxjs/src/internal/operators/merge.ts:19*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4`>

*Defined in rxjs/src/internal/operators/merge.ts:21*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4`>

*Defined in rxjs/src/internal/operators/merge.ts:23*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5`>

*Defined in rxjs/src/internal/operators/merge.ts:25*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5`>

*Defined in rxjs/src/internal/operators/merge.ts:27*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

*Defined in rxjs/src/internal/operators/merge.ts:29*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

*Defined in rxjs/src/internal/operators/merge.ts:31*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| `number`> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/merge.ts:33*

*__deprecated__*:
 Deprecated in favor of static merge.

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| `number`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

___

