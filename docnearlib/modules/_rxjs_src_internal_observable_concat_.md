[rxjs](../README.md) > ["rxjs/src/internal/observable/concat"](../modules/_rxjs_src_internal_observable_concat_.md)

# External module: "rxjs/src/internal/observable/concat"

## Index

### Functions

* [concat](_rxjs_src_internal_observable_concat_.md#concat)

---

## Functions

<a id="concat"></a>

###  concat

▸ **concat**<`T`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **concat**<`T`,`T2`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>

▸ **concat**<`T`,`T2`,`T3`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>

▸ **concat**<`T`,`T2`,`T3`,`T4`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>

▸ **concat**<`T`,`T2`,`T3`,`T4`,`T5`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>

▸ **concat**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

▸ **concat**<`T`>(...observables: *([SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`> \| `PromiseLike`<`T`> \| `object` \| `ArrayLike`<`T`> \| `Iterable`<`T`>)[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **concat**<`T`,`R`>(...observables: *([SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| `PromiseLike`<`any`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`any`> \| `object` \| `ArrayLike`<`any`> \| `Iterable`<`any`>)[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/concat.ts:9*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:10*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
#### T2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:11*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
#### T2 
#### T3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:12*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:13*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:14*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

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
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:15*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | ([SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`> \| `PromiseLike`<`T`> \| `object` \| `ArrayLike`<`T`> \| `Iterable`<`T`>)[] |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

*Defined in rxjs/src/internal/observable/concat.ts:16*

Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.

Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.

![](concat.png)

`concat` joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

`concat` will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, `concat` will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out [merge](_rxjs_src_internal_observable_merge_.md#merge) instead, especially with optional `concurrent` parameter. As a matter of fact, `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.

Note that if some input Observable never completes, `concat` will also never complete and Observables following the one that did not complete will never be subscribed. On the other hand, if some Observable simply completes immediately after it is subscribed, it will be invisible for `concat`, which will just move on to the next Observable.

If any Observable in chain errors, instead of passing control to the next Observable, `concat` will error immediately as well. Observables that would be subscribed after the one that emitted error, never will.

If you pass to `concat` the same Observable many times, its stream of values will be "replayed" on every subscription, which means you can repeat given Observable as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious, you can always use [repeat](_rxjs_src_internal_operators_repeat_.md#repeat).

Examples
--------

### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10

```javascript
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
```

### Concatenate an array of 3 Observables

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const result = concat([timer1, timer2, timer3]); // note that array is passed
result.subscribe(x => console.log(x));

// results in the following:
// (Prints to console sequentially)
// -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
// -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
// -500ms-> 0 -500ms-> 1 -500ms-> ... 9
```

### Concatenate the same Observable to repeat it

```javascript
const timer = interval(1000).pipe(take(2));
*
concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | ([SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| `PromiseLike`<`any`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`any`> \| `object` \| `ArrayLike`<`any`> \| `Iterable`<`any`>)[] |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>
All values of each passed Observable merged into a
single Observable, in order, in serial fashion.

___

