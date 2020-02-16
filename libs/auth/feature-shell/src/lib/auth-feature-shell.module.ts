import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataRoute } from '@eam-js/core';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInPageModule } from './sign-in-page/sign-in-page.module';

const routes: DataRoute[] = [
  {
    path: 'sign-in',
    component: SignInPageComponent,
    data: { label: 'Sign In' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SignInPageModule],
})
export class AuthFeatureShellModule {}
