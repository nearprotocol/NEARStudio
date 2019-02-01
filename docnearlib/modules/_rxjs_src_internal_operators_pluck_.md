[rxjs](../README.md) > ["rxjs/src/internal/operators/pluck"](../modules/_rxjs_src_internal_operators_pluck_.md)

# External module: "rxjs/src/internal/operators/pluck"

## Index

### Functions

* [pluck](_rxjs_src_internal_operators_pluck_.md#pluck)
* [plucker](_rxjs_src_internal_operators_pluck_.md#plucker)

---

## Functions

<a id="pluck"></a>

###  pluck

▸ **pluck**<`T`,`R`>(...properties: *`string`[]*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/operators/pluck.ts:34*

Maps each source value (an object) to its specified nested property.

Like [map](_rxjs_src_internal_operators_map_.md#map), but meant only for picking one of the nested properties of every emitted object.

![](pluck.png)

Given a list of strings describing a path to an object property, retrieves the value of a specified nested property from all values in the source Observable. If a property can't be resolved, it will return `undefined` for that value.

Example
-------

Map every click to the tagName of the clicked target element

```javascript
const clicks = fromEvent(document, 'click');
const tagNames = clicks.pipe(pluck('target', 'tagName'));
tagNames.subscribe(x => console.log(x));
```

*__see__*: [map](_rxjs_src_internal_operators_map_.md#map)

*__method__*: pluck

*__owner__*: Observable

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` properties | `string`[] |  The nested properties to pluck from each source value (an object). |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `R`>
A new Observable of property values from the source values.

___
<a id="plucker"></a>

###  plucker

▸ **plucker**(props: *`string`[]*, length: *`number`*): `function`

*Defined in rxjs/src/internal/operators/pluck.ts:42*

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | `string`[] |
| length | `number` |

**Returns:** `function`

___

