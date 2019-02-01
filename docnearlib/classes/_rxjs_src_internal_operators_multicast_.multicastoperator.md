[rxjs](../README.md) > ["rxjs/src/internal/operators/multicast"](../modules/_rxjs_src_internal_operators_multicast_.md) > [MulticastOperator](../classes/_rxjs_src_internal_operators_multicast_.multicastoperator.md)

# Class: MulticastOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**MulticastOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_multicast_.multicastoperator.md#constructor)

### Properties

* [selector](_rxjs_src_internal_operators_multicast_.multicastoperator.md#selector)
* [subjectFactory](_rxjs_src_internal_operators_multicast_.multicastoperator.md#subjectfactory)

### Methods

* [call](_rxjs_src_internal_operators_multicast_.multicastoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MulticastOperator**(subjectFactory: *`function`*, selector: *`function`*): [MulticastOperator](_rxjs_src_internal_operators_multicast_.multicastoperator.md)

*Defined in rxjs/src/internal/operators/multicast.ts:59*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subjectFactory | `function` |
| selector | `function` |

**Returns:** [MulticastOperator](_rxjs_src_internal_operators_multicast_.multicastoperator.md)

___

## Properties

<a id="selector"></a>

### `<Private>` selector

**● selector**: *`function`*

*Defined in rxjs/src/internal/operators/multicast.ts:61*

#### Type declaration
▸(source: *[Observable](_rxjs_src_internal_observable_.observable.md)<`T`>*): [Observable](_rxjs_src_internal_observable_.observable.md)<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [Observable](_rxjs_src_internal_observable_.observable.md)<`T`> |

**Returns:** [Observable](_rxjs_src_internal_observable_.observable.md)<`R`>

___
<a id="subjectfactory"></a>

### `<Private>` subjectFactory

**● subjectFactory**: *`function`*

*Defined in rxjs/src/internal/operators/multicast.ts:60*

#### Type declaration
▸(): [Subject](_rxjs_src_internal_subject_.subject.md)<`T`>

**Returns:** [Subject](_rxjs_src_internal_subject_.subject.md)<`T`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/multicast.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

