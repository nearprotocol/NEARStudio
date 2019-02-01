[rxjs](../README.md) > ["rxjs/src/internal/util/pipe"](../modules/_rxjs_src_internal_util_pipe_.md)

# External module: "rxjs/src/internal/util/pipe"

## Index

### Functions

* [pipe](_rxjs_src_internal_util_pipe_.md#pipe)
* [pipeFromArray](_rxjs_src_internal_util_pipe_.md#pipefromarray)

---

## Functions

<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `T`>

▸ **pipe**<`T`,`A`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>

▸ **pipe**<`T`,`A`,`B`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `B`>

▸ **pipe**<`T`,`A`,`B`,`C`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `C`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `D`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`,`E`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*, fn5: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `E`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`,`E`,`F`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*, fn5: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`>*, fn6: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `F`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`,`E`,`F`,`G`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*, fn5: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`>*, fn6: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`>*, fn7: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `G`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*, fn5: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`>*, fn6: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`>*, fn7: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`>*, fn8: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`G`, `H`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `H`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*, fn5: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`>*, fn6: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`>*, fn7: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`>*, fn8: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`G`, `H`>*, fn9: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`H`, `I`>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `I`>

▸ **pipe**<`T`,`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`>(fn1: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>*, fn2: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`>*, fn3: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`>*, fn4: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`>*, fn5: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`>*, fn6: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`>*, fn7: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`>*, fn8: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`G`, `H`>*, fn9: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`H`, `I`>*, ...fns: *[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`any`, `any`>[]*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `__type`>

*Defined in rxjs/src/internal/util/pipe.ts:5*

**Type parameters:**

#### T 

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `T`>

*Defined in rxjs/src/internal/util/pipe.ts:6*

**Type parameters:**

#### T 
#### A 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`>

*Defined in rxjs/src/internal/util/pipe.ts:7*

**Type parameters:**

#### T 
#### A 
#### B 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `B`>

*Defined in rxjs/src/internal/util/pipe.ts:8*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `C`>

*Defined in rxjs/src/internal/util/pipe.ts:9*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `D`>

*Defined in rxjs/src/internal/util/pipe.ts:10*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
#### E 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |
| fn5 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `E`>

*Defined in rxjs/src/internal/util/pipe.ts:11*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
#### E 
#### F 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |
| fn5 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`> |
| fn6 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `F`>

*Defined in rxjs/src/internal/util/pipe.ts:12*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
#### E 
#### F 
#### G 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |
| fn5 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`> |
| fn6 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`> |
| fn7 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `G`>

*Defined in rxjs/src/internal/util/pipe.ts:13*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
#### E 
#### F 
#### G 
#### H 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |
| fn5 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`> |
| fn6 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`> |
| fn7 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`> |
| fn8 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`G`, `H`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `H`>

*Defined in rxjs/src/internal/util/pipe.ts:14*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
#### E 
#### F 
#### G 
#### H 
#### I 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |
| fn5 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`> |
| fn6 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`> |
| fn7 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`> |
| fn8 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`G`, `H`> |
| fn9 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`H`, `I`> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `I`>

*Defined in rxjs/src/internal/util/pipe.ts:15*

**Type parameters:**

#### T 
#### A 
#### B 
#### C 
#### D 
#### E 
#### F 
#### G 
#### H 
#### I 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn1 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `A`> |
| fn2 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`A`, `B`> |
| fn3 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`B`, `C`> |
| fn4 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`C`, `D`> |
| fn5 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`D`, `E`> |
| fn6 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`E`, `F`> |
| fn7 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`F`, `G`> |
| fn8 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`G`, `H`> |
| fn9 | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`H`, `I`> |
| `Rest` fns | [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`any`, `any`>[] |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `__type`>

___
<a id="pipefromarray"></a>

###  pipeFromArray

▸ **pipeFromArray**<`T`,`R`>(fns: *`Array`<[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `R`>>*): [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `R`>

*Defined in rxjs/src/internal/util/pipe.ts:23*

*__internal__*: 

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fns | `Array`<[UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `R`>> |

**Returns:** [UnaryFunction](../interfaces/_rxjs_src_internal_types_.unaryfunction.md)<`T`, `R`>

___

