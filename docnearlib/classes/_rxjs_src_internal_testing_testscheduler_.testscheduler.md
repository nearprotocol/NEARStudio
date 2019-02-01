[rxjs](../README.md) > ["rxjs/src/internal/testing/TestScheduler"](../modules/_rxjs_src_internal_testing_testscheduler_.md) > [TestScheduler](../classes/_rxjs_src_internal_testing_testscheduler_.testscheduler.md)

# Class: TestScheduler

## Hierarchy

↳  [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)

**↳ TestScheduler**

## Implements

* [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

## Index

### Constructors

* [constructor](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#constructor)

### Properties

* [actions](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#actions)
* [active](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#active)
* [assertDeepEqual](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#assertdeepequal)
* [coldObservables](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#coldobservables)
* [flushTests](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#flushtests)
* [frame](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#frame)
* [hotObservables](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#hotobservables)
* [index](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#index)
* [maxFrames](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#maxframes)
* [now](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#now)
* [runMode](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#runmode)
* [scheduled](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#scheduled)
* [delegate](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#delegate)
* [frameTimeFactor](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#frametimefactor)

### Methods

* [createColdObservable](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#createcoldobservable)
* [createHotObservable](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#createhotobservable)
* [createTime](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#createtime)
* [expectObservable](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#expectobservable)
* [expectSubscriptions](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#expectsubscriptions)
* [flush](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#flush)
* [materializeInnerObservable](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#materializeinnerobservable)
* [run](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#run)
* [schedule](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#schedule)
* [now](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#now-1)
* [parseMarbles](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#parsemarbles)
* [parseMarblesAsSubscriptions](_rxjs_src_internal_testing_testscheduler_.testscheduler.md#parsemarblesassubscriptions)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TestScheduler**(assertDeepEqual: *`function`*): [TestScheduler](_rxjs_src_internal_testing_testscheduler_.testscheduler.md)

*Overrides [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md).[constructor](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#constructor)*

*Defined in rxjs/src/internal/testing/TestScheduler.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| assertDeepEqual | `function` |

**Returns:** [TestScheduler](_rxjs_src_internal_testing_testscheduler_.testscheduler.md)

___

## Properties

<a id="actions"></a>

###  actions

**● actions**: *`Array`<`AsyncAction`<`any`>>* =  []

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[actions](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#actions)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:9*

___
<a id="active"></a>

###  active

**● active**: *`boolean`* = false

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[active](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#active)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:16*

A flag to indicate whether the Scheduler is currently executing a batch of queued actions.

*__type__*: {boolean}

*__deprecated__*:
 internal use only

___
<a id="assertdeepequal"></a>

###  assertDeepEqual

**● assertDeepEqual**: *`function`*

*Defined in rxjs/src/internal/testing/TestScheduler.ts:36*

#### Type declaration
▸(actual: *`any`*, expected: *`any`*): `boolean` \| `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| actual | `any` |
| expected | `any` |

**Returns:** `boolean` \| `void`

___
<a id="coldobservables"></a>

###  coldObservables

**● coldObservables**: *`ColdObservable`<`any`>[]* =  []

*Defined in rxjs/src/internal/testing/TestScheduler.ts:32*

___
<a id="flushtests"></a>

### `<Private>` flushTests

**● flushTests**: *[FlushableTest](../interfaces/_rxjs_src_internal_testing_testscheduler_.flushabletest.md)[]* =  []

*Defined in rxjs/src/internal/testing/TestScheduler.ts:33*

___
<a id="frame"></a>

###  frame

**● frame**: *`number`* = 0

*Inherited from [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md).[frame](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#frame)*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:10*

___
<a id="hotobservables"></a>

###  hotObservables

**● hotObservables**: *`HotObservable`<`any`>[]* =  []

*Defined in rxjs/src/internal/testing/TestScheduler.ts:31*

___
<a id="index"></a>

###  index

**● index**: *`number`* =  -1

*Inherited from [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md).[index](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#index)*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:11*

___
<a id="maxframes"></a>

###  maxFrames

**● maxFrames**: *`number`*

*Inherited from [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md).[maxFrames](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#maxframes)*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:14*

___
<a id="now"></a>

###  now

**● now**: *`function`*

*Implementation of [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md).[now](../interfaces/_rxjs_src_internal_types_.schedulerlike.md#now)*

*Inherited from [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[now](_rxjs_src_internal_scheduler_.scheduler.md#now)*

*Defined in rxjs/src/internal/Scheduler.ts:46*

A getter method that returns a number representing the current time (at the time this function was called) according to the scheduler's own internal clock.

*__returns__*: A number that represents the current time. May or may not have a relation to wall-clock time. May or may not refer to a time unit (e.g. milliseconds).

#### Type declaration
▸(): `number`

**Returns:** `number`

___
<a id="runmode"></a>

### `<Private>` runMode

**● runMode**: *`boolean`* = false

*Defined in rxjs/src/internal/testing/TestScheduler.ts:34*

___
<a id="scheduled"></a>

###  scheduled

**● scheduled**: *`any`* =  undefined

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[scheduled](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#scheduled)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:24*

An internal ID used to track the latest asynchronous task such as those coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and others.

*__type__*: {any}

*__deprecated__*:
 internal use only

___
<a id="delegate"></a>

### `<Static>``<Optional>` delegate

**● delegate**: *[Scheduler](_rxjs_src_internal_scheduler_.scheduler.md)*

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[delegate](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#delegate)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:8*

___
<a id="frametimefactor"></a>

### `<Static>``<Protected>` frameTimeFactor

**● frameTimeFactor**: *`number`* = 10

*Inherited from [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md).[frameTimeFactor](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#frametimefactor)*

*Defined in rxjs/src/internal/scheduler/VirtualTimeScheduler.ts:8*

___

## Methods

<a id="createcoldobservable"></a>

###  createColdObservable

▸ **createColdObservable**<`T`>(marbles: *`string`*, values?: *`object`*, error?: *`any`*): `ColdObservable`<`T`>

*Defined in rxjs/src/internal/testing/TestScheduler.ts:53*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| marbles | `string` |  A diagram in the marble DSL. Letters map to keys in \`values\` if provided. |
| `Optional` values | `object` |  Values to use for the letters in \`marbles\`. If ommitted, the letters themselves are used. |
| `Optional` error | `any` |  The error to use for the \`#\` marble (if present). |

**Returns:** `ColdObservable`<`T`>

___
<a id="createhotobservable"></a>

###  createHotObservable

▸ **createHotObservable**<`T`>(marbles: *`string`*, values?: *`object`*, error?: *`any`*): `HotObservable`<`T`>

*Defined in rxjs/src/internal/testing/TestScheduler.ts:71*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| marbles | `string` |  A diagram in the marble DSL. Letters map to keys in \`values\` if provided. |
| `Optional` values | `object` |  Values to use for the letters in \`marbles\`. If ommitted, the letters themselves are used. |
| `Optional` error | `any` |  The error to use for the \`#\` marble (if present). |

**Returns:** `HotObservable`<`T`>

___
<a id="createtime"></a>

###  createTime

▸ **createTime**(marbles: *`string`*): `number`

*Defined in rxjs/src/internal/testing/TestScheduler.ts:40*

**Parameters:**

| Name | Type |
| ------ | ------ |
| marbles | `string` |

**Returns:** `number`

___
<a id="expectobservable"></a>

###  expectObservable

▸ **expectObservable**(observable: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*, subscriptionMarbles?: *`string`*): `object`

*Defined in rxjs/src/internal/testing/TestScheduler.ts:94*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| observable | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> | - |
| `Default value` subscriptionMarbles | `string` |  null |

**Returns:** `object`

___
<a id="expectsubscriptions"></a>

###  expectSubscriptions

▸ **expectSubscriptions**(actualSubscriptionLogs: *[SubscriptionLog](_rxjs_src_internal_testing_subscriptionlog_.subscriptionlog.md)[]*): `object`

*Defined in rxjs/src/internal/testing/TestScheduler.ts:134*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actualSubscriptionLogs | [SubscriptionLog](_rxjs_src_internal_testing_subscriptionlog_.subscriptionlog.md)[] |

**Returns:** `object`

___
<a id="flush"></a>

###  flush

▸ **flush**(): `void`

*Overrides [VirtualTimeScheduler](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md).[flush](_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md#flush)*

*Defined in rxjs/src/internal/testing/TestScheduler.ts:149*

**Returns:** `void`

___
<a id="materializeinnerobservable"></a>

### `<Private>` materializeInnerObservable

▸ **materializeInnerObservable**(observable: *[Observable](_rxjs_src_internal_observable_.observable.md)<`any`>*, outerFrame: *`number`*): [TestMessage](../interfaces/_rxjs_src_internal_testing_testmessage_.testmessage.md)[]

*Defined in rxjs/src/internal/testing/TestScheduler.ts:81*

**Parameters:**

| Name | Type |
| ------ | ------ |
| observable | [Observable](_rxjs_src_internal_observable_.observable.md)<`any`> |
| outerFrame | `number` |

**Returns:** [TestMessage](../interfaces/_rxjs_src_internal_testing_testmessage_.testmessage.md)[]

___
<a id="run"></a>

###  run

▸ **run**<`T`>(callback: *`function`*): `T`

*Defined in rxjs/src/internal/testing/TestScheduler.ts:374*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `T`

___
<a id="schedule"></a>

###  schedule

▸ **schedule**<`T`>(work: *`function`*, delay?: *`number`*, state?: *`T`*): [Subscription](_rxjs_src_internal_subscription_.subscription.md)

*Inherited from [AsyncScheduler](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md).[schedule](_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md#schedule)*

*Overrides [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[schedule](_rxjs_src_internal_scheduler_.scheduler.md#schedule)*

*Defined in rxjs/src/internal/scheduler/AsyncScheduler.ts:37*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| work | `function` | - |
| `Default value` delay | `number` | 0 |
| `Optional` state | `T` | - |

**Returns:** [Subscription](_rxjs_src_internal_subscription_.subscription.md)

___
<a id="now-1"></a>

### `<Static>` now

▸ **now**(): `number`

*Inherited from [Scheduler](_rxjs_src_internal_scheduler_.scheduler.md).[now](_rxjs_src_internal_scheduler_.scheduler.md#now-1)*

*Defined in rxjs/src/internal/Scheduler.ts:31*

Note: the extra arrow function wrapper is to make testing by overriding Date.now easier.

**Returns:** `number`

___
<a id="parsemarbles"></a>

### `<Static>` parseMarbles

▸ **parseMarbles**(marbles: *`string`*, values?: *`any`*, errorValue?: *`any`*, materializeInnerObservables?: *`boolean`*, runMode?: *`boolean`*): [TestMessage](../interfaces/_rxjs_src_internal_testing_testmessage_.testmessage.md)[]

*Defined in rxjs/src/internal/testing/TestScheduler.ts:265*

*__nocollapse__*: 

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| marbles | `string` | - |
| `Optional` values | `any` | - |
| `Optional` errorValue | `any` | - |
| `Default value` materializeInnerObservables | `boolean` | false |
| `Default value` runMode | `boolean` | false |

**Returns:** [TestMessage](../interfaces/_rxjs_src_internal_testing_testmessage_.testmessage.md)[]

___
<a id="parsemarblesassubscriptions"></a>

### `<Static>` parseMarblesAsSubscriptions

▸ **parseMarblesAsSubscriptions**(marbles: *`string`*, runMode?: *`boolean`*): [SubscriptionLog](_rxjs_src_internal_testing_subscriptionlog_.subscriptionlog.md)

*Defined in rxjs/src/internal/testing/TestScheduler.ts:167*

*__nocollapse__*: 

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| marbles | `string` | - |
| `Default value` runMode | `boolean` | false |

**Returns:** [SubscriptionLog](_rxjs_src_internal_testing_subscriptionlog_.subscriptionlog.md)

___

