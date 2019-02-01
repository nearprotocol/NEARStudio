[rxjs](../README.md) > ["rxjs/src/internal/operators/min"](../modules/_rxjs_src_internal_operators_min_.md)

# External module: "rxjs/src/internal/operators/min"

## Index

### Functions

* [min](_rxjs_src_internal_operators_min_.md#min)

---

## Functions

<a id="min"></a>

###  min

▸ **min**<`T`>(comparer?: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/min.ts:42*

The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function), and when source Observable completes it emits a single item: the item with the smallest value.

![](min.png)

Examples
--------

Get the minimal value of a series of numbers

```javascript
of(5, 4, 7, 2, 8).pipe(
  min(),
)
.subscribe(x => console.log(x)); // -> 2
```

Use a comparer function to get the minimal item

```typescript
interface Person {
  age: number,
  name: string
}
of<Person>(
  {age: 7, name: 'Foo'},
  {age: 5, name: 'Bar'},
  {age: 9, name: 'Beer'},
).pipe(
  min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1),
)
.subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
```

*__see__*: [max](_rxjs_src_internal_operators_max_.md#max)

*__method__*: min

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` comparer | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits item with the smallest value.

___

