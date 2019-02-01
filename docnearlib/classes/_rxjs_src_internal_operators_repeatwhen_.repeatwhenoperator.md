[rxjs](../README.md) > ["rxjs/src/internal/operators/repeatWhen"](../modules/_rxjs_src_internal_operators_repeatwhen_.md) > [RepeatWhenOperator](../classes/_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md)

# Class: RepeatWhenOperator

## Type parameters
#### T 
## Hierarchy

**RepeatWhenOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md#constructor)

### Properties

* [notifier](_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md#notifier)

### Methods

* [call](_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RepeatWhenOperator**(notifier: *`function`*): [RepeatWhenOperator](_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md)

*Defined in rxjs/src/internal/operators/repeatWhen.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| notifier | `function` |

**Returns:** [RepeatWhenOperator](_rxjs_src_internal_operators_repeatwhen_.repeatwhenoperator.md)

___

## Properties

<a id="notifier"></a>

### `<Protected>` notifier

**● notifier**: *`function`*

*Defined in rxjs/src/internal/operators/repeatWhen.ts:34*

#### Type declaration
▸(notifications: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| notifications | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/repeatWhen.ts:37*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

