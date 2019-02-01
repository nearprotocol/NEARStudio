[rxjs](../README.md) > ["rxjs/src/internal/symbol/rxSubscriber"](../modules/_rxjs_src_internal_symbol_rxsubscriber_.md)

# External module: "rxjs/src/internal/symbol/rxSubscriber"

## Index

### Variables

* [$$rxSubscriber](_rxjs_src_internal_symbol_rxsubscriber_.md#__rxsubscriber)
* [rxSubscriber](_rxjs_src_internal_symbol_rxsubscriber_.md#rxsubscriber)

---

## Variables

<a id="__rxsubscriber"></a>

### `<Const>` $$rxSubscriber

**● $$rxSubscriber**: *`string` \| `symbol`* =  rxSubscriber

*Defined in rxjs/src/internal/symbol/rxSubscriber.ts:10*

*__deprecated__*:
 use rxSubscriber instead

___
<a id="rxsubscriber"></a>

### `<Const>` rxSubscriber

**● rxSubscriber**: *`string` \| `symbol`* = 
  typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random()

*Defined in rxjs/src/internal/symbol/rxSubscriber.ts:2*

*__deprecated__*:
 do not use, this is no longer checked by RxJS internals

___

