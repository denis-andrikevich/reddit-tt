import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DEFAULT_ENTRY_IMAGE } from '../../constants/entries.const';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: [ './entry.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryComponent {
  @Input() created: string;
  @Input() num_comments: number;
  @Input() author: string;
  @Input() score: number;
  @Input() permalink: string;
  @Input() title: string;
  @Input() selfText: string;

  @Input()
  get thumbnail() {
    return this._thumb;
  }

  set thumbnail(data: string) {
    this._thumb = (!data || data === 'self') ? DEFAULT_ENTRY_IMAGE : data;
  }

  private _thumb: string;
}
