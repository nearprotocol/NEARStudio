[rxjs](../README.md) > ["rxjs/src/internal/operators/exhaust"](../modules/_rxjs_src_internal_operators_exhaust_.md)

# External module: "rxjs/src/internal/operators/exhaust"

## Index

### Classes

* [SwitchFirstOperator](../classes/_rxjs_src_internal_operators_exhaust_.switchfirstoperator.md)

### Functions

* [exhaust](_rxjs_src_internal_operators_exhaust_.md#exhaust)

---

## Functions

<a id="exhaust"></a>

###  exhaust

▸ **exhaust**<`T`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`>

▸ **exhaust**<`R`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>

*Defined in rxjs/src/internal/operators/exhaust.ts:9*

Converts a higher-order Observable into a first-order Observable by dropping inner Observables while the previous inner Observable has not yet completed.

Flattens an Observable-of-Observables by dropping the next inner Observables while the current inner is still executing.

![](exhaust.png)

`exhaust` subscribes to an Observable that emits Observables, also known as a higher-order Observable. Each time it observes one of these emitted inner Observables, the output Observable begins emitting the items emitted by that inner Observable. So far, it behaves like [mergeAll](_rxjs_src_internal_operators_mergeall_.md#mergeall). However, `exhaust` ignores every new inner Observable if the previous Observable has not yet completed. Once that one completes, it will accept and flatten the next inner Observable and repeat this process.

Example
-------

Run a finite timer for each click, only if there is no currently active timer

```javascript
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map((ev) => interval(1000).pipe(take(5))),
);
const result = higherOrder.pipe(exhaust());
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>, `T`>
An Observable that takes a source of Observables and propagates the first observable
exclusively until it completes before subscribing to the next.

*Defined in rxjs/src/internal/operators/exhaust.ts:10*

Converts a higher-order Observable into a first-order Observable by dropping inner Observables while the previous inner Observable has not yet completed.

Flattens an Observable-of-Observables by dropping the next inner Observables while the current inner is still executing.

![](exhaust.png)

`exhaust` subscribes to an Observable that emits Observables, also known as a higher-order Observable. Each time it observes one of these emitted inner Observables, the output Observable begins emitting the items emitted by that inner Observable. So far, it behaves like [mergeAll](_rxjs_src_internal_operators_mergeall_.md#mergeall). However, `exhaust` ignores every new inner Observable if the previous Observable has not yet completed. Once that one completes, it will accept and flatten the next inner Observable and repeat this process.

Example
-------

Run a finite timer for each click, only if there is no currently active timer

```javascript
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map((ev) => interval(1000).pipe(take(5))),
);
const result = higherOrder.pipe(exhaust());
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### R 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `R`>
An Observable that takes a source of Observables and propagates the first observable
exclusively until it completes before subscribing to the next.

___

