import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateWithEntries, fromEntries, getCurrent } from '../reducers/entries.reducer';
import { Resolve } from '@angular/router';
import { Child } from '../models/entries.model';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class EntrySelfResolverService implements Resolve<Child> {
  constructor(private _store: Store<AppStateWithEntries>) {
  }

  resolve(): Observable<Child> {
    return this._store.pipe(
      select(fromEntries(getCurrent)),
      first()
    );
  }
}
