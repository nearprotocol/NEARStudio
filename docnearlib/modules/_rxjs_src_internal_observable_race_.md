[rxjs](../README.md) > ["rxjs/src/internal/observable/race"](../modules/_rxjs_src_internal_observable_race_.md)

# External module: "rxjs/src/internal/observable/race"

## Index

### Classes

* [RaceOperator](../classes/_rxjs_src_internal_observable_race_.raceoperator.md)

### Functions

* [race](_rxjs_src_internal_observable_race_.md#race)

---

## Functions

<a id="race"></a>

###  race

▸ **race**<`T`>(observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **race**<`T`>(observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **race**<`T`>(...observables: *`Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`> \| `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/race.ts:38*

Returns an Observable that mirrors the first source Observable to emit an item.

Example
-------

### Subscribes to the observable that was the first to start emitting.

```javascript
const obs1 = interval(1000).pipe(mapTo('fast one'));
const obs2 = interval(3000).pipe(mapTo('medium one'));
const obs3 = interval(5000).pipe(mapTo('slow one'));

race(obs3, obs1, obs2)
.subscribe(
  winner => console.log(winner)
);

// result:
// a series of 'fast one'
```

*__static__*: true

*__name__*: race

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
an Observable that mirrors the output of the first Observable to emit an item.

*Defined in rxjs/src/internal/observable/race.ts:39*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/race.ts:40*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`> \| `Array`<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

___

