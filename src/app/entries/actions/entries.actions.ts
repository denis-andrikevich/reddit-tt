import { Action } from '@ngrx/store';
import { Child, Entries } from '../models/entries.model';
import { EntriesSettings, Pagination } from '../models/entries-settings.model';

export enum EntriesActionTypes {
  FETCH = '[ENTRIES] FETCH',
  FETCH_SUCCESS = '[ENTRIES] FETCH SUCCESS',
  FETCH_ERROR = '[ENTRIES] FETCH ERROR',
  SET_CURRENT = '[ENTRIES] SET CURRENT',
  SET_SUBREDDIT = '[ENTRIES] SET SUBREDDIT',
  PAGINATE = '[ENTRIES] PAGINATE'
}

export class EntriesFetch implements Action {
  readonly type = EntriesActionTypes.FETCH;

  constructor(public opt?: Pagination) {
  }
}

export class EntriesFetchSucess implements Action {
  readonly type = EntriesActionTypes.FETCH_SUCCESS;

  constructor(public entries: Entries) {
  }
}

export class EntriesFetchError implements Action {
  readonly type = EntriesActionTypes.FETCH_ERROR;

  constructor(public error?: any) {
  }
}

export class EntriesSetCurrent {
  readonly type = EntriesActionTypes.SET_CURRENT;

  constructor(public entry: Child) {
  }
}

export class EntriesSetSettings implements Action {
  readonly type = EntriesActionTypes.SET_SUBREDDIT;

  constructor(public settings: EntriesSettings) {
  }
}

export class EntriesPaginate implements Action {
  readonly type = EntriesActionTypes.PAGINATE;

  constructor(public dir: boolean) {
  }
}

export type EntriesAction =
  | EntriesFetch
  | EntriesFetchSucess
  | EntriesFetchError
  | EntriesSetCurrent
  | EntriesSetSettings;
