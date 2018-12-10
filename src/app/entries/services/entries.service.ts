import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entries } from '../models/entries.model';
import { EntriesSettings, Pagination } from '../models/entries-settings.model';
import { map } from 'rxjs/operators';

@Injectable()
export class EntriesService {
  constructor(private _http: HttpClient) {
  }

  getEntries({ limit, subreddit }: EntriesSettings, paginate?: Pagination): Observable<Entries> {
    let params = new HttpParams();

    params = params.set('limit', limit.toString());

    if (paginate) {
      params = params.set(paginate.key, paginate.value);
    }

    return this._http.get<Entries>(`https://www.reddit.com/r/${ subreddit }.json`, { params });
  }

  getComments(url: string): Observable<Entries> {
    const fetchUrl = url.replace(/.$/, '.json');

    return this._http.get(`${ fetchUrl }`).pipe(
      map(res => res[1])
    );
  }
}
