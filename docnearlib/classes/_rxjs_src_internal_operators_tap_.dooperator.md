[rxjs](../README.md) > ["rxjs/src/internal/operators/tap"](../modules/_rxjs_src_internal_operators_tap_.md) > [DoOperator](../classes/_rxjs_src_internal_operators_tap_.dooperator.md)

# Class: DoOperator

## Type parameters
#### T 
## Hierarchy

**DoOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_tap_.dooperator.md#constructor)

### Properties

* [complete](_rxjs_src_internal_operators_tap_.dooperator.md#complete)
* [error](_rxjs_src_internal_operators_tap_.dooperator.md#error)
* [nextOrObserver](_rxjs_src_internal_operators_tap_.dooperator.md#nextorobserver)

### Methods

* [call](_rxjs_src_internal_operators_tap_.dooperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DoOperator**(nextOrObserver?: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> \| `function`*, error?: *`function`*, complete?: *`function`*): [DoOperator](_rxjs_src_internal_operators_tap_.dooperator.md)

*Defined in rxjs/src/internal/operators/tap.ts:66*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` nextOrObserver | [PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> \| `function` |
| `Optional` error | `function` |
| `Optional` complete | `function` |

**Returns:** [DoOperator](_rxjs_src_internal_operators_tap_.dooperator.md)

___

## Properties

<a id="complete"></a>

### `<Private>``<Optional>` complete

**● complete**: *`function`*

*Defined in rxjs/src/internal/operators/tap.ts:69*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="error"></a>

### `<Private>``<Optional>` error

**● error**: *`function`*

*Defined in rxjs/src/internal/operators/tap.ts:68*

#### Type declaration
▸(e: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `any` |

**Returns:** `void`

___
<a id="nextorobserver"></a>

### `<Private>``<Optional>` nextOrObserver

**● nextOrObserver**: *[PartialObserver](../modules/_rxjs_src_internal_types_.md#partialobserver)<`T`> \| `function`*

*Defined in rxjs/src/internal/operators/tap.ts:67*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/tap.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

