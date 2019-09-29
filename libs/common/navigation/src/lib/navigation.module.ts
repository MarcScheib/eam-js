import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { NavItemComponent } from './ui/nav-item/nav-item.component';
import { NavMenuComponent } from './ui/nav-menu/nav-menu.component';
import { NavigationService } from './navigation.service';
import { LocationService } from './location.service';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [NavItemComponent, NavMenuComponent],
  exports: [NavItemComponent, NavMenuComponent],
  providers: [NavigationService, LocationService],
})
export class NavigationModule {}
