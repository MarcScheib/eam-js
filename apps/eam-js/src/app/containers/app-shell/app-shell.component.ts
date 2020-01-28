import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationFacade } from '@eam-js/core';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent implements OnInit {
  isOpened$ = this.navigationFacade.isSidenavOpen$;
  sideNavNodes$ = this.navigationFacade.sideNavNodes$;
  currentSideNavNode$ = this.navigationFacade.currentSideNavNode$;

  isSideBySide = false;
  private readonly sideBySideWidth = 992;

  constructor(private readonly navigationFacade: NavigationFacade) {}

  ngOnInit() {
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
