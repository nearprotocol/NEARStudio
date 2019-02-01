[rxjs](../README.md) > ["rxjs/src/internal/operators/distinctUntilChanged"](../modules/_rxjs_src_internal_operators_distinctuntilchanged_.md)

# External module: "rxjs/src/internal/operators/distinctUntilChanged"

## Index

### Classes

* [DistinctUntilChangedOperator](../classes/_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md)

### Functions

* [distinctUntilChanged](_rxjs_src_internal_operators_distinctuntilchanged_.md#distinctuntilchanged)

---

## Functions

<a id="distinctuntilchanged"></a>

###  distinctUntilChanged

▸ **distinctUntilChanged**<`T`>(compare?: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **distinctUntilChanged**<`T`,`K`>(compare: *`function`*, keySelector: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/distinctUntilChanged.ts:9*

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.

If a comparator function is not provided, an equality check is used by default.

Example
-------

A simple example with numbers

```javascript
of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(
    distinctUntilChanged(),
  )
  .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
```

An example using a compare function

```typescript
interface Person {
   age: number,
   name: string
}

of<Person>(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'},
    { age: 6, name: 'Foo'},
  ).pipe(
    distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` compare | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits items from the source Observable with distinct values.

*Defined in rxjs/src/internal/operators/distinctUntilChanged.ts:10*

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.

If a comparator function is not provided, an equality check is used by default.

Example
-------

A simple example with numbers

```javascript
of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(
    distinctUntilChanged(),
  )
  .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
```

An example using a compare function

```typescript
interface Person {
   age: number,
   name: string
}

of<Person>(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'},
    { age: 6, name: 'Foo'},
  ).pipe(
    distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
```

**Type parameters:**

#### T 
#### K 
**Parameters:**

| Name | Type |
| ------ | ------ |
| compare | `function` |
| keySelector | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits items from the source Observable with distinct values.

___

