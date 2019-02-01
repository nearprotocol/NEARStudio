[rxjs](../README.md) > ["rxjs/src/internal/observable/from"](../modules/_rxjs_src_internal_observable_from_.md)

# External module: "rxjs/src/internal/observable/from"

## Index

### Functions

* [from](_rxjs_src_internal_observable_from_.md#from)

---

## Functions

<a id="from"></a>

###  from

▸ **from**<`T`>(input: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **from**<`T`>(input: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

*Defined in rxjs/src/internal/observable/from.ts:13*

Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

Converts almost anything to an Observable.

![](from.png)

`from` converts various other objects and data types into Observables. It also converts a Promise, an array-like, or an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) object into an Observable that emits the items in that promise, array, or iterable. A String, in this context, is treated as an array of characters. Observable-like objects (contains a function named with the ES2015 Symbol for Observable) can also be converted through this operator.

Examples
--------

### Converts an array to an Observable

```javascript
import { from } from 'rxjs/observable/from';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

// Logs:
// 10 20 30
```

* * *

### Convert an infinite iterable (from a generator) to an Observable

```javascript
import { take } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

function* generateDoubles(seed) {
   let i = seed;
   while (true) {
     yield i;
     i = 2 * i; // double it
   }
}

const iterator = generateDoubles(3);
const result = from(iterator).pipe(take(10));

result.subscribe(x => console.log(x));

// Logs:
// 3 6 12 24 48 96 192 384 768 1536
```

* * *

### with async scheduler

```javascript
import { from } from 'rxjs/observable/from';
import { async } from 'rxjs/scheduler/async';

console.log('start');

const array = [10, 20, 30];
const result = from(array, async);

result.subscribe(x => console.log(x));

console.log('end');

// Logs:
// start end 10 20 30
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/from.ts:14*

Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

Converts almost anything to an Observable.

![](from.png)

`from` converts various other objects and data types into Observables. It also converts a Promise, an array-like, or an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) object into an Observable that emits the items in that promise, array, or iterable. A String, in this context, is treated as an array of characters. Observable-like objects (contains a function named with the ES2015 Symbol for Observable) can also be converted through this operator.

Examples
--------

### Converts an array to an Observable

```javascript
import { from } from 'rxjs/observable/from';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

// Logs:
// 10 20 30
```

* * *

### Convert an infinite iterable (from a generator) to an Observable

```javascript
import { take } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

function* generateDoubles(seed) {
   let i = seed;
   while (true) {
     yield i;
     i = 2 * i; // double it
   }
}

const iterator = generateDoubles(3);
const result = from(iterator).pipe(take(10));

result.subscribe(x => console.log(x));

// Logs:
// 3 6 12 24 48 96 192 384 768 1536
```

* * *

### with async scheduler

```javascript
import { from } from 'rxjs/observable/from';
import { async } from 'rxjs/scheduler/async';

console.log('start');

const array = [10, 20, 30];
const result = from(array, async);

result.subscribe(x => console.log(x));

console.log('end');

// Logs:
// start end 10 20 30
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>>

___

