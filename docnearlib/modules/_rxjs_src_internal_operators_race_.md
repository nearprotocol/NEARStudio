[rxjs](../README.md) > ["rxjs/src/internal/operators/race"](../modules/_rxjs_src_internal_operators_race_.md)

# External module: "rxjs/src/internal/operators/race"

## Index

### Functions

* [race](_rxjs_src_internal_operators_race_.md#race)

---

## Functions

<a id="race"></a>

###  race

▸ **race**<`T`>(observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **race**<`T`,`R`>(observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **race**<`T`>(...observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`> \| `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **race**<`T`,`R`>(...observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> \| `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>>>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/race.ts:8*

Returns an Observable that mirrors the first source Observable to emit an item from the combination of this Observable and supplied Observables.

*__deprecated__*:
 Deprecated in favor of static race.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that mirrors the output of the first Observable to emit an item.

*Defined in rxjs/src/internal/operators/race.ts:10*

Returns an Observable that mirrors the first source Observable to emit an item from the combination of this Observable and supplied Observables.

*__deprecated__*:
 Deprecated in favor of static race.

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that mirrors the output of the first Observable to emit an item.

*Defined in rxjs/src/internal/operators/race.ts:12*

Returns an Observable that mirrors the first source Observable to emit an item from the combination of this Observable and supplied Observables.

*__deprecated__*:
 Deprecated in favor of static race.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`> \| `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that mirrors the output of the first Observable to emit an item.

*Defined in rxjs/src/internal/operators/race.ts:14*

Returns an Observable that mirrors the first source Observable to emit an item from the combination of this Observable and supplied Observables.

*__deprecated__*:
 Deprecated in favor of static race.

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> \| `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>>> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that mirrors the output of the first Observable to emit an item.

___

