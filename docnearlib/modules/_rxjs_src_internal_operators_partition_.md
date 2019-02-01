[rxjs](../README.md) > ["rxjs/src/internal/operators/partition"](../modules/_rxjs_src_internal_operators_partition_.md)

# External module: "rxjs/src/internal/operators/partition"

## Index

### Functions

* [partition](_rxjs_src_internal_operators_partition_.md#partition)

---

## Functions

<a id="partition"></a>

###  partition

▸ **partition**<`T`>(predicate: *`function`*, thisArg?: *`any`*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>]>

*Defined in rxjs/src/internal/operators/partition.ts:50*

Splits the source Observable into two, one with values that satisfy a predicate, and another with values that don't satisfy the predicate.

It's like [filter](_rxjs_src_internal_operators_filter_.md#filter), but returns two Observables: one like the output of [filter](_rxjs_src_internal_operators_filter_.md#filter), and the other with values that did not pass the condition.

![](partition.png)

`partition` outputs an array with two Observables that partition the values from the source Observable through the given `predicate` function. The first Observable in that array emits source values for which the predicate argument returns true. The second Observable emits source values for which the predicate returns false. The first behaves like [filter](_rxjs_src_internal_operators_filter_.md#filter) and the second behaves like [filter](_rxjs_src_internal_operators_filter_.md#filter) with the predicate negated.

Example
-------

Partition click events into those on DIV elements and those elsewhere

```javascript
const clicks = fromEvent(document, 'click');
const parts = clicks.pipe(partition(ev => ev.target.tagName === 'DIV'));
const clicksOnDivs = parts[0];
const clicksElsewhere = parts[1];
clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
```

*__see__*: [filter](_rxjs_src_internal_operators_filter_.md#filter)

*__method__*: partition

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function that evaluates each value emitted by the source Observable. If it returns \`true\`, the value is emitted on the first Observable in the returned array, if \`false\` the value is emitted on the second Observable in the array. The \`index\` parameter is the number \`i\` for the i-th source emission that has happened since the subscription, starting from the number \`0\`. |
| `Optional` thisArg | `any` |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>, [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>]>
An array with two Observables: one
with values that passed the predicate, and another with values that did not
pass the predicate.

___

