import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EntriesActionTypes, EntriesFetch, EntriesFetchError, EntriesFetchSucess, EntriesPaginate } from '../actions/entries.actions';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { EntriesService } from '../services/entries.service';
import { Entries } from '../models/entries.model';
import { of } from 'rxjs';
import { AppStateWithEntries, fromEntries, getEntries, getSettings } from '../reducers/entries.reducer';
import { EntriesSettings, Pagination } from '../models/entries-settings.model';

@Injectable()
export class EntriesEffects {
  constructor(
    private _store: Store<AppStateWithEntries>,
    private _actions: Actions,
    private _entriesService: EntriesService) {
  }

  @Effect()
  fetch = this._actions.pipe(
    ofType(EntriesActionTypes.FETCH),
    withLatestFrom(this._store.pipe(select(fromEntries(getSettings)))),
    switchMap(([ action, settings ]: [ EntriesFetch, EntriesSettings ]) => {
      return this._entriesService.getEntries(settings, action.opt).pipe(
        map((res: Entries) => new EntriesFetchSucess(res)),
        catchError(() => of(new EntriesFetchError())));
    })
  );

  @Effect()
  paginate = this._actions.pipe(
    ofType(EntriesActionTypes.PAGINATE),
    withLatestFrom(this._store.pipe(select(fromEntries(getEntries)))),
    map(([ action, entries ]: [ EntriesPaginate, Entries ]) => {
      const paginateOpt: Pagination = {
        key: 'after',
        value: entries.data.after
      };

      if (!action.dir) {
        paginateOpt['key'] = 'before';
        paginateOpt['value'] = entries.data.before;
      }

      return new EntriesFetch(paginateOpt);
    })
  );

  @Effect()
  setSubreddit = this._actions.pipe(
    ofType(EntriesActionTypes.SET_SUBREDDIT),
    map(() => new EntriesFetch())
  );

  // for demo purpose only
  @Effect({ dispatch: false })
  fetchError = this._actions.pipe(
    ofType(EntriesActionTypes.FETCH_ERROR),
    tap(() => alert('Something went wrong'))
  );
}
