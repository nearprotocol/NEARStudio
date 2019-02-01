[rxjs](../README.md) > ["rxjs/src/internal/operators/scan"](../modules/_rxjs_src_internal_operators_scan_.md) > [ScanOperator](../classes/_rxjs_src_internal_operators_scan_.scanoperator.md)

# Class: ScanOperator

## Type parameters
#### T 
#### R 
## Hierarchy

**ScanOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `R`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_scan_.scanoperator.md#constructor)

### Properties

* [accumulator](_rxjs_src_internal_operators_scan_.scanoperator.md#accumulator)
* [hasSeed](_rxjs_src_internal_operators_scan_.scanoperator.md#hasseed)
* [seed](_rxjs_src_internal_operators_scan_.scanoperator.md#seed)

### Methods

* [call](_rxjs_src_internal_operators_scan_.scanoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ScanOperator**(accumulator: *`function`*, seed?: *`T` \| `R`*, hasSeed?: *`boolean`*): [ScanOperator](_rxjs_src_internal_operators_scan_.scanoperator.md)

*Defined in rxjs/src/internal/operators/scan.ts:68*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| accumulator | `function` | - |
| `Optional` seed | `T` \| `R` | - |
| `Default value` hasSeed | `boolean` | false |

**Returns:** [ScanOperator](_rxjs_src_internal_operators_scan_.scanoperator.md)

___

## Properties

<a id="accumulator"></a>

### `<Private>` accumulator

**● accumulator**: *`function`*

*Defined in rxjs/src/internal/operators/scan.ts:69*

#### Type declaration
▸(acc: *`R`*, value: *`T`*, index: *`number`*): `R`

**Parameters:**

| Name | Type |
| ------ | ------ |
| acc | `R` |
| value | `T` |
| index | `number` |

**Returns:** `R`

___
<a id="hasseed"></a>

### `<Private>` hasSeed

**● hasSeed**: *`boolean`*

*Defined in rxjs/src/internal/operators/scan.ts:69*

___
<a id="seed"></a>

### `<Private>``<Optional>` seed

**● seed**: *`T` \| `R`*

*Defined in rxjs/src/internal/operators/scan.ts:69*

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`>*, source: *`any`*): `any`

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/scan.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`R`> |
| source | `any` |

**Returns:** `any`

___

