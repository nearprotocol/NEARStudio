[rxjs](../README.md) > ["rxjs/src/internal/testing/TestScheduler"](../modules/_rxjs_src_internal_testing_testscheduler_.md)

# External module: "rxjs/src/internal/testing/TestScheduler"

## Index

### Classes

* [TestScheduler](../classes/_rxjs_src_internal_testing_testscheduler_.testscheduler.md)

### Interfaces

* [FlushableTest](../interfaces/_rxjs_src_internal_testing_testscheduler_.flushabletest.md)
* [RunHelpers](../interfaces/_rxjs_src_internal_testing_testscheduler_.runhelpers.md)

### Type aliases

* [observableToBeFn](_rxjs_src_internal_testing_testscheduler_.md#observabletobefn)
* [subscriptionLogsToBeFn](_rxjs_src_internal_testing_testscheduler_.md#subscriptionlogstobefn)

### Variables

* [defaultMaxFrame](_rxjs_src_internal_testing_testscheduler_.md#defaultmaxframe)

---

## Type aliases

<a id="observabletobefn"></a>

###  observableToBeFn

**Ƭ observableToBeFn**: *`function`*

*Defined in rxjs/src/internal/testing/TestScheduler.ts:27*

#### Type declaration
▸(marbles: *`string`*, values?: *`any`*, errorValue?: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| marbles | `string` |
| `Optional` values | `any` |
| `Optional` errorValue | `any` |

**Returns:** `void`

___
<a id="subscriptionlogstobefn"></a>

###  subscriptionLogsToBeFn

**Ƭ subscriptionLogsToBeFn**: *`function`*

*Defined in rxjs/src/internal/testing/TestScheduler.ts:28*

#### Type declaration
▸(marbles: *`string` \| `string`[]*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| marbles | `string` \| `string`[] |

**Returns:** `void`

___

## Variables

<a id="defaultmaxframe"></a>

### `<Const>` defaultMaxFrame

**● defaultMaxFrame**: *`number`* = 750

*Defined in rxjs/src/internal/testing/TestScheduler.ts:11*

___

