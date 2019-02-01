[rxjs](../README.md) > ["rxjs/src/internal/operators/audit"](../modules/_rxjs_src_internal_operators_audit_.md)

# External module: "rxjs/src/internal/operators/audit"

## Index

### Classes

* [AuditOperator](../classes/_rxjs_src_internal_operators_audit_.auditoperator.md)

### Functions

* [audit](_rxjs_src_internal_operators_audit_.md#audit)

---

## Functions

<a id="audit"></a>

###  audit

▸ **audit**<`T`>(durationSelector: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/audit.ts:55*

Ignores source values for a duration determined by another Observable, then emits the most recent value from the source Observable, then repeats this process.

It's like [auditTime](_rxjs_src_internal_operators_audittime_.md#audittime), but the silencing duration is determined by a second Observable.

![](audit.png)

`audit` is similar to `throttle`, but emits the last value from the silenced time window, instead of the first value. `audit` emits the most recent value from the source Observable on the output Observable as soon as its internal timer becomes disabled, and ignores source values while the timer is enabled. Initially, the timer is disabled. As soon as the first source value arrives, the timer is enabled by calling the `durationSelector` function with the source value, which returns the "duration" Observable. When the duration Observable emits a value or completes, the timer is disabled, then the most recent source value is emitted on the output Observable, and this process repeats for the next source value.

Example
-------

Emit clicks at a rate of at most one click per second

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(audit(ev => interval(1000)));
result.subscribe(x => console.log(x));
```

*__see__*: [auditTime](_rxjs_src_internal_operators_audittime_.md#audittime)

*__see__*: [debounce](_rxjs_src_internal_operators_debounce_.md#debounce)

*__see__*: [delayWhen](_rxjs_src_internal_operators_delaywhen_.md#delaywhen)

*__see__*: [sample](_rxjs_src_internal_operators_sample_.md#sample)

*__see__*: [throttle](_rxjs_src_internal_operators_throttle_.md#throttle)

*__method__*: audit

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| durationSelector | `function` |  A function that receives a value from the source Observable, for computing the silencing duration, returned as an Observable or a Promise. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that performs rate-limiting of
emissions from the source Observable.

___

