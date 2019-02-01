[rxjs](../README.md) > ["rxjs/src/internal/types"](../modules/_rxjs_src_internal_types_.md) > [SchedulerLike](../interfaces/_rxjs_src_internal_types_.schedulerlike.md)

# Interface: SchedulerLike

SCHEDULER INTERFACES

## Hierarchy

**SchedulerLike**

## Implemented by

* [AnimationFrameScheduler](../classes/_rxjs_src_internal_scheduler_animationframescheduler_.animationframescheduler.md)
* [AsapScheduler](../classes/_rxjs_src_internal_scheduler_asapscheduler_.asapscheduler.md)
* [AsyncScheduler](../classes/_rxjs_src_internal_scheduler_asyncscheduler_.asyncscheduler.md)
* [QueueScheduler](../classes/_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)
* [Scheduler](../classes/_rxjs_src_internal_scheduler_.scheduler.md)
* [TestScheduler](../classes/_rxjs_src_internal_testing_testscheduler_.testscheduler.md)
* [VirtualTimeScheduler](../classes/_rxjs_src_internal_scheduler_virtualtimescheduler_.virtualtimescheduler.md)

## Index

### Methods

* [now](_rxjs_src_internal_types_.schedulerlike.md#now)
* [schedule](_rxjs_src_internal_types_.schedulerlike.md#schedule)

---

## Methods

<a id="now"></a>

###  now

▸ **now**(): `number`

*Defined in rxjs/src/internal/types.ts:88*

**Returns:** `number`

___
<a id="schedule"></a>

###  schedule

▸ **schedule**<`T`>(work: *`function`*, delay?: *`number`*, state?: *`T`*): [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

*Defined in rxjs/src/internal/types.ts:89*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| work | `function` |
| `Optional` delay | `number` |
| `Optional` state | `T` |

**Returns:** [Subscription](../classes/_rxjs_src_internal_subscription_.subscription.md)

___

