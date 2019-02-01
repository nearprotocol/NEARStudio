[rxjs](../README.md) > ["rxjs/src/internal/operators/sequenceEqual"](../modules/_rxjs_src_internal_operators_sequenceequal_.md)

# External module: "rxjs/src/internal/operators/sequenceEqual"

## Index

### Classes

* [SequenceEqualCompareToSubscriber](../classes/_rxjs_src_internal_operators_sequenceequal_.sequenceequalcomparetosubscriber.md)
* [SequenceEqualOperator](../classes/_rxjs_src_internal_operators_sequenceequal_.sequenceequaloperator.md)

### Functions

* [sequenceEqual](_rxjs_src_internal_operators_sequenceequal_.md#sequenceequal)

---

## Functions

<a id="sequenceequal"></a>

###  sequenceEqual

▸ **sequenceEqual**<`T`>(compareTo: *[Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`>*, comparor?: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `boolean`>

*Defined in rxjs/src/internal/operators/sequenceEqual.ts:64*

Compares all values of two observables in sequence using an optional comparor function and returns an observable of a single boolean value representing whether or not the two sequences are equal.

Checks to see of all values emitted by both observables are equal, in order.

![](sequenceEqual.png)

`sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the observables completes, the operator will wait for the other observable to complete; If the other observable emits before completing, the returned observable will emit `false` and complete. If one observable never completes or emits after the other complets, the returned observable will never complete.

Example
-------

figure out if the Konami code matches

```javascript
const codes = from([
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
  'Enter', // no start key, clearly.
]);

const keys = fromEvent(document, 'keyup').pipe(map(e => e.code));
const matches = keys.pipe(
  bufferCount(11, 1),
  mergeMap(
    last11 => from(last11).pipe(sequenceEqual(codes)),
  ),
);
matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
```

*__see__*: [combineLatest](_rxjs_src_internal_observable_combinelatest_.md#combinelatest)

*__see__*: [zip](_rxjs_src_internal_observable_zip_.md#zip)

*__see__*: [withLatestFrom](_rxjs_src_internal_operators_withlatestfrom_.md#withlatestfrom)

*__method__*: sequenceEqual

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| compareTo | [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`> |  The observable sequence to compare the source sequence to. |
| `Optional` comparor | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `boolean`>
An Observable of a single boolean value representing whether or not
the values emitted by both observables were equal in sequence.

___

