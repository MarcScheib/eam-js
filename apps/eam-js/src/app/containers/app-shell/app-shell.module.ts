import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavigationModule } from '@eam-js/components/navigation';
import { LoggedInUserMenuModule } from '@eam-js/users/ui';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    NavigationModule,
    LoggedInUserMenuModule,
  ],
  declarations: [AppShellComponent],
  exports: [AppShellComponent],
})
export class AppShellModule {}
