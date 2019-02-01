[rxjs](../README.md) > ["rxjs/src/internal/operators/switchMap"](../modules/_rxjs_src_internal_operators_switchmap_.md) > [SwitchMapOperator](../classes/_rxjs_src_internal_operators_switchmap_.switchmapoperator.md)

# Class: SwitchMapOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**SwitchMapOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_switchmap_.switchmapoperator.md#constructor)

### Properties

* [project](_rxjs_src_internal_operators_switchmap_.switchmapoperator.md#project)

### Methods

* [call](_rxjs_src_internal_operators_switchmap_.switchmapoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SwitchMapOperator**(project: *`function`*): [SwitchMapOperator](_rxjs_src_internal_operators_switchmap_.switchmapoperator.md)

*Defined in rxjs/src/internal/operators/switchMap.ts:76*

**Parameters:**

| Name | Type |
| ------ | ------ |
| project | `function` |

**Returns:** [SwitchMapOperator](_rxjs_src_internal_operators_switchmap_.switchmapoperator.md)

___

## Properties

<a id="project"></a>

### `<Private>` project

**● project**: *`function`*

*Defined in rxjs/src/internal/operators/switchMap.ts:77*

#### Type declaration
▸(value: *`T`*, index: *`number`*): [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |
| index | `number` |

**Returns:** [ObservableInput](../modules/_rxjs_src_internal_types_.md#observableinput)<`R`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/switchMap.ts:80*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

