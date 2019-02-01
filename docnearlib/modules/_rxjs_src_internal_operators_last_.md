[rxjs](../README.md) > ["rxjs/src/internal/operators/last"](../modules/_rxjs_src_internal_operators_last_.md)

# External module: "rxjs/src/internal/operators/last"

## Index

### Functions

* [last](_rxjs_src_internal_operators_last_.md#last)

---

## Functions

<a id="last"></a>

###  last

▸ **last**<`T`,`D`>(predicate?: *`null`*, defaultValue?: *`D`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>

▸ **last**<`T`,`S`>(predicate: *`function`*, defaultValue?: *`S`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>

▸ **last**<`T`,`D`>(predicate: *`function`*, defaultValue?: *`D`*): [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>

*Defined in rxjs/src/internal/operators/last.ts:13*

Returns an Observable that emits only the last item emitted by the source Observable. It optionally takes a predicate function as a parameter, in which case, rather than emitting the last item from the source Observable, the resulting Observable will emit the last item from the source Observable that satisfies the predicate.

![](last.png)

**Type parameters:**

#### T 
#### D 
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` predicate | `null` |
| `Optional` defaultValue | `D` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>
An Observable that emits only the last item satisfying the given condition
from the source, or an NoSuchElementException if no such items are emitted.

*Defined in rxjs/src/internal/operators/last.ts:17*

Returns an Observable that emits only the last item emitted by the source Observable. It optionally takes a predicate function as a parameter, in which case, rather than emitting the last item from the source Observable, the resulting Observable will emit the last item from the source Observable that satisfies the predicate.

![](last.png)

**Type parameters:**

#### T 
#### S :  `T`
**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` defaultValue | `S` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `S`>
An Observable that emits only the last item satisfying the given condition
from the source, or an NoSuchElementException if no such items are emitted.

*Defined in rxjs/src/internal/operators/last.ts:21*

Returns an Observable that emits only the last item emitted by the source Observable. It optionally takes a predicate function as a parameter, in which case, rather than emitting the last item from the source Observable, the resulting Observable will emit the last item from the source Observable that satisfies the predicate.

![](last.png)

**Type parameters:**

#### T 
#### D 
**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` defaultValue | `D` |

**Returns:** [OperatorFunction](../interfaces/_rxjs_src_internal_types_.operatorfunction.md)<`T`, `T` \| `D`>
An Observable that emits only the last item satisfying the given condition
from the source, or an NoSuchElementException if no such items are emitted.

___

