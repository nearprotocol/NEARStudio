[rxjs](../README.md) > ["rxjs/src/internal/operators/bufferToggle"](../modules/_rxjs_src_internal_operators_buffertoggle_.md) > [BufferToggleOperator](../classes/_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md)

# Class: BufferToggleOperator

## Type parameters
#### T 
#### O 
## Hierarchy

**BufferToggleOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`[]>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md#constructor)

### Properties

* [closingSelector](_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md#closingselector)
* [openings](_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md#openings)

### Methods

* [call](_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BufferToggleOperator**(openings: *[SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`O`>*, closingSelector: *`function`*): [BufferToggleOperator](_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md)

*Defined in rxjs/src/internal/operators/bufferToggle.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| openings | [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`O`> |
| closingSelector | `function` |

**Returns:** [BufferToggleOperator](_rxjs_src_internal_operators_buffertoggle_.buffertoggleoperator.md)

___

## Properties

<a id="closingselector"></a>

### `<Private>` closingSelector

**● closingSelector**: *`function`*

*Defined in rxjs/src/internal/operators/bufferToggle.ts:65*

#### Type declaration
▸(value: *`O`*): [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `O` |

**Returns:** [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

___
<a id="openings"></a>

### `<Private>` openings

**● openings**: *[SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`O`>*

*Defined in rxjs/src/internal/operators/bufferToggle.ts:64*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/bufferToggle.ts:68*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`[]> |
| source | `any` |

**Returns:** `any`

___

