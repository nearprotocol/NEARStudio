[rxjs](../README.md) > ["rxjs/src/MiscJSDoc"](../modules/_rxjs_src_miscjsdoc_.md) > [ObservableInputDoc](../classes/_rxjs_src_miscjsdoc_.observableinputdoc.md)

# Class: ObservableInputDoc

`ObservableInput` interface describes all values that are either an [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise) or some kind of collection of values that can be transformed to Observable emitting that values. Every operator that accepts arguments annotated with this interface, can be also used with parameters that are not necessarily RxJS Observables.

`ObservableInput` extends [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise) with following types:

Array
-----

Arrays can be interpreted as observables that emit all values in array one by one, from left to right, and then complete immediately.

Array-like
----------

Arrays passed to operators do not have to be built-in JavaScript Arrays. They can be also, for example, `arguments` property available inside every function, [DOM NodeList](https://developer.mozilla.org/pl/docs/Web/API/NodeList), or, actually, any object that has `length` property (which is a number) and stores values under non-negative (zero and up) integers.

ES6 Iterable
------------

Operators will accept both built-in and custom ES6 Iterables, by treating them as observables that emit all its values in order of iteration and then complete when iteration ends. Note that contrary to arrays, Iterables do not have to necessarily be finite, so creating Observables that never complete is possible as well.

Note that you can make iterator an instance of Iterable by having it return itself in `Symbol.iterator` method. It means that every operator accepting Iterables accepts, though indirectly, iterators themselves as well. All native ES6 iterators are instances of Iterable by default, so you do not have to implement their `Symbol.iterator` method yourself.

**TypeScript Iterable interface issue**

TypeScript `ObservableInput` interface actually lacks type signature for Iterables, because of issues it caused in some projects (see [this issue](https://github.com/ReactiveX/rxjs/issues/2306)). If you want to use Iterable as argument for operator, cast it to `any` first. Remember of course that, because of casting, you have to yourself ensure that passed argument really implements said interface.

*__example__*: Use merge with arrays Rx.Observable.merge(\[1, 2\], \[4\], \[5, 6\]) .subscribe( value => console.log(value), err => {}, () => console.log('ta dam!') );

// Logs // 1 // 2 // 3 // 4 // 5 // 6 // "ta dam!"

*__example__*: Use merge with array-like Rx.Observable.merge({0: 1, 1: 2, length: 2}, {0: 3, length: 1}) .subscribe( value => console.log(value), err => {}, () => console.log('nice, huh?') );

// Logs // 1 // 2 // 3 // "nice, huh?"

*__example__*: Use merge with an Iterable (Map) const firstMap = new Map(\[\[1, 'a'\], \[2, 'b'\]\]); const secondMap = new Map(\[\[3, 'c'\], \[4, 'd'\]\]);

Rx.Observable.merge( firstMap, // pass Iterable secondMap.values() // pass iterator, which is itself an Iterable ).subscribe( value => console.log(value), err => {}, () => console.log('yup!') );

// Logs // \[1, "a"\] // \[2, "b"\] // "c" // "d" // "yup!"

*__example__*: Use from with generator (returning infinite iterator) // infinite stream of incrementing numbers const infinite = function\* () { let i = 0;

while (true) { yield i++; } };

Rx.Observable.from(infinite()) .take(3) // only take 3, cause this is infinite .subscribe( value => console.log(value), err => {}, () => console.log('ta dam!') );

// Logs // 0 // 1 // 2 // "ta dam!"

*__interface__*: 

*__name__*: ObservableInput

*__noimport__*: true

## Type parameters
#### T 
## Hierarchy

**ObservableInputDoc**

## Index

---

