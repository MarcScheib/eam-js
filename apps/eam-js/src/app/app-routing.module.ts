import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorViewComponent } from '@eam-js/components/error';
import { DataRoutes } from '@eam-js/core';
import { NotFoundComponent } from './containers/not-found/not-found.component';

export const routes: DataRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@eam-js/dashboard/feature-shell').then(
        m => m.DashboardFeatureShellModule
      ),
    data: {
      label: 'Dashboard',
    },
  },
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
    path: 'users',
    loadChildren: () =>
      import('@eam-js/users/feature-shell').then(
        m => m.UsersFeatureShellModule
      ),
    data: {
      label: 'Users',
    },
  },
  {
    path: 'error',
    component: ErrorViewComponent,
    data: {
      label: 'Error',
    },
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      label: '404 Not Found',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
