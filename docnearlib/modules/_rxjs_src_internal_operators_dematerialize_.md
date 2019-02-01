[rxjs](../README.md) > ["rxjs/src/internal/operators/dematerialize"](../modules/_rxjs_src_internal_operators_dematerialize_.md)

# External module: "rxjs/src/internal/operators/dematerialize"

## Index

### Classes

* [DeMaterializeOperator](../classes/_rxjs_src_internal_operators_dematerialize_.dematerializeoperator.md)

### Functions

* [dematerialize](_rxjs_src_internal_operators_dematerialize_.md#dematerialize)

---

## Functions

<a id="dematerialize"></a>

###  dematerialize

▸ **dematerialize**<`T`>(): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[Notification](../classes/_rxjs_src_internal_notification_.notification.md)<`T`>, `T`>

*Defined in rxjs/src/internal/operators/dematerialize.ts:50*

Converts an Observable of [Notification](../classes/_rxjs_src_internal_notification_.notification.md) objects into the emissions that they represent.

Unwraps [Notification](../classes/_rxjs_src_internal_notification_.notification.md) objects as actual `next`, `error` and `complete` emissions. The opposite of [materialize](_rxjs_src_internal_operators_materialize_.md#materialize).

![](dematerialize.png)

`dematerialize` is assumed to operate an Observable that only emits [Notification](../classes/_rxjs_src_internal_notification_.notification.md) objects as `next` emissions, and does not emit any `error`. Such Observable is the output of a `materialize` operation. Those notifications are then unwrapped using the metadata they contain, and emitted as `next`, `error`, and `complete` on the output Observable.

Use this operator in conjunction with [materialize](_rxjs_src_internal_operators_materialize_.md#materialize).

Example
-------

Convert an Observable of Notifications to an actual Observable

```javascript
const notifA = new Notification('N', 'A');
const notifB = new Notification('N', 'B');
const notifE = new Notification('E', undefined,
  new TypeError('x.toUpperCase is not a function')
);
const materialized = of(notifA, notifB, notifE);
const upperCase = materialized.pipe(dematerialize());
upperCase.subscribe(x => console.log(x), e => console.error(e));

// Results in:
// A
// B
// TypeError: x.toUpperCase is not a function
```

*__see__*: [Notification](../classes/_rxjs_src_internal_notification_.notification.md)

*__see__*: [materialize](_rxjs_src_internal_operators_materialize_.md#materialize)

*__method__*: dematerialize

*__owner__*: Observable

**Type parameters:**

#### T 

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<[Notification](../classes/_rxjs_src_internal_notification_.notification.md)<`T`>, `T`>
An Observable that emits items and notifications
embedded in Notification objects emitted by the source Observable.

___

