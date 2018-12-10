import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DEFAULT_LIMIT, DEFAULT_SUBREDDIT, LIMIT_OPTIONS } from '../../constants/entries.const';
import { EntriesSettings } from '../../models/entries-settings.model';

@Component({
  selector: 'app-entry-subreddit',
  templateUrl: './entry-subreddit.component.html',
  styleUrls: [ './entry-subreddit.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntrySubredditComponent implements OnInit {
  @Output() setSubreddit = new EventEmitter<EntriesSettings>();
  form: FormGroup;
  limitOptions = LIMIT_OPTIONS;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      subreddit: [ DEFAULT_SUBREDDIT, Validators.required ],
      limit: [ DEFAULT_LIMIT, Validators.required ]
    });
  }

  onSubmit() {
    const value = this.form.value;

    if (!value.subreddit.trim()) {
      return;
    }

    this.setSubreddit.emit(value);
  }
}
