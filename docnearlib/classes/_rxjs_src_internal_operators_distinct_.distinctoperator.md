[rxjs](../README.md) > ["rxjs/src/internal/operators/distinct"](../modules/_rxjs_src_internal_operators_distinct_.md) > [DistinctOperator](../classes/_rxjs_src_internal_operators_distinct_.distinctoperator.md)

# Class: DistinctOperator

## Type parameters
#### T 
#### K 
## Hierarchy

**DistinctOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_distinct_.distinctoperator.md#constructor)

### Properties

* [flushes](_rxjs_src_internal_operators_distinct_.distinctoperator.md#flushes)
* [keySelector](_rxjs_src_internal_operators_distinct_.distinctoperator.md#keyselector)

### Methods

* [call](_rxjs_src_internal_operators_distinct_.distinctoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DistinctOperator**(keySelector: *`function`*, flushes: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [DistinctOperator](_rxjs_src_internal_operators_distinct_.distinctoperator.md)

*Defined in rxjs/src/internal/operators/distinct.ts:66*

**Parameters:**

| Name | Type |
| ------ | ------ |
| keySelector | `function` |
| flushes | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [DistinctOperator](_rxjs_src_internal_operators_distinct_.distinctoperator.md)

___

## Properties

<a id="flushes"></a>

### `<Private>` flushes

**● flushes**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*

*Defined in rxjs/src/internal/operators/distinct.ts:67*

___
<a id="keyselector"></a>

### `<Private>` keySelector

**● keySelector**: *`function`*

*Defined in rxjs/src/internal/operators/distinct.ts:67*

#### Type declaration
▸(value: *`T`*): `K`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `K`

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/distinct.ts:70*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

