[rxjs](../README.md) > ["rxjs/src/internal/operators/sample"](../modules/_rxjs_src_internal_operators_sample_.md)

# External module: "rxjs/src/internal/operators/sample"

## Index

### Classes

* [SampleOperator](../classes/_rxjs_src_internal_operators_sample_.sampleoperator.md)

### Functions

* [sample](_rxjs_src_internal_operators_sample_.md#sample)

---

## Functions

<a id="sample"></a>

###  sample

▸ **sample**<`T`>(notifier: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/sample.ts:47*

Emits the most recently emitted value from the source Observable whenever another Observable, the `notifier`, emits.

It's like [sampleTime](_rxjs_src_internal_operators_sampletime_.md#sampletime), but samples whenever the `notifier` Observable emits something.

![](sample.png)

Whenever the `notifier` Observable emits a value or completes, `sample` looks at the source Observable and emits whichever value it has most recently emitted since the previous sampling, unless the source has not emitted anything since the previous sampling. The `notifier` is subscribed to as soon as the output Observable is subscribed.

Example
-------

On every click, sample the most recent "seconds" timer

```javascript
const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
const result = seconds.pipe(sample(clicks));
result.subscribe(x => console.log(x));
```

*__see__*: [audit](_rxjs_src_internal_operators_audit_.md#audit)

*__see__*: [debounce](_rxjs_src_internal_operators_debounce_.md#debounce)

*__see__*: [sampleTime](_rxjs_src_internal_operators_sampletime_.md#sampletime)

*__see__*: [throttle](_rxjs_src_internal_operators_throttle_.md#throttle)

*__method__*: sample

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| notifier | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`any`> |  The Observable to use for sampling the source Observable. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the results of sampling the
values emitted by the source Observable whenever the notifier Observable
emits value or completes.

___

