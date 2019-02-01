[rxjs](../README.md) > ["rxjs/src/internal/observable/zip"](../modules/_rxjs_src_internal_observable_zip_.md)

# External module: "rxjs/src/internal/observable/zip"

## Index

### Classes

* [StaticArrayIterator](../classes/_rxjs_src_internal_observable_zip_.staticarrayiterator.md)
* [StaticIterator](../classes/_rxjs_src_internal_observable_zip_.staticiterator.md)
* [ZipOperator](../classes/_rxjs_src_internal_observable_zip_.zipoperator.md)

### Interfaces

* [LookAheadIterator](../interfaces/_rxjs_src_internal_observable_zip_.lookaheaditerator.md)

### Functions

* [zip](_rxjs_src_internal_observable_zip_.md#zip)

---

## Functions

<a id="zip"></a>

###  zip

▸ **zip**<`T`,`R`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`T2`,`R`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`T2`,`T3`,`R`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`T2`,`T3`,`T4`,`R`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`T2`,`T3`,`T4`,`T5`,`R`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`,`R`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`T2`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`]>

▸ **zip**<`T`,`T2`,`T3`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`]>

▸ **zip**<`T`,`T2`,`T3`,`T4`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`, `T4`]>

▸ **zip**<`T`,`T2`,`T3`,`T4`,`T5`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`, `T4`, `T5`]>

▸ **zip**<`T`,`T2`,`T3`,`T4`,`T5`,`T6`>(v1: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>*, v2: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`>*, v3: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`>*, v4: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`>*, v5: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`>*, v6: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`, `T4`, `T5`, `T6`]>

▸ **zip**<`T`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`[]>

▸ **zip**<`R`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[]*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`,`R`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>[]*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`R`>(array: *[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[]*, resultSelector: *`function`*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`T`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`[]>

▸ **zip**<`T`,`R`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> \| `function`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

▸ **zip**<`R`>(...observables: *`Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`>*): [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:15*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:17*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### T2 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:19*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### T2 
#### T3 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:21*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:23*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:25*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:27*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
#### T2 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`]>

*Defined in rxjs/src/internal/observable/zip.ts:28*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
#### T2 
#### T3 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`]>

*Defined in rxjs/src/internal/observable/zip.ts:29*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`, `T4`]>

*Defined in rxjs/src/internal/observable/zip.ts:30*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`, `T4`, `T5`]>

*Defined in rxjs/src/internal/observable/zip.ts:31*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
#### T2 
#### T3 
#### T4 
#### T5 
#### T6 
**Parameters:**

| Name | Type |
| ------ | ------ |
| v1 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> |
| v2 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T2`> |
| v3 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T3`> |
| v4 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T4`> |
| v5 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T5`> |
| v6 | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T6`> |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<[`T`, `T2`, `T3`, `T4`, `T5`, `T6`]>

*Defined in rxjs/src/internal/observable/zip.ts:33*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>[] |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`[]>

*Defined in rxjs/src/internal/observable/zip.ts:34*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[] |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:36*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>[] |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:38*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

*__deprecated__*:
 resultSelector is no longer supported, pipe to map instead

**Type parameters:**

#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| array | [ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`>[] |
| resultSelector | `function` |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:40*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`>> |  \- |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`T`[]>

*Defined in rxjs/src/internal/observable/zip.ts:41*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`T`> \| `function`> |  \- |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

*Defined in rxjs/src/internal/observable/zip.ts:42*

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

If the latest parameter is a function, this function is used to compute the created value from the input values. Otherwise, an array of the input values is returned.

Example
-------

Combine age and name from different sources

```javascript
let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map((age: number, name: string, isDev: boolean) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));

// outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

**Type parameters:**

#### R 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` observables | `Array`<[ObservableInput](_rxjs_src_internal_types_.md#observableinput)<`any`> \| `function`> |  \- |

**Returns:** [Observable](../classes/_rxjs_src_internal_observable_.observable.md)<`R`>

___

