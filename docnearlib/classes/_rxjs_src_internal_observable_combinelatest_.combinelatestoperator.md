[rxjs](../README.md) > ["rxjs/src/internal/observable/combineLatest"](../modules/_rxjs_src_internal_observable_combinelatest_.md) > [CombineLatestOperator](../classes/_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md)

# Class: CombineLatestOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**CombineLatestOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md#constructor)

### Properties

* [resultSelector](_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md#resultselector)

### Methods

* [call](_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CombineLatestOperator**(resultSelector?: *`function`*): [CombineLatestOperator](_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md)

*Defined in rxjs/src/internal/observable/combineLatest.ts:183*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` resultSelector | `function` |

**Returns:** [CombineLatestOperator](_rxjs_src_internal_observable_combinelatest_.combinelatestoperator.md)

___

## Properties

<a id="resultselector"></a>

### `<Private>``<Optional>` resultSelector

**● resultSelector**: *`function`*

*Defined in rxjs/src/internal/observable/combineLatest.ts:184*

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

*Defined in rxjs/src/internal/observable/combineLatest.ts:187*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

