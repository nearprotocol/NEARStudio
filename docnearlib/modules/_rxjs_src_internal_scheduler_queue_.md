[rxjs](../README.md) > ["rxjs/src/internal/scheduler/queue"](../modules/_rxjs_src_internal_scheduler_queue_.md)

# External module: "rxjs/src/internal/scheduler/queue"

## Index

### Variables

* [queue](_rxjs_src_internal_scheduler_queue_.md#queue)

---

## Variables

<a id="queue"></a>

### `<Const>` queue

**● queue**: *[QueueScheduler](../classes/_rxjs_src_internal_scheduler_queuescheduler_.queuescheduler.md)* =  new QueueScheduler(QueueAction)

*Defined in rxjs/src/internal/scheduler/queue.ts:67*

Queue Scheduler

Put every next task on a queue, instead of executing it immediately

`queue` scheduler, when used with delay, behaves the same as {@link asyncScheduler} scheduler.

When used without delay, it schedules given task synchronously - executes it right when it is scheduled. However when called recursively, that is when inside the scheduled task, another task is scheduled with queue scheduler, instead of executing immediately as well, that task will be put on a queue and wait for current one to finish.

This means that when you execute task with `queue` scheduler, you are sure it will end before any other task scheduled with that scheduler will start.

Examples
--------

Schedule recursively first, then do something

```javascript
Rx.Scheduler.queue.schedule(() => {
  Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue

  console.log('first');
});

// Logs:
// "first"
// "second"
```

Reschedule itself recursively

```javascript
Rx.Scheduler.queue.schedule(function(state) {
  if (state !== 0) {
    console.log('before', state);
    this.schedule(state - 1); // `this` references currently executing Action,
                              // which we reschedule with new state
    console.log('after', state);
  }
}, 0, 3);

// In scheduler that runs recursively, you would expect:
// "before", 3
// "before", 2
// "before", 1
// "after", 1
// "after", 2
// "after", 3

// But with queue it logs:
// "before", 3
// "after", 3
// "before", 2
// "after", 2
// "before", 1
// "after", 1
```

*__static__*: true

*__name__*: queue

*__owner__*: Scheduler

___

