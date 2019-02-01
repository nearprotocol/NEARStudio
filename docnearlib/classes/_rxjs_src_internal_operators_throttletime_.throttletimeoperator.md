[rxjs](../README.md) > ["rxjs/src/internal/operators/throttleTime"](../modules/_rxjs_src_internal_operators_throttletime_.md) > [ThrottleTimeOperator](../classes/_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md)

# Class: ThrottleTimeOperator

## Type parameters
#### T 
## Hierarchy

**ThrottleTimeOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md#constructor)

### Properties

* [duration](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md#duration)
* [leading](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md#leading)
* [scheduler](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md#scheduler)
* [trailing](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md#trailing)

### Methods

* [call](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ThrottleTimeOperator**(duration: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*, leading: *`boolean`*, trailing: *`boolean`*): [ThrottleTimeOperator](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md)

*Defined in rxjs/src/internal/operators/throttleTime.ts:59*

**Parameters:**

| Name | Type |
| ------ | ------ |
| duration | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |
| leading | `boolean` |
| trailing | `boolean` |

**Returns:** [ThrottleTimeOperator](_rxjs_src_internal_operators_throttletime_.throttletimeoperator.md)

___

## Properties

<a id="duration"></a>

### `<Private>` duration

**● duration**: *`number`*

*Defined in rxjs/src/internal/operators/throttleTime.ts:60*

___
<a id="leading"></a>

### `<Private>` leading

**● leading**: *`boolean`*

*Defined in rxjs/src/internal/operators/throttleTime.ts:62*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/throttleTime.ts:61*

___
<a id="trailing"></a>

### `<Private>` trailing

**● trailing**: *`boolean`*

*Defined in rxjs/src/internal/operators/throttleTime.ts:63*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/throttleTime.ts:66*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

