[rxjs](../README.md) > ["rxjs/src/internal/operators/takeUntil"](../modules/_rxjs_src_internal_operators_takeuntil_.md)

# External module: "rxjs/src/internal/operators/takeUntil"

## Index

### Classes

* [TakeUntilOperator](../classes/_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md)

### Functions

* [takeUntil](_rxjs_src_internal_operators_takeuntil_.md#takeuntil)

---

## Functions

<a id="takeuntil"></a>

###  takeUntil

▸ **takeUntil**<`T`>(notifier: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/takeUntil.ts:48*

Emits the values emitted by the source Observable until a `notifier` Observable emits a value.

Lets values pass until a second Observable, `notifier`, emits a value. Then, it completes.

![](takeUntil.png)

`takeUntil` subscribes and begins mirroring the source Observable. It also monitors a second Observable, `notifier` that you provide. If the `notifier` emits a value, the output Observable stops mirroring the source Observable and completes. If the `notifier` doesn't emit any value and completes then `takeUntil` will pass all values.

Example
-------

Tick every second until the first click happens

```javascript
const interval = interval(1000);
const clicks = fromEvent(document, 'click');
const result = interval.pipe(takeUntil(clicks));
result.subscribe(x => console.log(x));
```

*__see__*: [take](_rxjs_src_internal_operators_take_.md#take)

*__see__*: [takeLast](_rxjs_src_internal_operators_takelast_.md#takelast)

*__see__*: [takeWhile](_rxjs_src_internal_operators_takewhile_.md#takewhile)

*__see__*: [skip](_rxjs_src_internal_operators_skip_.md#skip)

*__method__*: takeUntil

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notifier | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  The Observable whose first emitted value will cause the output Observable of \`takeUntil\` to stop emitting values from the source Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the values from the source
Observable until such time as `notifier` emits its first value.

___

