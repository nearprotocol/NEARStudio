[rxjs](../README.md) > ["rxjs/src/internal/operators/max"](../modules/_rxjs_src_internal_operators_max_.md)

# External module: "rxjs/src/internal/operators/max"

## Index

### Functions

* [max](_rxjs_src_internal_operators_max_.md#max)

---

## Functions

<a id="max"></a>

###  max

▸ **max**<`T`>(comparer?: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/max.ts:43*

The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function), and when source Observable completes it emits a single item: the item with the largest value.

![](max.png)

Examples
--------

Get the maximal value of a series of numbers

```javascript
of(5, 4, 7, 2, 8).pipe(
  max(),
)
.subscribe(x => console.log(x)); // -> 8
```

Use a comparer function to get the maximal item

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
  max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1),
)
.subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
```

*__see__*: [min](_rxjs_src_internal_operators_min_.md#min)

*__method__*: max

*__owner__*: Observable

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` comparer | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits item with the largest value.

___

