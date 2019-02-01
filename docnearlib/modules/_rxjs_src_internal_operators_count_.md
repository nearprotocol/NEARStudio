[rxjs](../README.md) > ["rxjs/src/internal/operators/count"](../modules/_rxjs_src_internal_operators_count_.md)

# External module: "rxjs/src/internal/operators/count"

## Index

### Classes

* [CountOperator](../classes/_rxjs_src_internal_operators_count_.countoperator.md)

### Functions

* [count](_rxjs_src_internal_operators_count_.md#count)

---

## Functions

<a id="count"></a>

###  count

▸ **count**<`T`>(predicate?: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `number`>

*Defined in rxjs/src/internal/operators/count.ts:59*

Counts the number of emissions on the source and emits that number when the source completes.

Tells how many values were emitted, when the source completes.

![](count.png)

`count` transforms an Observable that emits values into an Observable that emits a single value that represents the number of values emitted by the source Observable. If the source Observable terminates with an error, `count` will pass this error notification along without emitting a value first. If the source Observable does not terminate at all, `count` will neither emit a value nor terminate. This operator takes an optional `predicate` function as argument, in which case the output emission will represent the number of source values that matched `true` with the `predicate`.

Examples
--------

Counts how many seconds have passed before the first click happened

```javascript
const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
const result = secondsBeforeClick.pipe(count());
result.subscribe(x => console.log(x));
```

Counts how many odd numbers are there between 1 and 7

```javascript
const numbers = range(1, 7);
const result = numbers.pipe(count(i => i % 2 === 1));
result.subscribe(x => console.log(x));
// Results in:
// 4
```

*__see__*: [max](_rxjs_src_internal_operators_max_.md#max)

*__see__*: [min](_rxjs_src_internal_operators_min_.md#min)

*__see__*: [reduce](_rxjs_src_internal_operators_reduce_.md#reduce)

*__method__*: count

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` predicate | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `number`>
An Observable of one number that represents the count as
described above.

___

