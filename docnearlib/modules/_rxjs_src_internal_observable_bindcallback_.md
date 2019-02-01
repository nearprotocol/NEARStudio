[rxjs](../README.md) > ["rxjs/src/internal/observable/bindCallback"](../modules/_rxjs_src_internal_observable_bindcallback_.md)

# External module: "rxjs/src/internal/observable/bindCallback"

## Index

### Interfaces

* [DispatchState](../interfaces/_rxjs_src_internal_observable_bindcallback_.dispatchstate.md)
* [ErrorState](../interfaces/_rxjs_src_internal_observable_bindcallback_.errorstate.md)
* [NextState](../interfaces/_rxjs_src_internal_observable_bindcallback_.nextstate.md)
* [ParamsContext](../interfaces/_rxjs_src_internal_observable_bindcallback_.paramscontext.md)

### Functions

* [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback)
* [dispatch](_rxjs_src_internal_observable_bindcallback_.md#dispatch)
* [dispatchError](_rxjs_src_internal_observable_bindcallback_.md#dispatcherror)
* [dispatchNext](_rxjs_src_internal_observable_bindcallback_.md#dispatchnext)

---

## Functions

<a id="bindcallback"></a>

###  bindCallback

▸ **bindCallback**(callbackFunc: *`Function`*, resultSelector: *`Function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A1`,`A2`,`A3`,`A4`,`A5`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A`,`R`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**<`A`,`R`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindCallback**(callbackFunc: *`Function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

*Defined in rxjs/src/internal/observable/bindCallback.ts:12*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

*__deprecated__*:
 resultSelector is no longer supported, use a mapping function.

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `Function` |
| resultSelector | `Function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:14*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### R1 
#### R2 
#### R3 
#### R4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:15*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### R1 
#### R2 
#### R3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:16*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### R1 
#### R2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:17*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### R1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:18*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:20*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### R1 
#### R2 
#### R3 
#### R4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:21*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### R1 
#### R2 
#### R3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:22*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### R1 
#### R2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:23*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### R1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:24*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:26*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### R1 
#### R2 
#### R3 
#### R4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:27*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### R1 
#### R2 
#### R3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:28*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### R1 
#### R2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:29*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### R1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:30*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:32*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### R1 
#### R2 
#### R3 
#### R4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:33*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### R1 
#### R2 
#### R3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:34*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### R1 
#### R2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:35*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### R1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:36*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:38*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### R1 
#### R2 
#### R3 
#### R4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:39*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### R1 
#### R2 
#### R3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:40*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### R1 
#### R2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:41*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### R1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:42*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:44*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### A5 
#### R1 
#### R2 
#### R3 
#### R4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:45*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### A5 
#### R1 
#### R2 
#### R3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:46*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### A5 
#### R1 
#### R2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:47*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### A5 
#### R1 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:48*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A1 
#### A2 
#### A3 
#### A4 
#### A5 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:50*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:51*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Type parameters:**

#### A 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

*Defined in rxjs/src/internal/observable/bindCallback.ts:53*

Converts a callback API to a function that returns an Observable.

Give it a function `f` of type `f(x, callback)` and it will return a function `g` that when called as `g(x)` will output an Observable.

`bindCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters. The last parameter must be a callback function that `func` calls when it is done.

The output of `bindCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments it will return an Observable. If function `func` calls its callback with one argument, the Observable will emit that value. If on the other hand the callback is called with multiple values the resulting Observable will emit an array with said values as arguments.

It is **very important** to remember that input function `func` is not called when the output function is, but rather when the Observable returned by the output function is subscribed. This means if `func` makes an AJAX request, that request will be made every time someone subscribes to the resulting Observable, but not before.

The last optional parameter - `scheduler` - can be used to control when the call to `func` happens after someone subscribes to Observable, as well as when results passed to callback will be emitted. By default, the subscription to an Observable calls `func` synchronously, but using {@link asyncScheduler} as the last parameter will defer the call to `func`, just like wrapping the call in `setTimeout` with a timeout of `0` would. If you were to use the async Scheduler and call `subscribe` on the output Observable, all function calls that are currently executing will end before `func` is invoked.

By default, results passed to the callback are emitted immediately after `func` invokes the callback. In particular, if the callback is called synchronously, then the subscription of the resulting Observable will call the `next` function synchronously as well. If you want to defer that call, you may use {@link asyncScheduler} just as before. This means that by using `Scheduler.async` you can ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.

Note that the Observable created by the output function will always emit a single value and then complete immediately. If `func` calls the callback multiple times, values from subsequent calls will not appear in the stream. If you need to listen for multiple calls, you probably want to use [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

If `func` depends on some context (`this` property) and is not already bound, the context of `func` will be the context that the output function has at call time. In particular, if `func` is called as a method of some objec and if `func` is not already bound, in order to preserve the context it is recommended that the context of the output function is set to that object as well.

If the input function calls its callback in the "node style" (i.e. first argument to callback is optional error parameter signaling whether the call failed or not), [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback) provides convenient error handling and probably is a better choice. `bindCallback` will treat such functions the same as any other and error parameters (whether passed or not) will always be interpreted as regular callback argument.

Examples
--------

### Convert jQuery's getJSON to an Observable API

```javascript
// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Receive an array of arguments passed to a callback

```javascript
someFunction((a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
});

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});
```

### Compare behaviour with and without async Scheduler

```javascript
function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!
```

### Use bindCallback on an object method

```javascript
const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `Function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the callback would deliver.

___
<a id="dispatch"></a>

###  dispatch

▸ **dispatch**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[DispatchState](../interfaces/_rxjs_src_internal_observable_bindcallback_.dispatchstate.md)<`T`>>*, state: *[DispatchState](../interfaces/_rxjs_src_internal_observable_bindcallback_.dispatchstate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/observable/bindCallback.ts:239*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[DispatchState](../interfaces/_rxjs_src_internal_observable_bindcallback_.dispatchstate.md)<`T`>> |
| state | [DispatchState](../interfaces/_rxjs_src_internal_observable_bindcallback_.dispatchstate.md)<`T`> |

**Returns:** `void`

___
<a id="dispatcherror"></a>

###  dispatchError

▸ **dispatchError**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[ErrorState](../interfaces/_rxjs_src_internal_observable_bindcallback_.errorstate.md)<`T`>>*, state: *[ErrorState](../interfaces/_rxjs_src_internal_observable_bindcallback_.errorstate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/observable/bindCallback.ts:278*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[ErrorState](../interfaces/_rxjs_src_internal_observable_bindcallback_.errorstate.md)<`T`>> |
| state | [ErrorState](../interfaces/_rxjs_src_internal_observable_bindcallback_.errorstate.md)<`T`> |

**Returns:** `void`

___
<a id="dispatchnext"></a>

###  dispatchNext

▸ **dispatchNext**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[NextState](../interfaces/_rxjs_src_internal_observable_bindcallback_.nextstate.md)<`T`>>*, state: *[NextState](../interfaces/_rxjs_src_internal_observable_bindcallback_.nextstate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/observable/bindCallback.ts:267*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[NextState](../interfaces/_rxjs_src_internal_observable_bindcallback_.nextstate.md)<`T`>> |
| state | [NextState](../interfaces/_rxjs_src_internal_observable_bindcallback_.nextstate.md)<`T`> |

**Returns:** `void`

___

