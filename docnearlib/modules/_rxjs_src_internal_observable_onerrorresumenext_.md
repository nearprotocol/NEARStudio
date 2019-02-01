[rxjs](../README.md) > ["rxjs/src/internal/observable/onErrorResumeNext"](../modules/_rxjs_src_internal_observable_onerrorresumenext_.md)

# External module: "rxjs/src/internal/observable/onErrorResumeNext"

## Index

### Functions

* [onErrorResumeNext](_rxjs_src_internal_observable_onerrorresumenext_.md#onerrorresumenext)

---

## Functions

<a id="onerrorresumenext"></a>

###  onErrorResumeNext

▸ **onErrorResumeNext**<`R`>(v: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNext**<`T2`,`T3`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNext**<`T2`,`T3`,`T4`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNext**<`T2`,`T3`,`T4`,`T5`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNext**<`T2`,`T3`,`T4`,`T5`,`T6`,`R`>(v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNext**<`R`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **onErrorResumeNext**<`R`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:8*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`R`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:9*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

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
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:10*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

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
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:11*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

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
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:12*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

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
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:14*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

*Defined in rxjs/src/internal/observable/onErrorResumeNext.ts:15*

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one that was passed.

Execute series of Observables no matter what, even if it means swallowing errors.

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order. If the source it's subscribed to emits an error or completes, it will move to the next source without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically [concat](_rxjs_src_internal_observable_concat_.md#concat), only it will continue, even if one of its sources emits an error.

Note that there is no way to handle any errors thrown by sources via the resuult of `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can always use the [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror) operator on them before passing them into `onErrorResumeNext`.

Example
-------

Subscribe to the next Observable after map fails

```javascript
import { onErrorResumeNext, of } from 'rxjs';
import { map } from 'rxjs/operators';

onErrorResumeNext(
 of(1, 2, 3, 0).pipe(
   map(x => {
     if (x === 0) throw Error();
     return 10 / x;
   })
 ),
 of(1, 2, 3),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),          // Will never be called.
  () => console.log('done'),
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[] |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>
An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

___

