[rxjs](../README.md) > ["rxjs/src/internal/observable/zip"](../modules/_rxjs_src_internal_observable_zip_.md) > [ZipOperator](../classes/_rxjs_src_internal_observable_zip_.zipoperator.md)

# Class: ZipOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**ZipOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_observable_zip_.zipoperator.md#constructor)

### Properties

* [resultSelector](_rxjs_src_internal_observable_zip_.zipoperator.md#resultselector)

### Methods

* [call](_rxjs_src_internal_observable_zip_.zipoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ZipOperator**(resultSelector?: *`function`*): [ZipOperator](_rxjs_src_internal_observable_zip_.zipoperator.md)

*Defined in rxjs/src/internal/observable/zip.ts:85*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` resultSelector | `function` |

**Returns:** [ZipOperator](_rxjs_src_internal_observable_zip_.zipoperator.md)

___

## Properties

<a id="resultselector"></a>

###  resultSelector

**● resultSelector**: *`function`*

*Defined in rxjs/src/internal/observable/zip.ts:85*

#### Type declaration
▸(...values: *`Array`<`any`>*): `R`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | `Array`<`any`> |

**Returns:** `R`

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/observable/zip.ts:91*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

