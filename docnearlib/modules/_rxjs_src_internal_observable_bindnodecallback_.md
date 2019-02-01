[rxjs](../README.md) > ["rxjs/src/internal/observable/bindNodeCallback"](../modules/_rxjs_src_internal_observable_bindnodecallback_.md)

# External module: "rxjs/src/internal/observable/bindNodeCallback"

## Index

### Interfaces

* [DispatchErrorArg](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatcherrorarg.md)
* [DispatchNextArg](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchnextarg.md)
* [DispatchState](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchstate.md)
* [ParamsState](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.paramsstate.md)

### Functions

* [bindNodeCallback](_rxjs_src_internal_observable_bindnodecallback_.md#bindnodecallback)
* [dispatch](_rxjs_src_internal_observable_bindnodecallback_.md#dispatch)
* [dispatchError](_rxjs_src_internal_observable_bindnodecallback_.md#dispatcherror)
* [dispatchNext](_rxjs_src_internal_observable_bindnodecallback_.md#dispatchnext)

---

## Functions

<a id="bindnodecallback"></a>

###  bindNodeCallback

▸ **bindNodeCallback**(callbackFunc: *`Function`*, resultSelector: *`Function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`,`R2`,`R3`,`R4`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`,`R2`,`R3`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`,`R2`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`A5`,`R1`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**<`A1`,`A2`,`A3`,`A4`,`A5`>(callbackFunc: *`function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

▸ **bindNodeCallback**(callbackFunc: *`Function`*, scheduler?: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): `function`

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:12*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
```

*__deprecated__*:
 resultSelector is deprecated, pipe to map instead

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `Function` |
| resultSelector | `Function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:14*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:15*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:16*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:17*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:18*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:20*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:21*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:22*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:23*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:24*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:26*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:27*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:28*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:29*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:30*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:32*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:33*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:34*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:35*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:36*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:38*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:39*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:40*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:41*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:42*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:44*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:45*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:46*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:47*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:48*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
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
Observable that delivers the same values the Node.js callback would
deliver.

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:50*

Converts a Node.js-style callback API to a function that returns an Observable.

It's just like [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), but the callback is expected to be of type `callback(error, result)`.

`bindNodeCallback` is not an operator because its input and output are not Observables. The input is a function `func` with some parameters, but the last parameter must be a callback function that `func` calls when it is done. The callback function is expected to follow Node.js conventions, where the first argument to the callback is an error object, signaling whether call was successful. If that object is passed to callback, it means something went wrong.

The output of `bindNodeCallback` is a function that takes the same parameters as `func`, except the last one (the callback). When the output function is called with arguments, it will return an Observable. If `func` calls its callback with error parameter present, Observable will error with that value as well. If error parameter is not passed, Observable will emit second parameter. If there are more parameters (third and so on), Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is, but rather whenever resulting Observable is subscribed. By default call to `func` will happen synchronously after subscription, but that can be changed with proper `scheduler` provided as optional third parameter. [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) can also control when values from callback will be emitted by Observable. To find out more, check out documentation for [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), where [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) works exactly the same.

As in [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback), context (`this` property) of input function will be set to context of returned function, when it is called.

After Observable emits value, it will complete immediately. This means even if `func` calls callback again, values from second and consecutive calls will never appear on the stream. If you need to handle functions that call callbacks multiple times, check out [fromEvent](_rxjs_src_internal_observable_fromevent_.md#fromevent) or [fromEventPattern](_rxjs_src_internal_observable_fromeventpattern_.md#fromeventpattern) instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well. "Node.js-style" callbacks are just a convention, so if you write for browsers or any other environment and API you use implements that callback style, `bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance of JavaScript built-in `Error` object. In fact, it does not even have to an object. Error parameter of callback function is interpreted as "present", when value of that parameter is truthy. It could be, for example, non-zero number, non-empty string or boolean `true`. In all of these cases resulting Observable would error with that value. This means usually regular style callbacks will fail very often when `bindNodeCallback` is used. If your Observable errors much more often then you would expect, check if callback really is called in Node.js-style and, if not, switch to [bindCallback](_rxjs_src_internal_observable_bindcallback_.md#bindcallback) instead.

Note that even if error parameter is technically present in callback, but its value is falsy, it still won't appear in array emitted by Observable.

Examples
--------

### Read a file from the filesystem and get the data as an Observable

```javascript
import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));
```

### Use on function calling callback with multiple arguments

```javascript
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(value => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```javascript
someFunction(a => {
  console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
  value => {}             // never gets called
  err => console.log(err) // 5
);
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackFunc | `Function` |
| `Optional` scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** `function`
A function which returns the
Observable that delivers the same values the Node.js callback would
deliver.

___
<a id="dispatch"></a>

###  dispatch

▸ **dispatch**<`T`>(this: *[SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[DispatchState](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchstate.md)<`T`>>*, state: *[DispatchState](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchstate.md)<`T`>*): `void`

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:231*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | [SchedulerAction](../interfaces/_rxjs_src_internal_types_.scheduleraction.md)<[DispatchState](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchstate.md)<`T`>> |
| state | [DispatchState](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchstate.md)<`T`> |

**Returns:** `void`

___
<a id="dispatcherror"></a>

###  dispatchError

▸ **dispatchError**<`T`>(arg: *[DispatchErrorArg](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatcherrorarg.md)<`T`>*): `void`

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:275*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | [DispatchErrorArg](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatcherrorarg.md)<`T`> |

**Returns:** `void`

___
<a id="dispatchnext"></a>

###  dispatchNext

▸ **dispatchNext**<`T`>(arg: *[DispatchNextArg](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchnextarg.md)<`T`>*): `void`

*Defined in rxjs/src/internal/observable/bindNodeCallback.ts:264*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| arg | [DispatchNextArg](../interfaces/_rxjs_src_internal_observable_bindnodecallback_.dispatchnextarg.md)<`T`> |

**Returns:** `void`

___

