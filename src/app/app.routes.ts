import { Routes } from '@angular/router';

import { EventListComponent } from './events/event-list.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
];

