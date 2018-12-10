import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Child, Entries } from '../../models/entries.model';
import { EntriesService } from '../../services/entries.service';

@Component({
  selector: 'app-entry-self',
  templateUrl: './entry-self.component.html',
  styleUrls: [ './entry-self.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntrySelfComponent implements OnInit, OnDestroy {
  entry: Child;
  comments$: Observable<Entries>;
  private _destroyed = new Subject();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _entriesService: EntriesService) {
  }

  ngOnInit() {
    this._activatedRoute.data
      .pipe(takeUntil(this._destroyed))
      .subscribe(({ data }) => this.entry = data);
    this.comments$ = this._entriesService.getComments(this.entry.data.url);
  }

  ngOnDestroy() {
    this._destroyed.next(true);
  }
}
