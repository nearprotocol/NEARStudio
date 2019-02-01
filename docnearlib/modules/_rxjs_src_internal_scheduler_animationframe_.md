[rxjs](../README.md) > ["rxjs/src/internal/scheduler/animationFrame"](../modules/_rxjs_src_internal_scheduler_animationframe_.md)

# External module: "rxjs/src/internal/scheduler/animationFrame"

## Index

### Variables

* [animationFrame](_rxjs_src_internal_scheduler_animationframe_.md#animationframe)

---

## Variables

<a id="animationframe"></a>

### `<Const>` animationFrame

**● animationFrame**: *[AnimationFrameScheduler](../classes/_rxjs_src_internal_scheduler_animationframescheduler_.animationframescheduler.md)* =  new AnimationFrameScheduler(AnimationFrameAction)

*Defined in rxjs/src/internal/scheduler/animationFrame.ts:37*

Animation Frame Scheduler

Perform task when `window.requestAnimationFrame` would fire

When `animationFrame` scheduler is used with delay, it will fall back to {@link asyncScheduler} scheduler behaviour.

Without delay, `animationFrame` scheduler can be used to create smooth browser animations. It makes sure scheduled task will happen just before next browser content repaint, thus performing animations as efficiently as possible.

Example
-------

Schedule div height animation

```javascript
const div = document.querySelector('.some-div');

Rx.Scheduler.animationFrame.schedule(function(height) {
  div.style.height = height + "px";

  this.schedule(height + 1);  // `this` references currently executing Action,
                              // which we reschedule with new state
}, 0, 0);

// You will see .some-div element growing in height
```

*__static__*: true

*__name__*: animationFrame

*__owner__*: Scheduler

___

