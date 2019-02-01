[rxjs](../README.md) > ["rxjs/src/internal/scheduler/asap"](../modules/_rxjs_src_internal_scheduler_asap_.md)

# External module: "rxjs/src/internal/scheduler/asap"

## Index

### Variables

* [asap](_rxjs_src_internal_scheduler_asap_.md#asap)

---

## Variables

<a id="asap"></a>

### `<Const>` asap

**● asap**: *[AsapScheduler](../classes/_rxjs_src_internal_scheduler_asapscheduler_.asapscheduler.md)* =  new AsapScheduler(AsapAction)

*Defined in rxjs/src/internal/scheduler/asap.ts:40*

Asap Scheduler

Perform task as fast as it can be performed asynchronously

`asap` scheduler behaves the same as {@link asyncScheduler} scheduler when you use it to delay task in time. If however you set delay to `0`, `asap` will wait for current synchronously executing code to end and then it will try to execute given task as fast as possible.

`asap` scheduler will do its best to minimize time between end of currently executing code and start of scheduled task. This makes it best candidate for performing so called "deferring". Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves some (although minimal) unwanted delay.

Note that using `asap` scheduler does not necessarily mean that your task will be first to process after currently executing code. In particular, if some task was also scheduled with `asap` before, that task will execute first. That being said, if you need to schedule task asynchronously, but as soon as possible, `asap` scheduler is your best bet.

Example
-------

Compare async and asap scheduler<

```javascript
Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
Rx.Scheduler.asap.schedule(() => console.log('asap'));

// Logs:
// "asap"
// "async"
// ... but 'asap' goes first!
```

*__static__*: true

*__name__*: asap

*__owner__*: Scheduler

___

