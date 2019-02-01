[rxjs](../README.md) > ["rxjs/src/internal/operators/tap"](../modules/_rxjs_src_internal_operators_tap_.md)

# External module: "rxjs/src/internal/operators/tap"

## Index

### Classes

* [DoOperator](../classes/_rxjs_src_internal_operators_tap_.dooperator.md)

### Functions

* [tap](_rxjs_src_internal_operators_tap_.md#tap)

---

## Functions

<a id="tap"></a>

###  tap

▸ **tap**<`T`>(next?: *`function`*, error?: *`function`*, complete?: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **tap**<`T`>(observer: *[PartialObserver](_rxjs_src_internal_types_.md#partialobserver)<`T`>*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/tap.ts:9*

Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source.

Intercepts each emission on the source and runs a function, but returns an output which is identical to the source as long as errors don't occur.

![](do.png)

Returns a mirrored Observable of the source Observable, but modified so that the provided Observer is called to perform a side effect for every value, error, and completion emitted by the source. Any errors that are thrown in the aforementioned Observer or handlers are safely sent down the error path of the output Observable.

This operator is useful for debugging your Observables for the correct values or performing other side effects.

Note: this is different to a `subscribe` on the Observable. If the Observable returned by `tap` is not subscribed, the side effects specified by the Observer will never happen. `tap` therefore simply spies on existing execution, it does not trigger an execution to happen like `subscribe` does.

Example
-------

Map every click to the clientX position of that click, while also logging the click event

```javascript
const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(
  tap(ev => console.log(ev)),
  map(ev => ev.clientX),
);
positions.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` next | `function` |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable identical to the source, but runs the
specified Observer or callback(s) for each item.

*Defined in rxjs/src/internal/operators/tap.ts:10*

Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source.

Intercepts each emission on the source and runs a function, but returns an output which is identical to the source as long as errors don't occur.

![](do.png)

Returns a mirrored Observable of the source Observable, but modified so that the provided Observer is called to perform a side effect for every value, error, and completion emitted by the source. Any errors that are thrown in the aforementioned Observer or handlers are safely sent down the error path of the output Observable.

This operator is useful for debugging your Observables for the correct values or performing other side effects.

Note: this is different to a `subscribe` on the Observable. If the Observable returned by `tap` is not subscribed, the side effects specified by the Observer will never happen. `tap` therefore simply spies on existing execution, it does not trigger an execution to happen like `subscribe` does.

Example
-------

Map every click to the clientX position of that click, while also logging the click event

```javascript
const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(
  tap(ev => console.log(ev)),
  map(ev => ev.clientX),
);
positions.subscribe(x => console.log(x));
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| observer | [PartialObserver](_rxjs_src_internal_types_.md#partialobserver)<`T`> |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable identical to the source, but runs the
specified Observer or callback(s) for each item.

___

