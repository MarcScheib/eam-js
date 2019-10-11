import { Routes } from '@angular/router';

import { NotFoundComponent } from './containers/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () =>
      import('@eam-js/projects/overview-shell').then(
        m => m.ProjectsOverviewShellModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
