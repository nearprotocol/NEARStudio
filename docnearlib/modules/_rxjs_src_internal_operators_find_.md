[rxjs](../README.md) > ["rxjs/src/internal/operators/find"](../modules/_rxjs_src_internal_operators_find_.md)

# External module: "rxjs/src/internal/operators/find"

## Index

### Classes

* [FindValueOperator](../classes/_rxjs_src_internal_operators_find_.findvalueoperator.md)

### Functions

* [find](_rxjs_src_internal_operators_find_.md#find)

---

## Functions

<a id="find"></a>

###  find

▸ **find**<`T`,`S`>(predicate: *`function`*, thisArg?: *`any`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S` \| `undefined`>

▸ **find**<`T`>(predicate: *`function`*, thisArg?: *`any`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `undefined`>

*Defined in rxjs/src/internal/operators/find.ts:6*

Emits only the first value emitted by the source Observable that meets some condition.

Finds the first value that passes some test and emits that.

![](find.png)

`find` searches for the first item in the source Observable that matches the specified condition embodied by the `predicate`, and returns the first occurrence in the source. Unlike [first](_rxjs_src_internal_operators_first_.md#first), the `predicate` is required in `find`, and does not emit an error if a valid value is not found.

Example
-------

Find and emit the first click that happens on a DIV element

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(find(ev => ev.target.tagName === 'DIV'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### S :  `T`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function called with each item to test for condition matching. |
| `Optional` thisArg | `any` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S` \| `undefined`>
An Observable of the first item that matches the
condition.

*Defined in rxjs/src/internal/operators/find.ts:8*

Emits only the first value emitted by the source Observable that meets some condition.

Finds the first value that passes some test and emits that.

![](find.png)

`find` searches for the first item in the source Observable that matches the specified condition embodied by the `predicate`, and returns the first occurrence in the source. Unlike [first](_rxjs_src_internal_operators_first_.md#first), the `predicate` is required in `find`, and does not emit an error if a valid value is not found.

Example
-------

Find and emit the first click that happens on a DIV element

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(find(ev => ev.target.tagName === 'DIV'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function called with each item to test for condition matching. |
| `Optional` thisArg | `any` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `undefined`>
An Observable of the first item that matches the
condition.

___

