[rxjs](../README.md) > ["rxjs/src/internal/operators/count"](../modules/_rxjs_src_internal_operators_count_.md) > [CountOperator](../classes/_rxjs_src_internal_operators_count_.countoperator.md)

# Class: CountOperator

## Type parameters
#### T 
## Hierarchy

**CountOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `number`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_count_.countoperator.md#constructor)

### Properties

* [predicate](_rxjs_src_internal_operators_count_.countoperator.md#predicate)
* [source](_rxjs_src_internal_operators_count_.countoperator.md#source)

### Methods

* [call](_rxjs_src_internal_operators_count_.countoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CountOperator**(predicate?: *`function`*, source?: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [CountOperator](_rxjs_src_internal_operators_count_.countoperator.md)

*Defined in rxjs/src/internal/operators/count.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` predicate | `function` |
| `Optional` source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [CountOperator](_rxjs_src_internal_operators_count_.countoperator.md)

___

## Properties

<a id="predicate"></a>

### `<Private>``<Optional>` predicate

**● predicate**: *`function`*

*Defined in rxjs/src/internal/operators/count.ts:64*

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

*Defined in rxjs/src/internal/operators/count.ts:65*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`number`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/count.ts:68*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`number`> |
| source | `any` |

**Returns:** `any`

___

