import { Route } from '@angular/router';
import { EntriesComponent } from './entries.component';
import { EntriesResolverService } from './services/entries-resolver.service';
import { EntrySelfComponent } from './components/entry-self/entry-self.component';
import { EntrySelfResolverService } from './services/entry-self-resolver.service';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: EntriesComponent,
    resolve: {
      data: EntriesResolverService
    }
  },
  {
    path: 'details',
    component: EntrySelfComponent,
    resolve: {
      data: EntrySelfResolverService
    }
  }
];
