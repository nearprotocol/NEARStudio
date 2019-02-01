[rxjs](../README.md) > ["rxjs/src/internal/operators/filter"](../modules/_rxjs_src_internal_operators_filter_.md)

# External module: "rxjs/src/internal/operators/filter"

## Index

### Classes

* [FilterOperator](../classes/_rxjs_src_internal_operators_filter_.filteroperator.md)

### Functions

* [filter](_rxjs_src_internal_operators_filter_.md#filter)

---

## Functions

<a id="filter"></a>

###  filter

▸ **filter**<`T`,`S`>(predicate: *`function`*, thisArg?: *`any`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>

▸ **filter**<`T`>(predicate: *`function`*, thisArg?: *`any`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/filter.ts:7*

Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.

Like [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), it only emits a value from the source if it passes a criterion function.

![](filter.png)

Similar to the well-known `Array.prototype.filter` method, this operator takes values from the source Observable, passes them through a `predicate` function and only emits those values that yielded `true`.

Example
-------

Emit only click events whose target was a DIV element

```javascript
const clicks = fromEvent(document, 'click');
const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === 'DIV'));
clicksOnDivs.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### S :  `T`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function that evaluates each value emitted by the source Observable. If it returns \`true\`, the value is emitted, if \`false\` the value is not passed to the output Observable. The \`index\` parameter is the number \`i\` for the i-th source emission that has happened since the subscription, starting from the number \`0\`. |
| `Optional` thisArg | `any` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>
An Observable of values from the source that were
allowed by the `predicate` function.

*Defined in rxjs/src/internal/operators/filter.ts:9*

Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.

Like [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), it only emits a value from the source if it passes a criterion function.

![](filter.png)

Similar to the well-known `Array.prototype.filter` method, this operator takes values from the source Observable, passes them through a `predicate` function and only emits those values that yielded `true`.

Example
-------

Emit only click events whose target was a DIV element

```javascript
const clicks = fromEvent(document, 'click');
const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === 'DIV'));
clicksOnDivs.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function that evaluates each value emitted by the source Observable. If it returns \`true\`, the value is emitted, if \`false\` the value is not passed to the output Observable. The \`index\` parameter is the number \`i\` for the i-th source emission that has happened since the subscription, starting from the number \`0\`. |
| `Optional` thisArg | `any` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable of values from the source that were
allowed by the `predicate` function.

___

