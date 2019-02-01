[rxjs](../README.md) > ["rxjs/src/internal/config"](../modules/_rxjs_src_internal_config_.md)

# External module: "rxjs/src/internal/config"

## Index

### Variables

* [_enable_super_gross_mode_that_will_cause_bad_things](_rxjs_src_internal_config_.md#_enable_super_gross_mode_that_will_cause_bad_things)

### Object literals

* [config](_rxjs_src_internal_config_.md#config)

---

## Variables

<a id="_enable_super_gross_mode_that_will_cause_bad_things"></a>

### `<Let>` _enable_super_gross_mode_that_will_cause_bad_things

**● _enable_super_gross_mode_that_will_cause_bad_things**: *`boolean`* = false

*Defined in rxjs/src/internal/config.ts:1*

___

## Object literals

<a id="config"></a>

### `<Const>` config

**config**: *`object`*

*Defined in rxjs/src/internal/config.ts:7*

The global configuration object for RxJS, used to configure things like what Promise contructor should used to create Promises

<a id="config.promise"></a>

####  Promise

**● Promise**: *`object`* =  undefined as PromiseConstructorLike

*Defined in rxjs/src/internal/config.ts:12*

The promise constructor used by default for methods such as [toPromise](../classes/_rxjs_src_internal_subject_.subject.md#topromise) and [forEach](../classes/_rxjs_src_internal_subject_.subject.md#foreach)

#### Type declaration

___
<a id="config.usedeprecatedsynchronouserrorhandling"></a>

####  useDeprecatedSynchronousErrorHandling

getuseDeprecatedSynchronousErrorHandling(): `boolean`setuseDeprecatedSynchronousErrorHandling(value: *`boolean`*): `void`

*Defined in rxjs/src/internal/config.ts:32*

If true, turns on synchronous error rethrowing, which is a deprecated behavior in v6 and higher. This behavior enables bad patterns like wrapping a subscribe call in a try/catch block. It also enables producer interference, a nasty bug where a multicast can be broken for all observers by a downstream consumer with an unhandled error. DO NOT USE THIS FLAG UNLESS IT'S NEEDED TO BY TIME FOR MIGRATION REASONS.

**Returns:** `boolean`

*Defined in rxjs/src/internal/config.ts:22*

If true, turns on synchronous error rethrowing, which is a deprecated behavior in v6 and higher. This behavior enables bad patterns like wrapping a subscribe call in a try/catch block. It also enables producer interference, a nasty bug where a multicast can be broken for all observers by a downstream consumer with an unhandled error. DO NOT USE THIS FLAG UNLESS IT'S NEEDED TO BY TIME FOR MIGRATION REASONS.

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `boolean` |

**Returns:** `void`

___

___

