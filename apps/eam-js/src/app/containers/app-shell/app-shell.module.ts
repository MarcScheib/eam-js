import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SignInDialogModule } from '@eam-js/auth/feature-shell';
import { NavigationModule } from '@eam-js/components/navigation';
import { LoggedInUserMenuModule } from '@eam-js/users/ui';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    NavigationModule,
    SignInDialogModule,
    LoggedInUserMenuModule,
  ],
  declarations: [AppShellComponent],
  exports: [AppShellComponent],
})
export class AppShellModule {}
