[rxjs](../README.md) > ["rxjs/src/internal/operators/catchError"](../modules/_rxjs_src_internal_operators_catcherror_.md)

# External module: "rxjs/src/internal/operators/catchError"

## Index

### Classes

* [CatchOperator](../classes/_rxjs_src_internal_operators_catcherror_.catchoperator.md)

### Functions

* [catchError](_rxjs_src_internal_operators_catcherror_.md#catcherror)

---

## Functions

<a id="catcherror"></a>

###  catchError

▸ **catchError**<`T`>(selector: *`function`*): [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>

▸ **catchError**<`T`,`R`>(selector: *`function`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `R`>

*Defined in rxjs/src/internal/operators/catchError.ts:77*

Catches errors on the observable to be handled by returning a new observable or throwing an error.

![](catch.png)

Examples
--------

Continues with a different Observable when there's an error

```javascript
of(1, 2, 3, 4, 5).pipe(
    map(n => {
         if (n == 4) {
           throw 'four!';
      }
         return n;
    }),
    catchError(err => of('I', 'II', 'III', 'IV', 'V')),
  )
  .subscribe(x => console.log(x));
  // 1, 2, 3, I, II, III, IV, V
```

Retries the caught source Observable again in case of error, similar to retry() operator

```javascript
of(1, 2, 3, 4, 5).pipe(
    map(n => {
         if (n === 4) {
           throw 'four!';
      }
         return n;
    }),
    catchError((err, caught) => caught),
    take(30),
  )
  .subscribe(x => console.log(x));
  // 1, 2, 3, 1, 2, 3, ...
```

Throws a new error when the source Observable throws an error

```javascript
of(1, 2, 3, 4, 5).pipe(
    map(n => {
      if (n == 4) {
        throw 'four!';
      }
      return n;
    }),
    catchError(err => {
      throw 'error in source. Details: ' + err;
    }),
  )
  .subscribe(
    x => console.log(x),
    err => console.log(err)
  );
  // 1, 2, 3, error in source. Details: four!
```

@param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable is returned by the `selector` will be used to continue the observable chain.

*__name__*: catchError

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| selector | `function` |

**Returns:** [MonoTypeOperatorFunction](../interfaces/_rxjs_src_internal_types_.monotypeoperatorfunction.md)<`T`>
An observable that originates from either the source or the observable returned by the
 catch `selector` function.

*Defined in rxjs/src/internal/operators/catchError.ts:78*

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| selector | `function` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `R`>

___

