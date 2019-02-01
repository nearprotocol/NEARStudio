[rxjs](../README.md) > ["rxjs/src/internal/operators/first"](../modules/_rxjs_src_internal_operators_first_.md)

# External module: "rxjs/src/internal/operators/first"

## Index

### Functions

* [first](_rxjs_src_internal_operators_first_.md#first)

---

## Functions

<a id="first"></a>

###  first

▸ **first**<`T`,`D`>(predicate?: *`null`*, defaultValue?: *`D`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>

▸ **first**<`T`,`S`>(predicate: *`function`*, defaultValue?: *`S`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>

▸ **first**<`T`,`D`>(predicate: *`function`*, defaultValue?: *`D`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>

*Defined in rxjs/src/internal/operators/first.ts:13*

Emits only the first value (or the first value that meets some condition) emitted by the source Observable.

Emits only the first value. Or emits only the first value that passes some test.

![](first.png)

If called with no arguments, `first` emits the first value of the source Observable, then completes. If called with a `predicate` function, `first` emits the first value of the source that matches the specified condition. It may also take a deprecated `resultSelector` function to produce the output value from the input value, and a `defaultValue` to emit in case the source completes before it is able to emit a valid value. Throws an error if `defaultValue` was not provided and a matching element is not found.

Examples
--------

Emit only the first click that happens on the DOM

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first());
result.subscribe(x => console.log(x));
```

Emits the first click that happens on a DIV

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first(ev => ev.target.tagName === 'DIV'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### D 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` predicate | `null` |
| `Optional` defaultValue | `D` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>
An Observable of the first item that matches the
condition.

*Defined in rxjs/src/internal/operators/first.ts:17*

Emits only the first value (or the first value that meets some condition) emitted by the source Observable.

Emits only the first value. Or emits only the first value that passes some test.

![](first.png)

If called with no arguments, `first` emits the first value of the source Observable, then completes. If called with a `predicate` function, `first` emits the first value of the source that matches the specified condition. It may also take a deprecated `resultSelector` function to produce the output value from the input value, and a `defaultValue` to emit in case the source completes before it is able to emit a valid value. Throws an error if `defaultValue` was not provided and a matching element is not found.

Examples
--------

Emit only the first click that happens on the DOM

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first());
result.subscribe(x => console.log(x));
```

Emits the first click that happens on a DIV

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first(ev => ev.target.tagName === 'DIV'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### S :  `T`
**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` defaultValue | `S` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>
An Observable of the first item that matches the
condition.

*Defined in rxjs/src/internal/operators/first.ts:21*

Emits only the first value (or the first value that meets some condition) emitted by the source Observable.

Emits only the first value. Or emits only the first value that passes some test.

![](first.png)

If called with no arguments, `first` emits the first value of the source Observable, then completes. If called with a `predicate` function, `first` emits the first value of the source that matches the specified condition. It may also take a deprecated `resultSelector` function to produce the output value from the input value, and a `defaultValue` to emit in case the source completes before it is able to emit a valid value. Throws an error if `defaultValue` was not provided and a matching element is not found.

Examples
--------

Emit only the first click that happens on the DOM

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first());
result.subscribe(x => console.log(x));
```

Emits the first click that happens on a DIV

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(first(ev => ev.target.tagName === 'DIV'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### D 
**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` defaultValue | `D` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>
An Observable of the first item that matches the
condition.

___

