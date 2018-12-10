import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry-comments',
  templateUrl: './entry-comments.component.html',
  styleUrls: [ './entry-comments.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryCommentsComponent {
  @Input() comments: any;
}
