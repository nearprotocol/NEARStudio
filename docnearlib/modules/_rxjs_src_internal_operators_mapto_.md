[rxjs](../README.md) > ["rxjs/src/internal/operators/mapTo"](../modules/_rxjs_src_internal_operators_mapto_.md)

# External module: "rxjs/src/internal/operators/mapTo"

## Index

### Classes

* [MapToOperator](../classes/_rxjs_src_internal_operators_mapto_.maptooperator.md)

### Functions

* [mapTo](_rxjs_src_internal_operators_mapto_.md#mapto)

---

## Functions

<a id="mapto"></a>

###  mapTo

▸ **mapTo**<`T`,`R`>(value: *`R`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/mapTo.ts:35*

Emits the given constant value on the output Observable every time the source Observable emits a value.

Like [map](_rxjs_src_internal_operators_map_.md#map), but it maps every source value to the same output value every time.

![](mapTo.png)

Takes a constant `value` as argument, and emits that whenever the source Observable emits a value. In other words, ignores the actual source value, and simply uses the emission moment to know when to emit the given `value`.

Example
-------

Map every click to the string 'Hi'

```javascript
const clicks = fromEvent(document, 'click');
const greetings = clicks.pipe(mapTo('Hi'));
greetings.subscribe(x => console.log(x));
```

*__see__*: [map](_rxjs_src_internal_operators_map_.md#map)

*__method__*: mapTo

*__owner__*: Observable

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `R` |  The value to map each source value to. |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the given `value` every time
the source Observable emits something.

___

