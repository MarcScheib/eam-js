import { Routes } from '@angular/router';
import { ErrorViewComponent } from '@eam-js/components/error';
import { NotFoundComponent } from './containers/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () =>
      import('@eam-js/projects/feature-shell').then(
        m => m.ProjectsFeatureShellModule
      ),
    data: {
      label: 'Projects',
    },
  },
  {
    path: 'error',
    component: ErrorViewComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
