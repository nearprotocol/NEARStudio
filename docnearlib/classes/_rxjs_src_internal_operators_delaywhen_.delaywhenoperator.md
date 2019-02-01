[rxjs](../README.md) > ["rxjs/src/internal/operators/delayWhen"](../modules/_rxjs_src_internal_operators_delaywhen_.md) > [DelayWhenOperator](../classes/_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md)

# Class: DelayWhenOperator

## Type parameters
#### T 
## Hierarchy

**DelayWhenOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md#constructor)

### Properties

* [delayDurationSelector](_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md#delaydurationselector)

### Methods

* [call](_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DelayWhenOperator**(delayDurationSelector: *`function`*): [DelayWhenOperator](_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md)

*Defined in rxjs/src/internal/operators/delayWhen.ts:76*

**Parameters:**

| Name | Type |
| ------ | ------ |
| delayDurationSelector | `function` |

**Returns:** [DelayWhenOperator](_rxjs_src_internal_operators_delaywhen_.delaywhenoperator.md)

___

## Properties

<a id="delaydurationselector"></a>

### `<Private>` delayDurationSelector

**● delayDurationSelector**: *`function`*

*Defined in rxjs/src/internal/operators/delayWhen.ts:77*

#### Type declaration
▸(value: *`T`*, index: *`number`*): [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`any`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/delayWhen.ts:80*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

