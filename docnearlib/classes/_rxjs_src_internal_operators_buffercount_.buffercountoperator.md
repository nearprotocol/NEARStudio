[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferCount"](../modules/_rxjs_src_internal_operators_buffercount_.md) > [BufferCountOperator](../classes/_rxjs_src_internal_operators_buffercount_.buffercountoperator.md)

# Class: BufferCountOperator

## Type parameters
#### T 
## Hierarchy

**BufferCountOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`[]>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md#constructor)

### Properties

* [bufferSize](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md#buffersize)
* [startBufferEvery](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md#startbufferevery)
* [subscriberClass](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md#subscriberclass)

### Methods

* [call](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BufferCountOperator**(bufferSize: *`number`*, startBufferEvery: *`number`*): [BufferCountOperator](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md)

*Defined in rxjs/src/internal/operators/bufferCount.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| bufferSize | `number` |
| startBufferEvery | `number` |

**Returns:** [BufferCountOperator](_rxjs_src_internal_operators_buffercount_.buffercountoperator.md)

___

## Properties

<a id="buffersize"></a>

### `<Private>` bufferSize

**● bufferSize**: *`number`*

*Defined in rxjs/src/internal/operators/bufferCount.ts:64*

___
<a id="startbufferevery"></a>

### `<Private>` startBufferEvery

**● startBufferEvery**: *`number`*

*Defined in rxjs/src/internal/operators/bufferCount.ts:64*

___
<a id="subscriberclass"></a>

### `<Private>` subscriberClass

**● subscriberClass**: *`any`*

*Defined in rxjs/src/internal/operators/bufferCount.ts:62*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/bufferCount.ts:72*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

