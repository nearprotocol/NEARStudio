[rxjs](../README.md) > ["rxjs/src/internal/operators/skipUntil"](../modules/_rxjs_src_internal_operators_skipuntil_.md) > [SkipUntilOperator](../classes/_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md)

# Class: SkipUntilOperator

## Type parameters
#### T 
## Hierarchy

**SkipUntilOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md#constructor)

### Properties

* [notifier](_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md#notifier)

### Methods

* [call](_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SkipUntilOperator**(notifier: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [SkipUntilOperator](_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md)

*Defined in rxjs/src/internal/operators/skipUntil.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notifier | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [SkipUntilOperator](_rxjs_src_internal_operators_skipuntil_.skipuntiloperator.md)

___

## Properties

<a id="notifier"></a>

### `<Private>` notifier

**● notifier**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*

*Defined in rxjs/src/internal/operators/skipUntil.ts:27*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(destination: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/skipUntil.ts:30*

**Parameters:**

| Name | Type |
| ------ | ------ |
| destination | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

