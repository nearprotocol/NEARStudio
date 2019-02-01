[rxjs](../README.md) > ["rxjs/src/internal/operators/throwIfEmpty"](../modules/_rxjs_src_internal_operators_throwifempty_.md)

# External module: "rxjs/src/internal/operators/throwIfEmpty"

## Index

### Functions

* [defaultErrorFactory](_rxjs_src_internal_operators_throwifempty_.md#defaulterrorfactory)
* [throwIfEmpty](_rxjs_src_internal_operators_throwifempty_.md#throwifempty)

---

## Functions

<a id="defaulterrorfactory"></a>

###  defaultErrorFactory

▸ **defaultErrorFactory**(): [EmptyError](../interfaces/_rxjs_src_internal_util_emptyerror_.emptyerror.md)

*Defined in rxjs/src/internal/operators/throwIfEmpty.ts:43*

**Returns:** [EmptyError](../interfaces/_rxjs_src_internal_util_emptyerror_.emptyerror.md)

___
<a id="throwifempty"></a>

### `<Const>` throwIfEmpty

▸ **throwIfEmpty**<`T`>(errorFactory?: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/throwIfEmpty.ts:32*

If the source observable completes without emitting a value, it will emit an error. The error will be created at that time by the optional `errorFactory` argument, otherwise, the error will be [EmptyError](../interfaces/_rxjs_src_internal_util_emptyerror_.emptyerror.md).

![](throwIfEmpty.png)

Example
-------

```javascript
const click$ = fromEvent(button, 'click');

clicks$.pipe(
  takeUntil(timer(1000)),
  throwIfEmpty(
    () => new Error('the button was not clicked within 1 second')
  ),
)
.subscribe({
  next() { console.log('The button was clicked'); },
  error(err) { console.error(err); },
});
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` errorFactory | `function` |  defaultErrorFactory |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

___

