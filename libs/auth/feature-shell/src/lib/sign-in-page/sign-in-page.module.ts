import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInFormModule } from '@eam-js/auth/ui';
import { SignInPageComponent } from './sign-in-page.component';

@NgModule({
  imports: [CommonModule, SignInFormModule],
  declarations: [SignInPageComponent],
})
export class SignInPageModule {}
