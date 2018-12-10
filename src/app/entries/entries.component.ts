import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Child, Entries } from './models/entries.model';
import { select, Store } from '@ngrx/store';
import { AppStateWithEntries, fromEntries, getEntries, getError, getLoading } from './reducers/entries.reducer';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EntriesPaginate, EntriesSetCurrent, EntriesSetSettings } from './actions/entries.actions';
import { EntriesSettings } from './models/entries-settings.model';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: [ './entries.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntriesComponent implements OnInit {
  entries$: Observable<Entries>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(
    private _store: Store<AppStateWithEntries>,
    private _router: Router) {
  }

  ngOnInit() {
    this.loading$ = this._store.pipe(select(fromEntries(getLoading)));
    this.error$ = this._store.pipe(select(fromEntries(getError)));
    this.entries$ = this._store.pipe(select(fromEntries(getEntries)));
  }

  onNavigate(entry: Child) {
    this._store.dispatch(new EntriesSetCurrent(entry));
    this._router.navigateByUrl('details');
  }

  onSetSubreddit(val: EntriesSettings) {
    this._store.dispatch(new EntriesSetSettings(val));
  }

  onPaginate(dir: boolean) {
    this._store.dispatch(new EntriesPaginate(dir));
  }
}
