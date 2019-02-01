[rxjs](../README.md) > ["rxjs/src/internal/operators/groupBy"](../modules/_rxjs_src_internal_operators_groupby_.md)

# External module: "rxjs/src/internal/operators/groupBy"

## Index

### Classes

* [GroupByOperator](../classes/_rxjs_src_internal_operators_groupby_.groupbyoperator.md)
* [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)

### Interfaces

* [RefCountSubscription](../interfaces/_rxjs_src_internal_operators_groupby_.refcountsubscription.md)

### Functions

* [groupBy](_rxjs_src_internal_operators_groupby_.md#groupby)

---

## Functions

<a id="groupby"></a>

###  groupBy

▸ **groupBy**<`T`,`K`>(keySelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `T`>>

▸ **groupBy**<`T`,`K`>(keySelector: *`function`*, elementSelector: *`void`*, durationSelector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `T`>>

▸ **groupBy**<`T`,`K`,`R`>(keySelector: *`function`*, elementSelector?: *`function`*, durationSelector?: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>>

▸ **groupBy**<`T`,`K`,`R`>(keySelector: *`function`*, elementSelector?: *`function`*, durationSelector?: *`function`*, subjectSelector?: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>>

*Defined in rxjs/src/internal/operators/groupBy.ts:9*

Groups the items emitted by an Observable according to a specified criterion, and emits these grouped items as `GroupedObservables`, one [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the keySelector function.

If a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key exists, this [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) emits. Elsewhere, a new [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key is created and emits.

A [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) represents values belonging to the same group represented by a common key. The common key is available as the key field of a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) instance.

The elements emitted by [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)s are by default the items emitted by the Observable, or elements returned by the elementSelector function.

Examples
--------

### Group objects by id and return as array

```javascript
import { mergeMap, groupBy } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

interface Obj {
   id: number,
   name: string,
}

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'},
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'javascript'},
//   { id: 1, name: 'typescript'} ]
//
// [ { id: 2, name: 'parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'tslint'} ]
```

### Pivot data on the id field

```javascript
import { mergeMap, groupBy, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'}
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id, p => p.name),
  mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ["" + group$.key]))),
  map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)})),
)
.subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'javascript', 'typescript' ] }
// { id: 2, values: [ 'parcel', 'webpack' ] }
// { id: 3, values: [ 'tslint' ] }
```

**Type parameters:**

#### T 
#### K 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| keySelector | `function` |  A function that extracts the key for each item. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `T`>>
An Observable that emits
GroupedObservables, each of which corresponds to a unique key value and each
of which emits those items from the source Observable that share that key
value.

*Defined in rxjs/src/internal/operators/groupBy.ts:10*

Groups the items emitted by an Observable according to a specified criterion, and emits these grouped items as `GroupedObservables`, one [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the keySelector function.

If a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key exists, this [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) emits. Elsewhere, a new [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key is created and emits.

A [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) represents values belonging to the same group represented by a common key. The common key is available as the key field of a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) instance.

The elements emitted by [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)s are by default the items emitted by the Observable, or elements returned by the elementSelector function.

Examples
--------

### Group objects by id and return as array

```javascript
import { mergeMap, groupBy } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

interface Obj {
   id: number,
   name: string,
}

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'},
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'javascript'},
//   { id: 1, name: 'typescript'} ]
//
// [ { id: 2, name: 'parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'tslint'} ]
```

### Pivot data on the id field

```javascript
import { mergeMap, groupBy, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'}
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id, p => p.name),
  mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ["" + group$.key]))),
  map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)})),
)
.subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'javascript', 'typescript' ] }
// { id: 2, values: [ 'parcel', 'webpack' ] }
// { id: 3, values: [ 'tslint' ] }
```

**Type parameters:**

#### T 
#### K 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| keySelector | `function` |  A function that extracts the key for each item. |
| elementSelector | `void` |
| durationSelector | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `T`>>
An Observable that emits
GroupedObservables, each of which corresponds to a unique key value and each
of which emits those items from the source Observable that share that key
value.

*Defined in rxjs/src/internal/operators/groupBy.ts:11*

Groups the items emitted by an Observable according to a specified criterion, and emits these grouped items as `GroupedObservables`, one [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the keySelector function.

If a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key exists, this [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) emits. Elsewhere, a new [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key is created and emits.

A [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) represents values belonging to the same group represented by a common key. The common key is available as the key field of a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) instance.

The elements emitted by [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)s are by default the items emitted by the Observable, or elements returned by the elementSelector function.

Examples
--------

### Group objects by id and return as array

```javascript
import { mergeMap, groupBy } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

interface Obj {
   id: number,
   name: string,
}

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'},
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'javascript'},
//   { id: 1, name: 'typescript'} ]
//
// [ { id: 2, name: 'parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'tslint'} ]
```

### Pivot data on the id field

```javascript
import { mergeMap, groupBy, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'}
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id, p => p.name),
  mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ["" + group$.key]))),
  map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)})),
)
.subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'javascript', 'typescript' ] }
// { id: 2, values: [ 'parcel', 'webpack' ] }
// { id: 3, values: [ 'tslint' ] }
```

**Type parameters:**

#### T 
#### K 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| keySelector | `function` |  A function that extracts the key for each item. |
| `Optional` elementSelector | `function` |
| `Optional` durationSelector | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>>
An Observable that emits
GroupedObservables, each of which corresponds to a unique key value and each
of which emits those items from the source Observable that share that key
value.

*Defined in rxjs/src/internal/operators/groupBy.ts:12*

Groups the items emitted by an Observable according to a specified criterion, and emits these grouped items as `GroupedObservables`, one [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the keySelector function.

If a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key exists, this [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) emits. Elsewhere, a new [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) for this key is created and emits.

A [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) represents values belonging to the same group represented by a common key. The common key is available as the key field of a [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md) instance.

The elements emitted by [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)s are by default the items emitted by the Observable, or elements returned by the elementSelector function.

Examples
--------

### Group objects by id and return as array

```javascript
import { mergeMap, groupBy } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

interface Obj {
   id: number,
   name: string,
}

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'},
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id),
  mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
)
.subscribe(p => console.log(p));

// displays:
// [ { id: 1, name: 'javascript'},
//   { id: 1, name: 'typescript'} ]
//
// [ { id: 2, name: 'parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'tslint'} ]
```

### Pivot data on the id field

```javascript
import { mergeMap, groupBy, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

of<Obj>(
  {id: 1, name: 'javascript'},
  {id: 2, name: 'parcel'},
  {id: 2, name: 'webpack'},
  {id: 1, name: 'typescript'}
  {id: 3, name: 'tslint'}
).pipe(
  groupBy(p => p.id, p => p.name),
  mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ["" + group$.key]))),
  map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)})),
)
.subscribe(p => console.log(p));

// displays:
// { id: 1, values: [ 'javascript', 'typescript' ] }
// { id: 2, values: [ 'parcel', 'webpack' ] }
// { id: 3, values: [ 'tslint' ] }
```

**Type parameters:**

#### T 
#### K 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| keySelector | `function` |  A function that extracts the key for each item. |
| `Optional` elementSelector | `function` |
| `Optional` durationSelector | `function` |
| `Optional` subjectSelector | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [GroupedObservable](../classes/_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>>
An Observable that emits
GroupedObservables, each of which corresponds to a unique key value and each
of which emits those items from the source Observable that share that key
value.

___

