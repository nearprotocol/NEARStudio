[rxjs](../README.md) > ["rxjs/src/internal/operators/combineAll"](../modules/_rxjs_src_internal_operators_combineall_.md)

# External module: "rxjs/src/internal/operators/combineAll"

## Index

### Functions

* [combineAll](_rxjs_src_internal_operators_combineall_.md#combineall)

---

## Functions

<a id="combineall"></a>

###  combineAll

▸ **combineAll**<`T`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`[]>

▸ **combineAll**<`T`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`[]>

▸ **combineAll**<`T`,`R`>(project: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `R`>

▸ **combineAll**<`R`>(project: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>

*Defined in rxjs/src/internal/operators/combineAll.ts:5*

Flattens an Observable-of-Observables by applying [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) when the Observable-of-Observables completes.

![](combineAll.png)

`combineAll` takes an Observable of Observables, and collects all Observables from it. Once the outer Observable completes, it subscribes to all collected Observables and combines their values using the [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) strategy, such that:

*   Every time an inner Observable emits, the output Observable emits
*   When the returned observable emits, it emits all of the latest values by:
    *   If a `project` function is provided, it is called with each recent value from each inner Observable in whatever order they arrived, and the result of the `project` function is what is emitted by the output Observable.
    *   If there is no `project` function, an array of all the most recent values is emitted by the output Observable.

* * *

Examples
--------

### Map two click events to a finite interval Observable, then apply `combineAll`

```javascript
import { map, combineAll, take } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev =>
     interval(Math.random() * 2000).pipe(take(3))
  ),
  take(2)
);
const result = higherOrder.pipe(
  combineAll()
);

result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`[]>

*Defined in rxjs/src/internal/operators/combineAll.ts:6*

Flattens an Observable-of-Observables by applying [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) when the Observable-of-Observables completes.

![](combineAll.png)

`combineAll` takes an Observable of Observables, and collects all Observables from it. Once the outer Observable completes, it subscribes to all collected Observables and combines their values using the [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) strategy, such that:

*   Every time an inner Observable emits, the output Observable emits
*   When the returned observable emits, it emits all of the latest values by:
    *   If a `project` function is provided, it is called with each recent value from each inner Observable in whatever order they arrived, and the result of the `project` function is what is emitted by the output Observable.
    *   If there is no `project` function, an array of all the most recent values is emitted by the output Observable.

* * *

Examples
--------

### Map two click events to a finite interval Observable, then apply `combineAll`

```javascript
import { map, combineAll, take } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev =>
     interval(Math.random() * 2000).pipe(take(3))
  ),
  take(2)
);
const result = higherOrder.pipe(
  combineAll()
);

result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `T`[]>

*Defined in rxjs/src/internal/operators/combineAll.ts:7*

Flattens an Observable-of-Observables by applying [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) when the Observable-of-Observables completes.

![](combineAll.png)

`combineAll` takes an Observable of Observables, and collects all Observables from it. Once the outer Observable completes, it subscribes to all collected Observables and combines their values using the [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) strategy, such that:

*   Every time an inner Observable emits, the output Observable emits
*   When the returned observable emits, it emits all of the latest values by:
    *   If a `project` function is provided, it is called with each recent value from each inner Observable in whatever order they arrived, and the result of the `project` function is what is emitted by the output Observable.
    *   If there is no `project` function, an array of all the most recent values is emitted by the output Observable.

* * *

Examples
--------

### Map two click events to a finite interval Observable, then apply `combineAll`

```javascript
import { map, combineAll, take } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev =>
     interval(Math.random() * 2000).pipe(take(3))
  ),
  take(2)
);
const result = higherOrder.pipe(
  combineAll()
);

result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `R`>

*Defined in rxjs/src/internal/operators/combineAll.ts:8*

Flattens an Observable-of-Observables by applying [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) when the Observable-of-Observables completes.

![](combineAll.png)

`combineAll` takes an Observable of Observables, and collects all Observables from it. Once the outer Observable completes, it subscribes to all collected Observables and combines their values using the [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest) strategy, such that:

*   Every time an inner Observable emits, the output Observable emits
*   When the returned observable emits, it emits all of the latest values by:
    *   If a `project` function is provided, it is called with each recent value from each inner Observable in whatever order they arrived, and the result of the `project` function is what is emitted by the output Observable.
    *   If there is no `project` function, an array of all the most recent values is emitted by the output Observable.

* * *

Examples
--------

### Map two click events to a finite interval Observable, then apply `combineAll`

```javascript
import { map, combineAll, take } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map(ev =>
     interval(Math.random() * 2000).pipe(take(3))
  ),
  take(2)
);
const result = higherOrder.pipe(
  combineAll()
);

result.subscribe(x => console.log(x));
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>

___

