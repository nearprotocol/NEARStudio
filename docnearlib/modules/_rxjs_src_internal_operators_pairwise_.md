[rxjs](../README.md) > ["rxjs/src/internal/operators/pairwise"](../modules/_rxjs_src_internal_operators_pairwise_.md)

# External module: "rxjs/src/internal/operators/pairwise"

## Index

### Classes

* [PairwiseOperator](../classes/_rxjs_src_internal_operators_pairwise_.pairwiseoperator.md)

### Functions

* [pairwise](_rxjs_src_internal_operators_pairwise_.md#pairwise)

---

## Functions

<a id="pairwise"></a>

###  pairwise

▸ **pairwise**<`T`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [`T`, `T`]>

*Defined in rxjs/src/internal/operators/pairwise.ts:46*

Groups pairs of consecutive emissions together and emits them as an array of two values.

Puts the current value and previous value together as an array, and emits that.

![](pairwise.png)

The Nth emission from the source Observable will cause the output Observable to emit an array \[(N-1)th, Nth\] of the previous and the current value, as a pair. For this reason, `pairwise` emits on the second and subsequent emissions from the source Observable, but not on the first emission, because there is no previous value in that case.

Example
-------

On every click (starting from the second), emit the relative distance to the previous click

```javascript
const clicks = fromEvent(document, 'click');
const pairs = clicks.pipe(pairwise());
const distance = pairs.pipe(
  map(pair => {
    const x0 = pair[0].clientX;
    const y0 = pair[0].clientY;
    const x1 = pair[1].clientX;
    const y1 = pair[1].clientY;
    return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
  }),
);
distance.subscribe(x => console.log(x));
```

*__see__*: [buffer](_rxjs_src_internal_operators_buffer_.md#buffer)

*__see__*: [bufferCount](_rxjs_src_internal_operators_buffercount_.md#buffercount)

*__method__*: pairwise

*__owner__*: Observable

**Type parameters:**

#### T 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, [`T`, `T`]>
An Observable of pairs (as arrays) of
consecutive values from the source Observable.

___

