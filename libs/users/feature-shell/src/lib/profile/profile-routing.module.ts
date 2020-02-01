import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataRoutes } from '@eam-js/core';
import { ProfileComponent } from './profile.component';

const routes: DataRoutes = [
  { path: '', component: ProfileComponent, data: { label: 'Profile' } },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
