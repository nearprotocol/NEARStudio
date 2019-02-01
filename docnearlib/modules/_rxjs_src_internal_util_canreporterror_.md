[rxjs](../README.md) > ["rxjs/src/internal/util/canReportError"](../modules/_rxjs_src_internal_util_canreporterror_.md)

# External module: "rxjs/src/internal/util/canReportError"

## Index

### Functions

* [canReportError](_rxjs_src_internal_util_canreporterror_.md#canreporterror)

---

## Functions

<a id="canreporterror"></a>

###  canReportError

▸ **canReportError**(observer: *[Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`any`> \| [Subject](../classes/_rxjs_src_internal_subject_.subject.md)<`any`>*): `boolean`

*Defined in rxjs/src/internal/util/canReportError.ts:10*

Determines whether the ErrorObserver is closed or stopped or has a destination that is closed or stopped - in which case errors will need to be reported via a different mechanism.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| observer | [Subscriber](../classes/_rxjs_src_internal_subscriber_.subscriber.md)<`any`> \| [Subject](../classes/_rxjs_src_internal_subject_.subject.md)<`any`> |  the observer |

**Returns:** `boolean`

___

