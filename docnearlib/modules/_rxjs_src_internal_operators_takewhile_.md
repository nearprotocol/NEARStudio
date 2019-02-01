[rxjs](../README.md) > ["rxjs/src/internal/operators/takeWhile"](../modules/_rxjs_src_internal_operators_takewhile_.md)

# External module: "rxjs/src/internal/operators/takeWhile"

## Index

### Classes

* [TakeWhileOperator](../classes/_rxjs_src_internal_operators_takewhile_.takewhileoperator.md)

### Functions

* [takeWhile](_rxjs_src_internal_operators_takewhile_.md#takewhile)

---

## Functions

<a id="takewhile"></a>

###  takeWhile

▸ **takeWhile**<`T`,`S`>(predicate: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>

▸ **takeWhile**<`T`>(predicate: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/takeWhile.ts:6*

Emits values emitted by the source Observable so long as each value satisfies the given `predicate`, and then completes as soon as this `predicate` is not satisfied.

Takes values from the source only while they pass the condition given. When the first value does not satisfy, it completes.

![](takeWhile.png)

`takeWhile` subscribes and begins mirroring the source Observable. Each value emitted on the source is given to the `predicate` function which returns a boolean, representing a condition to be satisfied by the source values. The output Observable emits the source values until such time as the `predicate` returns false, at which point `takeWhile` stops mirroring the source Observable and completes the output Observable.

Example
-------

Emit click events only while the clientX property is greater than 200

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(takeWhile(ev => ev.clientX > 200));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### S :  `T`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function that evaluates a value emitted by the source Observable and returns a boolean. Also takes the (zero-based) index as the second argument. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>
An Observable that emits the values from the source
Observable so long as each value satisfies the condition defined by the
`predicate`, then completes.

*Defined in rxjs/src/internal/operators/takeWhile.ts:7*

Emits values emitted by the source Observable so long as each value satisfies the given `predicate`, and then completes as soon as this `predicate` is not satisfied.

Takes values from the source only while they pass the condition given. When the first value does not satisfy, it completes.

![](takeWhile.png)

`takeWhile` subscribes and begins mirroring the source Observable. Each value emitted on the source is given to the `predicate` function which returns a boolean, representing a condition to be satisfied by the source values. The output Observable emits the source values until such time as the `predicate` returns false, at which point `takeWhile` stops mirroring the source Observable and completes the output Observable.

Example
-------

Emit click events only while the clientX property is greater than 200

```javascript
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(takeWhile(ev => ev.clientX > 200));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  A function that evaluates a value emitted by the source Observable and returns a boolean. Also takes the (zero-based) index as the second argument. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits the values from the source
Observable so long as each value satisfies the condition defined by the
`predicate`, then completes.

___

