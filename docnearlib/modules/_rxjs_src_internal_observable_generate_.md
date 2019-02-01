[rxjs](../README.md) > ["rxjs/src/internal/observable/generate"](../modules/_rxjs_src_internal_observable_generate_.md)

# External module: "rxjs/src/internal/observable/generate"

## Index

### Interfaces

* [GenerateBaseOptions](../interfaces/_rxjs_src_internal_observable_generate_.generatebaseoptions.md)
* [GenerateOptions](../interfaces/_rxjs_src_internal_observable_generate_.generateoptions.md)
* [SchedulerState](../interfaces/_rxjs_src_internal_observable_generate_.schedulerstate.md)

### Type aliases

* [ConditionFunc](_rxjs_src_internal_observable_generate_.md#conditionfunc)
* [IterateFunc](_rxjs_src_internal_observable_generate_.md#iteratefunc)
* [ResultFunc](_rxjs_src_internal_observable_generate_.md#resultfunc)

### Functions

* [dispatch](_rxjs_src_internal_observable_generate_.md#dispatch)
* [generate](_rxjs_src_internal_observable_generate_.md#generate)

---

## Type aliases

<a id="conditionfunc"></a>

###  ConditionFunc

**Ƭ ConditionFunc**: *`function`*

*Defined in rxjs/src/internal/observable/generate.ts:7*

#### Type declaration
▸(state: *`S`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `S` |

**Returns:** `boolean`

___
<a id="iteratefunc"></a>

###  IterateFunc

**Ƭ IterateFunc**: *`function`*

*Defined in rxjs/src/internal/observable/generate.ts:8*

#### Type declaration
▸(state: *`S`*): `S`

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `S` |

**Returns:** `S`

___
<a id="resultfunc"></a>

###  ResultFunc

**Ƭ ResultFunc**: *`function`*

*Defined in rxjs/src/internal/observable/generate.ts:9*

#### Type declaration
▸(state: *`S`*): `T`

**Parameters:**

| Name | Type |
| ------ | ------ |
| state | `S` |

**Returns:** `T`

___

## Functions

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**<`T`,`S`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[SchedulerState](../interfaces/_rxjs_src_internal_observable_generate_.schedulerstate.md)<`T`, `S`>>*, state: *[SchedulerState](../interfaces/_rxjs_src_internal_observable_generate_.schedulerstate.md)<`T`, `S`>*): [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

*Defined in rxjs/src/internal/observable/generate.ts:333*

**Type parameters:**

#### T 
#### S 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[SchedulerState](../interfaces/_rxjs_src_internal_observable_generate_.schedulerstate.md)<`T`, `S`>> |
| state | [SchedulerState](../interfaces/_rxjs_src_internal_observable_generate_.schedulerstate.md)<`T`, `S`> |

**Returns:** [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

___
<a id="generate"></a>

###  generate

▸ **generate**<`T`,`S`>(initialState: *`S`*, condition: *[ConditionFunc](_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`>*, iterate: *[IterateFunc](_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`>*, resultSelector: *[ResultFunc](_rxjs_src_internal_observable_generate_.md#resultfunc)<`S`, `T`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **generate**<`S`>(initialState: *`S`*, condition: *[ConditionFunc](_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`>*, iterate: *[IterateFunc](_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`>*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`S`>

▸ **generate**<`S`>(options: *[GenerateBaseOptions](../interfaces/_rxjs_src_internal_observable_generate_.generatebaseoptions.md)<`S`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`S`>

▸ **generate**<`T`,`S`>(options: *[GenerateOptions](../interfaces/_rxjs_src_internal_observable_generate_.generateoptions.md)<`T`, `S`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/generate.ts:72*

Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages.

![](generate.png)

*__example__*: Produces sequence of 0, 1, 2, ... 9, then completes. const res = generate(0, x => x < 10, x => x + 1, x => x);

*__example__*: Using asap scheduler, produces sequence of 2, 3, 5, then completes. const res = generate(1, x => x < 5, x => \* 2, x => x + 1, asap);

*__see__*: [from](_rxjs_src_internal_observable_from_.md#from)

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

**Type parameters:**

#### T 
#### S 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| initialState | `S` |  Initial state. |
| condition | [ConditionFunc](_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`> |  Condition to terminate generation (upon returning false). |
| iterate | [IterateFunc](_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`> |  Iteration step function. |
| resultSelector | [ResultFunc](_rxjs_src_internal_observable_generate_.md#resultfunc)<`S`, `T`> |  Selector function for results produced in the sequence. (deprecated) |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
The generated sequence.

*Defined in rxjs/src/internal/observable/generate.ts:205*

Generates an Observable by running a state-driven loop that emits an element on each iteration.

Use it instead of nexting values in a for loop.

![](./img/generate.png)

`generate` allows you to create stream of values generated with a loop very similar to traditional for loop. First argument of `generate` is a beginning value. Second argument is a function that accepts this value and tests if some condition still holds. If it does, loop continues, if not, it stops. Third value is a function which takes previously defined value and modifies it in some way on each iteration. Note how these three parameters are direct equivalents of three expressions in regular for loop: first expression initializes some state (for example numeric index), second tests if loop can make next iteration (for example if index is lower than 10) and third states how defined value will be modified on every step (index will be incremented by one).

Return value of a `generate` operator is an Observable that on each loop iteration emits a value. First, condition function is ran. If it returned true, Observable emits currently stored value (initial value at the first iteration) and then updates that value with iterate function. If at some point condition returned false, Observable completes at that moment.

Optionally you can pass fourth parameter to `generate` - a result selector function which allows you to immediately map value that would normally be emitted by an Observable.

If you find three anonymous functions in `generate` call hard to read, you can provide single object to the operator instead. That object has properties: `initialState`, `condition`, `iterate` and `resultSelector`, which should have respective values that you would normally pass to `generate`. `resultSelector` is still optional, but that form of calling `generate` allows you to omit `condition` as well. If you omit it, that means condition always holds, so output Observable will never complete.

Both forms of `generate` can optionally accept a scheduler. In case of multi-parameter call, scheduler simply comes as a last argument (no matter if there is resultSelector function or not). In case of single-parameter call, you can provide it as a `scheduler` property on object passed to the operator. In both cases scheduler decides when next iteration of the loop will happen and therefore when next value will be emitted by the Observable. For example to ensure that each value is pushed to the observer on separate task in event loop, you could use `async` scheduler. Note that by default (when no scheduler is passed) values are simply emitted synchronously.

*__example__*: Use with condition and iterate functions. const generated = generate(0, x => x < 3, x => x + 1);

generated.subscribe( value => console.log(value), err => {}, () => console.log('Yo!') );

// Logs: // 0 // 1 // 2 // "Yo!"

*__example__*: Use with condition, iterate and resultSelector functions. const generated = generate(0, x => x < 3, x => x + 1, x => x \* 1000);

generated.subscribe( value => console.log(value), err => {}, () => console.log('Yo!') );

// Logs: // 0 // 1000 // 2000 // "Yo!"

*__example__*: Use with options object. const generated = generate({ initialState: 0, condition(value) { return value < 3; }, iterate(value) { return value + 1; }, resultSelector(value) { return value \* 1000; } });

generated.subscribe( value => console.log(value), err => {}, () => console.log('Yo!') );

// Logs: // 0 // 1000 // 2000 // "Yo!"

*__example__*: Use options object without condition function. const generated = generate({ initialState: 0, iterate(value) { return value + 1; }, resultSelector(value) { return value \* 1000; } });

generated.subscribe( value => console.log(value), err => {}, () => console.log('Yo!') // This will never run. );

// Logs: // 0 // 1000 // 2000 // 3000 // ...and never stops.

*__see__*: [from](_rxjs_src_internal_observable_from_.md#from)

*__see__*: [create](../classes/_rxjs_src_internal_subscriber_.subscriber.md#create)

**Type parameters:**

#### S 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| initialState | `S` |  Initial state. |
| condition | [ConditionFunc](_rxjs_src_internal_observable_generate_.md#conditionfunc)<`S`> |  Condition to terminate generation (upon returning false). |
| iterate | [IterateFunc](_rxjs_src_internal_observable_generate_.md#iteratefunc)<`S`> |  Iteration step function. |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`S`>
The generated sequence.

*Defined in rxjs/src/internal/observable/generate.ts:232*

Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages. The overload accepts options object that might contain initial state, iterate, condition and scheduler.

![](generate.png)

*__example__*: Produces sequence of 0, 1, 2, ... 9, then completes. const res = generate({ initialState: 0, condition: x => x < 10, iterate: x => x + 1, });

*__see__*: [from](_rxjs_src_internal_observable_from_.md#from)

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

**Type parameters:**

#### S 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [GenerateBaseOptions](../interfaces/_rxjs_src_internal_observable_generate_.generatebaseoptions.md)<`S`> |  Object that must contain initialState, iterate and might contain condition and scheduler. |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`S`>
The generated sequence.

*Defined in rxjs/src/internal/observable/generate.ts:257*

Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages. The overload accepts options object that might contain initial state, iterate, condition, result selector and scheduler.

![](generate.png)

*__example__*: Produces sequence of 0, 1, 2, ... 9, then completes. const res = generate({ initialState: 0, condition: x => x < 10, iterate: x => x + 1, resultSelector: x => x, });

*__see__*: [from](_rxjs_src_internal_observable_from_.md#from)

*__see__*: [Observable](../classes/_rxjs_src_internal_observable_.observable.md)

**Type parameters:**

#### T 
#### S 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [GenerateOptions](../interfaces/_rxjs_src_internal_observable_generate_.generateoptions.md)<`T`, `S`> |  Object that must contain initialState, iterate, resultSelector and might contain condition and scheduler. |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
The generated sequence.

___

