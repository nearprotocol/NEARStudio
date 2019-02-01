[rxjs](../README.md) > ["rxjs/src/internal/observable/dom/ajax"](../modules/_rxjs_src_internal_observable_dom_ajax_.md)

# External module: "rxjs/src/internal/observable/dom/ajax"

## Index

### Variables

* [ajax](_rxjs_src_internal_observable_dom_ajax_.md#ajax)

---

## Variables

<a id="ajax"></a>

### `<Const>` ajax

**● ajax**: *[AjaxCreationMethod](../interfaces/_rxjs_src_internal_observable_dom_ajaxobservable_.ajaxcreationmethod.md)* =  AjaxObservable.create

*Defined in rxjs/src/internal/observable/dom/ajax.ts:19*

There is an ajax operator on the Rx object.

It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.

Using ajax.getJSON() to fetch data from API.
--------------------------------------------

```javascript
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => console.log('error: ', error))
));
```

___

