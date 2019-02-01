[rxjs](../README.md) > ["rxjs/src/internal/operators/distinctUntilKeyChanged"](../modules/_rxjs_src_internal_operators_distinctuntilkeychanged_.md)

# External module: "rxjs/src/internal/operators/distinctUntilKeyChanged"

## Index

### Functions

* [distinctUntilKeyChanged](_rxjs_src_internal_operators_distinctuntilkeychanged_.md#distinctuntilkeychanged)

---

## Functions

<a id="distinctuntilkeychanged"></a>

###  distinctUntilKeyChanged

▸ **distinctUntilKeyChanged**<`T`>(key: *`keyof T`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **distinctUntilKeyChanged**<`T`,`K`>(key: *`K`*, compare: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

*Defined in rxjs/src/internal/operators/distinctUntilKeyChanged.ts:5*

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item, using a property accessed by using the key provided to check if the two items are distinct.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.

If a comparator function is not provided, an equality check is used by default.

Examples
--------

An example comparing the name of persons

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
    distinctUntilKeyChanged('name'),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
```

An example comparing the first letters of the name

```typescript
interface Person {
    age: number,
    name: string
 }

of<Person>(
    { age: 4, name: 'Foo1'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo2'},
    { age: 6, name: 'Foo3'},
  ).pipe(
    distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `keyof T` |  String key for object property lookup on each item. |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits items from the source Observable with distinct values based on the key specified.

*Defined in rxjs/src/internal/operators/distinctUntilKeyChanged.ts:6*

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item, using a property accessed by using the key provided to check if the two items are distinct.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.

If a comparator function is not provided, an equality check is used by default.

Examples
--------

An example comparing the name of persons

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
    distinctUntilKeyChanged('name'),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
```

An example comparing the first letters of the name

```typescript
interface Person {
    age: number,
    name: string
 }

of<Person>(
    { age: 4, name: 'Foo1'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo2'},
    { age: 6, name: 'Foo3'},
  ).pipe(
    distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }
```

**Type parameters:**

#### T 
#### K :  `keyof T`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  String key for object property lookup on each item. |
| compare | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An Observable that emits items from the source Observable with distinct values based on the key specified.

___

