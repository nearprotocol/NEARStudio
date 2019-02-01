[rxjs](../README.md) > ["rxjs/src/internal/operators/groupBy"](../modules/_rxjs_src_internal_operators_groupby_.md) > [GroupByOperator](../classes/_rxjs_src_internal_operators_groupby_.groupbyoperator.md)

# Class: GroupByOperator

## Type parameters
#### T 
#### K 
#### R 
## Hierarchy

**GroupByOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, [GroupedObservable](_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_groupby_.groupbyoperator.md#constructor)

### Properties

* [durationSelector](_rxjs_src_internal_operators_groupby_.groupbyoperator.md#durationselector)
* [elementSelector](_rxjs_src_internal_operators_groupby_.groupbyoperator.md#elementselector)
* [keySelector](_rxjs_src_internal_operators_groupby_.groupbyoperator.md#keyselector)
* [subjectSelector](_rxjs_src_internal_operators_groupby_.groupbyoperator.md#subjectselector)

### Methods

* [call](_rxjs_src_internal_operators_groupby_.groupbyoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GroupByOperator**(keySelector: *`function`*, elementSelector?: *`function` \| `void`*, durationSelector?: *`function`*, subjectSelector?: *`function`*): [GroupByOperator](_rxjs_src_internal_operators_groupby_.groupbyoperator.md)

*Defined in rxjs/src/internal/operators/groupBy.ts:119*

**Parameters:**

| Name | Type |
| ------ | ------ |
| keySelector | `function` |
| `Optional` elementSelector | `function` \| `void` |
| `Optional` durationSelector | `function` |
| `Optional` subjectSelector | `function` |

**Returns:** [GroupByOperator](_rxjs_src_internal_operators_groupby_.groupbyoperator.md)

___

## Properties

<a id="durationselector"></a>

### `<Private>``<Optional>` durationSelector

**● durationSelector**: *`function`*

*Defined in rxjs/src/internal/operators/groupBy.ts:122*

#### Type declaration
▸(grouped: *[GroupedObservable](_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>*): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| grouped | [GroupedObservable](_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`> |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___
<a id="elementselector"></a>

### `<Private>``<Optional>` elementSelector

**● elementSelector**: *`function` \| `void`*

*Defined in rxjs/src/internal/operators/groupBy.ts:121*

___
<a id="keyselector"></a>

### `<Private>` keySelector

**● keySelector**: *`function`*

*Defined in rxjs/src/internal/operators/groupBy.ts:120*

#### Type declaration
▸(value: *`T`*): `K`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `K`

___
<a id="subjectselector"></a>

### `<Private>``<Optional>` subjectSelector

**● subjectSelector**: *`function`*

*Defined in rxjs/src/internal/operators/groupBy.ts:123*

#### Type declaration
▸(): [Subject](_rxjs_src_internal_subject_.subject.md)<`R`>

**Returns:** [Subject](_rxjs_src_internal_subject_.subject.md)<`R`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[GroupedObservable](_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/groupBy.ts:126*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<[GroupedObservable](_rxjs_src_internal_operators_groupby_.groupedobservable.md)<`K`, `R`>> |
| source | `any` |

**Returns:** `any`

___

