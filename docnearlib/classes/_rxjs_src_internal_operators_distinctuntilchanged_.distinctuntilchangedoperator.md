[rxjs](../README.md) > ["rxjs/src/internal/operators/distinctUntilChanged"](../modules/_rxjs_src_internal_operators_distinctuntilchanged_.md) > [DistinctUntilChangedOperator](../classes/_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md)

# Class: DistinctUntilChangedOperator

## Type parameters
#### T 
#### K 
## Hierarchy

**DistinctUntilChangedOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md#constructor)

### Properties

* [compare](_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md#compare)
* [keySelector](_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md#keyselector)

### Methods

* [call](_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DistinctUntilChangedOperator**(compare: *`function`*, keySelector: *`function`*): [DistinctUntilChangedOperator](_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md)

*Defined in rxjs/src/internal/operators/distinctUntilChanged.ts:64*

**Parameters:**

| Name | Type |
| ------ | ------ |
| compare | `function` |
| keySelector | `function` |

**Returns:** [DistinctUntilChangedOperator](_rxjs_src_internal_operators_distinctuntilchanged_.distinctuntilchangedoperator.md)

___

## Properties

<a id="compare"></a>

### `<Private>` compare

**● compare**: *`function`*

*Defined in rxjs/src/internal/operators/distinctUntilChanged.ts:65*

#### Type declaration
▸(x: *`K`*, y: *`K`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `K` |
| y | `K` |

**Returns:** `boolean`

___
<a id="keyselector"></a>

### `<Private>` keySelector

**● keySelector**: *`function`*

*Defined in rxjs/src/internal/operators/distinctUntilChanged.ts:66*

#### Type declaration
▸(x: *`T`*): `K`

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `T` |

**Returns:** `K`

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/distinctUntilChanged.ts:69*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

