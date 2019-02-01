[rxjs](../README.md) > ["rxjs/src/internal/observable/merge"](../modules/_rxjs_src_internal_observable_merge_.md)

# External module: "rxjs/src/internal/observable/merge"

## Index

### Functions

* [merge](_rxjs_src_internal_observable_merge_.md#merge)

---

## Functions

<a id="merge"></a>

###  merge

▸ **merge**<`T`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **merge**<`T`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **merge**<`T`,`T2`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>

▸ **merge**<`T`,`T2`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>

▸ **merge**<`T`,`T2`,`T3`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>

▸ **merge**<`T`,`T2`,`T3`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>

▸ **merge**<`T`,`T2`,`T3`,`T4`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>

▸ **merge**<`T`,`T2`,`T3`,`T4`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

▸ **merge**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*, concurrent?: *`number`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

▸ **merge**<`T`>(...observables: *(`number` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`> \| `PromiseLike`<`T`> \| `object` \| `ArrayLike`<`T`> \| `Iterable`<`T`>)[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **merge**<`T`,`R`>(...observables: *(`number` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| `PromiseLike`<`any`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`any`> \| `object` \| `ArrayLike`<`any`> \| `Iterable`<`any`>)[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/merge.ts:8*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:9*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:10*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:11*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
```

**Type parameters:**

#### T 
#### T2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:12*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:13*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:14*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:15*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:16*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:17*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:18*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:19*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
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
| `Optional` concurrent | `number` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:20*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` observables | (`number` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`T`> \| `PromiseLike`<`T`> \| `object` \| `ArrayLike`<`T`> \| `Iterable`<`T`>)[] |  Input Observables to merge together. |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
an Observable that emits items that are the result of
every input Observable.

*Defined in rxjs/src/internal/observable/merge.ts:21*

Creates an output Observable which concurrently emits all values from every given input Observable.

Flattens multiple Observables together by blending their values into one Observable.

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.

Examples
--------

### Merge together two Observables: 1s interval and clicks

```javascript
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```javascript
const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits it's max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits it's max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` observables | (`number` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`never`> \| `PromiseLike`<`any`> \| [Subscribable](../interfaces/_rxjs_src_internal_types_.subscribable.md)<`any`> \| `object` \| `ArrayLike`<`any`> \| `Iterable`<`any`>)[] |  Input Observables to merge together. |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>
an Observable that emits items that are the result of
every input Observable.

___

