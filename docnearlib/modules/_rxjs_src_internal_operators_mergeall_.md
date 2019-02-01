[rxjs](../README.md) > ["rxjs/src/internal/operators/mergeAll"](../modules/_rxjs_src_internal_operators_mergeall_.md)

# External module: "rxjs/src/internal/operators/mergeAll"

## Index

### Functions

* [mergeAll](_rxjs_src_internal_operators_mergeall_.md#mergeall)

---

## Functions

<a id="mergeall"></a>

###  mergeAll

▸ **mergeAll**<`T`>(concurrent?: *`number`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`>

*Defined in rxjs/src/internal/operators/mergeAll.ts:6*

Converts a higher-order Observable into a first-order Observable which concurrently delivers all values that are emitted on the inner Observables.

Flattens an Observable-of-Observables.

![](mergeAll.png)

`mergeAll` subscribes to an Observable that emits Observables, also known as a higher-order Observable. Each time it observes one of these emitted inner Observables, it subscribes to that and delivers all the values from the inner Observable on the output Observable. The output Observable only completes once all inner Observables have completed. Any error delivered by a inner Observable will be immediately emitted on the output Observable.

Examples
--------

Spawn a new interval Observable for each click event, and blend their outputs as one Observable

```javascript
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map((ev) => interval(1000)));
const firstOrder = higherOrder.pipe(mergeAll());
firstOrder.subscribe(x => console.log(x));
```

Count from 0 to 9 every second for each click, but only allow 2 concurrent timers

```javascript
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map((ev) => interval(1000).pipe(take(10))),
);
const firstOrder = higherOrder.pipe(mergeAll(2));
firstOrder.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` concurrent | `number` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`>
An Observable that emits values coming from all the
inner Observables emitted by the source Observable.

___

