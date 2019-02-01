[rxjs](../README.md) > ["rxjs/src/internal/operators/map"](../modules/_rxjs_src_internal_operators_map_.md)

# External module: "rxjs/src/internal/operators/map"

## Index

### Classes

* [MapOperator](../classes/_rxjs_src_internal_operators_map_.mapoperator.md)

### Functions

* [map](_rxjs_src_internal_operators_map_.md#map)

---

## Functions

<a id="map"></a>

###  map

▸ **map**<`T`,`R`>(project: *`function`*, thisArg?: *`any`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/map.ts:42*

Applies a given `project` function to each value emitted by the source Observable, and emits the resulting values as an Observable.

Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), it passes each source value through a transformation function to get corresponding output values.

![](map.png)

Similar to the well known `Array.prototype.map` function, this operator applies a projection to each value and emits that projection in the output Observable.

Example
-------

Map every click to the clientX position of that click

```javascript
const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(map(ev => ev.clientX));
positions.subscribe(x => console.log(x));
```

*__see__*: [mapTo](_rxjs_src_internal_operators_mapto_.md#mapto)

*__see__*: [pluck](_rxjs_src_internal_operators_pluck_.md#pluck)

*__method__*: map

*__owner__*: Observable

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| project | `function` |  The function to apply to each \`value\` emitted by the source Observable. The \`index\` parameter is the number \`i\` for the i-th emission that has happened since the subscription, starting from the number \`0\`. |
| `Optional` thisArg | `any` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
An Observable that emits the values from the source
Observable transformed by the given `project` function.

___

