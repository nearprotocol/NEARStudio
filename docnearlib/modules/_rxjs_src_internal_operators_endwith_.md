[rxjs](../README.md) > ["rxjs/src/internal/operators/endWith"](../modules/_rxjs_src_internal_operators_endwith_.md)

# External module: "rxjs/src/internal/operators/endWith"

## Index

### Functions

* [endWith](_rxjs_src_internal_operators_endwith_.md#endwith)

---

## Functions

<a id="endwith"></a>

###  endWith

▸ **endWith**<`T`>(scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(v1: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(v1: *`T`*, v2: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(v1: *`T`*, v2: *`T`*, v3: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(v1: *`T`*, v2: *`T`*, v3: *`T`*, v4: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(v1: *`T`*, v2: *`T`*, v3: *`T`*, v4: *`T`*, v5: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(v1: *`T`*, v2: *`T`*, v3: *`T`*, v4: *`T`*, v5: *`T`*, v6: *`T`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **endWith**<`T`>(...array: *`Array`<`T` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/endWith.ts:10*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:11*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:12*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | `T` |
| v2 | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:13*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | `T` |
| v2 | `T` |
| v3 | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:14*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | `T` |
| v2 | `T` |
| v3 | `T` |
| v4 | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:15*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | `T` |
| v2 | `T` |
| v3 | `T` |
| v4 | `T` |
| v5 | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:16*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | `T` |
| v2 | `T` |
| v3 | `T` |
| v4 | `T` |
| v5 | `T` |
| v6 | `T` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

*Defined in rxjs/src/internal/operators/endWith.ts:17*

Returns an Observable that emits the items you specify as arguments after it finishes emitting items emitted by the source Observable.

![](endWith.png)

Example
-------

### After the source observable completes, appends an emission and then completes too.

```javascript
of('hi', 'how are you?', 'sorry, I have to go now').pipe(
  endWith('goodbye!'),
)
.subscribe(word => console.log(word));
// result:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` array | `Array`<`T` \| [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the items emitted by the source Observable
 and then emits the items in the specified Iterable.

___

