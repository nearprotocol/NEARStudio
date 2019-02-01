[rxjs](../README.md) > ["rxjs/src/internal/observable/pairs"](../modules/_rxjs_src_internal_observable_pairs_.md)

# External module: "rxjs/src/internal/observable/pairs"

## Index

### Functions

* [dispatch](_rxjs_src_internal_observable_pairs_.md#dispatch)
* [pairs](_rxjs_src_internal_observable_pairs_.md#pairs)

---

## Functions

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`>*, state: *`object`*): `void`

*Defined in rxjs/src/internal/observable/pairs.ts:77*

*__internal__*: 

**Type parameters:**

#### T 
**Parameters:**

**this: [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<`any`>**

**state: `object`**

| Name | Type |
| ------ | ------ |
| index | `number` |
| keys | `string`[] |
| obj | `Object` |
| subscriber | [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<[`string`, `T`]> |
| subscription | [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md) |

**Returns:** `void`

___
<a id="pairs"></a>

###  pairs

▸ **pairs**<`T`>(obj: *`Object`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`string`, `T`]>

*Defined in rxjs/src/internal/observable/pairs.ts:52*

Convert an object into an Observable of `[key, value]` pairs.

Turn entries of an object into a stream.

![](./img/pairs.png)

`pairs` takes an arbitrary object and returns an Observable that emits arrays. Each emitted array has exactly two elements - the first is a key from the object and the second is a value corresponding to that key. Keys are extracted from an object via `Object.keys` function, which means that they will be only enumerable keys that are present on an object directly - not ones inherited via prototype chain.

By default these arrays are emitted synchronously. To change that you can pass a [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) as a second argument to `pairs`.

*__example__*: Converts a javascript object to an Observable ```javascript const obj = { foo: 42, bar: 56, baz: 78 };

pairs(obj) .subscribe( value => console.log(value), err => {}, () => console.log('the end!') );

// Logs: // \["foo": 42\], // \["bar": 56\], // \["baz": 78\], // "the end!" `` ` ``

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | `Object` |  The object to inspect and turn into an Observable sequence. |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`string`, `T`]>
An observable sequence of
[key, value] pairs from the object.

___

