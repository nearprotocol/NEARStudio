[rxjs](../README.md) > ["rxjs/src/internal/operators/debounce"](../modules/_rxjs_src_internal_operators_debounce_.md) > [DebounceOperator](../classes/_rxjs_src_internal_operators_debounce_.debounceoperator.md)

# Class: DebounceOperator

## Type parameters
#### T 
## Hierarchy

**DebounceOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_debounce_.debounceoperator.md#constructor)

### Properties

* [durationSelector](_rxjs_src_internal_operators_debounce_.debounceoperator.md#durationselector)

### Methods

* [call](_rxjs_src_internal_operators_debounce_.debounceoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DebounceOperator**(durationSelector: *`function`*): [DebounceOperator](_rxjs_src_internal_operators_debounce_.debounceoperator.md)

*Defined in rxjs/src/internal/operators/debounce.ts:60*

**Parameters:**

| Name | Type |
| ------ | ------ |
| durationSelector | `function` |

**Returns:** [DebounceOperator](_rxjs_src_internal_operators_debounce_.debounceoperator.md)

___

## Properties

<a id="durationselector"></a>

### `<Private>` durationSelector

**● durationSelector**: *`function`*

*Defined in rxjs/src/internal/operators/debounce.ts:61*

#### Type declaration
▸(value: *`T`*): [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/debounce.ts:64*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

