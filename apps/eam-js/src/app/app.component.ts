import {
  Component,
  OnInit,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  NavigationNode,
  CurrentNodes,
  CurrentNode,
  NavigationService,
  NavigationViews,
} from '@eam-js/common/navigation';

import { NavigationFacade } from './state/navigation/navigation.facade';

@Component({
  selector: 'eam-js-shell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpened$ = this.navigationFacade.isSidenavOpen$;

  sideNavNodes: NavigationNode[];
  currentNodes: CurrentNodes;
  currentSideNavNode: CurrentNode;
  isSideBySide = false;
  private readonly sideBySideWidth = 992;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly navigationFacade: NavigationFacade
  ) {}

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

    this.onResize(window.innerWidth);
  }

  toggleSidenav() {
    this.navigationFacade.toggleSidenav();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isSideBySide = width > this.sideBySideWidth;
  }

  get mode() {
    return this.isSideBySide ? 'side' : 'over';
  }
}
