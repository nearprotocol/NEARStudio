[rxjs](../README.md) > ["rxjs/src/internal/observable/of"](../modules/_rxjs_src_internal_observable_of_.md)

# External module: "rxjs/src/internal/observable/of"

## Index

### Functions

* [of](_rxjs_src_internal_observable_of_.md#of)

---

## Functions

<a id="of"></a>

###  of

▸ **of**<`T`>(a: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

▸ **of**<`T`,`T2`>(a: *`T`*, b: *`T2`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>

▸ **of**<`T`,`T2`,`T3`>(a: *`T`*, b: *`T2`*, c: *`T3`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>

▸ **of**<`T`,`T2`,`T3`,`T4`>(a: *`T`*, b: *`T2`*, c: *`T3`*, d: *`T4`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>

▸ **of**<`T`,`T2`,`T3`,`T4`,`T5`>(a: *`T`*, b: *`T2`*, c: *`T3`*, d: *`T4`*, e: *`T5`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>

▸ **of**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(a: *`T`*, b: *`T2`*, c: *`T3`*, d: *`T4`*, e: *`T5`*, f: *`T6`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>

▸ **of**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`,`T7`>(a: *`T`*, b: *`T2`*, c: *`T3`*, d: *`T4`*, e: *`T5`*, f: *`T6`*, g: *`T7`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7`>

▸ **of**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`T8`>(a: *`T`*, b: *`T2`*, c: *`T3`*, d: *`T4`*, e: *`T5`*, f: *`T6`*, g: *`T7`*, h: *`T8`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7` \| `T8`>

▸ **of**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`T8`,`T9`>(a: *`T`*, b: *`T2`*, c: *`T3`*, d: *`T4`*, e: *`T5`*, f: *`T6`*, g: *`T7`*, h: *`T8`*, i: *`T9`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7` \| `T8` \| `T9`>

▸ **of**<`T`>(...args: *`Array`<`T` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>

*Defined in rxjs/src/internal/observable/of.ts:9*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:10*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
#### T2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T2` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:11*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
#### T2 
#### T3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T2` |
| c | `T3` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:12*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T2` |
| c | `T3` |
| d | `T4` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:13*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
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
| a | `T` |
| b | `T2` |
| c | `T3` |
| d | `T4` |
| e | `T5` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:14*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
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
| a | `T` |
| b | `T2` |
| c | `T3` |
| d | `T4` |
| e | `T5` |
| f | `T6` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:15*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
#### T7 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T2` |
| c | `T3` |
| d | `T4` |
| e | `T5` |
| f | `T6` |
| g | `T7` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:17*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
#### T7 
#### T8 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T2` |
| c | `T3` |
| d | `T4` |
| e | `T5` |
| f | `T6` |
| g | `T7` |
| h | `T8` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7` \| `T8`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:19*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
#### T7 
#### T8 
#### T9 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T` |
| b | `T2` |
| c | `T3` |
| d | `T4` |
| e | `T5` |
| f | `T6` |
| g | `T7` |
| h | `T8` |
| i | `T9` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7` \| `T8` \| `T9`>
An Observable that emits the arguments
described above and then completes.

*Defined in rxjs/src/internal/observable/of.ts:21*

Converts the arguments to an observable sequence.

Each argument becomes a `next` notification.

![](of.png)

Unlike [from](_rxjs_src_internal_observable_from_.md#from), it does not do any flattening and emits each argument in whole as a separate `next` notification.

Examples
--------

Emit the values `10, 20, 30`

```javascript
of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'

```

Emit the array `[1,2,3]`

```javascript
of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `Array`<`T` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>
An Observable that emits the arguments
described above and then completes.

___

