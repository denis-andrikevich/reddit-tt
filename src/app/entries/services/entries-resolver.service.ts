import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateWithEntries } from '../reducers/entries.reducer';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { EntriesActionTypes, EntriesFetch } from '../actions/entries.actions';
import { first, mapTo } from 'rxjs/operators';

@Injectable()
export class EntriesResolverService implements Resolve<boolean> {
  constructor(
    private _store: Store<AppStateWithEntries>,
    private _actions: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this._store.dispatch(new EntriesFetch());

    return this._actions.pipe(
      ofType(EntriesActionTypes.FETCH_SUCCESS, EntriesActionTypes.FETCH_ERROR),
      first(),
      mapTo(true)
    );
  }
}
