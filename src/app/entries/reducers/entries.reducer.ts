import { Child, Entries } from '../models/entries.model';
import { EntriesAction, EntriesActionTypes } from '../actions/entries.actions';
import { AppState } from '../../core/reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DEFAULT_LIMIT, DEFAULT_SUBREDDIT } from '../constants/entries.const';
import { EntriesSettings } from '../models/entries-settings.model';

export interface EntriesState {
  entries: Entries;
  currentEntry: Child;
  error: boolean;
  loading: boolean;
  settings: EntriesSettings;
}

export const initialState: EntriesState = {
  entries: null,
  error: false,
  loading: false,
  currentEntry: null,
  settings: {
    limit: DEFAULT_LIMIT,
    subreddit: DEFAULT_SUBREDDIT
  }
};

export interface AppStateWithEntries extends AppState {
  entriesState: EntriesState;
}

export function entriesReducer(
  state: EntriesState = initialState,
  action: EntriesAction
): EntriesState {
  switch (action.type) {
    case EntriesActionTypes.FETCH: {
      return {
        ...state,
        loading: true
      };
    }
    case EntriesActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        entries: action.entries
      };
    }
    case EntriesActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case EntriesActionTypes.SET_CURRENT: {
      return {
        ...state,
        currentEntry: action.entry
      };
    }
    case EntriesActionTypes.SET_SUBREDDIT: {
      return {
        ...state,
        settings: action.settings
      };
    }
    default:
      return state;
  }
}

export const getEntries = (state: EntriesState) => state.entries;
export const getLoading = (state: EntriesState) => state.loading;
export const getError = (state: EntriesState) => state.error;
export const getCurrent = (state: EntriesState) => state.currentEntry;
export const getSettings = (state: EntriesState) => state.settings;

export const selectEntriesState = createFeatureSelector<EntriesState>('entries');
export const fromEntries = <T = any>(projector: (s: EntriesState) => T) =>
  createSelector<AppStateWithEntries, EntriesState, T>(selectEntriesState, projector);
