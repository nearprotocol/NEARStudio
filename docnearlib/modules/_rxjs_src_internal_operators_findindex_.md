[rxjs](../README.md) > ["rxjs/src/internal/operators/findIndex"](../modules/_rxjs_src_internal_operators_findindex_.md)

# External module: "rxjs/src/internal/operators/findIndex"

## Index

### Functions

* [findIndex](_rxjs_src_internal_operators_findindex_.md#findindex)

---

## Functions

<a id="findindex"></a>

###  findIndex

▸ **findIndex**<`T`>(predicate: *`function`*, thisArg?: *`any`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `number`>

*Defined in rxjs/src/internal/operators/findIndex.ts:41*

Emits only the index of the first value emitted by the source Observable that meets some condition.

It's like [find](_rxjs_src_internal_operators_find_.md#find), but emits the index of the found value, not the value itself.

![](findIndex.png)

`findIndex` searches for the first item in the source Observable that matches the specified condition embodied by the `predicate`, and returns the (zero-based) index of the first occurrence in the source. Unlike [first](_rxjs_src_internal_operators_first_.md#first), the `predicate` is required in `findIndex`, and does not emit an error if a valid value is not found.

Example
-------

Emit the index of first click that happens on a DIV element

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(findIndex(ev => ev.target.tagName === 'DIV'));
result.subscribe(x => console.log(x));
```

*__see__*: [filter](_rxjs_src_internal_operators_filter_.md#filter)

*__see__*: [find](_rxjs_src_internal_operators_find_.md#find)

*__see__*: [first](_rxjs_src_internal_operators_first_.md#first)

*__see__*: [take](_rxjs_src_internal_operators_take_.md#take)

*__method__*: find

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function called with each item to test for condition matching. |
| `Optional` thisArg | `any` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `number`>
An Observable of the index of the first item that
matches the condition.

___

