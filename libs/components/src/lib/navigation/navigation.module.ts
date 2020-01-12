import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [NavItemComponent, NavMenuComponent],
  exports: [NavItemComponent, NavMenuComponent],
})
export class NavigationModule {}
