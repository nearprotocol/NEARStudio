[rxjs](../README.md) > ["rxjs/src/internal/operators/ignoreElements"](../modules/_rxjs_src_internal_operators_ignoreelements_.md)

# External module: "rxjs/src/internal/operators/ignoreElements"

## Index

### Classes

* [IgnoreElementsOperator](../classes/_rxjs_src_internal_operators_ignoreelements_.ignoreelementsoperator.md)

### Functions

* [ignoreElements](_rxjs_src_internal_operators_ignoreelements_.md#ignoreelements)

---

## Functions

<a id="ignoreelements"></a>

###  ignoreElements

▸ **ignoreElements**(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `never`>

*Defined in rxjs/src/internal/operators/ignoreElements.ts:30*

Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.

![](ignoreElements.png)

Examples
--------

### Ignores emitted values, reacts to observable's completion.

```javascript
of('you', 'talking', 'to', 'me').pipe(
  ignoreElements(),
)
.subscribe(
  word => console.log(word),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'the end'
```

*__method__*: ignoreElements

*__owner__*: Observable

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`any`, `never`>
An empty Observable that only calls `complete`
or `error`, based on which one is called by the source Observable.

___

