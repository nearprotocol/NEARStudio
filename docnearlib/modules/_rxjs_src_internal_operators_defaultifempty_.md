[rxjs](../README.md) > ["rxjs/src/internal/operators/defaultIfEmpty"](../modules/_rxjs_src_internal_operators_defaultifempty_.md)

# External module: "rxjs/src/internal/operators/defaultIfEmpty"

## Index

### Classes

* [DefaultIfEmptyOperator](../classes/_rxjs_src_internal_operators_defaultifempty_.defaultifemptyoperator.md)

### Functions

* [defaultIfEmpty](_rxjs_src_internal_operators_defaultifempty_.md#defaultifempty)

---

## Functions

<a id="defaultifempty"></a>

###  defaultIfEmpty

▸ **defaultIfEmpty**<`T`>(defaultValue?: *`T`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **defaultIfEmpty**<`T`,`R`>(defaultValue?: *`R`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `R`>

*Defined in rxjs/src/internal/operators/defaultIfEmpty.ts:7*

Emits a given value if the source Observable completes without emitting any `next` value, otherwise mirrors the source Observable.

If the source Observable turns out to be empty, then this operator will emit a default value.

![](defaultIfEmpty.png)

`defaultIfEmpty` emits the values emitted by the source Observable or a specified default value if the source Observable is empty (completes without having emitted any `next` value).

Example
-------

If no clicks happen in 5 seconds, then emit "no clicks"

```javascript
const clicks = fromEvent(document, 'click');
const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` defaultValue | `T` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits either the specified
`defaultValue` if the source Observable emits no items, or the values emitted
by the source Observable.

*Defined in rxjs/src/internal/operators/defaultIfEmpty.ts:8*

Emits a given value if the source Observable completes without emitting any `next` value, otherwise mirrors the source Observable.

If the source Observable turns out to be empty, then this operator will emit a default value.

![](defaultIfEmpty.png)

`defaultIfEmpty` emits the values emitted by the source Observable or a specified default value if the source Observable is empty (completes without having emitted any `next` value).

Example
-------

If no clicks happen in 5 seconds, then emit "no clicks"

```javascript
const clicks = fromEvent(document, 'click');
const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
result.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` defaultValue | `R` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `R`>
An Observable that emits either the specified
`defaultValue` if the source Observable emits no items, or the values emitted
by the source Observable.

___

