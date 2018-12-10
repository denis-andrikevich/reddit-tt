import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries.component';
import { RouterModule } from '@angular/router';
import { routes } from './entries.routes';
import { StoreModule } from '@ngrx/store';
import { entriesReducer } from './reducers/entries.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EntriesEffects } from './effects/entries.effects';
import { EntriesService } from './services/entries.service';
import { EntriesResolverService } from './services/entries-resolver.service';
import { MatButtonModule, MatCardModule, MatInputModule, MatSelectModule } from '@angular/material';
import { EntryComponent } from './components/entry/entry.component';
import { EntrySelfComponent } from './components/entry-self/entry-self.component';
import { EntrySelfResolverService } from './services/entry-self-resolver.service';
import { EntrySubredditComponent } from './components/entry-subreddit/entry-subreddit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryCommentsComponent } from './components/entry-comments/entry-comments.component';

@NgModule({
  declarations: [
    EntriesComponent,
    EntryComponent,
    EntrySelfComponent,
    EntrySubredditComponent,
    EntryCommentsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('entries', entriesReducer),
    EffectsModule.forFeature([ EntriesEffects ]),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    EntriesService,
    EntriesResolverService,
    EntrySelfResolverService
  ]
})
export class EntriesModule {
}
