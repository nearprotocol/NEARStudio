[rxjs](../README.md) > ["rxjs/src/internal/operators/single"](../modules/_rxjs_src_internal_operators_single_.md) > [SingleOperator](../classes/_rxjs_src_internal_operators_single_.singleoperator.md)

# Class: SingleOperator

## Type parameters
#### T 
## Hierarchy

**SingleOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_single_.singleoperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_single_.singleoperator.md#predicate)
* [source](_rxjs_src_internal_operators_single_.singleoperator.md#source)

### Methods

* [call](_rxjs_src_internal_operators_single_.singleoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SingleOperator**(predicate?: *`function`*, source?: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [SingleOperator](_rxjs_src_internal_operators_single_.singleoperator.md)

*Defined in rxjs/src/internal/operators/single.ts:29*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` predicate | `function` |
| `Optional` source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [SingleOperator](_rxjs_src_internal_operators_single_.singleoperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>``<Optional>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/single.ts:30*

#### Type declaration
▸(value: *`T`*, index: *`number`*, source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** `boolean`

___
<a id="source"></a>

### `<Private>``<Optional>` source

**● source**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*

*Defined in rxjs/src/internal/operators/single.ts:31*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/single.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

