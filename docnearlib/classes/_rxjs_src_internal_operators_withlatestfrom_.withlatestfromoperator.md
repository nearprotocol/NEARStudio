[rxjs](../README.md) > ["rxjs/src/internal/operators/withLatestFrom"](../modules/_rxjs_src_internal_operators_withlatestfrom_.md) > [WithLatestFromOperator](../classes/_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md)

# Class: WithLatestFromOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**WithLatestFromOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md#constructor)

### Properties

* [observables](_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md#observables)
* [project](_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md#project)

### Methods

* [call](_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WithLatestFromOperator**(observables: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>[]*, project?: *`function`*): [WithLatestFromOperator](_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md)

*Defined in rxjs/src/internal/operators/withLatestFrom.ts:78*

**Parameters:**

| Name | Type |
| ------ | ------ |
| observables | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>[] |
| `Optional` project | `function` |

**Returns:** [WithLatestFromOperator](_rxjs_src_internal_operators_withlatestfrom_.withlatestfromoperator.md)

___

## Properties

<a id="observables"></a>

### `<Private>` observables

**● observables**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>[]*

*Defined in rxjs/src/internal/operators/withLatestFrom.ts:79*

___
<a id="project"></a>

### `<Private>``<Optional>` project

**● project**: *`function`*

*Defined in rxjs/src/internal/operators/withLatestFrom.ts:80*

#### Type declaration
▸(...values: *`any`[]*): [Observable](_rxjs_src_internal_observable_.observable.md)<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` values | `any`[] |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`R`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/withLatestFrom.ts:83*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

