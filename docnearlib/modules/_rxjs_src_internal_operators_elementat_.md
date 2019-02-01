[rxjs](../README.md) > ["rxjs/src/internal/operators/elementAt"](../modules/_rxjs_src_internal_operators_elementat_.md)

# External module: "rxjs/src/internal/operators/elementAt"

## Index

### Functions

* [elementAt](_rxjs_src_internal_operators_elementat_.md#elementat)

---

## Functions

<a id="elementat"></a>

###  elementAt

▸ **elementAt**<`T`>(index: *`number`*, defaultValue?: *`T`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/elementAt.ts:56*

Emits the single value at the specified `index` in a sequence of emissions from the source Observable.

Emits only the i-th value, then completes.

![](elementAt.png)

`elementAt` returns an Observable that emits the item at the specified `index` in the source Observable, or a default value if that `index` is out of range and the `default` argument is provided. If the `default` argument is not given and the `index` is out of range, the output Observable will emit an `ArgumentOutOfRangeError` error.

Example
-------

Emit only the third click event

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(elementAt(2));
result.subscribe(x => console.log(x));

// Results in:
// click 1 = nothing
// click 2 = nothing
// click 3 = MouseEvent object logged to console
```

*__see__*: [first](_rxjs_src_internal_operators_first_.md#first)

*__see__*: [last](_rxjs_src_internal_operators_last_.md#last)

*__see__*: [skip](_rxjs_src_internal_operators_skip_.md#skip)

*__see__*: [single](_rxjs_src_internal_operators_single_.md#single)

*__see__*: [take](_rxjs_src_internal_operators_take_.md#take)

*__throws__*: {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the Observable has completed before emitting the i-th `next` notification.

*__method__*: elementAt

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  Is the number \`i\` for the i-th source emission that has happened since the subscription, starting from the number \`0\`. |
| `Optional` defaultValue | `T` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits a single item, if it is found.
Otherwise, will emit the default value if given. If not, then emits an error.

___

