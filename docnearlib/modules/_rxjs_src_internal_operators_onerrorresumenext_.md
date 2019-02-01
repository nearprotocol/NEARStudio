[rxjs](../README.md) > ["rxjs/src/internal/operators/onErrorResumeNext"](../modules/_rxjs_src_internal_operators_onerrorresumenext_.md)

# External module: "rxjs/src/internal/operators/onErrorResumeNext"

## Index

### Classes

* [OnErrorResumeNextOperator](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextoperator.md)
* [OnErrorResumeNextSubscriber](../classes/_rxjs_src_internal_operators_onerrorresumenext_.onerrorresumenextsubscriber.md)

### Functions

* [onErrorResumeNext](_rxjs_src_internal_operators_onerrorresumenext_.md#onerrorresumenext)
* [onErrorResumeNextStatic](_rxjs_src_internal_operators_onerrorresumenext_.md#onerrorresumenextstatic)

---

## Functions

<a id="onerrorresumenext"></a>

###  onErrorResumeNext

▸ **onErrorResumeNext**<`T`,`R`>(v: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **onErrorResumeNext**<`T`,`T2`,`T3`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **onErrorResumeNext**<`T`,`T2`,`T3`,`T4`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **onErrorResumeNext**<`T`,`T2`,`T3`,`T4`,`T5`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **onErrorResumeNext**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **onErrorResumeNext**<`T`,`R`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`>*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

▸ **onErrorResumeNext**<`T`,`R`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[]*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:13*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:14*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:15*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:16*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:17*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:18*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`> |  Observables passed either directly or as an array. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:19*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable. When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext` will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another Observable in provided series, no matter if previous Observable completed or ended with an error. This will be happening until there is no more Observables left in the series, at which point returned Observable will complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of [concat](_rxjs_src_internal_observable_concat_.md#concat) operator, which is more permissive when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take specific actions based on what error was emitted by an Observable, you should try out [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) instead.

Example
-------

Subscribe to the next Observable after map fails

```javascript
of(1, 2, 3, 0).pipe(
  map(x => {
      if (x === 0) { throw Error(); }
return 10 / x;
  }),
  onErrorResumeNext(of(1, 2, 3)),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('that\'s it!')
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[] |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

___
<a id="onerrorresumenextstatic"></a>

###  onErrorResumeNextStatic

▸ **onErrorResumeNextStatic**<`R`>(v: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNextStatic**<`T2`,`T3`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNextStatic**<`T2`,`T3`,`T4`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNextStatic**<`T2`,`T3`,`T4`,`T5`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNextStatic**<`T2`,`T3`,`T4`,`T5`,`T6`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNextStatic**<`R`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNextStatic**<`R`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:99*

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:100*

**Type parameters:**

#### T2 
#### T3 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:101*

**Type parameters:**

#### T2 
#### T3 
#### T4 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:102*

**Type parameters:**

#### T2 
#### T3 
#### T4 
#### T5 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:103*

**Type parameters:**

#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:105*

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/operators/onErrorResumeNext.ts:106*

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[] |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

___

