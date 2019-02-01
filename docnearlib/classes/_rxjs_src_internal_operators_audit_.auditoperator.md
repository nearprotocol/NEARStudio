[rxjs](../README.md) > ["rxjs/src/internal/operators/audit"](../modules/_rxjs_src_internal_operators_audit_.md) > [AuditOperator](../classes/_rxjs_src_internal_operators_audit_.auditoperator.md)

# Class: AuditOperator

## Type parameters
#### T 
## Hierarchy

**AuditOperator**

## Implements

* [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md)<`T`, `T`>

## Index

### Constructors

* [constructor](_rxjs_src_internal_operators_audit_.auditoperator.md#constructor)

### Properties

* [durationSelector](_rxjs_src_internal_operators_audit_.auditoperator.md#durationselector)

### Methods

* [call](_rxjs_src_internal_operators_audit_.auditoperator.md#call)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AuditOperator**(durationSelector: *`function`*): [AuditOperator](_rxjs_src_internal_operators_audit_.auditoperator.md)

*Defined in rxjs/src/internal/operators/audit.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| durationSelector | `function` |

**Returns:** [AuditOperator](_rxjs_src_internal_operators_audit_.auditoperator.md)

___

## Properties

<a id="durationselector"></a>

### `<Private>` durationSelector

**● durationSelector**: *`function`*

*Defined in rxjs/src/internal/operators/audit.ts:62*

#### Type declaration
▸(value: *`T`*): [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** [SubscribableOrPromise](../modules/_rxjs_src_internal_types_.md#subscribableorpromise)<`any`>

___

## Methods

<a id="call"></a>

###  call

▸ **call**(subscriber: *[Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`>*, source: *`any`*): [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

*Implementation of [Operator](../interfaces/_rxjs_src_internal_operator_.operator.md).[call](../interfaces/_rxjs_src_internal_operator_.operator.md#call)*

*Defined in rxjs/src/internal/operators/audit.ts:65*

**Parameters:**

| Name | Type |
| ------ | ------ |
| subscriber | [Subscriber](_rxjs_src_internal_subscriber_.subscriber.md)<`T`> |
| source | `any` |

**Returns:** [TeardownLogic](../modules/_rxjs_src_internal_types_.md#teardownlogic)

___

