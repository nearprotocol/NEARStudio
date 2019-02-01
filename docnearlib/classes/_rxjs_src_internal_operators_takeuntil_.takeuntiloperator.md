[rxjs](../README.md) > ["rxjs/src/internal/operators/takeUntil"](../modules/_rxjs_src_internal_operators_takeuntil_.md) > [TakeUntilOperator](../classes/_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md)

# Class: TakeUntilOperator

## Type parameters
#### T 
## Hierarchy

**TakeUntilOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md#constructor)

### Properties

* [notifier](_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md#notifier)

### Methods

* [call](_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TakeUntilOperator**(notifier: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [TakeUntilOperator](_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md)

*Defined in rxjs/src/internal/operators/takeUntil.ts:52*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notifier | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [TakeUntilOperator](_rxjs_src_internal_operators_takeuntil_.takeuntiloperator.md)

___

## Properties

<a id="notifier"></a>

### `<Private>` notifier

**● notifier**: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*

*Defined in rxjs/src/internal/operators/takeUntil.ts:53*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/takeUntil.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

