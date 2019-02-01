[rxjs](../README.md) > ["rxjs/src/internal/operators/throttle"](../modules/_rxjs_src_internal_operators_throttle_.md) > [ThrottleOperator](../classes/_rxjs_src_internal_operators_throttle_.throttleoperator.md)

# Class: ThrottleOperator

## Type parameters
#### T 
## Hierarchy

**ThrottleOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_throttle_.throttleoperator.md#constructor)

### Properties

* [durationSelector](_rxjs_src_internal_operators_throttle_.throttleoperator.md#durationselector)
* [leading](_rxjs_src_internal_operators_throttle_.throttleoperator.md#leading)
* [trailing](_rxjs_src_internal_operators_throttle_.throttleoperator.md#trailing)

### Methods

* [call](_rxjs_src_internal_operators_throttle_.throttleoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ThrottleOperator**(durationSelector: *`function`*, leading: *`boolean`*, trailing: *`boolean`*): [ThrottleOperator](_rxjs_src_internal_operators_throttle_.throttleoperator.md)

*Defined in rxjs/src/internal/operators/throttle.ts:70*

**Parameters:**

| Name | Type |
| ------ | ------ |
| durationSelector | `function` |
| leading | `boolean` |
| trailing | `boolean` |

**Returns:** [ThrottleOperator](_rxjs_src_internal_operators_throttle_.throttleoperator.md)

___

## Properties

<a id="durationselector"></a>

### `<Private>` durationSelector

**● durationSelector**: *`function`*

*Defined in rxjs/src/internal/operators/throttle.ts:71*

#### Type declaration
▸(value: *`T`*): [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

___
<a id="leading"></a>

### `<Private>` leading

**● leading**: *`boolean`*

*Defined in rxjs/src/internal/operators/throttle.ts:72*

___
<a id="trailing"></a>

### `<Private>` trailing

**● trailing**: *`boolean`*

*Defined in rxjs/src/internal/operators/throttle.ts:73*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/throttle.ts:76*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

