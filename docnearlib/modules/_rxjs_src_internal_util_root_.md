[rxjs](../README.md) > ["rxjs/src/internal/util/root"](../modules/_rxjs_src_internal_util_root_.md)

# External module: "rxjs/src/internal/util/root"

## Index

### Variables

* [WorkerGlobalScope](_rxjs_src_internal_util_root_.md#workerglobalscope)
* [__global](_rxjs_src_internal_util_root_.md#__global)
* [__self](_rxjs_src_internal_util_root_.md#__self)
* [__window](_rxjs_src_internal_util_root_.md#__window)
* [_root](_rxjs_src_internal_util_root_.md#_root)
* [global](_rxjs_src_internal_util_root_.md#global)

---

## Variables

<a id="workerglobalscope"></a>

###  WorkerGlobalScope

**● WorkerGlobalScope**: *`any`*

*Defined in rxjs/src/internal/util/root.ts:11*

*__license__*: Copyright Google Inc. All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at [https://angular.io/license](https://angular.io/license)

___
<a id="__global"></a>

### `<Const>` __global

**● __global**: *`any`* =  typeof global !== 'undefined' && global

*Defined in rxjs/src/internal/util/root.ts:19*

___
<a id="__self"></a>

### `<Const>` __self

**● __self**: *`Window`* =  typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self

*Defined in rxjs/src/internal/util/root.ts:17*

___
<a id="__window"></a>

### `<Const>` __window

**● __window**: *`Window`* =  typeof window !== 'undefined' && window

*Defined in rxjs/src/internal/util/root.ts:16*

___
<a id="_root"></a>

### `<Const>` _root

**● _root**: *`any`* =  __window || __global || __self

*Defined in rxjs/src/internal/util/root.ts:20*

___
<a id="global"></a>

### `<Let>` global

**● global**: *`any`*

*Defined in rxjs/src/internal/util/root.ts:1*

___

