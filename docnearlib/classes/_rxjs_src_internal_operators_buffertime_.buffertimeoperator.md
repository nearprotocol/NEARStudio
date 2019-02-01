[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferTime"](../modules/_rxjs_src_internal_operators_buffertime_.md) > [BufferTimeOperator](../classes/_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md)

# Class: BufferTimeOperator

## Type parameters
#### T 
## Hierarchy

**BufferTimeOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`[]>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md#constructor)

### Properties

* [bufferCreationInterval](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md#buffercreationinterval)
* [bufferTimeSpan](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md#buffertimespan)
* [maxBufferSize](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md#maxbuffersize)
* [scheduler](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md#scheduler)

### Methods

* [call](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BufferTimeOperator**(bufferTimeSpan: *`number`*, bufferCreationInterval: *`number`*, maxBufferSize: *`number`*, scheduler: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*): [BufferTimeOperator](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md)

*Defined in rxjs/src/internal/operators/bufferTime.ts:90*

**Parameters:**

| Name | Type |
| ------ | ------ |
| bufferTimeSpan | `number` |
| bufferCreationInterval | `number` |
| maxBufferSize | `number` |
| scheduler | [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md) |

**Returns:** [BufferTimeOperator](_rxjs_src_internal_operators_buffertime_.buffertimeoperator.md)

___

## Properties

<a id="buffercreationinterval"></a>

### `<Private>` bufferCreationInterval

**● bufferCreationInterval**: *`number`*

*Defined in rxjs/src/internal/operators/bufferTime.ts:92*

___
<a id="buffertimespan"></a>

### `<Private>` bufferTimeSpan

**● bufferTimeSpan**: *`number`*

*Defined in rxjs/src/internal/operators/bufferTime.ts:91*

___
<a id="maxbuffersize"></a>

### `<Private>` maxBufferSize

**● maxBufferSize**: *`number`*

*Defined in rxjs/src/internal/operators/bufferTime.ts:93*

___
<a id="scheduler"></a>

### `<Private>` scheduler

**● scheduler**: *[SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)*

*Defined in rxjs/src/internal/operators/bufferTime.ts:94*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/bufferTime.ts:97*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]> |
| source | `any` |

**Returns:** `any`

___

