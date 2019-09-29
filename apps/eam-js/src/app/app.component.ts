import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

import {
  NavigationNode,
  CurrentNodes,
  CurrentNode,
  NavigationService,
  NavigationViews,
} from '@eam-js/common/navigation';

@Component({
  selector: 'eam-js-shell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpened$ = of(true);

  sideNavNodes: NavigationNode[];
  currentNodes: CurrentNodes;
  currentSideNavNode: CurrentNode;
  isSideBySide = false;

  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.currentNodes.subscribe(
      (currentNodes: CurrentNodes) => {
        this.currentNodes = currentNodes;
        this.currentSideNavNode = currentNodes
          ? currentNodes['SideNav']
          : undefined;
      }
    );
    this.navigationService.navigationViews.subscribe(
      (views: NavigationViews) => {
        this.sideNavNodes = views['SideNav'] || [];
      }
    );
  }

  get mode() {
    return this.isSideBySide ? 'side' : 'over';
  }
}
