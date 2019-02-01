[rxjs](../README.md) > ["rxjs/src/internal/operators/finalize"](../modules/_rxjs_src_internal_operators_finalize_.md) > [FinallyOperator](../classes/_rxjs_src_internal_operators_finalize_.finallyoperator.md)

# Class: FinallyOperator

## Type parameters
#### T 
## Hierarchy

**FinallyOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_finalize_.finallyoperator.md#constructor)

### Properties

* [callback](_rxjs_src_internal_operators_finalize_.finallyoperator.md#callback)

### Methods

* [call](_rxjs_src_internal_operators_finalize_.finallyoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FinallyOperator**(callback: *`function`*): [FinallyOperator](_rxjs_src_internal_operators_finalize_.finallyoperator.md)

*Defined in rxjs/src/internal/operators/finalize.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** [FinallyOperator](_rxjs_src_internal_operators_finalize_.finallyoperator.md)

___

## Properties

<a id="callback"></a>

### `<Private>` callback

**● callback**: *`function`*

*Defined in rxjs/src/internal/operators/finalize.ts:20*

#### Type declaration
▸(): `void`

**Returns:** `void`

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/finalize.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

